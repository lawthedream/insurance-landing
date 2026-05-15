"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NaverAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        // wcslog.js가 로드된 후에만 실행
        if (typeof window !== "undefined" && window.wcs) {
            if (!window.wcs_add) {
                window.wcs_add = {};
            }
            window.wcs_add["wa"] = "s_2e00713c810";
            window.wcs.inflow("lawthedream.com");
            window.wcs_do();
        }
    }, [pathname]);

    return null;
}
