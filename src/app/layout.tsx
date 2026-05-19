import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import TopRightKakaoButton from "../components/TopRightKakaoButton";
import TopButton from "../components/TopButton";
import NaverAnalytics from "../components/NaverAnalytics";
import "./globals.css";

export const metadata: Metadata = {
    title: "더드림법률사무소 - 당신의 보상을 위한 드림팀",
    description: "상해후유장해 보상 전문 손해사정사, 변호사, 노무사가 함께하는 더드림법률사무소입니다.",
    openGraph: {
        title: "더드림법률사무소",
        description: "최선의 보상을 약속하는 전문가 드림팀, 더드림법률사무소입니다.",
        url: "https://the-dream-accident.vercel.app", // Updated to a likely current URL or keep generic
        siteName: "더드림법률사무소",
        images: [
            {
                url: "/logo_new_color.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    icons: {
        icon: '/logo_new_color.png',
        shortcut: '/logo_new_color.png',
        apple: '/logo_new_color.png',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body className="antialiased">
                {children}
                <TopRightKakaoButton />
                <TopButton />
                <Analytics />
                {/* 네이버 검색광고 전환추적 공통 스크립트 */}
                <Script src="//wcs.naver.net/wcslog.js" strategy="afterInteractive" />
                <NaverAnalytics />
            </body>
        </html>
    );
}
