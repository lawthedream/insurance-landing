import * as React from "react";

import { HelpCircle, AlertCircle, CheckSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F7F9] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3182A4] rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">

          {/* Header Area */}
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#3182A4]/10 text-[#3182A4] text-sm font-bold tracking-widest mb-4">
              PROBLEM
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6">
              혹시 혼자 <span className="relative inline-block">
                끙끙 앓고
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200/50 -z-10 rounded-sm"></span>
              </span> 계신가요?
            </h2>
            <p className="text-slate-600 text-lg">
              교통사고는 초기 대응이 가장 중요합니다. 잘못된 판단은 돌이킬 수 없습니다.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              "이 금액에 합의할지, 소송까지 가야할지 모르겠어요",
              "골절 이상 중상해를 입어서 후유장해 치료비가 걱정됩니다",
              "손해사정법인 가면 소송 시 재의뢰해야 한다던데...",
              "제 경우에 산재가 되는 건지, 불이익은 없는 건지 모르겠어요"
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#F4F7F9] rounded-full flex items-center justify-center text-[#3182A4] mt-0.5">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium text-[#333333] leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion / Emphasis */}
          <div className="max-w-3xl mx-auto text-center bg-white border-2 border-[#3182A4]/20 rounded-3xl p-8 md:p-10 shadow-lg relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#3182A4] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
              <AlertCircle className="w-7 h-7" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 mt-2">
              큰 사고일수록 복잡하며, <br className="md:hidden" />혼자 판단하기 어렵습니다.
            </h3>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              각 분야 전문가의 조언이 <strong className="text-[#3182A4] text-2xl underline decoration-wavy underline-offset-4 decoration-[#3182A4]/30">반드시</strong> 필요합니다.
            </p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProblemSection;