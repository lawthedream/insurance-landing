"use client";

import { useEffect } from "react";

/**
 * 네이버 검색광고 전환 이벤트 발송 컴포넌트.
 * 페이지 마운트 시 1회 wcs.trans() 호출.
 *
 * 사용 예 (상담신청 완료 페이지):
 *   <NaverConversion type="lead" />
 *
 * 지원 type: 'lead' | 'sign_up' | 'schedule' | 'subscribe'
 *           | 'view_content' | 'purchase' | 'view_product'
 *           | 'add_to_cart' | 'add_to_wishlist'
 *           | 'custom001' ~ 'custom010'
 *
 * value, id, items 등 추가 필드가 필요한 이벤트(purchase 등)는
 * extra prop 으로 넘기면 그대로 _conv 객체에 병합됩니다.
 */
interface NaverConversionProps {
    type: string;
    extra?: Record<string, unknown>;
}

const ACCOUNT_ID = "s_2e00713c810";

export default function NaverConversion({ type, extra }: NaverConversionProps) {
    useEffect(() => {
        let attempts = 0;

        const fire = () => {
            if (typeof window === "undefined") return false;
            if (!window.wcs || !window.wcs.trans) return false;

            if (!window.wcs_add) window.wcs_add = {};
            window.wcs_add["wa"] = ACCOUNT_ID;

            const _conv: Record<string, unknown> = { type, ...(extra || {}) };
            window.wcs.trans(_conv);
            return true;
        };

        if (fire()) return;

        // wcslog.js 비동기 로드 대비 — 최대 4초 재시도 후 포기
        const id = setInterval(() => {
            attempts++;
            if (fire() || attempts >= 20) clearInterval(id);
        }, 200);
        return () => clearInterval(id);
    // type/extra 가 바뀔 일이 드물어 ref 비교 대신 stringify 비교는 생략
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
