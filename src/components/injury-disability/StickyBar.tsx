"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Phone, ClipboardList, MessageCircle } from 'lucide-react';

const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky bar when the user scrolls down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Delay initial check to avoid hydration mismatch
    // The scroll position check will happen on the first scroll event
    // or after a small delay to ensure hydration is complete
    const timeoutId = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`fixed bottom-6 left-0 w-full z-40 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0 pointer-events-none' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <div className="container mx-auto px-6 flex justify-center">
        <div className={`w-full max-w-md bg-[#2C3E50]/95 backdrop-blur-md rounded-full shadow-2xl p-2 border border-[#EDC967]/20 flex gap-2 transition-all duration-500 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {/* Mobile Only: Phone Consultation (Emerald) */}
          <a
            href="tel:02-6959-5053"
            className="flex-1 bg-emerald-700 text-white rounded-full py-3 md:py-4 flex md:hidden items-center justify-center font-bold gap-2 hover:bg-emerald-800 transition-colors shadow-lg active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">전화 상담</span>
          </a>

          {/* PC Only: Kakao Consultation (Yellow) */}
          <a
            href="https://pf.kakao.com/_uDksxb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#FEE500] text-[#2C3E50] rounded-full py-3 md:py-4 hidden md:flex items-center justify-center font-bold gap-2 hover:bg-yellow-300 transition-colors shadow-lg active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-base">카톡 상담</span>
          </a>

          {/* Mobile: Consultation Request (Gold - Keep original) */}
          <a
            href="#contact-form"
            className="flex-1 bg-[#EDC967] text-[#2C3E50] rounded-full py-3 md:py-4 flex md:hidden items-center justify-center font-bold gap-2 hover:bg-[#B89550] hover:text-white transition-colors shadow-lg active:scale-95"
          >
            <ClipboardList className="w-4 h-4" />
            <span className="text-sm">바로 상담 신청</span>
          </a>

          {/* PC: Consultation Request (Slate - Darker to distinguish from Kakao Yellow) */}
          <a
            href="#contact-form"
            className="flex-1 bg-[#1B3B5A] text-white rounded-full py-3 md:py-4 hidden md:flex items-center justify-center font-bold gap-2 hover:bg-[#152e46] transition-colors shadow-lg active:scale-95 border border-white/10"
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
