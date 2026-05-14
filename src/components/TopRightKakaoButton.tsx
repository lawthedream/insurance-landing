"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";

const TopRightKakaoButton: React.FC = () => {
    return (
        <div className="fixed top-24 right-6 z-50">
            <a
                href="https://pf.kakao.com/_uDksxb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-yellow-400 text-[#1B3B5A] rounded-full shadow-xl hover:bg-yellow-300 transition-all hover:scale-110 active:scale-95 border-2 border-white/20 group"
                title="카카오톡 상담"
            >
                <MessageCircle className="w-7 h-7 fill-current transition-transform" />
            </a>
        </div>
    );
};

export default TopRightKakaoButton;
