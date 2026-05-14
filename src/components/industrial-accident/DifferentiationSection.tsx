"use client";
import * as React from "react";
import { ArrowRight, AlertCircle, Check, X, Minus } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const DifferentiationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F0FDF4]">
      <ScrollReveal>
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded bg-[#0D9488]/10 text-[#0D9488] text-sm font-bold tracking-widest mb-4">
              WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#333333] mb-6 leading-tight">
              <span className="text-red-500 underline decoration-red-200">산재 불승인</span> 통보를 받으셨거나<br />
              <span className="text-red-500 underline decoration-red-200">장해등급</span>이 낮게 나왔다면<br />
              전문가의 재검토가 반드시 필요합니다.
            </h2>
            <p className="text-xl text-slate-700 font-bold mb-8">
              대응 방법에 따라 보상금이 <span className="text-[#0D9488]">수천만 원 단위</span>로 달라집니다.
            </p>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 inline-block text-left max-w-2xl">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#0D9488]" />
                장해등급 1단계 차이의 의미
              </h4>
              <ul className="text-slate-600 space-y-2 text-sm leading-relaxed">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span><strong className="text-emerald-700">7급</strong> = 연금 수급 가능 (매월 지급)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  <span><strong className="text-slate-700">8급</strong> = 일시금 지급 (한 번)</span>
                </li>
                <li className="font-bold text-[#0D9488] pt-1">
                  등급에 따라 보상금 범위가 180도 달라집니다.
                </li>
              </ul>
            </div>
          </div>

          {/* Responsive Table / Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-4 bg-[#064E3B] text-white rounded-t-3xl overflow-hidden">
              <div className="p-5 text-center font-bold text-lg flex items-center justify-center">구분</div>
              <div className="p-5 text-center font-medium text-slate-300 bg-[#043327] flex items-center justify-center">일반 노무법인</div>
              <div className="p-5 text-center font-medium text-slate-300 bg-[#043327] flex items-center justify-center">일반 로펌</div>
              <div className="p-5 text-center font-bold text-white bg-[#0D9488] text-lg flex items-center justify-center relative">
                더드림
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-6 md:space-y-0 shadow-xl rounded-2xl md:rounded-t-none overflow-hidden border border-slate-200 bg-white">

              {/* Row 1: Team */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-emerald-50/30 transition-colors">
                <div className="md:hidden bg-emerald-50 p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0D9488]"></div>
                  팀 구성
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-emerald-50 items-center justify-center">팀 구성</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs text-pretty block">일반 노무법인</span>
                  노무사 + 보조인
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block">일반 로펌</span>
                  변호사 + 사무장
                </div>
                <div className="p-4 md:p-6 text-center font-bold text-[#0D9488] bg-[#0D9488]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#0D9488] text-xs block">더드림</span>
                  <div className="text-base lg:text-lg">변호사 + 노무사 + 손해사정사</div>
                </div>
              </div>

              {/* Row 2: Application */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-emerald-50/30 transition-colors">
                <div className="md:hidden bg-emerald-50 p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0D9488]"></div>
                  산재 신청
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-emerald-50 items-center justify-center text-center">산재 신청</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block">일반 노무법인</span>
                  <div className="flex items-center gap-1 font-bold text-slate-600 text-pretty whitespace-nowrap"><Check className="w-4 h-4 text-emerald-500" /> 노무사 전문</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block">일반 로펌</span>
                  <div className="flex items-center gap-1"><Minus className="w-4 h-4 text-slate-400" /> 비전문</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#0D9488] bg-[#0D9488]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#0D9488] text-xs block">더드림</span>
                  <div className="flex items-center gap-1 text-base lg:text-lg"><Check className="w-4 h-4" /> 노무사 직접 전담</div>
                </div>
              </div>

              {/* Row 3: Litigation */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-emerald-50/30 transition-colors">
                <div className="md:hidden bg-emerald-50 p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2 text-pretty">
                  <div className="w-2 h-2 rounded-full bg-[#0D9488]"></div>
                  불승인 행정소송
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-emerald-50 items-center justify-center text-center">불승인 행정소송</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block">일반 노무법인</span>
                  <div className="flex items-center gap-1"><AlertCircle className="w-4 h-4 text-yellow-500" /> 별도 변호사 의뢰</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block">일반 로펌</span>
                  <div className="flex items-center gap-1"><Minus className="w-4 h-4 text-slate-400" /> 산재 비전문</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#0D9488] bg-[#0D9488]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#0D9488] text-xs block">더드림</span>
                  <div className="flex items-center gap-1 text-base lg:text-lg"><Check className="w-4 h-4" /> 재의뢰 없이 대응</div>
                </div>
              </div>

              {/* Row 4: Grade Up */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-emerald-50/30 transition-colors">
                <div className="md:hidden bg-emerald-50 p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0D9488]"></div>
                  장해등급 상향
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-emerald-50 items-center justify-center text-center">장해등급 상향</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block">일반 노무법인</span>
                  <div className="flex items-center gap-1"><Minus className="w-4 h-4 text-yellow-500" /> 의견서 작성 위주</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block">일반 로펌</span>
                  <div className="flex items-center gap-1"><X className="w-4 h-4 text-red-500" /> 비전문</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#0D9488] bg-[#0D9488]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#0D9488] text-xs block">더드림</span>
                  <div className="flex items-center gap-1 text-base lg:text-lg"><Check className="w-4 h-4" /> 손해사정사 정밀평가</div>
                </div>
              </div>

              {/* Row 5: Parallel Claim */}
              <div className="flex flex-col md:grid md:grid-cols-4 group hover:bg-emerald-50/30 transition-colors">
                <div className="md:hidden bg-emerald-50 p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2 text-pretty">
                  <div className="w-2 h-2 rounded-full bg-[#0D9488]"></div>
                  민영보험 동시 청구
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-emerald-50 items-center justify-center text-center">민영보험 동시청구</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block text-pretty">일반 노무법인</span>
                  <div className="flex items-center gap-1 font-bold text-red-400"><X className="w-4 h-4" /> 불가</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs block">일반 로펌</span>
                  <div className="flex items-center gap-1"><Minus className="w-4 h-4 text-slate-400" /> 비전문</div>
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#0D9488] bg-[#0D9488]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#0D9488] text-xs block">더드림</span>
                  <div className="flex items-center gap-1 text-base lg:text-lg font-black"><Check className="w-4 h-4" /> 손해사정사 동시처리</div>
                </div>
              </div>

            </div>
          </div>

          {/* Conclusion Box */}
          <div className="bg-[#064E3B] rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                행정소송은 <span className="text-yellow-400">변호사</span>의 영역이고, <br className="md:hidden" />
                산재 신청 및 대응은 <span className="text-yellow-400">노무사</span>의 영역이고,<br />
                장해 평가는 <span className="text-yellow-400">손해사정사</span>의 영역입니다.
              </h3>
              <p className="text-emerald-100 mb-8 font-medium">
                더드림은 어느 한쪽도 부족함 없이,<br />
                <strong className="text-white text-lg">가장 확실한 보상</strong>을 약속 드립니다.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0B8476] text-white px-8 py-4 rounded-2xl font-bold text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
              >
                장해등급 상담하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0D9488] rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default DifferentiationSection;
