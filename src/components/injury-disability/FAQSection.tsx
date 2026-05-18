"use client";
import * as React from "react";

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const faqs = [
  {
    question: "Q1. 후유장해는 언제 청구할 수 있나요?",
    answer: "치료가 종결되고 증상이 고정된 후에 청구할 수 있습니다. 일반적으로 사고 후 6개월~1년 이상 치료했음에도 증상이 남아있는 경우 후유장해로 인정받을 가능성이 높습니다. 단, 보험 종류에 따라 청구 시효가 있으므로(교통사고·배상책임은 180일 규정 등), 치료 중이더라도 미리 전문가 상담을 받아보시는 것이 안전합니다."
  },
  {
    question: "Q2. 후유장해 보험금은 얼마나 받을 수 있나요?",
    answer: "장해율(%)에 따라 달라집니다. 예를 들어, 가입금액 1억원 보험에서 장해율 10%로 인정받으면 1,000만원을 받습니다. 문제는 장해율을 몇 %로 인정받느냐가 핵심입니다. 같은 증상이라도 평가 방법에 따라 5%가 될 수도, 15%가 될 수도 있습니다. 더드림은 손해사정사가 의학적 근거를 바탕으로 장해율을 정밀하게 산정하여, 정당한 보상을 확보합니다."
  },
  {
    question: "Q3. “기존 질환 영향으로 30% 감액”한다는데 정당한가요?",
    answer: "반드시 정당하지는 않습니다. 보험사는 기존 질환(기왕증)이 있으면 '외상기여도'를 이유로 30~50% 감액하는 경우가 많습니다. 하지만 의학적으로 기존 질환이 이번 사고와 무관하거나, 기여도가 과도하게 산정된 경우 반박할 수 있습니다. 더드림은 의무기록을 정밀 검토하여 기여도 감액의 정당성을 판단하고, 부당한 경우 의학적 근거로 반박합니다."
  },
  {
    question: "Q4. 치료 중인데 합의를 서둘러야 하나요?",
    answer: "아닙니다. 오히려 서두르면 안 됩니다. 치료가 완전히 종료되고 증상이 고정되기 전에 청구하면, 장해율이 낮게 산정되거나 인정받지 못할 수 있습니다. 다만, 시효 문제가 있을 수 있으므로 (교통사고·배상책임은 장해 인지 후 180일 규정 등), 치료 중이더라도 전문가와 상의하여 시효 리스크를 사전에 관리하시길 권합니다."
  },
  {
    question: "Q5. 이미 보험사와 합의 진행 중인데 늦지 않았나요?",
    answer: "합의서 서명 전까지는 변경 가능합니다. 서명 전이라면 전문가 상담을 받아보시길 권장합니다. 보험사 제시 장해율·금액이 적정한지, 기여도 감액이 정당한지 등을 확인해드립니다."
  },
  {
    question: "Q6. 입원 중인데 방문 없이도 상담이 가능한가요?",
    answer: "네, 가능합니다. 전화 상담, 카카오톡 상담 등 비대면으로 모든 상담이 가능합니다. 입원 중이시거나 이동이 어려운 경우, 전화나 카카오톡으로 편하게 연락 주시면 됩니다. 서류 전달도 온라인으로 가능하며, 치료에만 집중하실 수 있도록 모든 절차를 대행합니다."
  },
  {
    question: "Q7. 변호사·손해사정사 비용은 얼마인가요?",
    answer: "사건의 유형과 복잡도에 따라 달라지며, 초기 상담 시 투명하게 안내드립니다. 운전자보험에 '변호사 선임 특약'이 포함되어 있다면 변호사 비용의 상당 부분을 보험으로 충당할 수 있습니다. 가입하신 보험 약관을 확인해보시거나, 상담 시 함께 검토해드립니다."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F9F9F7]">
      <ScrollReveal>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/10 text-[#2C3E50] text-xs font-bold tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-4">
              “내 상황도 가능할까?”<br />
              상담 전, <span className="text-[#2C3E50] border-b-4 border-[#EDC967]/30">먼저 확인</span>하세요.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-[#2C3E50] shadow-md' : 'border-slate-200 shadow-sm hover:border-[#2C3E50]/50'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className={`font-bold text-lg md:text-xl pr-8 ${openIndex === index ? 'text-[#2C3E50]' : 'text-slate-800'}`}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#2C3E50] flex-shrink-0" />
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
                      <span className="font-bold text-[#2C3E50] mt-1">A.</span>
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