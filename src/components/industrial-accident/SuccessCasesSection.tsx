"use client";
import React, { useState } from "react";
import { Trophy, FileText } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import CaseModal from '../CaseModal';

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
    title: "시멘트 회사 소음성난청",
    type: "시멘트 회사 장기 근무, 감각신경성난청 진단",
    before: "시멘트 분쇄·포장 공정에서 수년간 소음에 노출되었으나, 난청이 업무 때문인지 확신이 없어 산재 신청을 망설임",
    after: "작업환경측정 결과·청력검사 기록 등 소음 노출 입증 자료 확보, 산재 신청 진행",
    result: "요양급여 및 장해급여 수령",
    resultDetail: "산재 승인 성공",
    description: "소음성난청은 입증 자료를 어떻게 준비하느냐에 따라 결과가 달라집니다.",
    modalType: 'image',
    modalSrc: "/cases/industry_case_1.png"
  },
  {
    id: 2,
    title: "버스기사 허리통증",
    type: "시내버스 기사, 장기간 운전으로 인한 허리 통증(요추 추간판탈출증)",
    before: "퇴행성 질환으로 판단될 수 있어 산재 인정이 불투명한 상황",
    after: "장시간 운전·진동 노출 등 업무 기인성 입증 자료 체계적 정비, 산재 신청",
    result: "요양급여 수령",
    resultDetail: "산재 승인 성공",
    description: "퇴행성 질환도 업무가 악화 원인임을 입증하면 산재로 인정받을 수 있습니다.",
    modalType: 'image',
    modalSrc: "/cases/industry_case_2.png"
  },
  {
    id: 3,
    title: "용접공 COPD",
    type: "용접공 장기 근무, 만성폐쇄성폐질환(COPD) 진단",
    before: "용접 흄·분진 등 유해물질에 장기간 노출되었으나, 흡연력이 있어 업무 기인성 다툼 여지",
    after: "작업환경·유해물질 노출 이력·의학적 소견을 종합 정비하여 산재 신청",
    result: "요양급여 및 장해급여 수령",
    resultDetail: "산재 승인 성공",
    description: "흡연력이 있어도 유해물질 노출이 주된 원인임을 입증하면 산재 인정이 가능합니다.",
    modalType: 'image',
    modalSrc: "/cases/industry_case_3.png"
  },
  {
    id: 4,
    title: "경비원 급성심근경색",
    type: "아파트 경비원, 근무 중 급성심근경색 발생",
    before: "기저질환(고혈압 등) 존재로 업무상 질병 인정 여부 불투명",
    after: "장시간·교대 근무에 따른 과로 입증, 업무상 부담과 발병 사이 인과관계 소명",
    result: "요양급여 수령",
    resultDetail: "산재 승인 성공",
    description: "기저질환이 있더라도 업무상 과로가 발병을 촉진했다면 산재로 인정됩니다.",
    modalType: 'image',
    modalSrc: "/cases/industry_case_4.png"
  },
  {
    id: 5,
    title: "금형제조업 회전근개파열",
    type: "금형제조업 근무, 어깨 회전근개파열 진단",
    before: "반복적 중량물 취급·어깨 사용 작업이었으나, 퇴행성 변화와 구별이 쟁점",
    after: "작업 내용·반복 동작 빈도·근무 기간 등을 정리하여 업무 기인성 입증",
    result: "요양급여 수령",
    resultDetail: "산재 승인 성공",
    description: "근골격계 질환은 작업 강도와 반복성을 구체적으로 입증하는 것이 핵심입니다.",
    modalType: 'image',
    modalSrc: "/cases/industry_case_5.png"
  },
  {
    id: 6,
    title: "동통장해",
    type: "업무상 사고 후 지속적인 동통(통증) 장해",
    before: "영상 검사에서 뚜렷한 소견이 없어 장해 인정이 어려운 상황",
    after: "통증 지속 기간·일상생활 제한·의학적 소견 등 동통장해 입증 자료 확보",
    result: "산재 승인",
    resultDetail: "산재 승인 성공",
    description: "눈에 보이지 않는 통증도 체계적으로 입증하면 장해로 인정받을 수 있습니다.",
    modalType: 'image',
    modalSrc: "/cases/industry_case_6.png"
  }
];

const SuccessCasesSection: React.FC = () => {
  const [modalData, setModalData] = useState<{ isOpen: boolean, type: 'image' | 'youtube' | null, src: string | null, title: string }>({
    isOpen: false, type: null, src: null, title: ''
  });

  return (
    <section id="success-cases" className="py-24 bg-[#064E3B] text-white">
      <ScrollReveal>
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2DD4BF]/20 text-[#2DD4BF] text-sm font-bold tracking-widest mb-4 border border-[#2DD4BF]/30">
              SUCCESS CASES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              <span className="text-yellow-400">더드림</span>은 말이 아닌<br />
              <span className="text-white decoration-[#2DD4BF] underline decoration-4 underline-offset-4">결과</span>로 보여드리겠습니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cases.map((item) => (
              <div
                key={item.id}
                className="bg-[#043327] rounded-3xl overflow-hidden border border-[#0A5D4A] hover:border-[#2DD4BF] transition-all hover:-translate-y-1 cursor-pointer group"
                onClick={() => setModalData({ isOpen: true, type: item.modalType, src: item.modalSrc, title: item.title })}
              >
                {/* Header */}
                <div className="p-6 bg-[#043327] border-b border-[#0A5D4A] group-hover:bg-[#054D3B] transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-[#2DD4BF] text-sm font-bold">CASE {item.id}</div>
                    <button
                      className="inline-flex items-center gap-1 text-[10px] md:text-xs font-bold text-[#2DD4BF] hover:text-white transition-all bg-[#2DD4BF]/10 hover:bg-[#2DD4BF] px-2.5 py-1 rounded-md border border-[#2DD4BF]/20 hover:border-[#2DD4BF]"
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
                  <div className="bg-[#022119] rounded-xl p-4 space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="text-slate-500 font-bold w-12 flex-shrink-0">Before</span>
                      <span className="text-slate-400">{item.before}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#2DD4BF] font-bold w-12 flex-shrink-0">After</span>
                      <span className="text-white font-medium">{item.after}</span>
                    </div>
                  </div>

                  {/* Result Highlight */}
                  <div className="py-4 border-t border-[#0A5D4A]">
                    <p className="text-slate-400 text-sm mb-1">진행 결과</p>
                    <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                      {item.result}
                    </p>
                    <p className="text-sm text-yellow-400 mt-1">{item.resultDetail}</p>
                  </div>

                  {/* Description */}
                  <div className="border-t border-[#0A5D4A] pt-4">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Area */}
          <div className="max-w-4xl mx-auto text-center bg-[#043327] rounded-3xl p-10 border border-[#0A5D4A]">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-slate-200 font-medium mb-8 leading-relaxed text-pretty">
              각각의 상황이 달라도,<br />
              <strong className="text-white">절대 공단이 정한 결과를 그대로 받아들이지 않습니다.</strong><br /><br />
              직업병 입증부터 불승인 대응, 장해등급 재평가까지<br />
              <span className="text-yellow-400 font-bold">놓치는 보상 없이</span> 해결합니다.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#064E3B] hover:bg-slate-100 px-10 py-4 rounded-xl font-bold text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
            >
              내 사건 상담 신청하기
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
