import * as React from "react";

import { Phone, FileSearch, FileSignature, Gavel, Coins, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "상담 접수",
    subtitle: "전화·카카오톡·방문 상담",
    details: [
      "사고 상황 및 후유증 파악",
      "장해평가 가능 범위 안내",
      "손해사정사 직접상담",
      "비대면(전화/카카오톡) 가능"
    ]
  },
  {
    id: 2,
    icon: FileSearch,
    title: "사건 분석",
    subtitle: "변호사·손해사정사·노무사 사건 분석",
    details: [
      "후유장해 정밀 평가",
      "기여도 감액 반박 근거 검토",
      "장해 인지 시점 등 시효 리스크 확인",
      "과실·책임·업무관련성 등 사고 유형별 쟁점 분석"
    ]
  },
  {
    id: 3,
    icon: FileSignature,
    title: "장해평가 및 청구",
    subtitle: "장해진단서 발급 지원 및 보험금·배상금 청구",
    details: [
      "의료기록 검토 및 장해진단서 발급",
      "보험사 청구 또는 배상금 청구 진행",
      "증거 확보 및 의견서 작성",
      "근재보험 장해급여 신청"
    ]
  },
  {
    id: 4,
    icon: Gavel,
    title: "협상·합의·소송",
    subtitle: "보험사와의 합의 협상 또는 법원 소송 진행",
    details: [
      "법원 기준 예상판결금액 산정 후 협상",
      "기여도 감액 반박 및 장해율 정당성 입증",
      "합의 불발 시 재의뢰 없이 소송 전환",
      "보험사 조사/재진단 요구 대응"
    ]
  },
  {
    id: 5,
    icon: Coins,
    title: "보상 완료",
    subtitle: "최종 보상금 수령 및 사건 종결",
    details: [
      "보험금·배상금·장해급여 수령",
      "이중청구 경로 최종 확인",
      "추가 치료·시효 관리 등 사후 관리 안내"
    ]
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F9F7]">
      <ScrollReveal>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/10 text-[#2C3E50] text-sm font-bold tracking-widest mb-4">
              PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-4 leading-tight">
              장해평가부터 보험금 수령까지, <br />
              <span className="text-[#2C3E50] border-b-4 border-[#EDC967]/30">더드림이 해결</span>합니다.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Mobile View: Vertical Stack */}
            <div className="md:hidden space-y-8 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200"></div>
              {steps.map((step, idx) => (
                <div key={step.id} className="relative flex gap-6 pl-2">
                  <div className="w-8 h-8 rounded-full bg-[#2C3E50] text-[#EDC967] flex items-center justify-center font-bold z-10 flex-shrink-0 mt-1 shadow-[0_0_0_4px_white]">
                    {idx + 1}
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-[#2C3E50]" />
                      <h3 className="text-xl font-bold text-[#333333]">{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 font-medium mb-4">{step.subtitle}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <div className="w-1 h-1 bg-slate-400 rounded-full mt-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View: Grid Steps */}
            <div className="hidden md:grid grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <div key={step.id} className="relative group">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[#F9F9F7] text-[#2C3E50] flex items-center justify-center mb-4 group-hover:bg-[#2C3E50] group-hover:text-[#EDC967] transition-colors">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-[#2C3E50] mb-2">STEP 0{step.id}</div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2">{step.title}</h3>
                    <div className="min-h-[3.5em] mb-4">
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.subtitle}</p>
                    </div>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-1.5 leading-relaxed">
                          <div className="w-1 h-1 bg-slate-300 rounded-full mt-1.5 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="absolute top-12 -right-4 transform translate-x-1/2 z-10 hidden lg:block text-slate-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center bg-[#2C3E50] hover:bg-[#1a2530] text-white px-8 py-5 rounded-xl font-bold text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(44,62,80,0.5)] hover:shadow-[0_0_30px_rgba(44,62,80,0.7)] transform hover:-translate-y-1 whitespace-nowrap"
            >
              내 사고 상담 신청하기
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProcessSection;