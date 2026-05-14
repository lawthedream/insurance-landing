"use client";
import * as React from "react";
import { Phone, ClipboardList, MessageCircle } from 'lucide-react';

const StickyBar: React.FC = () => {
    return (
        <div className="fixed bottom-6 left-0 w-full z-40 pointer-events-none">
            <div className="container mx-auto px-6 flex justify-center">
                <div className="w-full max-w-md bg-[#064E3B]/95 backdrop-blur-md rounded-full shadow-2xl p-2 pointer-events-auto border border-[#2DD4BF]/30 flex gap-2 animate-fade-in-up">
                    {/* Mobile Only: Phone Consultation (Emerald) */}
                    <a
                        href="tel:02-6959-5053"
                        className="flex-1 bg-emerald-600 text-white rounded-full py-3 md:py-4 flex md:hidden items-center justify-center font-bold gap-2 hover:bg-emerald-700 transition-colors shadow-lg active:scale-95"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">전화 상담</span>
                    </a>

                    {/* PC Only: Kakao Consultation (Yellow) */}
                    <a
                        href="https://pf.kakao.com/_uDksxb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#FEE500] text-[#064E3B] rounded-full py-3 md:py-4 hidden md:flex items-center justify-center font-bold gap-2 hover:bg-yellow-300 transition-colors shadow-lg active:scale-95"
                    >
                        <MessageCircle className="w-5 h-5 fill-current" />
                        <span className="text-base">카톡 상담</span>
                    </a>

                    {/* Mobile: Consultation Request (Yellow - Keep existing) */}
                    <a
                        href="#contact-form"
                        className="flex-1 bg-yellow-500 text-[#064E3B] rounded-full py-3 md:py-4 flex md:hidden items-center justify-center font-bold gap-2 hover:bg-yellow-400 transition-colors shadow-lg active:scale-95"
                    >
                        <ClipboardList className="w-4 h-4" />
                        <span className="text-sm">바로 상담 신청</span>
                    </a>

                    {/* PC: Consultation Request (Emerald - Change to avoid yellow conflict) */}
                    <a
                        href="#contact-form"
                        className="flex-1 bg-[#0D9488] text-white rounded-full py-3 md:py-4 hidden md:flex items-center justify-center font-bold gap-2 hover:bg-[#0B8476] transition-colors shadow-lg active:scale-95"
                    >
                        <ClipboardList className="w-5 h-5" />
                        <span className="text-base">바로 상담 신청</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StickyBar;
