"use client";
import * as React from "react";
import { Calculator, Scale, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="relative py-24 bg-white overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.1] blur-[2px]"
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
            <span className="inline-block py-1 px-3 rounded bg-[#0D9488]/10 text-[#0D9488] text-sm font-bold tracking-widest mb-4">
              SOLUTION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-8 leading-tight">
              어디서 내 상황에<br />
              <span className="relative inline-block">
                딱 맞는 조언
                <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-200/50 -z-10 rounded-sm"></span>
              </span>을 받을 수 있을까요?
            </h2>
            <div className="bg-[#F0FDF4]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100 shadow-sm">
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                노무사에게 산재 신청 맡기고, 행정소송은 별도로 변호사 찾고, 민영보험은 또 따로.<br />
                <span className="text-red-500 font-bold underline underline-offset-4 decoration-red-200">여러 곳에 나눠 맡기면 소통이 어렵고 시간과 비용이 이중으로 듭니다.</span><br /><br />
                <span className="text-[#0D9488] font-bold">더드림</span>에서는 변호사·노무사·손해사정사 3인이<br className="hidden md:inline" />
                <span className="text-[#333333] font-bold decoration-yellow-400 underline decoration-4 underline-offset-2">처음부터 한 팀</span>으로 사건의 맥락을 공유하며<br className="hidden md:inline" />
                <span className="text-[#333333] font-bold"> 가장 효율적인 방법</span>으로 산재보험 문제를 해결합니다.
              </p>
            </div>
          </div>

          {/* 3 Experts Cards - Unified Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Lawyer */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0B8476]/10 rounded-2xl flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-[#0B8476]" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-2">✔️ 변호사</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium text-pretty">행정소송을 재의뢰 없이 즉시 진행합니다.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">산재 불승인 행정소송</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">판례 기반 반박 논리 구성</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">산재 전문 20년 경력 대표변호사 직접 검토</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Labor Attorney */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0B8476]/10 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-[#0B8476]" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-2">✔️ 노무사</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium text-pretty">산재 신청부터 불승인 대응까지 전담합니다.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">산재 신청 서류 작성 및 접수</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">사업주 비협조 시 증거 확보 전략</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">심사청구·재심사청구 진행</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Loss Adjuster */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0B8476]/10 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-[#0B8476]" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-2">✔️ 손해사정사</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium text-pretty">장해등급을 정밀하게 평가합니다.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">장해등급 재판정 근거 확보</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">민영보험 후유장해보험금 동시 청구</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B8476] mt-2"></div>
                  <span className="text-sm">보상금 정밀 산정</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Summary Checklist */}
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 text-center border border-emerald-100">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10 text-slate-700 font-medium text-base md:text-lg">
              <div className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/50 md:bg-transparent p-3 md:p-0 rounded-xl border border-emerald-100 md:border-0 shadow-sm md:shadow-none">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#0D9488] flex-shrink-0" />
                <span>3인의 전문가 분석 시스템</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-emerald-200 rounded-full"></div>
              <div className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/50 md:bg-transparent p-3 md:p-0 rounded-xl border border-emerald-100 md:border-0 shadow-sm md:shadow-none">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#0D9488] flex-shrink-0" />
                <span>산재 신청·불승인 대응·장해평가 일괄 해결</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 bg-emerald-200 rounded-full"></div>
              <div className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/50 md:bg-transparent p-3 md:p-0 rounded-xl border border-emerald-100 md:border-0 shadow-sm md:shadow-none">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#0D9488] flex-shrink-0" />
                <span>놓치는 보상금 없이 해결</span>
              </div>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-[#043327] text-white px-6 md:px-10 py-5 rounded-xl font-bold text-base md:text-xl transition-all shadow-[0_0_20px_rgba(6,78,59,0.3)] hover:shadow-[0_0_30px_rgba(6,78,59,0.5)] transform hover:-translate-y-1 whitespace-nowrap"
            >
              산재보험 꼼꼼하게 보상받기
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default SolutionSection;
