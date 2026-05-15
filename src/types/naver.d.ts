// 네이버 광고 전환 추적용 전역 타입 선언 (통합)
declare global {
    interface Window {
        wcs_add?: { wa?: string };
        wcs?: {
            inflow: (domain?: string) => void;
            trans: (conv: { type: string; [key: string]: unknown }) => void;
        };
        wcs_do?: (nasa?: unknown) => void;
        _nasa?: unknown;
    }
}

export {};
