"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// wcs (네이버 로그분석) 전역 타입 선언 — pageview + 전환 이벤트 공용
declare global {
    interface Window {
        wcs?: {
            inflow: (domain: string) => void;
            trans: (conv: Record<string, unknown>) => void;
        };
        wcs_add?: Record<string, string>;
        wcs_do?: (param?: unknown) => void;
    }
}

export default function NaverAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        // wcslog.js 가 로드된 후에만 실행. 비동기 로드 대비 짧은 폴링.
        let attempts = 0;
        const fire = () => {
            if (typeof window !== "undefined" && window.wcs && window.wcs_do) {
                if (!window.wcs_add) window.wcs_add = {};
                window.wcs_add["wa"] = "s_2e00713c810";
                window.wcs.inflow("lawthedream.com");
                window.wcs_do();
                return true;
            }
            return false;
        };
        if (fire()) return;
        const id = setInterval(() => {
            attempts++;
            if (fire() || attempts >= 20) clearInterval(id);
        }, 200);
        return () => clearInterval(id);
    }, [pathname]);

    return null;
}
