import * as React from "react";

import { Phone, FileSearch, FileSignature, Gavel, Coins, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "상담 접수",
    subtitle: "전화·카카오톡·방문 상담",
    details: [
      "사고 상황 파악 및 보상 가능 범위 안내",
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
      "후유장해 평가·과실비율 분석",
      "손해배상금 정밀 산정",
      "산재 동시 청구 가능 여부 확인"
    ]
  },
  {
    id: 3,
    icon: FileSignature,
    title: "보험 및 산재 접수",
    subtitle: "교통사고 보상 합의 및 산재(해당 시) 진행",
    details: [
      "보험사 합의 협상 또는 소송 준비",
      "산재 요양급여·휴업급여 청구"
    ]
  },
  {
    id: 4,
    icon: Gavel,
    title: "협상·합의·소송",
    subtitle: "보험사와의 합의 협상 또는 법원 소송 진행",
    details: [
      "법원 기준 예상판결금액 산정 후 협상",
      "합의 불발 시 소송 전환",
      "형사합의 병행 (해당 시)"
    ]
  },
  {
    id: 5,
    icon: Coins,
    title: "보상 완료",
    subtitle: "최종 보상금 수령 및 사건 종결",
    details: [
      "합의금·판결금 수령",
      "산재 급여 수령 확인",
      "사후 관리 안내 (개인보험 후유장해, 산재처리 시 추가분 청구 등)"
    ]
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F7F9]">
      <ScrollReveal>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#3182A4]/10 text-[#3182A4] text-sm font-bold tracking-widest mb-4">
              PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-4 leading-tight">
              치료에만 집중하세요.<br />
              보험사 대응부터 합의까지, <span className="text-[#3182A4]">더드림이 해결</span>합니다.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Mobile View: Vertical Stack */}
            <div className="md:hidden space-y-8 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200"></div>
              {steps.map((step, idx) => (
                <div key={step.id} className="relative flex gap-6 pl-2">
                  <div className="w-8 h-8 rounded-full bg-[#3182A4] text-white flex items-center justify-center font-bold z-10 flex-shrink-0 mt-1 shadow-[0_0_0_4px_white]">
                    {idx + 1}
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-[#3182A4]" />
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
                    <div className="w-12 h-12 rounded-xl bg-[#F4F7F9] text-[#3182A4] flex items-center justify-center mb-4 group-hover:bg-[#1B3B5A] group-hover:text-white transition-colors">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-[#3182A4] mb-2">STEP 0{step.id}</div>
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
              className="inline-flex items-center justify-center bg-[#1B3B5A] hover:bg-[#152e46] text-white px-8 py-5 rounded-xl font-bold text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(27,59,90,0.5)] hover:shadow-[0_0_30px_rgba(27,59,90,0.7)] transform hover:-translate-y-1 whitespace-nowrap"
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