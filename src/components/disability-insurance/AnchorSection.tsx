"use client";
import React, { useState } from "react";
import { Briefcase, ArrowRightCircle, FileText } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import CaseModal from './CaseModal';

const AnchorSection: React.FC = () => {
    const [modalData, setModalData] = useState<{ isOpen: boolean, type: 'image' | 'youtube' | null, src: string | null, title: string }>({
        isOpen: false, type: null, src: null, title: ''
    });
    return (
        <section className="py-24 bg-[#1A1A1A] relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D2D2D] rounded-full mix-blend-screen filter blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/3"></div>

            <ScrollReveal>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

                        <div className="w-full md:w-1/2">
                            <span className="inline-block py-1 px-3 rounded bg-white/10 text-[#C77E1E] text-sm font-bold tracking-widest mb-6 border border-white/20">
                                WORKPLACE ACCIDENT
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                                <span className="text-[#C77E1E]">업무 중 사고</span>라면,<br />
                                산재 장해등급도 <span className="underline decoration-white/30 underline-offset-4 decoration-4">한 번에</span> 검토합니다.
                            </h2>
                            <div className="bg-[#222222] rounded-2xl p-6 md:p-8 border border-[#404040] mb-8 shadow-inner">
                                <p className="text-lg md:text-xl font-medium leading-relaxed mb-4">
                                    개인보험 후유장해보험금과<br />
                                    산재 장해보상금은<br />
                                    <strong className="text-[#C77E1E] text-2xl md:text-3xl font-black block mt-2">동시에 받을 수 있습니다.</strong>
                                </p>
                                <div className="w-12 h-1 bg-[#E69A27] rounded-full my-6"></div>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    <strong className="text-white font-bold">더드림은 노무사와 함께</strong><br />
                                    한 번에 원스톱으로 처리합니다.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-6">
                            <div
                                className="bg-white text-[#333333] rounded-3xl p-8 shadow-xl transition-all hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-[#C77E1E]"
                                onClick={() => setModalData({ isOpen: true, type: 'image', src: '/cases/05_소음성난청_장해등급11호_1.png', title: '소음성난청' })}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#F4F7F9] rounded-full flex items-center justify-center group-hover:bg-[#C77E1E]/10 transition-colors">
                                            <Briefcase className="w-6 h-6 text-[#2D2D2D] group-hover:text-[#C77E1E] transition-colors" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-[#2D2D2D] bg-[#F4F7F9] px-2 py-1 rounded">사례 1</span>
                                            <h3 className="text-xl font-bold mt-1 group-hover:text-[#C77E1E] transition-colors">소음성난청</h3>
                                        </div>
                                    </div>
                                    <button className="hidden md:inline-flex items-center gap-1 text-[10px] md:text-xs font-bold text-[#C77E1E] transition-all bg-[#C77E1E]/10 hover:bg-[#C77E1E] hover:text-white px-2.5 py-1 rounded-md border border-[#C77E1E]/20">
                                        <FileText className="w-3 h-3" /> 상세 보기
                                    </button>
                                </div>
                                <ul className="space-y-3 pl-2 border-t border-slate-100 pt-4">
                                    <li className="flex items-start gap-2">
                                        <ArrowRightCircle className="w-5 h-5 text-[#C77E1E] shrink-0 mt-0.5" />
                                        <span className="font-medium">장해등급 상향 성공</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRightCircle className="w-5 h-5 text-[#C77E1E] shrink-0 mt-0.5" />
                                        <span className="font-medium text-[#2D2D2D]">추가 장해보상금 수령</span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="bg-white text-[#333333] rounded-3xl p-8 shadow-xl transition-all hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-[#C77E1E]"
                                onClick={() => setModalData({ isOpen: true, type: 'youtube', src: 'https://www.youtube.com/watch?v=MowTw06XqXc', title: '콘크리트펌프카 사고 흉터' })}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#F4F7F9] rounded-full flex items-center justify-center group-hover:bg-[#C77E1E]/10 transition-colors">
                                            <Briefcase className="w-6 h-6 text-[#2D2D2D] group-hover:text-[#C77E1E] transition-colors" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-[#2D2D2D] bg-[#F4F7F9] px-2 py-1 rounded">사례 2</span>
                                            <h3 className="text-xl font-bold mt-1 group-hover:text-[#C77E1E] transition-colors">콘크리트펌프카 사고 흉터</h3>
                                        </div>
                                    </div>
                                    <button className="hidden md:inline-flex items-center gap-1 text-[10px] md:text-xs font-bold text-[#C77E1E] transition-all bg-[#C77E1E]/10 hover:bg-[#C77E1E] hover:text-white px-2.5 py-1 rounded-md border border-[#C77E1E]/20">
                                        <FileText className="w-3 h-3" /> 영상 보기
                                    </button>
                                </div>
                                <ul className="space-y-3 pl-2 border-t border-slate-100 pt-4">
                                    <li className="flex items-start gap-2">
                                        <ArrowRightCircle className="w-5 h-5 text-[#C77E1E] shrink-0 mt-0.5" />
                                        <span className="font-medium">장해등급 8급 → 7급 조정</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRightCircle className="w-5 h-5 text-[#C77E1E] shrink-0 mt-0.5" />
                                        <span className="font-medium text-[#2D2D2D]">연금 수급 가능</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-slate-400 text-xs text-center md:text-right font-light pt-2 opacity-80 mt-4">
                                ※ 산재 해당 여부는 사고 상황에 따라 달라지며, 상담 시 확인 가능합니다.
                            </p>
                        </div>

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

export default AnchorSection;
