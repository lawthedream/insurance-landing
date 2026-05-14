"use client";
import * as React from "react";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    id: 1,
    title: "척추 압박골절 영구장해 인정",
    description: "보험사는 한시 장해를 주장했으나, 전문적인 의료 분석을 통해 영구 장해를 인정받아 합의금 3배 증액 성공.",
    category: "중상해/골절",
    amount: "1억 8,000만원",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "무단횡단 보행자 과실 비율 감경",
    description: "야간 무단횡단 사고로 과실 40%가 예상되었으나, 주변 CCTV 분석을 통해 운전자 과속을 입증하여 과실 10%로 방어.",
    category: "보행자 사고",
    amount: "9,500만원",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "개호비(간병비) 최대 인정 사례",
    description: "피해자의 상태를 면밀히 분석하여 향후 치료비와 개호비를 최대로 산정, 보험사의 제안보다 5배 높은 금액 수령.",
    category: "후유장해",
    amount: "4억 2,000만원",
    image: "https://picsum.photos/600/400?random=3"
  }
];

const SuccessCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* Text Section */}
        <div className="lg:w-1/3 space-y-6">
          <div className="flex items-center space-x-2 text-blue-600 font-bold">
            <Quote className="w-8 h-8 opacity-50" />
            <span>실제 승소 사례</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
            의뢰인의<br />
            <span className="text-blue-600">잃어버린 일상</span>을<br />
            되찾아 드렸습니다.
          </h2>
          <p className="text-slate-600 text-lg">
            교통사고 합의는 단순히 돈을 받는 것이 아닙니다.<br />
            피해자의 고통을 입증하고 정당한 권리를 찾는 과정입니다.
          </p>
          <div className="flex space-x-4 pt-4">
            <button onClick={prevSlide} className="p-4 rounded-full border border-slate-300 hover:bg-white hover:shadow-md transition-all">
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full border border-slate-300 hover:bg-white hover:shadow-md transition-all">
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Carousel Card Section */}
        <div className="lg:w-2/3 relative w-full">
          <div className="relative w-full h-[500px] md:h-[400px]">
            {cases.map((item, index) => {
              // Calculate position logic for smooth transitions (simplified for this demo)
              const isActive = index === activeIndex;

              if (!isActive) return null;

              return (
                <div key={item.id} className="absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row w-full h-full border border-slate-100">
                    <div className="md:w-1/2 h-48 md:h-full relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {item.category}
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-auto border-t border-slate-100 pt-6">
                        <p className="text-sm text-slate-500">최종 합의금</p>
                        <p className="text-3xl font-black text-blue-600">{item.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {cases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === activeIndex ? "bg-blue-600 w-8" : "bg-slate-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCarousel;