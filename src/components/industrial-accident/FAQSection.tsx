"use client";
import * as React from "react";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const faqs = [
  {
    question: "Q1. 비용은 얼마인가요?",
    answer: "성공보수 중심으로 운영됩니다. 별도의 상담비용 없이 상담이 가능하며, 구체적인 비용 구조는 상담 시 투명하게 안내드립니다."
  },
  {
    question: "Q2. 내 경우에도 산재가 되나요?",
    answer: "상담을 통해 산재 가능성을 먼저 확인합니다. 어려운 경우에는 솔직히 말씀드립니다. 가능성 확인에는 비용이 들지 않습니다."
  },
  {
    question: "Q3. 산재 신청하면 회사에서 불이익을 주지 않나요?",
    answer: "산재 신청을 이유로 근로자에게 불이익을 주는 것은 산업재해보상보험법에 의해 금지되어 있습니다. 사업주가 압박하는 경우에도 법적으로 보호받을 수 있으며, 필요 시 노무사가 대응합니다."
  },
  {
    question: "Q4. 불승인 통보를 받았는데 아직 대응할 수 있나요?",
    answer: "불승인 결정 후 90일 이내에 심사청구가 가능합니다. 기한이 지나지 않았다면 아직 기회가 있습니다. 심사청구 → 재심사청구 → 행정소송까지 3단계 이의제기 절차를 통해 역전할 수 있습니다."
  },
  {
    question: "Q5. 장해등급이 낮게 나왔는데 바꿀 수 있나요?",
    answer: "가능합니다. 장해등급 재판정을 통해 등급 상향에 성공한 사례가 있습니다. 등급 1단계 차이가 일시금과 연금의 차이, 수천만원의 차이를 만들기 때문에 반드시 검토해보시기 바랍니다."
  },
  {
    question: "Q6. 변호사와 노무사 중 어디에 맡겨야 하나요?",
    answer: "더드림에는 둘 다 있습니다. 행정소송이 필요하면 변호사가, 산재 신청 단계에서는 노무사가 대응합니다. 어디에 맡겨야 할지 고민하실 필요 없이, 상담 시 최적의 방향을 안내드립니다."
  },
  {
    question: "Q7. 비대면으로도 진행할 수 있나요?",
    answer: "네, 가능합니다. 전화 상담, 카카오톡 상담 등 비대면으로 모든 상담이 가능합니다. 서류 전달도 온라인으로 가능하며, 치료에만 집중하실 수 있도록 모든 절차를 대행합니다."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F0FDF4]">
      <ScrollReveal>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-emerald-100 text-[#0D9488] text-xs font-bold tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-4 text-pretty">
              “내 상황도 가능할까?”<br />
              상담 전, <span className="text-[#0D9488] border-b-4 border-emerald-200">먼저 확인</span>하세요.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl border transition-all duration-300 ${openIndex === index ? 'border-[#0D9488] shadow-lg' : 'border-emerald-100 shadow-sm hover:border-emerald-300'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className={`font-bold text-lg md:text-xl pr-8 ${openIndex === index ? 'text-[#0D9488]' : 'text-slate-800'}`}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#0D9488] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-emerald-50 mt-2">
                    <div className="flex gap-3">
                      <span className="font-bold text-[#0D9488] mt-1">A.</span>
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
