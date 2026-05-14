"use client";
import * as React from "react";
import { ArrowRight, FileText, Search, Scale } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const steps = [
  {
    step: "1단계",
    title: "진단서에서 막혔을 때",
    icon: FileText,
    desc: "손해사정사가 대응합니다. 약관 기준에 맞는 진단서 확보를 지원하여, 청구 자체가 무산되는 것을 막습니다."
  },
  {
    step: "2단계",
    title: "보험사 심사에서 막혔을 때",
    icon: Search,
    desc: "보험사 출신 손해사정사가 의료자문 결과를 분석하고, 객관적 증거로 반박 논리를 구성합니다."
  },
  {
    step: "3단계",
    title: "소송이 필요할 때",
    icon: Scale,
    desc: "재의뢰 없이 변호사가 바로 대응합니다. 다른 곳에 다시 맡길 필요 없이, 더드림이 원팀으로 끝까지 책임집니다."
  }
];

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="relative py-24 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.2] blur-[2px]"
        style={{
          backgroundImage: 'url("/solution_2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">

          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded bg-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-bold tracking-widest mb-4">
              SOLUTION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-8 leading-tight">
              <span className="text-[#C77E1E]">보험사 출신</span> 손해사정사와 변호사가<br />
              <span className="text-[#C77E1E]">원팀·원스톱</span>으로 막힘 없이 해결합니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#F9F9F7] rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
                <div className="w-16 h-16 bg-[#2D2D2D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2D2D2D] transition-colors">
                  <step.icon className="w-8 h-8 text-[#2D2D2D] group-hover:text-[#C77E1E] transition-colors" />
                </div>
                <div className="text-[#C77E1E] font-bold text-sm mb-2">{step.step}</div>
                <h3 className="text-2xl font-bold text-[#333333] mb-4">{step.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-[#2D2D2D] hover:bg-[#111111] text-white px-10 py-6 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_10px_30px_rgba(44,62,80,0.3)] hover:shadow-[0_15px_40px_rgba(44,62,80,0.5)] transform hover:-translate-y-1"
            >
              내 상황 바로 확인하기
              <ArrowRight className="w-7 h-7 text-[#C77E1E]" />
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default SolutionSection;