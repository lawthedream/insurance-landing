"use client";
import * as React from "react";
import { CheckSquare } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const problems = [
  "상해나 고지의무 관련 분쟁이 예상된다",
  "당연히 지급될 줄 알고 청구했는데 현장심사를 나온다고 한다",
  "보험사에서 청구내용에 대해 의료자문을 요청한다",
  "기왕증을 이유로 터무니 없는 감액을 주장한다"
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F9F7] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D2D2D] rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-start">

            {/* 왼쪽: 체크리스트 */}
            <div className="md:pr-10">
              <span className="inline-block py-1 px-3 rounded bg-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-bold tracking-widest mb-4">
                PROBLEM
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-8 leading-tight tracking-tight">
                혹시 이런<br />
                <span className="relative inline-block">
                  상황이신가요?
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#C77E1E]/30 -z-10 rounded-sm"></span>
                </span>
              </h2>

              <ul className="flex flex-col gap-4">
                {problems.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckSquare className="w-6 h-6 text-[#C77E1E] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-800 font-bold text-lg leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 오른쪽: 설득 메시지 */}
            <div className="md:border-l border-slate-300 md:pl-10 pt-8 md:pt-0 border-t md:border-t-0 mt-8 md:mt-0">
              <p className="text-xl md:text-2xl font-black mb-4 text-[#C77E1E] leading-snug">
                후유장해보험금 분쟁은<br />절대 혼자 대처할 수 없습니다.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                진단서에서 막히고, 보험사 심사에서 막히고,<br />소송에서 또 한 번 막히고.<br />
                단계마다 거절당하는 이유도, 해결책도 다 다르기 때문입니다.
              </p>
              <div className="border-t border-slate-300 pt-6">
                <p className="text-xl md:text-2xl font-black mb-4 text-[#C77E1E] leading-snug">
                  그렇다고 아무나에게 맡길 수도 없습니다.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  전문가에게 맡겼다고 안심했는데 <br />
                  진행상황을 전혀 알려주지 않고 <strong className="font-bold text-[#333333] underline decoration-[#C77E1E]/40 underline-offset-4">통보식으로 사건종결.</strong><br />
                  시간과 돈을 들여 또 다른 전문가를 찾아야 합니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProblemSection;