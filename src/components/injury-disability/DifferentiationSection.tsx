import * as React from "react";

import { ArrowRight, AlertCircle, Check, X, Minus } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const DifferentiationSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#F9F9F7] scroll-mt-20">
      <ScrollReveal>
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/10 text-[#2C3E50] text-sm font-bold tracking-widest mb-4">
              WHY US
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#333333] mb-8 leading-tight">
              <span className="text-[#2C3E50] border-b-4 border-[#EDC967]/30">후유장해 전문가는 많습니다.</span>
            </h2>
            <div className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed space-y-4">
              <p className="font-bold text-slate-400">그러나,</p>
              <p>손해사정법인은 <strong>소송 시 재의뢰</strong>가 필요하고,</p>
              <p>일반 로펌은 <strong>장해평가 전문성</strong>이 부족하며,</p>
              <p>교통사고 전문 로펌은 <strong>배상책임·근재보험</strong> 진행이 어렵습니다.</p>
            </div>
          </div>

          {/* Responsive Table / Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-4 bg-[#1B3B5A] text-white rounded-t-2xl overflow-hidden shadow-lg">
              <div className="p-5 text-center font-bold text-lg flex items-center justify-center">구분</div>
              <div className="p-5 text-center font-medium text-slate-300 bg-[#152e46] flex items-center justify-center">일반 로펌</div>
              <div className="p-5 text-center font-medium text-slate-300 bg-[#152e46] flex items-center justify-center">손해사정법인</div>
              <div className="p-5 text-center font-bold text-white bg-[#2C3E50] text-lg flex items-center justify-center relative">
                더드림
                <div className="absolute top-0 left-0 w-full h-1 bg-[#EDC967]"></div>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-6 md:space-y-0 shadow-xl rounded-2xl md:rounded-t-none overflow-hidden border border-slate-200 bg-white">
              {[
                { label: "팀 구성", row1: "변호사+사무장", row2: "손해사정사+보조인", row3: "변호사+손해사정사+노무사" },
                { label: "대응 영역", row1: "교통사고/일반 민사", row2: "장해평가만", row3: "교통사고·배상책임·근재 모두" },
                {
                  label: "후유장해 평가",
                  row1: <div className="flex items-center gap-1"><Minus className="w-4 h-4 text-slate-400" /> 전문성 부족</div>,
                  row2: <div className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> 가능</div>,
                  row3: <div className="flex items-center gap-1 text-base md:text-lg text-[#2C3E50]"><Check className="w-4 h-4 text-[#EDC967] fill-[#EDC967]" /> 정밀 평가 (16년)</div>
                },
                {
                  label: "영역별 핵심 쟁점",
                  row1: "△ 비전문 영역 약함",
                  row2: "△ 법률 영역 약함",
                  row3: <div className="flex items-center gap-1 text-base md:text-lg text-[#2C3E50]"><Check className="w-4 h-4 text-[#EDC967] fill-[#EDC967]" /> 과실·책임·업무관련성 모두</div>
                },
                {
                  label: "합의 협상",
                  row1: <div className="flex items-center gap-1 text-slate-400 font-medium">합의 대행 불법 이슈 비보장</div>,
                  row2: <div className="flex items-center gap-1 text-red-400 font-medium"><X className="w-4 h-4" /> 대리권 없음</div>,
                  row3: <div className="flex items-center gap-1 text-base md:text-lg text-[#2C3E50]"><Check className="w-4 h-4 text-[#EDC967] fill-[#EDC967]" /> 합법적 대리·협상</div>
                },
                {
                  label: "소송 전환",
                  row1: "○ 소송 권유",
                  row2: "△ 재의뢰 시 비용 추가",
                  row3: <div className="flex items-center gap-1 text-base md:text-lg text-[#2C3E50]"><Check className="w-4 h-4 text-[#EDC967] fill-[#EDC967]" /> 지체 없는 즉시 대응</div>
                },
                {
                  label: "근재보험 처리",
                  row1: <div className="flex items-center gap-1 text-slate-500"><Minus className="w-4 h-4" /> 전문 노무 부재</div>,
                  row2: <div className="flex items-center gap-1 text-slate-500"><Minus className="w-4 h-4" /> 전문 노무 부재</div>,
                  row3: <div className="flex items-center gap-1 text-base md:text-lg text-[#2C3E50]"><Check className="w-4 h-4 text-[#EDC967] fill-[#EDC967]" /> 노무사 상주 협업</div>
                },
                { label: "진행 방식", row1: "불필요한 소송 경향", row2: "합의 지향", row3: "상황별 최적 판단" }
              ].map((row, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors">
                  {/* Mobile Title */}
                  <div className="md:hidden bg-[#F9F9F7] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#2C3E50]"></div>
                    {row.label}
                  </div>
                  {/* Desktop Title */}
                  <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F9F9F7] items-center justify-center text-center">{row.label}</div>

                  <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center border-b md:border-b-0 border-slate-50">
                    <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                    {row.row1}
                  </div>
                  <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center border-b md:border-b-0 border-slate-50">
                    <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                    {row.row2}
                  </div>
                  <div className="p-4 md:p-6 text-center font-bold text-[#2C3E50] bg-[#2C3E50]/5 flex flex-col md:flex-row items-center justify-center h-full">
                    <span className="md:hidden font-bold mb-1 text-[#2C3E50] text-xs">더드림</span>
                    <div className="text-base md:text-lg">{row.row3}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion Box */}
          {/* Conclusion Box */}
          <div className="bg-[#1B3B5A] rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Side: Visuals for 3 Areas & 3 Procedures */}
              <div className="flex flex-col gap-6">
                {/* 3대 영역 */}
                <div className="bg-[#152e46]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg">
                  <h4 className="text-[#EDC967] font-black text-sm md:text-base mb-5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EDC967]"></div>
                    3대 영역
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white/5 border border-white/5 rounded-xl py-3 px-2 flex items-center justify-center text-center text-sm md:text-base font-bold text-slate-200">교통사고</div>
                    <div className="bg-white/5 border border-white/5 rounded-xl py-3 px-2 flex items-center justify-center text-center text-sm md:text-base font-bold text-slate-200">배상책임사고</div>
                    <div className="bg-white/5 border border-white/5 rounded-xl py-3 px-2 flex items-center justify-center text-center text-sm md:text-base font-bold text-slate-200">업무관련사고</div>
                  </div>
                </div>

                {/* 3대 절차 */}
                <div className="bg-gradient-to-br from-[#152e46]/80 to-[#1B3B5A] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#2C3E50]/30 shadow-xl relative overflow-hidden group">
                  <h4 className="text-[#EDC967] font-black text-sm md:text-base mb-5 flex items-center gap-2 relative z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EDC967]"></div>
                    3대 절차
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
                    <div className="bg-[#2C3E50]/20 border border-[#3182A4]/40 rounded-xl py-3 px-2 flex items-center justify-center text-center text-sm md:text-base font-bold text-white shadow-inner">손해사정</div>
                    <div className="bg-[#2C3E50]/20 border border-[#3182A4]/40 rounded-xl py-3 px-2 flex items-center justify-center text-center text-sm md:text-base font-bold text-white shadow-inner">소송</div>
                    <div className="bg-[#2C3E50]/20 border border-[#3182A4]/40 rounded-xl py-3 px-2 flex items-center justify-center text-center text-sm md:text-base font-bold text-white shadow-inner">근재보험</div>
                  </div>
                  {/* Subtle glowing effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2C3E50] filter blur-[60px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Right Side: Text & CTA */}
              <div className="text-left flex flex-col items-start">
                <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                  더드림은 <br className="hidden md:block" />
                  <span className="text-[#EDC967] relative inline-block">
                    상해후유장해 3대 영역·절차
                    <span className="absolute bottom-1 lg:bottom-2 left-0 w-full h-3 md:h-4 bg-red-500/30 -z-10 rounded-sm"></span>
                  </span><br className="hidden md:block" /> 모두<br className="md:hidden" /> 전문적으로 진행하는 <br className="hidden md:block" />유일한 팀입니다.
                </h3>

                <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                  어느 한쪽도 부족함 없이,<br />
                  <span className="text-white font-bold text-xl md:text-2xl">가장 안전한 최선의 보상</span>을 약속 드립니다.
                </p>

                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#0F2336] px-8 py-4 md:py-5 rounded-full font-black text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 w-full md:w-auto"
                >
                  착수금 없이 보상 진단받기
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>

            </div>

            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#2C3E50] rounded-full mix-blend-screen filter blur-[120px] opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a192f] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default DifferentiationSection;