"use client";
import * as React from "react";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: "K님",
    info: "과실비율 절감 + 후유장해 인정",
    quote: "처음 제시했던 합의금에 9배로 합의했습니다!",
    content: "밤에 무단횡단으로 경골고평부 골절, 후방 십자인대파열로 크게 다쳤는데 보험사가 과실이 많다고 터무니 없는 금액을 제시했고 더드림에 의뢰하게 되었습니다. 적극적으로 보험사와 싸워주셔서 과실도 50%에서 15%로 줄었고, 후유장해도 인정받아 처음 A화재에서 제시했던 550만원에서 5,180만원으로 최종 합의하였습니다. 다치고부터 최종 합의까지 14개월이 걸렸는데 좀 더 일찍 의뢰했다면 마음고생 덜했을텐데 하고 후회하는 마음이 들었습니다. 잘 처리해 주셔서 정말 감사드립니다.",
    image: "/Testi1.png"
  },
  {
    id: 2,
    name: "L님",
    info: "손해사정법인 의뢰 후 재의뢰",
    quote: "더드림에 재의뢰 해서 만족합니다.",
    content: "기존에 의뢰했던 손해사정법인이 사건을 진행하면서 중간진행과정이나 설명도 없이 통보식으로 금액을 이야기 하고, 무조건 내말이 맞다는 식으로 사건을 진행해서 기존계약을 파기하고 더드림에 재의뢰한 사람입니다. 사건을 진행하면서 상대보험사의 의도나 우리쪽의 방향성, 선택지에 대해서 손해사정사님이 자세히 설명해 주셨고, 선택에 대한 장단점, 실익에 대해서도 설명해 주셔서 같이 진행하는 느낌으로 신뢰감 있게 사건처리를 했습니다. 물론 최종 합의금도 납득할 만한 수준이었구요. 또 사고가 있으면 안되겠지만 혹시나 주변에 교통사고가 난 사람이 있다면 더드림을 추천드리겠습니다.",
    image: "/Testi2.png"
  },
  {
    id: 3,
    name: "P님",
    info: "다수의 보험처리 한 번에",
    quote: "꼼꼼하게 사고처리해주셔서 감사합니다.",
    content: "이번에 태어나서 처음으로 큰 교통사고를 처리하면서 많은 것을 배웠습니다. 인터넷으로 많이 알아보고 상담도 많이 받아보고 그 중에서 가장 마음에 들었던 더드림에 사건처리를 위임했습니다. 제가 나이가 어리고 경험도 없어서 아버지 교통사고 처리에 애를 먹었는데 자동차보험 합의뿐만아니라 단체보험, 개인보험, 지자체에서 가입한 보험까지 꼼꼼하게 챙겨주셔서 정말 감사드립니다.",
    image: "/Testi3.png"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.2] blur-[4px]"
        style={{
          backgroundImage: 'url("/testimonial_1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#3182A4]/10 text-[#3182A4] text-sm font-bold tracking-widest mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333]">
              더드림을 선택한 분들이 <span className="text-[#3182A4]">직접 전하는 이야기</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Card - Responsive Fixed Height */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row h-[750px] md:h-[500px]">
              <div className="md:w-2/5 bg-slate-100 relative flex-1 min-h-0 md:h-full">
                <img src={current.image} alt={current.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-[#1B3B5A]/40"></div>
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <h3 className="text-2xl font-bold">{current.name}</h3>
                  <p className="text-sm opacity-90">{current.info}</p>
                </div>
              </div>

              <div className="md:w-3/5 p-6 md:p-12 flex flex-col justify-center bg-white relative h-auto md:h-full shrink-0 md:shrink">
                {/* Decoration */}
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#3182A4]/20 fill-current mb-4 md:mb-6 absolute top-6 right-6 md:static flex-shrink-0" />

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
                        className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-[#3182A4] w-6' : 'bg-slate-300'}`}
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
              className="inline-flex items-center justify-center bg-[#1B3B5A] hover:bg-[#152e46] text-white px-6 md:px-10 py-5 rounded-xl font-bold text-base md:text-xl transition-all shadow-[0_0_20px_rgba(27,59,90,0.5)] hover:shadow-[0_0_30px_rgba(27,59,90,0.7)] transform hover:-translate-y-1 whitespace-nowrap"
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