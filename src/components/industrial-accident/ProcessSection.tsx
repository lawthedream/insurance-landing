"use client";
import * as React from "react";
import { Phone, FileText, Coins, Activity, Gavel, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "상담 접수",
    subtitle: "전화·카카오톡·방문 상담",
    details: [
      "사고 상황 파악 및 산재 가능성 평가",
      "전문가 직접 상담",
      "비대면(전화/카카오톡) 가능"
    ]
  },
  {
    id: 2,
    icon: FileText,
    title: "산재 신청",
    subtitle: "노무사가 산재 신청 서류 작성 및 접수",
    details: [
      "사업주 비협조 시 증거 확보 전략 수립",
      "업무상 재해 인정 자료 정비",
      "직업병 해당 시 직업병 연구원 연계"
    ]
  },
  {
    id: 3,
    icon: Coins,
    title: "요양·휴업급여 확보",
    subtitle: "산재 승인 후 급여 수령 관리",
    details: [
      "요양급여: 치료비 전액 지원",
      "휴업급여: 월급의 70% 보전",
      "치료에만 집중할 수 있도록 절차 대행"
    ]
  },
  {
    id: 4,
    icon: Activity,
    title: "장해등급 판정 대응",
    subtitle: "손해사정사가 장해를 정밀 평가",
    details: [
      "최적 장해등급 확보",
      "등급 상향 근거 마련",
      "민영보험 동시 청구 가능 여부 확인"
    ]
  },
  {
    id: 5,
    icon: Gavel,
    title: "불승인/등급 이의 대응 (필요 시)",
    subtitle: "심사청구·재심사청구·행정소송",
    details: [
      "재의뢰 없이 변호사가 즉시 소송 전환",
      "이중 지출이 발생하지 않습니다"
    ]
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F0FDF4]">
      <ScrollReveal>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 px-4">
            <span className="inline-block py-1 px-3 rounded bg-[#0D9488]/10 text-[#0D9488] text-sm font-bold tracking-widest mb-4">
              PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6 leading-tight">
              치료에만 집중하세요.<br />
              산재 절차부터 보상금 수령까지,<br />
              <span className="text-[#0D9488]">더드림이 해결</span>합니다.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Mobile View: Vertical Stack */}
            <div className="md:hidden space-y-8 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-emerald-100"></div>
              {steps.map((step, idx) => (
                <div key={step.id} className="relative flex gap-6 pl-2">
                  <div className="w-8 h-8 rounded-full bg-[#0D9488] text-white flex items-center justify-center font-bold z-10 flex-shrink-0 mt-1 shadow-[0_0_0_4px_white]">
                    {idx + 1}
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-[#0D9488]" />
                      <h3 className="text-xl font-bold text-[#333333]">{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 font-medium mb-4">{step.subtitle}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <div className="w-1 h-1 bg-emerald-300 rounded-full mt-2"></div>
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
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 h-full hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0D9488] flex items-center justify-center mb-4 group-hover:bg-[#064E3B] group-hover:text-white transition-colors">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-[#0D9488] mb-2 px-1">STEP 0{step.id}</div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2 px-1">{step.title}</h3>
                    <div className="min-h-[3.5em] mb-4 px-1">
                      <p className="text-sm text-slate-500 font-bold leading-relaxed">{step.subtitle}</p>
                    </div>
                    <ul className="space-y-2 flex-grow px-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-[13px] text-slate-600 flex items-start gap-1.5 leading-relaxed">
                          <div className="w-1 h-1 bg-emerald-200 rounded-full mt-1.5 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="absolute top-12 -right-4 transform translate-x-1/2 z-10 hidden lg:block text-emerald-100">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 px-4">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center bg-[#064E3B] hover:bg-[#043327] text-white px-8 md:px-12 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(6,78,59,0.3)] hover:shadow-[0_0_30px_rgba(6,78,59,0.5)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
            >
              내 사건 상담 신청하기
              <ArrowRight className="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProcessSection;
