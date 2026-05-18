"use client";
import * as React from "react";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const faqs = [
  {
    q: "비용은 얼마인가요?",
    a: "성공보수 중심으로 운영됩니다. 초기 상담과 서류검토는 착수금이 없으며, 구체적인 비용 구조는 상담 시 투명하게 안내드립니다."
  },
  {
    q: "내 경우에도 가능한가요?",
    a: "서류검토를 통해 가능성을 먼저 확인합니다. 어려운 경우에는 솔직히 말씀드립니다. 가능성 확인에는 비용이 들지 않습니다."
  },
  {
    q: "기왕증이 있으면 무조건 감액되나요?",
    a: "아닙니다. 가입 시점에 따라 감액 주장 자체가 불가능한 상품이 있습니다. 약관 확인 없이 보험사의 감액을 그대로 받아들이지 마시고, 먼저 확인해보시기 바랍니다."
  },
  {
    q: "오래된 사고도 가능한가요?",
    a: "가능합니다. 13년 전 사고에 대해 후유장해보험금을 성공적으로 청구한 사례가 있습니다. 시효와 증거 확보 가능 여부를 상담 시 확인해드립니다."
  },
  {
    q: "손해사정사와 변호사 중 어디에 맡겨야 하나요?",
    a: "더드림에는 둘 다 있습니다. 손해사정 단계에서는 손해사정사가, 소송이 필요하면 변호사가 대응합니다. 어디에 맡겨야 할지 고민하실 필요 없이, 상담 시 최적의 방향을 안내드립니다."
  },
  {
    q: "보험사에 이의제기하면 불이익이 있나요?",
    a: "없습니다. 보험금 청구와 이의제기는 정당한 권리 행사입니다. 금융감독원도 의료자문 결과에 대한 이의제기 방법을 보험사가 안내하도록 제도를 강화하고 있습니다."
  },
  {
    q: "비대면으로도 진행할 수 있나요?",
    a: "네. 전화, 카카오톡, 온라인 서류 접수로 모든 절차가 비대면으로 가능합니다."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <ScrollReveal>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2D2D2D]/5 rounded-2xl mb-6">
              <MessageCircleQuestion className="w-8 h-8 text-[#2D2D2D]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333]">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${isOpen
                    ? 'border-[#2D2D2D] shadow-md bg-white'
                    : 'border-slate-200 bg-[#F9F9F7] hover:border-slate-300 hover:bg-white'
                    }`}
                >
                  <button
                    className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center gap-4 focus:outline-none"
                    onClick={() => toggleFAQ(idx)}
                  >
                    <span className={`text-lg md:text-xl font-bold ${isOpen ? 'text-[#2D2D2D]' : 'text-[#333333]'}`}>
                      <span className="text-[#C77E1E] mr-3">Q.</span>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${isOpen ? 'bg-[#2D2D2D] text-[#C77E1E]' : 'bg-white text-slate-400 border border-slate-200'}`}>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-slate-100 mt-2">
                      <div className="flex gap-3">
                        <span className="text-[#2D2D2D] font-black text-xl leading-relaxed">A.</span>
                        <p className="text-slate-600 leading-relaxed pt-1 whitespace-pre-line">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default FAQSection;