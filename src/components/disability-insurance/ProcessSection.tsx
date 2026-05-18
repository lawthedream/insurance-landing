"use client";
import * as React from "react";
import { Search, FileText, Handshake, Stethoscope, Scale, CircleDollarSign, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const steps = [
  {
    step: "STEP 1",
    title: "상담 / 서류검토",
    desc: "사건 파악 및 가능성 평가",
    sub: "비대면(전화/카카오톡) 가능합니다.",
    icon: Search,
  },
  {
    step: "STEP 2",
    title: "진단서 확보",
    desc: "약관 기준에 맞는 후유장해진단서 발급 지원",
    sub: "의무기록/증거 정비를 함께 진행합니다.",
    icon: FileText,
  },
  {
    step: "STEP 3",
    title: "보험사 청구 / 교섭",
    desc: "보험금 청구서 작성 및 보험사 협상",
    sub: "손해사정사가 주도합니다.",
    icon: Handshake,
  },
  {
    step: "STEP 4",
    title: "의료자문 대응",
    desc: "보험사 의료자문 결과 분석, 반박 의견서 제출",
    sub: "필요 시 제3의료기관 자문을 연계합니다.",
    icon: Stethoscope,
  },
  {
    step: "STEP 5",
    title: "소송 전환 (필요 시)",
    desc: "합의가 어려울 경우, 재의뢰 없이 변호사가 즉시 소송",
    sub: "이중 지출이 발생하지 않습니다.",
    icon: Scale,
  },
  {
    step: "STEP 6",
    title: "보험금 수령",
    desc: "최종 합의 또는 판결 후 보험금 수령",
    sub: "",
    icon: CircleDollarSign,
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F9F7] relative overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        >
          <source src="/testi-bg.mp4" type="video/mp4" />
        </video>
        {/* Light overlay to maintain text readability and blend with Warm Bone background */}
        <div className="absolute inset-0 bg-[#F9F9F7]/10 backdrop-blur-[1px]"></div>
      </div>
      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-bold tracking-widest mb-4">
              PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6 leading-tight">
              최초 상담부터 최종 해결까지,<br />
              <span className="text-[#C77E1E]">원팀·원스톱</span>으로 이렇게 진행됩니다.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-16 relative">
            {/* Connecting Line across steps on desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-[1px]"></div>

            <div className="space-y-8 md:space-y-0 relative">
              {steps.map((step, idx) => (
                <div key={idx} className={`relative flex items-center md:items-start flex-col md:flex-row ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"} mb-8 md:mb-12`}>

                  {/* Timeline Dot & Icon */}
                  <div className={`absolute left-0 md:left-1/2 md:-ml-8 flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#F9F9F7] bg-[#2D2D2D] text-white shadow-lg transition-transform hover:scale-110 z-10`}>
                    <step.icon className="w-6 h-6 text-[#C77E1E]" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
                      <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-slate-100 rotate-45 hidden md:block ${idx % 2 === 0 ? "-right-2 border-l-0 border-b-0" : "-left-2 border-r-0 border-t-0"}`}></div>

                      <span className="inline-block px-3 py-1 rounded text-xs font-bold bg-[#C77E1E]/20 text-[#2D2D2D] mb-3">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-[#333333] mb-2">{step.title}</h3>
                      <p className="text-[#2D2D2D] font-bold mb-2">
                        {step.desc}
                      </p>
                      {step.sub && (
                        <p className="text-slate-500 text-sm">
                          {step.sub}
                        </p>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-[#2D2D2D] hover:bg-[#111111] text-white px-10 py-6 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-lg transform hover:-translate-y-1"
            >
              내 사고 착수금 없이 시작하기
              <ArrowRight className="w-7 h-7 text-[#C77E1E]" />
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProcessSection;