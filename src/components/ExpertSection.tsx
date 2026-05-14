"use client";

import * as React from "react";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, UserCheck, Scale, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ExpertProfile {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  careers: string[];
}

const experts: ExpertProfile[] = [
  {
    id: 1,
    name: "박성훈",
    role: "대표변호사",
    image: "/expert_park_sunghoon.jpg",
    quote: "20년 경력 산재전문 노무사출신 변호사",
    careers: [
      "경북대학교 졸업",
      "변호사, 13기 공인노무사",
      "現) 더드림 법률사무소 대표변호사",
      "現) 산업재해보상보험심사위원회 심사위원",
      "現) 국민권익위원회 전문상담위원(변호사)",
      "現) 한국공인노무사회 법률자문단 고문",
      "現) 서울소방본부 권리구제 법률자문단"
    ]
  },
  {
    id: 2,
    name: "김철기",
    role: "손해사정사",
    image: "/expert_kim_chulgi.jpg",
    quote: "16년 경력 자동차보험 전문 손해사정사",
    careers: [
      "명지대학교 교통공학 학사",
      "손해사정사, 차량손해사정사",
      "現) 더드림 법률사무소",
      "前) 더케이손해보험 대인, 대물 보상팀"
    ]
  },
  {
    id: 3,
    name: "김선우",
    role: "노무사",
    image: "/expert_kim_sunwoo.jpg",
    quote: "산재 및 교통사고 권리구제 전문 노무사",
    careers: [
      "세종대학교 졸업",
      "33기 공인노무사",
      "現) 더드림 법률사무소",
      "現) 서울소방본부 권리구제 법률자문단",
      "前) YK 노무법인"
    ]
  }
];

const ExpertSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = React.useCallback(() => {
    setActiveIndex((prev) => (prev === experts.length - 1 ? 0 : prev + 1));
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? experts.length - 1 : prev - 1));
  };

  const currentExpert = experts[activeIndex];

  return (
    <section id="our-team" className="relative py-24 bg-[#F9F9F7] overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: 'url("/intro_img1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/10 text-[#2C3E50] text-sm font-bold tracking-widest mb-4">
              OUR TEAM
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333]">
              결과를 바꾸는 더드림의<br /><span className="text-[#2C3E50] border-b-4 border-[#EDC967]/30">드림팀</span>을 소개합니다.
            </h2>
          </div>

          {/* Expert Carousel - Fixed Height */}
          <div className="max-w-5xl mx-auto mb-24 relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row h-[750px] md:h-[650px]">

              {/* Image Section - Allow it to shrink to fill remaining space on mobile */}
              <div className="md:w-5/12 relative flex-1 min-h-0 md:h-full bg-slate-200">
                <img
                  src={currentExpert.image}
                  alt={currentExpert.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B5A]/60 to-transparent md:hidden"></div>
                <div className="absolute bottom-4 left-4 text-white md:hidden">
                  <p className="text-sm opacity-90">{currentExpert.role}</p>
                  <h3 className="text-2xl font-bold">{currentExpert.name}</h3>
                </div>
              </div>

              {/* Content Section - Use auto height to size based on content on mobile */}
              <div className="md:w-7/12 p-6 md:p-12 flex flex-col justify-center relative md:h-full h-auto shrink-0 md:shrink">
                <div className="mb-8 hidden md:block">
                  <p className="text-[#2C3E50] font-bold mb-1 text-sm">{currentExpert.role}</p>
                  <h3 className="text-4xl font-black text-[#333333]">{currentExpert.name}</h3>
                </div>

                <div className="mb-6 md:mb-8 flex-1 flex flex-col justify-start md:justify-center">
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#EDC967]/20 mb-3 md:mb-4 fill-current" />
                  <p className="text-lg md:text-2xl font-medium text-slate-700 italic leading-relaxed">
                    <span className="quote-font">"{currentExpert.quote}"</span>
                  </p>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-8">
                  {currentExpert.careers.map((career, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EDC967] mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm">{career}</span>
                    </li>
                  ))}
                </ul>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2 md:gap-4 mt-auto pt-6 border-t border-slate-200 w-full justify-between md:justify-start">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-full border border-slate-300 hover:bg-white hover:border-[#2C3E50] hover:text-[#2C3E50] transition-all flex-shrink-0"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2">
                    {experts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${idx === activeIndex ? "bg-[#2C3E50] w-8" : "bg-slate-300"
                          }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-full border border-slate-300 hover:bg-white hover:border-[#2C3E50] hover:text-[#2C3E50] transition-all flex-shrink-0"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Promises */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-[#333333]">
                변하지 않는 더드림의 <br className="md:hidden" />
                <span className="text-[#2C3E50] border-b-4 border-[#EDC967]/30">세 가지 약속</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Promise 1 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-[#F9F9F7] text-[#2C3E50] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2C3E50] group-hover:text-[#EDC967] transition-colors">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#333333] mb-3">
                  <span className="text-[#2C3E50] text-sm block mb-1">원칙 1</span>
                  후유장해 전문 손해사정사가<br />초기 상담을 진행합니다.
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  전문성 없는 보조인이나 사무장 대신,
                  보험사출신 후유장해 전문 손해사정사가 <strong>상담 및 사건을 직접</strong> 진행합니다.
                </p>
              </div>

              {/* Promise 2 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-[#F9F9F7] text-[#2C3E50] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2C3E50] group-hover:text-[#EDC967] transition-colors">
                  <Scale className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#333333] mb-3">
                  <span className="text-[#2C3E50] text-sm block mb-1">원칙 2</span>
                  착수금 없이<br />상담을 진행합니다.
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  <strong>부담없이 상담</strong>받을 수 있으며, <strong>착수금이 없기</strong> 때문에 부담없이 사고초기부터 의뢰가 가능합니다.
                </p>
              </div>

              {/* Promise 3 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-[#F9F9F7] text-[#2C3E50] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2C3E50] group-hover:text-[#EDC967] transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#333333] mb-3">
                  <span className="text-[#2C3E50] text-sm block mb-1">원칙 3</span>
                  객관적으로<br />사건을 판단해드립니다.
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  무리하게 사건수임하지 않으며, 의뢰인 입장에서 전문가 개입이 유리하지 않은 사건에 대해서는 <strong>가감없이 객관적으로</strong> 조언드립니다.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center bg-[#2C3E50] hover:bg-[#1a2530] text-white px-6 md:px-8 py-5 rounded-xl font-bold text-base md:text-xl transition-all shadow-[0_0_20px_rgba(44,62,80,0.5)] hover:shadow-[0_0_30px_rgba(44,62,80,0.7)] transform hover:-translate-y-1 whitespace-nowrap"
              >
                전문가에게 내 사건 상담하기
              </a>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default ExpertSection;