import * as React from "react";

import { ArrowRight, AlertCircle, Check, X, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const DifferentiationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F7F9]">
      <ScrollReveal>
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded bg-[#3182A4]/10 text-[#3182A4] text-sm font-bold tracking-widest mb-4">
              WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-6 leading-tight">
              골절 이상 중상해 사고로 <span className="text-[#3182A4]">후유증</span>이 예상된다면<br />
              <span className="text-[#333333] border-b-4 border-[#3182A4]/20">후유장해 평가</span> 준비하시고 치료비 걱정을 덜어보세요.
            </h2>
            <p className="text-xl text-slate-700 font-bold mb-8">
              평가 결과에 따라 보상금이 <span className="text-red-500 underline decoration-wavy decoration-red-300">수천만 원 단위</span>로 달라집니다.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 inline-block text-left">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#3182A4]" />
                후유장해란?
              </h4>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                상해나 질병으로 인해 치료후에도 신체에 영구적으로 남아있는 정신적, 신체적 훼손 상태, 기능상실을 의미합니다.<br />
                원칙적으로는 영구적인 장해를 의미하지만, 교통사고합의 시 보험사에서 한시적 장해, 또는 장해없음을 주장하여 분쟁이 발생합니다.<br />
                <span className="font-bold text-[#3182A4]">후유장해의 평가는 교통사고합의금 산정에 있어서 가장 중요한 항목</span>이며, 어떻게 평가되냐에 따라서 최종 합의금이 <span className="text-red-500 font-bold">몇 배로 차이</span>나게 됩니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {['보행이 불편하다', '장시간 서있기 어렵다', '계단 오르내리기가 힘들다'].map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-[#F4F7F9] text-slate-600 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Responsive Table / Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-4 bg-[#1B3B5A] text-white rounded-t-2xl overflow-hidden">
              <div className="p-5 text-center font-bold text-lg flex items-center justify-center">구분</div>
              <div className="p-5 text-center font-medium text-slate-300 bg-[#152e46] flex items-center justify-center">일반 로펌</div>
              <div className="p-5 text-center font-medium text-slate-300 bg-[#152e46] flex items-center justify-center">손해사정법인</div>
              <div className="p-5 text-center font-bold text-white bg-[#3182A4] text-lg flex items-center justify-center relative">
                더드림
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-6 md:space-y-0 shadow-xl rounded-2xl md:rounded-t-none overflow-hidden border border-slate-200 bg-white">

              {/* Row 1: Team */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors">
                {/* Mobile Title */}
                <div className="md:hidden bg-[#F4F7F9] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3182A4]"></div>
                  팀 구성
                </div>
                {/* Desktop Title */}
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F4F7F9] items-center justify-center">팀 구성</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center border-b md:border-b-0 border-slate-50">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  변호사 + 사무장
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center border-b md:border-b-0 border-slate-50">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  손해사정사 + 보조인
                </div>
                <div className="p-4 md:p-6 text-center font-bold text-[#3182A4] bg-[#3182A4]/5 flex flex-col md:flex-row items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#3182A4] text-xs">더드림</span>
                  <div className="text-lg">변호사 + 손해사정사 + 노무사</div>
                </div>
              </div>

              {/* Row 2: Evaluation */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors">
                <div className="md:hidden bg-[#F4F7F9] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3182A4]"></div>
                  후유장해 평가
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F4F7F9] items-center justify-center">후유장해 평가</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  <div className="flex items-center gap-1"><Minus className="w-4 h-4 text-yellow-500" /> 전문성 부족</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  <div className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> 가능</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#3182A4] bg-[#3182A4]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#3182A4] text-xs">더드림</span>
                  <div className="flex items-center gap-1 text-lg"><Check className="w-4 h-4" /> 정밀 평가</div>
                </div>
              </div>

              {/* Row 3: Negotiation */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors">
                <div className="md:hidden bg-[#F4F7F9] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3182A4]"></div>
                  합의 협상
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F4F7F9] items-center justify-center">합의 협상</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  <div className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> 가능</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  <div className="flex items-center gap-1"><X className="w-4 h-4 text-red-500" /> 대리권 없음</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#3182A4] bg-[#3182A4]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#3182A4] text-xs">더드림</span>
                  <div className="flex items-center gap-1 text-lg"><Check className="w-4 h-4" /> 3인 협업 진행</div>
                </div>
              </div>

              {/* Row 4: Method */}
              <div className="flex flex-col md:grid md:grid-cols-4 group hover:bg-slate-50 transition-colors">
                <div className="md:hidden bg-[#F4F7F9] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3182A4]"></div>
                  진행 방식
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F4F7F9] items-center justify-center">진행 방식</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  불필요한 소송
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  소송이 유리해도 합의만
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#3182A4] bg-[#3182A4]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#3182A4] text-xs">더드림</span>
                  <div className="text-lg">상황별 맞춤 진행</div>
                </div>
              </div>

            </div>
          </div>

          {/* Conclusion Box */}
          <div className="bg-[#1B3B5A] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                후유장해 평가·과실비율 분석은 <span className="text-yellow-400">손해사정사</span>의 영역이고,<br />
                합의 협상·중재 및 소송은 <span className="text-yellow-400">변호사</span>의 영역입니다.
              </h3>
              <p className="text-slate-300 mb-8">
                더드림은 어느 한쪽도 부족함 없이,<br />
                <strong className="text-white text-lg">가장 안전한 최선의 보상</strong>을 약속 드립니다.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-[#3182A4] hover:bg-[#256a88] text-white px-8 py-4 rounded-xl font-bold text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(49,130,164,0.5)] hover:shadow-[0_0_30px_rgba(49,130,164,0.7)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
              >
                후유장해 평가 상담하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#3182A4] rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1B3B5A] rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default DifferentiationSection;