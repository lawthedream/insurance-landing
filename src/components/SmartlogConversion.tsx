"use client";

import { useEffect } from "react";

/**
 * 스마트로그 전환 이벤트 발송.
 *
 * 사용 예 (상담신청 완료 페이지):
 *   <SmartlogConversion mode="q" />
 *
 * mode 값 예시 (스마트로그 가이드 참고):
 *   'q'  - 문의 (Quotation/Inquiry)
 *   'o'  - 주문 (Order)
 *   'j'  - 회원가입 (Join)
 *   등 — 스마트로그 콘솔에서 발급받은 mode 사용
 *
 * SPA 라우팅 대비 — hpt_trace_info 를 먼저 설정한 뒤 smart_renew.js 를
 * 동적으로 한 번 더 실행해 전환을 확실히 발송한다.
 */
interface SmartlogConversionProps {
    mode: string;
    memid?: string;
}

export default function SmartlogConversion({ mode, memid = "" }: SmartlogConversionProps) {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // 1) 전환 변수 설정 — 메인 스크립트보다 먼저 정의되어 있어야 한다
        window.hpt_trace_info = { _mode: mode, _memid: memid };

        // 2) smart_renew.js 를 동적으로 한 번 더 실행해 전환 픽업 유도
        //    (클라이언트 라우팅으로 들어온 경우에도 확실히 동작하도록)
        const s = document.createElement("script");
        s.src = "//cdn.smlog.co.kr/core/smart_renew.js";
        s.async = true;
        s.setAttribute("charset", "utf-8");
        document.body.appendChild(s);

        return () => {
            try {
                document.body.removeChild(s);
            } catch {
                /* 이미 제거됨 */
            }
        };
    }, [mode, memid]);

    return null;
}
