import * as React from "react";

import { Calculator, Scale, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="relative py-24 bg-white overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.2] blur-[2px]"
        style={{
          backgroundImage: 'url("/solution_1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded bg-[#3182A4]/10 text-[#3182A4] text-sm font-bold tracking-widest mb-4">
              SOLUTION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-8 leading-tight">
              어디서 내 상황에<br />
              <span className="relative inline-block">
                딱 맞는 조언
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200/50 -z-10 rounded-sm"></span>
              </span>을 받을 수 있을까요?
            </h2>
            <div className="bg-[#F4F7F9]/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 shadow-sm">
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                일반 로펌은 언제나 <span className="text-red-500 font-bold">소송</span>을 권하고,<br className="md:hidden" />
                손해사정 법인은 <span className="text-red-500 font-bold">소송을 피해</span> 합의하려고 합니다.<br /><br />
                <span className="text-[#3182A4] font-bold">더드림</span>에서는 손해사정사·변호사·노무사 3인이<br className="hidden md:inline" />
                각자의 전문 영역에서 <span className="text-[#333333] font-bold decoration-yellow-400 underline decoration-4 underline-offset-2">객관적 판단</span>을 내려<br className="hidden md:inline" />
                <span className="text-[#333333] font-bold"> 고객 맞춤형</span>으로, <span className="text-[#333333] font-bold">가장 효율적인 길</span>을 제시합니다.
              </p>
            </div>
          </div>

          {/* 3 Experts Cards - Unified Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Lawyer - Design Unified */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#3182A4]/10 rounded-2xl flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-[#3182A4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-2">✔️ 변호사</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">합의 협상과 소송을 재의뢰 없이 진행합니다.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">보험사와의 합의 협상<br /><span className="text-slate-400">(법원 기준으로)</span></span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">과실비율 반박 근거 확보<br /><span className="text-slate-400">(판례·수사기록)</span></span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">형사합의 중재</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Loss Adjuster */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#3182A4]/10 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-[#3182A4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-2">✔️ 손해사정사</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">받을 수 있는 보상금을 정밀하게 계산합니다.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">손해배상금 정밀산정</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">과실비율 분석<br /><span className="text-slate-400">(블랙박스·CCTV·현장 조사)</span></span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">보험약관 검토</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Labor Attorney */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#3182A4]/10 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-[#3182A4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-2">✔️ 노무사</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">산재보험 청구를 전담합니다.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">출퇴근 재해 신청</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">산재 요양급여·휴업급여 청구</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3182A4] mt-2"></div>
                  <span className="text-sm">장해등급 신청<br /><span className="text-slate-400">(연금 수급 가능)</span></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Summary Checklist */}
          <div className="bg-[#F4F7F9]/85 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10 text-slate-700 font-medium text-base md:text-lg">
              <div className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/50 md:bg-transparent p-3 md:p-0 rounded-xl border border-slate-100 md:border-0 shadow-sm md:shadow-none">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#3182A4] flex-shrink-0" />
                <span>3인의 전문가 분석 시스템</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
              <div className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/50 md:bg-transparent p-3 md:p-0 rounded-xl border border-slate-100 md:border-0 shadow-sm md:shadow-none">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#3182A4] flex-shrink-0" />
                <span>법률·보험·산재 일괄 해결</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
              <div className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/50 md:bg-transparent p-3 md:p-0 rounded-xl border border-slate-100 md:border-0 shadow-sm md:shadow-none">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#3182A4] flex-shrink-0" />
                <span>놓치는 보상금 없이 해결</span>
              </div>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-[#1B3B5A] hover:bg-[#152e46] text-white px-6 md:px-10 py-5 rounded-xl font-bold text-base md:text-xl transition-all shadow-[0_0_20px_rgba(27,59,90,0.5)] hover:shadow-[0_0_30px_rgba(27,59,90,0.7)] transform hover:-translate-y-1 whitespace-nowrap"
            >
              교통사고 꼼꼼하게 보상받기
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default SolutionSection;