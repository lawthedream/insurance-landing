"use client";
import React, { useState } from "react";

import { ArrowRight, Trophy, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CaseModal from './CaseModal';

interface CaseItem {
  id: number;
  title: string;
  type: string;
  before: string;
  after: string;
  result: string;
  resultDetail: string;
  description: string;
  modalType: 'image' | 'youtube';
  modalSrc: string;
}

const cases: CaseItem[] = [
  {
    id: 1,
    title: "횡단보도 사망사고",
    type: "과실비율 감산이 필요한 횡단보도 보행자 사망사고",
    before: "보험사 주장 과실 40%",
    after: "조정 결과 과실 15%로 감산 (-25%)",
    result: "총 1억 1,500만원",
    resultDetail: "민사 8,500만원 + 형사 3,000만원",
    description: "수사기록 열람 + 판례 분석으로 보험사 과실 주장을 뒤집었습니다.",
    modalType: 'image',
    modalSrc: "/cases/traffic_1.png"
  },
  {
    id: 2,
    title: "출퇴근 사망사고",
    type: "3중 보상 받은 출퇴근 중 뺑소니 사망사고",
    before: "자동차보험 대인배상만 진행",
    after: "산재(유족급여+장의비) + 민사 손해배상 + 형사합의금",
    result: "3중 보상 확보",
    resultDetail: "보험 + 산재 + 형사합의",
    description: "출퇴근 재해 인정을 받아 산재 유족보상까지 확보했습니다.",
    modalType: 'image',
    modalSrc: "/cases/traffic_2.png"
  },
  {
    id: 3,
    title: "음주운전 사망사고",
    type: "뺑소니 미수 음주운전 사망사고로 합의금 2배",
    before: "보험사 제시 5,000만원 (고령 피해자 이유)",
    after: "불법행위(음주·뺑소니) 위자료 증액 의견서 제출",
    result: "1억원 합의",
    resultDetail: "2배 증액 성공",
    description: "보험사의 지급기준액이 아닌, 법원 예상판결금액 기준으로 협상했습니다.",
    modalType: 'image',
    modalSrc: "/cases/traffic_3.png"
  },
  {
    id: 4,
    title: "수로 추락 사망사고",
    type: "음주 동승자로, 불리한 조건 극복",
    before: "음주 동승 + 안전벨트 미착용 감액 예상",
    after: "수사기록·불기소처분 분석 + 판례 기반 의견 제출",
    result: "1억 2,000만원 합의",
    resultDetail: "최대 보상 확보",
    description: "불리한 조건에서도 판례 분석과 구체적 의견 제시로 최대한의 보상을 확보했습니다.",
    modalType: 'image',
    modalSrc: "/cases/traffic_4.png"
  },
  {
    id: 5,
    title: "오토바이 교통사고",
    type: "과실 감산 받은 우측 원위요골골절 교통사고",
    before: "보험사 주장 과실 30%",
    after: "직접 현장조사 후 과실 20%로 감산 + 우측 원위요골골절 장해율 13% 산정",
    result: "2,354만원 합의",
    resultDetail: "과실 감산 + 한시장해 인정",
    description: "직접 현장조사와 블랙박스 분석으로 과실비율을 줄이고, 장해평가로 정밀 산정했습니다.",
    modalType: 'image',
    modalSrc: "/cases/traffic_5.png"
  },
  {
    id: 6,
    title: "자전거 교통사고",
    type: "정밀 손해 산정이 필요한 택시-자전거 교차로 사고",
    before: "쌍방 과실 사고로 과실비율·장해율 미확정",
    after: "현장조사로 과실 확정 + 요추 골절로 인한 노동능력상실율 정밀 산정",
    result: "2,300만원 합의",
    resultDetail: "과실/장해율 확정",
    description: "사고현장 조사와 의학적 검토로 과실비율과 장해율을 확정, 정당한 보상을 확보했습니다.",
    modalType: 'image',
    modalSrc: "/cases/traffic_6.png"
  }
];

const SuccessCasesSection: React.FC = () => {
  const [modalData, setModalData] = useState<{ isOpen: boolean, type: 'image' | 'youtube' | null, src: string | null, title: string }>({
    isOpen: false, type: null, src: null, title: ''
  });

  return (
    <section id="success-cases" className="py-24 bg-[#1B3B5A] text-white">
      <ScrollReveal>
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#3182A4]/20 text-[#3182A4] text-sm font-bold tracking-widest mb-4 border border-[#3182A4]/30">
              SUCCESS CASES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              <span className="text-yellow-400">더드림</span>은 말이 아닌<br />
              <span className="text-white decoration-[#3182A4] underline decoration-4 underline-offset-4">결과</span>로 보여드리겠습니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cases.map((item) => (
              <div
                key={item.id}
                className="bg-[#152e46] rounded-2xl overflow-hidden border border-[#234567] hover:border-[#3182A4] transition-all hover:-translate-y-1 cursor-pointer group"
                onClick={() => setModalData({ isOpen: true, type: item.modalType, src: item.modalSrc, title: item.title })}
              >
                {/* Header */}
                <div className="p-6 bg-[#152e46] border-b border-[#234567] group-hover:bg-[#1a3654] transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-[#3182A4] text-sm font-bold">CASE {item.id}</div>
                    <button
                      className="inline-flex items-center gap-1 text-[10px] md:text-xs font-bold text-[#3182A4] hover:text-white transition-all bg-[#3182A4]/10 hover:bg-[#3182A4] px-2.5 py-1 rounded-md border border-[#3182A4]/20 hover:border-[#3182A4]"
                    >
                      상세 보기
                      <FileText className="w-3 h-3" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.type}</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 text-left">
                  {/* Comparison Table-like structure */}
                  <div className="bg-[#0f2336] rounded-lg p-4 space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="text-slate-500 font-bold w-12 flex-shrink-0">Before</span>
                      <span className="text-slate-400">{item.before}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#3182A4] font-bold w-12 flex-shrink-0">After</span>
                      <span className="text-white font-medium">{item.after}</span>
                    </div>
                  </div>

                  {/* Result Highlight */}
                  <div className="py-4 border-t border-[#234567]">
                    <p className="text-slate-400 text-sm mb-1">합의 결과</p>
                    <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                      {item.result}
                    </p>
                    <p className="text-sm text-yellow-400 mt-1">{item.resultDetail}</p>
                  </div>

                  {/* Description */}
                  <div className="border-t border-[#234567] pt-4">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Area */}
          <div className="max-w-4xl mx-auto text-center bg-[#152e46] rounded-3xl p-10 border border-[#234567]">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-slate-200 font-medium mb-8 leading-relaxed">
              각각의 상황이 달라도,<br />
              <strong className="text-white">절대 보험사가 제시한 금액 그대로 합의하지 않습니다.</strong><br /><br />
              과실비율을 줄이고, 합의금을 재산정하고,<br />
              산재까지 동시에 검토해서 <span className="text-yellow-400 font-bold">놓치는 보상 없이</span> 최적의 해결안을 제시합니다.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B3B5A] hover:bg-slate-100 px-10 py-4 rounded-xl font-bold text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
            >
              내 사고 상담 신청하기
            </a>
          </div>

        </div>
      </ScrollReveal>

      <CaseModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData(prev => ({ ...prev, isOpen: false }))}
        type={modalData.type}
        src={modalData.src}
        title={modalData.title}
      />
    </section>
  );
};

export default SuccessCasesSection;