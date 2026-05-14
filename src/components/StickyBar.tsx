import * as React from "react";
import { Phone, ClipboardList, MessageCircle } from 'lucide-react';

const StickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-0 w-full z-40 pointer-events-none">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="w-full max-w-md bg-[#1B3B5A]/95 backdrop-blur-md rounded-full shadow-2xl p-2 pointer-events-auto border border-[#3182A4]/30 flex gap-2 animate-fade-in-up">
          {/* Mobile Only: Phone Consultation */}
          <a
            href="tel:02-6959-5053"
            className="flex-1 bg-green-600 text-white rounded-full py-3 md:py-4 flex md:hidden items-center justify-center font-bold gap-2 hover:bg-green-700 transition-colors shadow-lg active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">전화 상담</span>
          </a>

          {/* PC Only: Kakao Consultation */}
          <a
            href="https://pf.kakao.com/_uDksxb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#FEE500] text-[#1B3B5A] rounded-full py-3 md:py-4 hidden md:flex items-center justify-center font-bold gap-2 hover:bg-yellow-300 transition-colors shadow-lg active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-base">카톡 상담</span>
          </a>

          {/* Common: Consultation Request */}
          <a
            href="#contact-form"
            className="flex-1 bg-orange-500 text-white rounded-full py-3 md:py-4 flex items-center justify-center font-bold gap-2 hover:bg-orange-600 transition-colors shadow-lg active:scale-95"
          >
            <ClipboardList className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">바로 상담 신청</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;