"use client";
import * as React from "react";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: "김*희님",
    info: "재해근로자 배우자 | 뇌경색 산재 승인",
    quote: "치료비 걱정에 잠을 못 이루던 날들이 끝났습니다.",
    content: "23년 11월, 남편이 회사에서 뇌경색으로 쓰러져 병원에 입원하게 되었습니다. 심적으로도, 경제적으로도 어려움이 너무 많았는데 인터넷을 통해 더드림을 알게 되어 산재보상 신청을 맡기게 되었습니다. 처음부터 끝까지 친절하고 명확하게 응대해주신 강재필 노무사님 덕분에 남편의 뇌경색이 산재로 인정받아, 현재는 치료비 부담 없이 매달 휴업급여도 보상받고 있습니다. 사건을 처음부터 끝까지 책임지고 성공시켜주신 더드림법률사무소에 다시 한번 감사드립니다.",
    image: "/industry_1.jpg"
  },
  {
    id: 2,
    name: "이*영님",
    info: "故 임*덕님 유족 | 탄광 직업병 유족급여 수령",
    quote: "아버지의 병이 산재가 될 수 있을까, 반신반의했습니다.",
    content: "아버지께서 탄광에서 10년 정도 일하시다가 뇌질환을 진단받으시고, 투병 끝에 돌아가셨습니다. 아버지의 병이 산재가 될 수 있을까 알아보던 중 유튜브를 통해 더드림직업병연구원을 알게 되었습니다. 처음부터 끝까지 성심껏 담당해주신 윤동민 노무사님 덕분에 산재로 인정받아 유족급여를 받을 수 있게 되었습니다. 가족들의 짐을 덜 수 있었고, 감사한 마음뿐입니다.",
    image: "/industry_2.jpg"
  },
  {
    id: 3,
    name: "권*열님",
    info: "건축 현장 사고 | 추가 보상금 약 3,600만 원",
    quote: "처음에는 이게 가능한 건지도 몰랐습니다.",
    content: "건축 현장에서 사고를 당한 후, 여러 절차가 복잡하고 어디서부터 해야 할지 막막했습니다. 더드림에서 상담을 받고 사건을 맡긴 후, 변호사님이 행정소송까지 대응해주셔서 결과적으로 약 3,600만 원의 추가 보상을 받게 되었습니다. 사무소의 모든 분들께 건강과 행복을 빌며, 진심으로 감사드립니다.",
    image: "/industry_3.jpg"
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
      {/* Background Image Layer with Teal tint */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] blur-[4px]"
        style={{
          backgroundImage: 'url("/intro_img4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-emerald-50 text-[#0D9488] text-sm font-bold tracking-widest mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333]">
              더드림을 선택한 분들이 <span className="text-[#0D9488]">직접 전하는 이야기</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Card - Responsive Fixed Height */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-emerald-50 overflow-hidden flex flex-col md:flex-row h-[750px] md:h-[500px]">
              <div className="md:w-2/5 bg-slate-100 relative flex-1 min-h-0 md:h-full">
                <img src={current.image} alt={current.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-[#064E3B]/40"></div>
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
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#0D9488]/20 fill-current mb-4 md:mb-6 absolute top-6 right-6 md:static flex-shrink-0" />

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
                        className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-[#0D9488] w-6' : 'bg-emerald-200'}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevSlide} className="p-3 rounded-full border border-emerald-100 hover:bg-emerald-50 transition-colors">
                      <ChevronLeft className="w-5 h-5 text-[#0D9488]" />
                    </button>
                    <button onClick={nextSlide} className="p-3 rounded-full border border-emerald-100 hover:bg-emerald-50 transition-colors">
                      <ChevronRight className="w-5 h-5 text-[#0D9488]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center bg-[#064E3B] hover:bg-[#043327] text-white px-8 md:px-12 py-5 rounded-2xl font-bold text-base md:text-xl transition-all shadow-[0_0_20px_rgba(6,78,59,0.3)] hover:shadow-[0_0_30px_rgba(6,78,59,0.5)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
            >
              내 사건 상담 신청하기
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TestimonialsSection;
