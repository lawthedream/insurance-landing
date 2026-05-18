"use client";
import * as React from "react";
import { AlertCircle, CheckSquare } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F0FDF4] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488] rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10">

          {/* Header Area */}
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#0D9488]/10 text-[#0D9488] text-sm font-bold tracking-widest mb-4">
              PROBLEM
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6">
              혹시 혼자 <span className="relative inline-block">
                끙끙 앓고
                <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-200/50 -z-10 rounded-sm"></span>
              </span> 계신가요?
            </h2>
            <p className="text-slate-600 text-lg">
              산재는 여러 이해관계자가 얽혀 있어, 잘못된 판단은 돌이킬 수 없습니다.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              "업무 중 다쳤는데 회사가 산재 신청을 막고 있다",
              "산재 신청을 했는데 불승인 통보를 받았다",
              "장해등급이 예상보다 낮게 나와서 억울하다",
              "산재는 노무사, 소송은 변호사, 보험은 또 따로… 어디에 맡길지 모르겠다"
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#F0FDF4] rounded-full flex items-center justify-center text-[#0D9488] mt-0.5">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium text-[#333333] leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion / Emphasis */}
          <div className="max-w-3xl mx-auto text-center bg-white border-2 border-[#0D9488]/20 rounded-3xl p-8 md:p-10 shadow-lg relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#0D9488] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
              <AlertCircle className="w-7 h-7" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 mt-2">
              산재보험 문제는 복잡하며, <br className="md:hidden" />혼자 판단하기 어렵습니다.
            </h3>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              각 분야 전문가의 조언이 <strong className="text-[#0D9488] text-2xl underline decoration-wavy underline-offset-4 decoration-[#0D9488]/30">반드시</strong> 필요합니다.
            </p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProblemSection;
