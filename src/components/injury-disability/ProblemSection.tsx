"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { HelpCircle, AlertCircle, CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const problems = [
  {
    title: "교통사고 후유장해",
    items: [
      "과실비율 30%가 맞는 건가요? 어떻게 정해지는지 모르겠어요",
      "자영업자인데 소득을 어떻게 입증해야 하나요?",
      "장해율 5%와 10%, 차이가 뭔가요? 어떻게 정해지나요?",
      "과실·장해·소득이 복잡하게 얽혀서 혼자 판단이 안 돼요"
    ]
  },
  {
    title: "배상책임 (낙상·시설사고)",
    items: [
      "매장 과실인가요, 제 과실인가요? 누가 책임져야 하나요?",
      "CCTV가 없으면 입증이 안 된다던데 정말인가요?",
      "관리주체가 누군지 모르겠어요. 건물주? 임차인? 관리회사?",
      "책임·증거·인과관계 입증이 너무 복잡해서 포기하고 싶어요"
    ]
  },
  {
    title: "근재보험 (기업보험)",
    items: [
      "업무관련성은 어떻게 인정받나요? 뭘 준비해야 하나요?",
      "산재랑 민사 동시 청구 가능한가요? 이중으로 받을 수 있나요?",
      "회사에 근재보험이 있는지도 몰랐어요",
      "업무관련성·장해평가·이중청구 제도가 너무 어려워요"
    ]
  }
];

const ProblemSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % problems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % problems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + problems.length) % problems.length);

  return (
    <section className="py-24 bg-[#F9F9F7] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C3E50] rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">

          {/* Header Area */}
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/10 text-[#2C3E50] text-sm font-bold tracking-widest mb-4">
              PROBLEM
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6">
              혹시 혼자 <span className="relative inline-block">
                끙끙 앓고
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200/50 -z-10 rounded-sm"></span>
              </span> 계신가요?
            </h2>
          </div>

          {/* Carousel Area */}
          <div className="relative max-w-3xl mx-auto mb-16">
            <div className="overflow-hidden rounded-3xl shadow-xl bg-white border border-slate-100">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {problems.map((prob, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-[#1B3B5A] mb-8 flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center text-[#2C3E50]">
                        <HelpCircle className="w-6 h-6" />
                      </div>
                      {prob.title}
                    </h3>
                    <ul className="space-y-6">
                      {prob.items.map((text, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                          <CheckSquare className="w-6 h-6 text-[#2C3E50] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-slate-600 text-lg md:text-xl leading-snug">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all z-20 hidden md:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all z-20 hidden md:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {problems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? 'bg-[#2C3E50] w-8' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="max-w-4xl mx-auto text-center bg-[#1B3B5A] text-white rounded-3xl p-10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2C3E50] rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <p className="text-lg md:text-xl font-medium mb-4 relative z-10">
              교통사고·배상책임·근재보험 모두 <br className="hidden md:block" />
              <strong className="text-[#EDC967]">복잡한 제도, 어려운 법률, 의학적 판단</strong>이 얽혀있어 <br className="hidden md:block" />
              혼자 대처하기 어렵습니다.
            </p>
            <p className="text-xl md:text-2xl font-black relative z-10">
              전문가의 맞춤형 조언이 <span className="text-[#EDC967]">반드시</span> 필요합니다.
            </p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProblemSection;