"use client";
import * as React from "react";
import { ArrowRight, CheckCircle2, Scale, Calculator, Briefcase, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Animation Variants for the staggered reveal effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35, // Increased delay for better readability
        delayChildren: 0.2, // Initial delay before staggering starts
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Video with Subtle Darkened Overlay for sleekness */}
      <div className="absolute inset-0 overflow-hidden bg-[#0A192F]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero-main.mov" type="video/quicktime" />
          <source src="/hero-main.mov" type="video/mp4" />
        </video>
        {/* Radial gradient overlay for that classic framer glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,62,80,0.15)_0%,rgba(27,59,90,0.8)_60%,rgba(15,35,54,1)_100%)]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 py-24 md:py-32 z-10 flex flex-col h-full items-center justify-center text-center"
      >
        {/* Top Tag - Reshaped to a sleek pill */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md shadow-sm">
          <span className="text-[#EDC967] font-semibold tracking-wider text-xs md:text-sm">
            후유장해 보험금·배상금 청구 전문
          </span>
        </motion.div>

        {/* Main Headline - Tighter tracking for modern typographic feel */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] mb-8 text-white tracking-tight max-w-5xl drop-shadow-lg">
          <span className="block mb-2 md:mb-4">큰 사고 후 남은 후유증,</span>
          <span className="text-[#EDC967] decoration-[#EDC967]/30 underline decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">어떻게 대처하느냐</span>에 따라
          <span className="block mt-4 md:mt-6">
            보상금 <span className="text-[#EDC967]">수천만 원</span>이<br className="md:hidden" /> 달라집니다.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-300 md:text-slate-200 mb-12 max-w-3xl font-light leading-relaxed">
          복잡한 서류 준비부터 까다로운 합의 과정까지.<br />
          <strong className="text-white font-bold">손해사정사·변호사·노무사</strong>가 한 팀이 되어<br className="md:hidden" /> 든든하게 해결해 드립니다.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-20 w-full flex justify-center">
          <a
            href="#contact-form"
            className="group inline-flex items-center justify-center gap-3 bg-white text-[#0F2336] px-10 py-5 md:px-12 md:py-6 rounded-full font-black text-xl md:text-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 hover:scale-105 whitespace-nowrap w-full md:w-auto"
          >
            보상 진단받기
            <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Service Cards (Section 1 extras) - Clean, horizontal layout with dividers */}
        <motion.div variants={itemVariants} className="w-full max-w-6xl mt-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10">
            {[
              { label: '교통사고 후유장해', icon: Calculator, desc: '손해사정사가 과실상계·장해평가·소득입증 정밀 분석' },
              { label: '배상책임 (시설·낙상)', icon: ShieldCheck, desc: '책임주체 특정·증거확보(CCTV) 전략 설계' },
              { label: '근재보험 (기업보험)', icon: Briefcase, desc: '업무관련성 승인·장해평가·이중청구 검토 (노무사 협업)' }
            ].map((item, i) => (
              <div key={i} className={`flex flex-row items-start gap-5 md:px-8 group ${i !== 0 ? 'md:border-l border-white/10' : ''}`}>
                <div className="w-14 h-14 shrink-0 bg-[#2C3E50] rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:-translate-y-1">
                  <item.icon className="w-7 h-7 text-[#EDC967]" />
                </div>
                <div className="text-left flex flex-col pt-1">
                  <div className="text-white font-semibold text-lg md:text-xl tracking-tight leading-tight mb-2 md:mb-3">{item.label}</div>
                  <div className="text-slate-400 text-sm md:text-[15px] leading-relaxed font-light">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F9F9F7] via-[#F9F9F7]/80 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;