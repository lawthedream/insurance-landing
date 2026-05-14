import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

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
