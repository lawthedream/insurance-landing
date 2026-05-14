"use client";

import * as React from "react";
import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import { ArrowRight } from 'lucide-react';

const BrandStorySection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const chapters = [
        {
            id: '01',
            title: "대표변호사 박성훈은 10년간",
            description: "산재 전문 노무사로 일했습니다. 수많은 사건을 진행하며 매번 같은 문제를 마주했습니다.",
            image: "/expert_park_sunghoon.jpg"
        },
        {
            id: '02',
            title: "하나의 사고에 전문가 세 명",
            description: "산재는 노무사에게, 보험 청구는 손해사정사에게, 소송은 변호사에게. 하나의 사고에 전문가 세 명을 찾아야 했습니다. 그때마다 고객은 처음부터 다시 설명해야 했고, 비용은 이중 삼중으로 들었고, 시간은 계속 흘러갔습니다.",
            image: "/intro_img3.jpg"
        },
        {
            id: '03',
            title: "한 곳에서 끝낼 수는 없을까?",
            description: "그 질문 하나로 로스쿨에 진학했고, 변호사가 되어 더드림법률사무소를 설립했습니다. 그리고 오랜 동료들과 함께했습니다.",
            image: "/intro_img1.jpg"
        },
        {
            id: '04',
            title: "20년 동료들과의 진심 어린 동행",
            description: "손해사정사 김철기, 대표노무사 공기봉 등 각 분야 최고의 전문가들이 고객의 불편을 직접 해결하기 위해 모였습니다.",
            image: "/intro_img4.jpg"
        }
    ];

    return (
        <section id="brand-story" className="py-32 bg-[#F9F9F7] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/10 text-[#2C3E50] text-sm font-bold tracking-widest mb-4">
                                OUR STORY
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-[#2C3E50] leading-[1.1] tracking-tight">
                                더드림은 <span className="text-[#EDC967]">한 사람의 고민</span>에서<br /> 시작되었습니다.
                            </h2>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left: Interactive List */}
                    <div className="order-2 md:order-1 md:col-span-12 lg:col-span-5 space-y-0">
                        {chapters.map((chapter, index) => (
                            <div
                                key={chapter.id}
                                className={`group cursor-pointer border-t border-slate-200 py-8 transition-all duration-500 ${activeTab === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-sm font-bold text-slate-400 pt-1">{chapter.id}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className={`text-xl md:text-2xl font-black transition-colors ${activeTab === index ? 'text-[#2C3E50]' : 'text-slate-500'}`}>
                                                {chapter.title}
                                            </h3>
                                            {activeTab === index && (
                                                <ArrowRight className="w-6 h-6 text-[#EDC967]" />
                                            )}
                                        </div>
                                        {activeTab === index && (
                                            <ScrollReveal>
                                                <p className="text-slate-600 leading-relaxed break-keep">
                                                    {chapter.description}
                                                </p>
                                            </ScrollReveal>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>
                    </div>

                    {/* Right: Large Visual Image */}
                    <div className="order-1 md:order-2 md:col-span-12 lg:col-span-7 sticky top-32 group mb-4 md:mb-0">
                        <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white transition-all duration-700">
                            {chapters.map((chapter, index) => (
                                <img
                                    key={chapter.id}
                                    src={chapter.image}
                                    alt={chapter.title}
                                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out transform ${activeTab === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                                        }`}
                                />
                            ))}
                            {/* Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                </div>

                {/* Bottom Conclusion Section */}
                <ScrollReveal>
                    <div className="mt-24 md:mt-32 p-12 md:p-20 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-[#2C3E50]/5 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-[#EDC967]/5 rounded-br-full -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-110"></div>

                        <p className="text-base md:text-lg text-slate-500 mb-8 font-medium">
                            더드림은 사업을 위해 모인 팀이 아닙니다.
                        </p>
                        <h3 className="text-xl md:text-3xl font-black text-[#2C3E50] leading-tight break-keep">
                            같은 문제를 <span className="text-[#EDC967] relative">
                                오래 고민한 사람들
                                <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-[#EDC967]/20 -z-10 rounded-full"></span>
                            </span>이,<br />
                            고객의 불편을 <span className="text-[#EDC967] relative">
                                직접 해결하기 위해
                                <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-[#EDC967]/20 -z-10 rounded-full"></span>
                            </span> 모인 팀입니다.
                        </h3>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default BrandStorySection;
