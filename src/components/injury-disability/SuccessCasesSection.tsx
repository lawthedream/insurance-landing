"use client";

import { useState } from "react";
import { Trophy, X, Maximize2 } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

interface CaseItem {
  id: number;
  tag: string;
  title: string;
  type: string;
  before: string;
  after: string;
  result: string;
  resultDetail: string;
  description: string;
  image?: string;
}

const cases: CaseItem[] = [
  {
    id: 1,
    tag: "교통사고 후유장해",
    title: "오토바이 교통사고",
    type: "오토바이 교통사고 (우측 원위요골골절)",
    before: "과실 30%, 장해율 미확정",
    after: "과실 20%로 감산 (- 10%) / 한시장해 13% (3~5년) 정밀 산정 (맥브라이드 장해평가법)",
    result: "2,354만원 수령",
    resultDetail: "과실 감산 + 한시장해 인정",
    description: "직접 현장조사와 의학적 검토로 과실비율을 줄이고, 노동능력상실율을 정밀 산정했습니다.",
    image: "/cases/08_오토바이_교통사고.png"
  },
  {
    id: 2,
    tag: "교통사고 후유장해",
    title: "자전거 교통사고",
    type: "택시-자전거 교차로 사고 (요추제1번골절)",
    before: "쌍방 과실 사고로 과실비율·장해율 미확정",
    after: "현장조사로 과실비율 확정 / 의학적 검토로 노동능력상실율 정밀 산정",
    result: "2,300만원 수령",
    resultDetail: "요추골절 노동능력상실율 평가 및 과실비율 조정으로 정당한 보상을 확보했습니다.",
    description: "요추골절 노동능력상실율 평가 및 과실비율 조정으로 정당한 보상을 확보했습니다.",
    image: "/cases/01_척추압박골절_후유장해보상.png"
  },
  {
    id: 3,
    tag: "배상책임보험 후유장해",
    title: "요양병원 낙상사고",
    type: "요양병원 낙상사고 (골절)",
    before: "환자 과실 vs 병원 과실 다툼",
    after: "CCTV·관리기록 확보 / 병원 주의의무 위반 입증",
    result: "1,400만원 수령",
    resultDetail: "병원의 관리 소홀을 증거로 입증하여 배상책임보험으로 보상받았습니다.",
    description: "병원의 관리 소홀을 증거로 입증하여 배상책임보험으로 보상받았습니다.",
    image: "/cases/02_요양병원_낙상사고.png"
  },
  {
    id: 4,
    tag: "배상책임보험 후유장해",
    title: "엄지발가락 절단",
    type: "엄지발가락 절단 후유장해",
    before: "후유장해 보험금 청구 방법 모름",
    after: "일상생활배상책임보험 확인 / 장해율 정밀 산정",
    result: "1,500만원 수령",
    resultDetail: "절단 장해를 정확히 평가하고 일상생활배상책임보험을 활용했습니다.",
    description: "절단 장해를 정확히 평가하고 일상생활배상책임보험을 활용했습니다.",
    image: "/cases/05_일상생활배상_발가락절단.png"
  },
  {
    id: 5,
    tag: "배상책임보험 후유장해",
    title: "뚝배기 화상사고",
    type: "뚝배기 화상사고",
    before: "음식점과의 배상 협의 난항",
    after: "음식점 배상책임보험 확인 / 화상 장해 평가",
    result: "배상책임보험 활용 성공",
    resultDetail: "음식점 배상책임보험을 통해 화상 후유장해 보상을 확보했습니다.",
    description: "음식점 배상책임보험을 통해 화상 후유장해 보상을 확보했습니다.",
    image: "/cases/04_뚝배기화상사고.png"
  },
  {
    id: 6,
    tag: "근재보험 후유장해",
    title: "해외근재 시력손상",
    type: "해외근무 중 시력손상 (감각장해)",
    before: "해외근재보험 청구 절차 복잡, 진행 불가 상태",
    after: "노무사 협업으로 업무관련성 입증 / 장해등급 확정 / 해외근재보험 청구 완료",
    result: "3,600만원 수령",
    resultDetail: "복잡한 해외근재보험 청구를 노무사·손해사정사 협업으로 원스톱 처리했습니다.",
    description: "복잡한 해외근재보험 청구를 노무사·손해사정사 협업으로 원스톱 처리했습니다.",
    image: "/cases/07_해외근재보험_시력손상.png"
  }
];

const SuccessCasesSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="success-cases" className="py-24 bg-[#1B3B5A] text-white">
      <ScrollReveal>
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/40 text-[#EDC967] text-sm font-bold tracking-widest mb-4 border border-[#EDC967]/30">
              SUCCESS CASES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="text-[#EDC967]">더드림</span>은 말이 아닌<br />
              <span className="text-white decoration-[#2C3E50] underline decoration-4 underline-offset-4">결과</span>로 보여드리겠습니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cases.map((item) => (
              <div
                key={item.id}
                className={`bg-[#152e46] rounded-3xl overflow-hidden border border-[#234567] hover:border-[#EDC967] transition-all hover:-translate-y-1 group ${item.image ? 'cursor-pointer' : ''}`}
                onClick={() => item.image && setSelectedImage(item.image)}
              >
                {/* Header */}
                <div className="p-6 bg-[#183652] border-b border-[#234567]">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-1 bg-[#2C3E50]/40 text-[#EDC967] text-[10px] font-bold rounded-md border border-[#EDC967]/30">
                      {item.tag}
                    </span>
                    <span className="text-slate-500 text-[10px] font-bold">CASE {item.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs line-clamp-1">{item.type}</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Comparison Table-like structure */}
                  <div className="bg-[#0f2336] rounded-xl p-4 space-y-3 text-sm">
                    <div className="flex gap-4">
                      <span className="text-slate-500 font-bold w-12 flex-shrink-0 uppercase text-[10px] pt-0.5">Before</span>
                      <span className="text-slate-400 leading-snug">{item.before}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#EDC967] font-bold w-12 flex-shrink-0 uppercase text-[10px] pt-0.5">After</span>
                      <span className="text-white font-medium leading-snug">{item.after}</span>
                    </div>
                  </div>

                  {/* Result Highlight */}
                  <div className="py-4 border-t border-[#234567]">
                    <p className="text-slate-400 text-xs mb-2">최종 결과</p>
                    <p className="text-2xl md:text-3xl font-black text-[#EDC967] leading-tight">
                      {item.result}
                    </p>
                    <p className="text-sm text-slate-300 mt-2 font-medium">{item.resultDetail}</p>
                  </div>

                  {/* Description */}
                  <div className="border-t border-[#234567] pt-4">
                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {item.image && (
                    <div className="pt-2 flex justify-end">
                      <span className="text-[9px] text-[#3182A4] font-bold opacity-0 group-hover:opacity-100 transition-opacity">클릭하여 인증 이미지 보기</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Area */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-[#152e46] to-[#0f2336] rounded-3xl p-10 md:p-14 border border-[#234567] shadow-2xl relative overflow-hidden">
            <Trophy className="w-16 h-16 text-[#EDC967] mx-auto mb-8 animate-bounce" />
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight">
              정밀한 장해평가, 기여도 산정,<br />
              이중청구 가능성까지 검토하여<br />
              <span className="text-[#EDC967] italic">"놓치는 보상 없이"</span> 해결합니다.
            </h3>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1B3B5A] hover:bg-slate-100 px-12 py-5 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
            >
              내 사고 상담 신청하기
            </a>

            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3182A4] rounded-full blur-[80px] opacity-20"></div>
          </div>

        </div>
      </ScrollReveal>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#152e46] rounded-2xl overflow-hidden shadow-2xl border border-[#3182A4]/30 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-[#234567] bg-[#183652]">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Maximize2 className="w-5 h-5 text-[#3182A4]" />
                성공 사례 인증
              </h4>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-[#3182A4]/20 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Scrollable Image */}
            <div className="p-4 md:p-6 overflow-auto max-h-[calc(90vh-64px)] flex justify-center items-start bg-slate-100">
              <img
                src={selectedImage}
                alt="Success Case Detail"
                className="max-w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessCasesSection;