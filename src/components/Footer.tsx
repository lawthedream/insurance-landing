import * as React from "react";

import { ShieldCheck, Instagram, MessageCircle, Youtube, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B3B5A] text-slate-400 py-16 border-t border-[#234567]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">

          {/* Company Info */}
          <div className="lg:w-1/3">
            <div className="flex items-center space-x-2 text-white font-bold text-2xl mb-6">
              <img
                src="/logo_new_color.png"
                alt="더드림법률사무소"
                className="h-10 w-auto"
              />
              <span>더드림법률사무소</span>
            </div>
            <address className="not-italic text-sm leading-loose text-slate-400 mb-6">
              <p><strong className="text-slate-300">대표자</strong> 박성훈</p>
              <p><strong className="text-slate-300">사업자등록번호</strong> 123-45-67890</p>
              <p><strong className="text-slate-300">주소</strong> 서울 서초구 사임당로 87, 세원빌딩 3층</p>
              <p><strong className="text-slate-300">대표번호</strong> 02-6959-5053</p>
            </address>
          </div>

          {/* Links */}
          <div className="lg:w-2/3 flex flex-wrap gap-12">
            <div>
              <h4 className="text-white font-bold mb-4 border-b border-[#234567] pb-2 inline-block">센터별 바로가기</h4>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 text-sm">
                <li><a href="https://www.lawthedream.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3182A4] transition-colors font-bold">더드림법률사무소 메인</a></li>
                <li><a href="https://www.lawthedream.com/new2019/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3182A4] transition-colors">산재/보험보상 센터</a></li>
                <li><a href="https://www.lawthedream.com/law/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3182A4] transition-colors">교통형사 센터</a></li>
                <li><a href="http://labordream.com/work/index.php" target="_blank" rel="noopener noreferrer" className="hover:text-[#3182A4] transition-colors">직업병 연구원</a></li>
                <li><a href="https://www.lawthedream.com/center/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3182A4] transition-colors">보험분쟁 센터</a></li>
                <li><a href="https://www.lawthedream.com/accident/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3182A4] transition-colors">중대재해 센터</a></li>
              </ul>
            </div>

            <div className="w-full md:w-auto">
              <h4 className="text-white font-bold mb-4 border-b border-[#234567] pb-2 inline-block">SNS 채널</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://blog.naver.com/cpla999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#152e46] rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                  <span className="font-bold text-xs">BLOG</span>
                </a>
                <a href="https://www.youtube.com/channel/UCsHEc7SKPKB_qqDFmKSb0uQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#152e46] rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://cafe.naver.com/thedreamlaw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#152e46] rounded-full flex items-center justify-center hover:bg-[#3182A4] hover:text-white transition-all">
                  <Coffee className="w-5 h-5" />
                </a>
                <a href="https://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#152e46] rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-[#1B3B5A] transition-all">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#234567] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-slate-300">개인정보처리방침</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-slate-300">이용약관</a>
          </div>
          <p>Copyright © 2026 더드림법률사무소. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;