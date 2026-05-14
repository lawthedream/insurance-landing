"use client";
import * as React from "react";
import { ShieldCheck, CheckSquare, X } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const DifferentiationSection: React.FC = () => {
  return (
    <section id="differentiation" className="relative py-24 bg-white overflow-hidden">
      <ScrollReveal>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-bold tracking-widest mb-4">
              DIFFERENTIATION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6 leading-tight">
              <span className="text-[#C77E1E]">보험사에서 15년간 심사</span>했던 손해사정사가<br />
              당신의 편이 되어 대응합니다.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              보험사가 어떤 기준으로 감액하는지, 어떤 증거를 보는지,<br className="hidden md:block" />
              어디에서 판단이 갈리는지 심사하던 사람의 기준으로 판단합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
            <div className="bg-[#2D2D2D] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#C77E1E] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <ShieldCheck className="w-12 h-12 text-[#C77E1E] mb-6" />
              <h3 className="text-2xl font-bold mb-4">보험사 논리 완벽 분석</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                가입내역과 약관을 분석하여 터무니없는 부지급이나 과도한 삭감을 막아냅니다.
              </p>
            </div>

            <div className="bg-[#F9F9F7] rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-slate-100">
                <CheckSquare className="w-6 h-6 text-[#2D2D2D]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#333333]">누구보다 확실한 처리</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                보험사 논리를 반박하여 후유장해보험금 분쟁을 누구보다 확실하게 처리해드립니다.
              </p>
              <p className="text-slate-400 text-xs mt-6 font-light">
                ※ 손해사정사의 업무는 보험업법에 의한 적법한 손해사정 업무로 수행됩니다.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6 leading-tight">
              어디에 맡기느냐에 따라<br />
              <span className="text-[#2D2D2D] border-b-4 border-[#C77E1E]/50">결과가 180도 달라집니다</span>.
            </h2>
          </div>

          {/* Responsive Table / Grid */}
          <div className="max-w-5xl mx-auto mb-12">
            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-4 bg-[#2D2D2D] text-white rounded-t-2xl overflow-hidden">
              <div className="p-5 text-center font-bold text-lg flex items-center justify-center">비교 항목</div>
              <div className="p-5 text-center font-medium text-slate-300 bg-[#222222] flex items-center justify-center">일반 로펌</div>
              <div className="p-5 text-center font-medium text-slate-300 bg-[#222222] flex items-center justify-center">손해사정법인</div>
              <div className="p-5 text-center font-black text-white bg-[#C77E1E] text-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] animate-[shimmer_3s_infinite]"></div>
                더드림법률사무소
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-6 md:space-y-0 shadow-xl rounded-2xl md:rounded-t-none overflow-hidden border border-slate-200 bg-white">

              {/* Row 1: Team */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors">
                <div className="md:hidden bg-[#F9F9F7] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C77E1E]"></div>
                  팀 구성
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F9F9F7] items-center justify-center">팀 구성</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center border-b md:border-b-0 border-slate-50">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  변호사 + 사무장
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center border-b md:border-b-0 border-slate-50">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  손해사정사 + 보조인
                </div>
                <div className="p-4 md:p-6 text-center font-bold text-[#C77E1E] bg-[#C77E1E]/5 flex flex-col md:flex-row items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#C77E1E] text-xs">더드림법률사무소</span>
                  <div className="text-lg text-[#1A1A1A]">변호사 + 손해사정사 + 노무사</div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors">
                <div className="md:hidden bg-[#F9F9F7] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C77E1E]"></div>
                  의료자문 대응
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F9F9F7] items-center justify-center">의료자문 대응</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  소송 단계에서만 대응
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  의견서 제출 가능
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#C77E1E] bg-[#C77E1E]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#C77E1E] text-xs">더드림법률사무소</span>
                  <div className="text-[#1A1A1A] text-lg">보험사 출신 전문 반박</div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors">
                <div className="md:hidden bg-[#F9F9F7] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C77E1E]"></div>
                  소송 전환
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F9F9F7] items-center justify-center">소송 전환</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  처음부터 소송 선호
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  재의뢰 필요 (이중지출)
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#C77E1E] bg-[#C77E1E]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#C77E1E] text-xs">더드림법률사무소</span>
                  <div className="text-[#1A1A1A] text-lg">재의뢰 없이 즉시 전환</div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col md:grid md:grid-cols-4 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors">
                <div className="md:hidden bg-[#F9F9F7] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C77E1E]"></div>
                  진단서 발급 지원
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F9F9F7] items-center justify-center">진단서 발급 지원</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  비전문 / 불가
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  가능
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#C77E1E] bg-[#C77E1E]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#C77E1E] text-xs">더드림법률사무소</span>
                  <div className="text-[#1A1A1A] text-lg">약관 기준 맞춤 지원</div>
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex flex-col md:grid md:grid-cols-4 group hover:bg-slate-50 transition-colors">
                <div className="md:hidden bg-[#F9F9F7] p-4 font-bold text-[#333333] border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C77E1E]"></div>
                  산재 동시 처리
                </div>
                <div className="hidden md:flex p-6 font-bold text-[#333333] bg-[#F9F9F7] items-center justify-center">산재 동시 처리</div>

                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">일반 로펌</span>
                  <X className="w-5 h-5 mx-auto text-slate-400" />
                </div>
                <div className="p-4 md:p-6 text-center text-sm text-slate-500 flex flex-col items-center justify-center border-b md:border-b-0 border-slate-50 h-full">
                  <span className="md:hidden font-bold mb-1 text-slate-400 text-xs">손해사정법인</span>
                  <X className="w-5 h-5 mx-auto text-slate-400" />
                </div>
                <div className="p-4 md:p-6 text-center text-sm font-bold text-[#C77E1E] bg-[#C77E1E]/5 flex flex-col items-center justify-center h-full">
                  <span className="md:hidden font-bold mb-1 text-[#C77E1E] text-xs">더드림법률사무소</span>
                  <div className="text-[#1A1A1A] text-lg">노무사 동시 처리</div>
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              손해사정은 손해사정사의 영역이고, 소송은 변호사의 영역입니다.<br />
              더드림은 <strong className="text-[#2D2D2D]">어느 한쪽도 부족함 없이</strong> 대응합니다.
            </p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default DifferentiationSection;