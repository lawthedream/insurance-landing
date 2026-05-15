"use client";
import * as React from "react";
import { useState } from 'react';
import { AlertCircle, FileSearch, Activity, Clock, Ruler, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const issues = [
    {
        id: '01',
        icon: FileSearch,
        title: "후유장해진단서 발급",
        subtitle: "병원에서 진단서가 안 나올 때,",
        desc: "의사가 발급을 거부하거나 소극적인 경우가 많습니다. 약관 기준을 아는 전문가가 개입하면 달라집니다.",
        image: "/issue_1.png"
    },
    {
        id: '02',
        icon: AlertCircle,
        title: "보험사 의료자문 반박",
        subtitle: "보험사 의료자문, 반박할 수 있습니다.",
        desc: "의료자문은 보험사가 의뢰한 것이지 절대 객관적 판정이 아닙니다.",
        image: "/issue_2.png"
    },
    {
        id: '03',
        icon: Activity,
        title: "기왕증 감액",
        subtitle: "기존 질환(기왕증)이 있어도 잘 따져봐야 합니다.",
        desc: "보험 가입 시점에 따라 감액 주장이 불가능하기도 합니다. 확인 없이 받아들이면 수백만 원을 잃을 수 있습니다.",
        image: "/issue_3.jpg"
    },
    {
        id: '04',
        icon: Clock,
        title: "한시장해 vs 영구장해",
        subtitle: "\"시간이 지나면 낫습니다\" 보험사가 쓰는 감액 논리입니다.",
        desc: "하지만 후유증이 실제로 남아 있다면, 한시장해 주장을 뒤집고 보험금을 받을 수 있습니다.",
        image: "/issue_4.png"
    },
    {
        id: '05',
        icon: Ruler,
        title: "각도 측정 방식",
        subtitle: "어디를 어떻게 재느냐에 따라 장해율이 2배까지 달라집니다.",
        desc: "보험사의 측정하는 방식에 대응을 못하면, 받을 수 있는 보험금을 그대로 놓치게 됩니다.",
        image: "/issue_5.png"
    }
];

const IssueSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="key-issues" className="py-32 bg-[#F9F9F7] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <span className="inline-block py-1 px-3 rounded bg-[#2D2D2D]/10 text-[#2D2D2D] text-sm font-bold tracking-widest mb-4">
                                KEY ISSUES
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-[#2D2D2D] leading-[1.1] tracking-tight">
                                후유장해보험금,<br />
                                이런 쟁점에서 <span className="text-[#C77E1E]">금액이 달라집니다</span>.
                            </h2>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left: Interactive List */}
                    <div className="order-2 md:order-1 md:col-span-12 lg:col-span-5 space-y-0">
                        {issues.map((issue, index) => (
                            <div
                                key={issue.id}
                                className={`group cursor-pointer border-t border-slate-200 py-8 transition-all duration-500 ${activeTab === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-sm font-bold text-slate-400 pt-1">{issue.id}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className={`text-xl md:text-2xl font-black transition-colors ${activeTab === index ? 'text-[#2D2D2D]' : 'text-slate-500'}`}>
                                                {issue.title}
                                            </h3>
                                            {activeTab === index && (
                                                <ArrowRight className="w-6 h-6 text-[#C77E1E]" />
                                            )}
                                        </div>
                                        {activeTab === index && (
                                            <ScrollReveal>
                                                <div className="space-y-3">
                                                    <h4 className="font-bold text-[#C77E1E] leading-relaxed">{issue.subtitle}</h4>
                                                    <p className="text-slate-600 leading-relaxed break-keep">
                                                        {issue.desc}
                                                    </p>
                                                </div>
                                            </ScrollReveal>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>
                    </div>

                    {/* Right: Large Visual Area Section */}
                    <div className="order-1 md:order-2 md:col-span-12 lg:col-span-7 sticky top-32 group mb-4 md:mb-0">
                        <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white transition-all duration-700">
                            {issues.map((issue, index) => (
                                <img
                                    key={issue.id}
                                    src={issue.image}
                                    alt={issue.title}
                                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out transform ${activeTab === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                                />
                            ))}
                            {/* Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default IssueSection;
