"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// wcs (네이버 로그분석) 전역 타입을 최소한으로 선언
declare global {
    interface Window {
        wcs?: {
            inflow: (domain: string) => void;
        };
        wcs_add?: Record<string, string>;
        wcs_do?: (param?: unknown) => void;
    }
}

export default function NaverAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        // wcslog.js 가 로드된 후에만 실행
        if (typeof window !== "undefined" && window.wcs) {
            if (!window.wcs_add) {
                window.wcs_add = {};
            }
            window.wcs_add["wa"] = "s_2e00713c810";
            window.wcs.inflow("lawthedream.com");
            if (window.wcs_do) {
                window.wcs_do();
            }
        }
    }, [pathname]);

    return null;
}
