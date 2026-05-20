"use client";

import Script from "next/script";

// 스마트로그 전역 타입 선언
declare global {
    interface Window {
        hpt_info?: { _account: string; _server: string };
        hpt_trace_info?: { _mode: string; _memid?: string };
    }
}

/**
 * 스마트로그 공통 추적 스크립트.
 * - hpt_info 변수를 먼저 설정한 뒤 smart_renew.js 를 로드해야 한다.
 * - layout.tsx 에서 한 번만 마운트하면 모든 페이지에서 추적이 동작한다.
 */
export default function Smartlog() {
    return (
        <>
            <Script id="smartlog-config" strategy="afterInteractive">
                {`var hpt_info={'_account':'UHPT-300169', '_server': 'a300'};`}
            </Script>
            <Script
                id="smartlog-main"
                src="//cdn.smlog.co.kr/core/smart_renew.js"
                strategy="afterInteractive"
                charSet="utf-8"
            />
        </>
    );
}
