import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || '';

const sanitize = (v: unknown) =>
    typeof v === 'string' && v.trim().length > 0 ? v.trim() : '정보 없음';

const getClientIP = (req: Request) => {
    // Cloudflare 가 앞단에 있을 때 실제 방문자 IP 는 CF-Connecting-IP 에 담긴다.
    // (Cloudflare→Vercel 구조에서 x-forwarded-for 첫 항목이 Cloudflare 서버 IP 로
    //  찍히는 경우가 있어, CF-Connecting-IP 를 1순위로 읽는다.)
    const cf = req.headers.get('cf-connecting-ip');
    if (cf) return cf.trim();
    const fwd = req.headers.get('x-forwarded-for');
    if (fwd) return fwd.split(',')[0].trim();
    return req.headers.get('x-real-ip') || '알 수 없음';
};

// Google Apps Script(Web App)로 상담 신청 1건을 전송해 스프레드시트에 행을 추가한다.
// 텔레그램/Supabase 와 독립적으로 동작하며, 실패해도 사용자 응답에는 영향을 주지 않는다.
async function appendToSheet(body: any, request: Request) {
    if (!APPS_SCRIPT_URL) {
        console.warn('[sheet] APPS_SCRIPT_URL 미설정 — 시트 기록 건너뜀');
        return;
    }

    const payload = {
        source: 'cpc',
        name: sanitize(body.name),
        phone: sanitize(body.phone),
        accidentType: sanitize(body.accidentType),
        disabilityStatus: sanitize(body.disabilityStatus),
        message: sanitize(body.message),
        sourcePage: sanitize(body.sourcePage),
        ip: getClientIP(request),
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get('user-agent') || '',
        referer: request.headers.get('referer') || '',
        pageReferrer: sanitize(body.pageReferrer),
        landingUrl: sanitize(body.landingUrl),
    };

    try {
        const res = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            redirect: 'follow',
            signal: AbortSignal.timeout(8000),
        });

        if (!res.ok) {
            console.error('[sheet] 시트 기록 실패:', res.status, await res.text());
        } else {
            console.log('[sheet] 시트 기록 완료');
        }
    } catch (err) {
        console.error('[sheet] 시트 기록 오류:', err);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, accidentType, disabilityStatus, message, sourcePage } = body;

        // 1. Validate required fields
        if (!name || !phone) {
            return NextResponse.json(
                { error: '성함과 연락처는 필수 입력 항목입니다.' },
                { status: 400 }
            );
        }

        // 2. Insert into Supabase
        const { error: dbError } = await supabase
            .from('consultations')
            .insert([
                {
                    name,
                    phone,
                    accident_type: accidentType,
                    disability_status: disabilityStatus,
                    message,
                    source_page: sourcePage,
                },
            ]);

        if (dbError) {
            console.error('Supabase DB Insert Error:', dbError);
            return NextResponse.json(
                { error: '데이터 저장 중 오류가 발생했습니다.' },
                { status: 500 }
            );
        }

        // 3. Send Telegram Notification
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (botToken && chatId) {
            const telegramMessage = `
🚨새로운 상담 신청이 접수되었습니다!🚨

👤 성함: ${name}
📞 연락처: ${phone}
🚗 사고 유형: ${accidentType}
📋 장해 진단: ${disabilityStatus || '정보 없음'}
🔗 신청 경로: ${sourcePage || '알 수 없음'}
📄 문의 내용:
${message || '없음'}
      `.trim();

            const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

            try {
                const telegramRes = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: telegramMessage,
                    }),
                });

                if (!telegramRes.ok) {
                    console.error('Telegram API Error:', await telegramRes.text());
                    // 텔레그램 전송에 실패해도 DB 저장은 완료되었으므로 성공으로 간주하되 로그만 남김
                }
            } catch (tgError) {
                console.error('Telegram notification fetch failed:', tgError);
            }
        } else {
            console.warn('Telegram token or chat ID is not configured.');
        }

        // 3-1. Google 스프레드시트 기록 (신규)
        // 텔레그램/Supabase 와 독립. 내부에서 에러를 삼키므로 실패해도 응답에 영향 없음.
        await appendToSheet(body, request);

        // 4. Return success response
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Unexpected API Error:', error);
        return NextResponse.json(
            { error: '서버 내부 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
