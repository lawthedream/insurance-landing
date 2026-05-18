"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Calculator, Scale, Briefcase, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const experts = [
  {
    title: "손해사정사",
    icon: Calculator,
    desc: "후유장해를 정밀하게 평가하고 보험금을 정확히 산정합니다.",
    items: [
      "장해평가: 영구/한시 구분, 장해지급률 정밀 산정",
      "기여도 감액 반박: 외상기여도, 기왕증 의학적 근거 마련",
      "보험약관 검토: 보험사 협의 및 추가서류 요청 대응",
      "시효 관리: 장해 인지 시점, 180일 규정 리스크 사전 관리"
    ]
  },
  {
    title: "변호사",
    icon: Scale,
    desc: "합의 협상부터 소송까지 한 곳에서 원스톱 해결합니다.",
    items: [
      "합의 협상: 법원 기준 예상판결금액 산정 후 협상",
      "교통사고 대응: 과실비율 반박 근거 확보",
      "배상책임 대응: 책임주체 특정·CCTV 증거확보 전략",
      "소송 전환: 합의 결렬 시 재의뢰 없이 즉시 소송"
    ]
  },
  {
    title: "노무사",
    icon: Briefcase,
    desc: "근재보험 청구를 전담합니다.",
    items: [
      "업무관련성 승인: 승인 요건 분석 및 입증 자료 설계",
      "장해등급 신청: 연금/일시금 수급 가능성 검토",
      "이중청구 전략: 산재·기업보험·제3자 책임 경로 조합",
      "증거 정합성: 법적 리스크 없이 이중청구 가능하도록 관리"
    ]
  }
];

const SolutionSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % experts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + experts.length) % experts.length);

  return (
    <section id="solution" className="relative py-24 bg-white overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.2] blur-[2px]"
        style={{
          backgroundImage: 'url("/solution_main.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/10 text-[#2C3E50] text-sm font-bold tracking-widest mb-4">
              SOLUTION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-8 leading-tight">
              어디서 내 상황에<br />
              <span className="relative inline-block">
                딱 맞는 조언
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#EDC967]/30 -z-10 rounded-sm"></span>
              </span>을 받을 수 있을까요?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 max-w-5xl mx-auto items-stretch">

            {/* Left Area: Intro Text Box */}
            <div className="lg:col-span-6 bg-[#F9F9F7] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col justify-center h-full">
              <p className="text-[#1B3B5A] text-xl md:text-2xl font-bold leading-relaxed mb-6">
                이리저리 엉킨 <span className="text-[#2C3E50]">복잡한 도로</span>와 같은<br />
                상해후유장해 보상 합의,
              </p>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                더드림에서는 <strong className="text-[#333333]">손해사정사·변호사·노무사</strong> 3인이<br />
                각자의 전문 영역에서 <strong className="text-[#2C3E50]">협업</strong>하여<br />
                <strong className="text-[#333333]">고객 맞춤형</strong>으로, <strong className="text-[#2C3E50]">최선의 지름길</strong>을 제시합니다.
              </p>
            </div>

            {/* Right Area: Experts Carousel */}
            <div className="lg:col-span-6 relative w-full h-full flex flex-col justify-center">
              <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white border border-slate-100 w-full h-full pb-16">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {experts.map((expert, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-12 md:px-16 pt-10 pb-4 h-full flex flex-col justify-center relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <expert.icon className="w-7 h-7 text-[#2C3E50]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#333333] m-0">{expert.title}</h3>
                      </div>
                      <p className="text-slate-500 text-base md:text-lg mb-6 font-medium leading-relaxed">{expert.desc}</p>
                      <ul className="space-y-4">
                        {expert.items.map((text, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700">
                            <div className="w-2 h-2 rounded-full bg-[#2C3E50] mt-2.5 flex-shrink-0"></div>
                            <span className="text-[15px] md:text-base leading-relaxed">{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons (Inside Carousel) */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow border border-slate-100 flex items-center justify-center text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all z-20 group"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow border border-slate-100 flex items-center justify-center text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all z-20 group"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Dots (Inside Carousel) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2.5 z-20 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                  {experts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2.5 rounded-full transition-all ${currentSlide === i ? 'bg-[#2C3E50] w-6' : 'bg-slate-300 w-2.5'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Summary Checklist */}
          <div className="bg-[#F9F9F7] rounded-3xl p-8 md:p-12 text-center border border-slate-100 shadow-sm transition-all hover:shadow-md max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12 text-slate-700 font-bold text-lg md:text-xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2C3E50]" />
                <span>3인의 전문가 분석 시스템</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2C3E50]" />
                <span>원스톱 행정·법률 해결</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#2C3E50]" />
                <span>영역별 핵심 쟁점 빠른 파악</span>
              </div>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-[#2C3E50] hover:bg-[#1a2530] text-white px-10 py-6 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_10px_30px_rgba(44,62,80,0.3)] hover:shadow-[0_15px_40px_rgba(44,62,80,0.5)] transform hover:-translate-y-1"
            >
              후유장해 꼼꼼하게 보상받기
              <ArrowRight className="w-7 h-7 text-[#EDC967]" />
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default SolutionSection;