"use client";
import * as React from "react";

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "Q1. 의뢰시점은 언제가 제일 좋나요?",
    answer: "착수금을 받지 않기 때문에 빠르면 빠를수록 좋습니다. 일찍 사건을 의뢰할수록 사고초기부터 적절한 대응이 가능하기 때문입니다."
  },
  {
    question: "Q2. 교통사고 가해자도 의뢰가 가능한가요?",
    answer: "네, 과실이 많은 경우에도 중상해에 해당한다면 후유장해의 평가를 통해 합의금을 산출하거나 자동차상해, 자기신체사고담보를 통한 처리도 고려해 볼 수 있습니다."
  },
  {
    question: "Q3. 치료 중인데 합의를 서둘러야 하나요?",
    answer: "아닙니다. 오히려 서두르면 안 됩니다. 치료가 완전히 종료되기 전에 합의하면, 이후 발생하는 후유장해에 대한 보상을 받지 못할 수 있습니다. 보험사가 빠른 합의를 종용하는 이유는, 치료 완료 후 후유장해 보상까지 포함하면 보상금이 커지기 때문입니다. 치료에 집중하시고, 합의 시점은 전문가와 상의 후 결정하시기를 권합니다."
  },
  {
    question: "Q4. 12대 중과실로 운전자보험 변호사비용 처리도 의뢰할 수 있나요?",
    answer: "운전자보험은 가해자의 방어비용을 목적으로 설계된 보험입니다. 변호사비용담보가 가입되어 있다면 형사사건처리를 보험금으로 대응할 수 있습니다."
  },
  {
    question: "Q5. 입원 중인데 방문 없이도 상담이 가능한가요?",
    answer: "네, 가능합니다. 전화 상담, 카카오톡 상담 등 비대면으로 모든 상담이 가능합니다. 입원 중이시거나 이동이 어려운 경우, 전화나 카카오톡으로 편하게 연락 주시면 됩니다. 서류 전달도 온라인으로 가능하며, 치료에만 집중하실 수 있도록 모든 절차를 대행합니다."
  },
  {
    question: "Q6. 출퇴근 사고로 산재 신청하면 회사에 불이익이 있나요?",
    answer: "아닙니다. 산재보험은 근로자의 법적 권리이며, 산재 신청을 이유로 근로자에게 불이익을 주는 것은 산업재해보상보험법에 의해 금지되어 있습니다. 출퇴근 재해는 2018년부터 법적으로 인정되고 있으며, 회사의 산재보험료에도 영향을 미치지 않는 경우가 많습니다. 구체적인 상황은 노무사가 상담 시 안내드립니다."
  },
  {
    question: "Q7. 변호사를 선임하면 얼마나 더 받을 수 있나요?",
    answer: "사건마다 다르지만, 더드림의 실제 사례를 기준으로 말씀드리면 다음과 같습니다. · 과실비율 최대 25%p 감산 (40% → 15%) · 합의금 최대 2배 증액 (5,000만원 → 1억) · 산재 동시 청구 시 추가 500만~1,000만원. 결과를 보장드리지는 않지만, 보험사 제시 금액 그대로 합의하는 것보다 전문가 분석을 먼저 받아보시는 것을 권합니다. 상담이니 부담 없이 문의해주세요."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F4F7F9]">
      <ScrollReveal>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#3182A4]/10 text-[#3182A4] text-xs font-bold tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-4">
              “내 상황도 가능할까?”<br />
              상담 전, <span className="text-[#3182A4] border-b-4 border-[#3182A4]/20">먼저 확인</span>하세요.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-[#3182A4] shadow-md' : 'border-slate-200 shadow-sm hover:border-[#3182A4]/50'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className={`font-bold text-lg md:text-xl pr-8 ${openIndex === index ? 'text-[#3182A4]' : 'text-slate-800'}`}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#3182A4] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-slate-100 mt-2">
                    <div className="flex gap-3">
                      <span className="font-bold text-[#3182A4] mt-1">A.</span>
                      <p className="whitespace-pre-line">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default FAQSection;