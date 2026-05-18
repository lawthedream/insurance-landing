"use client";
import * as React from "react";
import { Check, X, ArrowRight, ShieldCheck, Search, FileSignature } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const ExtraCompensationSection: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <ScrollReveal>
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded bg-emerald-50 text-[#0D9488] text-sm font-bold tracking-widest mb-4">
                            HIDDEN COMPENSATION
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6 leading-tight text-pretty">
                            산재로 장해가 남았다면, <br className="hidden md:block" />
                            <span className="text-[#0D9488]">민영보험 후유장해보험금</span>도 <br />
                            동시에 청구해야 합니다.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 font-medium">
                            놓치고 있는 숨은 보상금, 더드림이 찾아드립니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Benefits List */}
                        <div className="space-y-6">
                            {[
                                {
                                    title: "산재보상금과 별도 수령",
                                    desc: "산재 장해급여와 민영보험금은 중복 수령이 가능합니다",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "가입한 보험 모두 검토",
                                    desc: "실손보험 외에 후유장해 특약이 있는지 확인합니다",
                                    icon: Search
                                },
                                {
                                    title: "손해사정사가 직접 청구",
                                    desc: "보험 약관 검토부터 청구서 작성까지 대행합니다",
                                    icon: FileSignature
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-5 p-6 rounded-3xl bg-emerald-50/50 border border-emerald-100 hover:bg-emerald-50 transition-colors">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-[#0D9488]" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#333333] mb-2">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Comparison Table Mini */}
                        <div className="bg-[#064E3B] rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-white">
                            <h4 className="text-xl font-bold mb-8 text-center border-b border-emerald-800 pb-4">왜 더드림이어야 하는가?</h4>
                            <div className="space-y-6">
                                {/* Table Rows */}
                                <div className="grid grid-cols-3 text-center text-sm font-bold opacity-60 mb-2">
                                    <div>항목</div>
                                    <div>일반 노무법인</div>
                                    <div className="text-yellow-400">더드림</div>
                                </div>

                                {[
                                    { name: "산재 신청", normal: true, dream: true },
                                    { name: "불승인 행정소송", normal: "△ (별도 변호사 의뢰)", dream: "O (변호사)" },
                                    { name: "장해등급 정밀 평가", normal: "△ (의견서)", dream: "O (손해사정사)" },
                                    { name: "민영보험 동시 청구", normal: "X", dream: "O (손해사정사)" }
                                ].map((row, i) => (
                                    <div key={i} className="grid grid-cols-3 items-center py-4 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors rounded-xl px-2">
                                        <div className="text-slate-200 font-medium text-sm md:text-base">{row.name}</div>
                                        <div className="flex justify-center text-xs md:text-sm text-slate-400">
                                            {row.normal === true ? <Check className="w-5 h-5 text-emerald-400" /> : row.normal}
                                        </div>
                                        <div className="flex justify-center text-xs md:text-sm text-yellow-400 font-bold">
                                            {row.dream === true ? <Check className="w-6 h-6 font-black" /> : row.dream}
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-8 pt-6 border-t border-emerald-800">
                                    <div className="flex justify-between items-center bg-[#043327] p-5 rounded-2xl border border-emerald-700/50">
                                        <span className="text-slate-300 font-bold">최종 보상금</span>
                                        <div className="text-right">
                                            <div className="text-xs text-slate-400 line-through mb-1">산재보상금</div>
                                            <div className="text-lg md:text-xl font-black text-white">
                                                산재보상금 <span className="text-yellow-400">+ 민영보험금</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-4">
                        <a
                            href="#contact-form"
                            className="inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0B8476] text-white px-8 md:px-12 py-5 rounded-2xl font-black text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] transform hover:-translate-y-1 whitespace-nowrap w-full md:w-auto"
                        >
                            추가 보상 가능 여부 확인하기
                            <ArrowRight className="w-6 h-6 ml-2" />
                        </a>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default ExtraCompensationSection;
