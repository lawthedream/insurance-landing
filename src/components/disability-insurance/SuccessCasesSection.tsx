"use client";
import React, { useState } from "react";
import { Trophy, FileText } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import CaseModal from './CaseModal';

const cases = [
  {
    id: 1,
    title: "척추압박골절 의료자문 반박",
    situation: "척추압박골절 후유장해",
    hurdle: "보험사 의료자문으로 부지급 통보",
    action: "X-ray, 진단서, 의학적 소견서를 근거로 의료자문 결과 반박",
    result: "후유장해보상금 수령 성공",
    modalType: 'image' as const,
    modalSrc: '/cases/01_척추압박골절_후유장해보상.png'
  },
  {
    id: 2,
    title: "13년 전 사고 후유장해 역전",
    situation: "13년 전 사고로 후유증 지속",
    hurdle: "보험사가 한시장해라고 주장",
    action: "약관 기준 자료 제공, 의견서 재제출",
    result: "적정 보험금 수령 성공",
    modalType: 'youtube' as const,
    modalSrc: 'https://www.youtube.com/watch?v=b9fmi1RcLvM'
  },
  {
    id: 3,
    title: "족관절골절 후유장해",
    situation: "음주사고 족관절골절",
    hurdle: "장해율 산정 필요",
    action: "장해율 산정 + 대인배상보험금 협상",
    result: "약 2,000만원 합의 성공",
    modalType: 'image' as const,
    modalSrc: '/cases/B07_음주운전교통사고_족관절골절_1.png'
  }
];

const SuccessCasesSection: React.FC = () => {
  const [modalData, setModalData] = useState<{ isOpen: boolean, type: 'image' | 'youtube' | null, src: string | null, title: string }>({
    isOpen: false, type: null, src: null, title: ''
  });
  return (
    <section id="success-cases" className="py-24 bg-[#1A1A1A] text-white">
      <ScrollReveal>
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2D2D2D]/40 text-[#C77E1E] text-sm font-bold tracking-widest mb-4 border border-[#C77E1E]/30">
              SUCCESS CASES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              말이 아닌 <span className="text-[#C77E1E] decoration-[#2D2D2D] underline decoration-4 underline-offset-4">결과</span>로 보여드리겠습니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {cases.map((item) => (
              <div
                key={item.id}
                className="bg-[#222222] rounded-3xl overflow-hidden border border-[#404040] hover:border-[#C77E1E] transition-all hover:-translate-y-1 flex flex-col cursor-pointer group"
                onClick={() => setModalData({ isOpen: true, type: item.modalType, src: item.modalSrc, title: item.title })}
              >
                <div className="p-6 bg-[#2b2b2b] border-b border-[#404040] group-hover:bg-[#333333] transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-1 bg-[#2D2D2D]/40 text-[#C77E1E] text-[10px] font-bold rounded-md border border-[#C77E1E]/30">
                      사례 {item.id}
                    </span>
                    <button
                      className="inline-flex items-center gap-1 text-[10px] md:text-xs font-bold text-[#C77E1E] hover:text-white transition-all bg-[#C77E1E]/10 hover:bg-[#C77E1E] px-2.5 py-1 rounded-md border border-[#C77E1E]/20 hover:border-[#C77E1E]"
                    >
                      <FileText className="w-3 h-3" />
                      상세 보기
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <div className="bg-[#151515] rounded-xl p-4 space-y-3 text-[15px] flex-grow">
                    <div className="flex gap-4">
                      <span className="text-slate-500 font-bold w-12 flex-shrink-0 pt-0.5">상황</span>
                      <span className="text-slate-300 leading-snug">{item.situation}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-red-400 font-bold w-12 flex-shrink-0 pt-0.5">난관</span>
                      <span className="text-slate-300 leading-snug">{item.hurdle}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#E69A27] font-bold w-12 flex-shrink-0 pt-0.5">대응</span>
                      <span className="text-white leading-snug">{item.action}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#404040]">
                    <p className="text-slate-400 text-xs mb-2">최종 결과</p>
                    <p className="text-xl font-black text-[#C77E1E] leading-tight break-keep">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-[#222222] to-[#151515] rounded-3xl p-10 md:p-14 border border-[#404040] shadow-2xl relative overflow-hidden">
            <Trophy className="w-16 h-16 text-[#C77E1E] mx-auto mb-8 animate-bounce" />
            <h3 className="text-xl md:text-2xl font-black text-white mb-6 leading-relaxed break-keep">
              <span className="text-[#C77E1E]">후유장해보험금은 지급 금액이 큰 보험금입니다.</span><br />
              금액이 클수록 보험사는 더 까다롭게 심사하고, <br className="hidden md:block" />
              고객이 모르는 기준을 적용해서 감액하거나 거절합니다.
            </h3>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              <span className="text-white underline decoration-[#C77E1E]/50 underline-offset-4 font-bold max-w-full inline-block">보험사가 제시한 보험금은 '정답'이 아닙니다.</span><br />
              제안을 그대로 받아들이지 마세요.<br className="md:hidden" /> 더드림이 한 팀이 되어 도와드리겠습니다.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1A1A1A] hover:bg-slate-100 px-12 py-5 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
            >
              내 사건도 확인해보기
            </a>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E69A27] rounded-full blur-[80px] opacity-20"></div>
          </div>

        </div>
      </ScrollReveal>

      <CaseModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData(prev => ({ ...prev, isOpen: false }))}
        type={modalData.type}
        src={modalData.src}
        title={modalData.title}
      />
    </section>
  );
};

export default SuccessCasesSection;