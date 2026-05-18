"use client";
import * as React from "react";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: "K님",
    info: "골반골절 12주 + 후유장해 평가",
    quote: "보험사가 4,500만원을 제시했을 때, 그게 맞는 줄 알았어요.",
    content: "골반골절 수술 후 6개월이 지나도 보행이 불편했어요. 보험사에서 합의하자고 연락이 왔는데, 이 금액이 맞는 건지 판단이 안 섰습니다. 더드림에서 상담받고 나서야 후유장해 평가를 제대로 받지 않으면 수천만 원을 손해본다는 걸 알게 됐어요. 손해사정사님이 장해율을 정밀하게 산정해주셨고, 결국 8,000만원에 합의했습니다.",
    image: "/Testi1.png"
  },
  {
    id: 2,
    name: "L님",
    info: "시설 낙상사고 배상금 청구",
    quote: "CCTV가 없으면 입증이 안 된다고 했는데…",
    content: "매장에서 넘어져서 손목 골절 수술을 받았습니다. 매장 측에서는 '제 과실'이라며 책임을 회피했고, CCTV도 없어서 증거가 부족했어요. 더드림 변호사님이 현장 조사, 목격자 진술, 안전관리 기록 등을 종합해서 매장의 관리 소홀을 입증해주셨습니다. 결과적으로 배상책임보험으로 1,400만원을 받았고, 과정 내내 꼼꼼하게 진행해주셨습니다.",
    image: "/Testi4.png"
  },
  {
    id: 3,
    name: "P님",
    info: "작업 중 사고 근재보험 청구",
    quote: "근재보험이 있는지도 몰랐어요.",
    content: "작업 중 사고로 손을 다쳐서 수술했는데, 회사에서 치료비만 지원해줬어요. 더드림에서 근재보험 장해급여를 받을 수 있다고 알려주셨어요. 솔직히 근재보험이라는 게 있는지도 몰랐거든요. 노무사님이 업무관련성 입증부터 장해급여 신청까지 다 해주셔서 따로 알아볼 필요 없이 한 번에 진행됐습니다. 혼자 했으면 절대 몰랐을 거예요.",
    image: "/Testi3.png"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = React.useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative py-24 bg-[#F9F9F7] overflow-hidden">
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
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333]">
              더드림을 선택한 분들이 <span className="text-[#2D2D2D] border-b-4 border-[#C77E1E]/30">직접 전하는 이야기</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Card - Responsive Fixed Height */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row h-[750px] md:h-[500px]">
              <div className="md:w-2/5 bg-slate-100 relative flex-1 min-h-0 md:h-full">
                <img src={current.image} alt={current.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-[#1A1A1A]/40"></div>
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-[#C77E1E] text-[#C77E1E]" />)}
                  </div>
                  <h3 className="text-2xl font-bold">{current.name}</h3>
                  <p className="text-sm opacity-90">{current.info}</p>
                </div>
              </div>

              <div className="md:w-3/5 p-6 md:p-12 flex flex-col justify-center bg-white relative h-auto md:h-full shrink-0 md:shrink">
                {/* Decoration */}
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#2D2D2D]/10 fill-current mb-4 md:mb-6 absolute top-6 right-6 md:static flex-shrink-0" />

                <h4 className="text-lg md:text-xl font-bold text-[#333333] mb-4 md:mb-6 leading-relaxed pr-12 md:pr-0">
                  <span className="quote-font">"{current.quote}"</span>
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base flex-1">
                  {current.content}
                </p>

                <div className="flex items-center justify-between mt-auto w-full">
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-[#2D2D2D] w-6' : 'bg-slate-300'}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevSlide} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
                      <ChevronLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <button onClick={nextSlide} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
                      <ChevronRight className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center bg-[#2D2D2D] hover:bg-[#111111] text-white px-6 md:px-10 py-5 rounded-xl font-bold text-base md:text-xl transition-all shadow-[0_0_20px_rgba(44,62,80,0.5)] hover:shadow-[0_0_30px_rgba(44,62,80,0.7)] transform hover:-translate-y-1 whitespace-nowrap"
            >
              내 사고 상담 신청하기
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TestimonialsSection;