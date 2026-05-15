import * as React from "react";

import { Phone } from 'lucide-react';

const ConsultationSection: React.FC = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image of Office/Meeting */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=50')" }} // Office/Meeting room
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="relative h-full container mx-auto px-6 flex flex-col md:flex-row items-center">

        {/* Text Area */}
        <div className="w-full md:w-1/2 text-white z-10 pt-10 md:pt-0 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            교통사고 처리에 최적화된<br />
            법률서비스를 제공합니다
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            복잡한 보험 약관 분석부터<br />
            까다로운 소송 절차까지<br />
            대표 변호사가 직접 챙깁니다.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">김드림 대표변호사</h3>
            <p className="text-slate-400 text-3xl font-bold">지금 상담하세요.</p>
          </div>

          <a href="tel:010-9292-3631" className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all shadow-lg hover:shadow-blue-500/50 w-full md:w-auto">
            <Phone className="w-6 h-6" />
            상담문의 010-9292-3631
          </a>
        </div>

        {/* Lawyer Image Overlay */}
        <div className="w-full md:w-1/2 h-full relative flex items-end justify-center md:justify-end">
          {/* Replace with actual transparent PNG of a lawyer in production */}
          <div className="w-[400px] h-[500px] bg-gradient-to-t from-slate-800 to-slate-600/50 rounded-t-full flex items-end justify-center relative overflow-hidden backdrop-blur-sm border-t border-l border-r border-white/10">
            <img
              src="https://picsum.photos/400/600?random=99"
              alt="Representative Lawyer"
              className="object-cover w-full h-full opacity-90 mix-blend-overlay"
            />
            <div className="absolute bottom-0 w-full p-4 text-center bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-white font-bold">대표변호사 김드림</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConsultationSection;