"use client";
import * as React from "react";
import { ArrowRight, FileText, Stethoscope, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.2,
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
      <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero-insu.mov" type="video/quicktime" />
          <source src="/hero-insu.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,64,64,0.15)_0%,rgba(26,26,26,0.8)_60%,rgba(15,15,15,1)_100%)]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 py-20 md:py-32 z-10 flex flex-col h-full justify-center"
      >
        {/* Top Tag */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex items-center space-x-2 text-[#C77E1E] font-semibold tracking-wider text-sm md:text-base border-l-4 border-[#C77E1E] pl-4 self-start">
          <span>후유장해보험금 분쟁 전문</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white drop-shadow-2xl">
          후유장해보험금,<br />
          보험사가 거절한다고 포기하면<br />
          <span className="text-[#C77E1E] decoration-[#C77E1E]/30 underline decoration-8 underline-offset-4">수 천만원의 손해</span>를 볼 수 있습니다.
        </motion.h1>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl font-light leading-relaxed">
          진단서 발급이 안되어도, 보험사 심사에서 막혀도,<br className="hidden md:block" />
          소송이 필요한 상황이어도<br />
          더드림은 <strong className="text-white font-bold">원스톱</strong>으로 끝까지 해결합니다.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-16 flex justify-center md:justify-start">
          <a
            href="#contact-form"
            className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#151515] px-10 py-5 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
          >
            0원으로 상담 신청하기
            <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Expert Collaboration Badges (Redesigned Visualization) */}
        <motion.div variants={itemVariants} className="max-w-4xl">
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative z-10">
              {[
                { label: '진단서 확보 지원', icon: FileText, desc: '의무기록 철저 분석' },
                { label: '의료자문 전면 대응', icon: Stethoscope, desc: '유리한 의학적 근거 마련' },
                { label: '합의/소송 즉시 전환', icon: Scale, desc: '원스톱 해결 시스템' }
              ].map((item, i) => (
                <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:gap-2 bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl group hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#C77E1E]/20 rounded-2xl flex items-center justify-center mb-0 md:mb-2 group-hover:bg-[#C77E1E]/40 transition-colors">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#C77E1E]" />
                  </div>
                  <div className="text-left md:text-center">
                    <div className="text-white font-bold text-lg leading-tight mb-1">{item.label}</div>
                    <div className="text-slate-400 text-xs md:text-sm leading-tight">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-8 text-slate-400 text-sm md:text-base flex items-center gap-2 font-medium">
          ※ 사건별 상황에 따라 결과가 다를 수 있습니다.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F9F9F7] via-[#F9F9F7]/80 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;