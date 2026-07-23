"use client";
import * as React from "react";
import { ArrowRight, CheckCircle2, Scale, Calculator, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Video (desktop) / Static Image (mobile) with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <img
          src="/hero-bg-mobile.jpg"
          alt=""
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />
        {/* Teal/Emerald themed overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-[#0D9488]/40"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20 md:py-32 z-10 flex flex-col h-full justify-center">
        {/* Top Tag */}
        <div className="mb-8 inline-flex items-center space-x-2 text-[#2DD4BF] font-semibold tracking-wider text-sm md:text-base border-l-4 border-[#2DD4BF] pl-4 animate-fade-in-up">
          <span>산재보험 전문</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white drop-shadow-2xl animate-fade-in-up delay-100">
          산재 승인,<br />
          제대로 대응하지 않으면<br />
          <span className="text-yellow-400 decoration-[#2DD4BF]/30 underline decoration-8 underline-offset-4">수천만 원</span>을 잃을 수 있습니다.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl font-light leading-relaxed animate-fade-in-up delay-200">
          걱정하지 마세요.<br />
          <strong className="text-white font-bold">산재 신청부터 행정소송까지</strong> 한 번에<br className="md:hidden" />
          <strong className="text-white font-bold"> 변호사·노무사·손해사정사</strong> 팀이<br className="hidden md:block" />
          끝까지 해결합니다.
        </p>

        {/* CTA Button */}
        <div className="mb-16 animate-fade-in-up delay-300 flex justify-center md:justify-start">
          <a
            href="#contact-form"
            className="group inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-[#064E3B] px-10 py-5 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
          >
            착수금 0원으로 시작하기
            <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Expert Collaboration Badges (Redesigned Visualization) */}
        <div className="animate-fade-in-up delay-500 max-w-4xl">

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative z-10">
              {[
                { label: '변호사', icon: Scale, desc: '재의뢰 없이 소송' },
                { label: '노무사', icon: Briefcase, desc: '산재 신청 전담' },
                { label: '손해사정사', icon: Calculator, desc: '장해등급 정밀 평가' }
              ].map((item, i) => (
                <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:gap-2 bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl group hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0D9488]/20 rounded-2xl flex items-center justify-center mb-0 md:mb-2 group-hover:bg-[#0D9488]/40 transition-colors">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#2DD4BF]" />
                  </div>
                  <div className="text-left md:text-center">
                    <div className="text-white font-bold text-lg leading-tight mb-1">{item.label}</div>
                    <div className="text-slate-400 text-xs md:text-sm leading-tight">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-slate-300 text-sm md:text-base flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-5 h-5 text-[#2DD4BF]" />
            노무사, 변호사, 손해사정사가 한 팀으로 움직여 단 하나의 보상도 놓치지 않습니다.
          </p>
        </div>
      </div>

      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F0FDF4] to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
