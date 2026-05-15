"use client";
import * as React from "react";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, UserCheck, Scale, MessageSquare } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

interface ExpertProfile {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
    careers: string[];
}

const experts: ExpertProfile[] = [
    {
        id: 1,
        name: "박성훈",
        role: "대표변호사",
        image: "/expert_park_sunghoon.jpg",
        quote: "20년 경력 산재전문 노무사출신 변호사",
        careers: [
            "경북대학교 졸업",
            "변호사, 13기 공인노무사",
            "現) 더드림 법률사무소 대표변호사",
            "現) 산업재해보상보험심사위원회 심사위원",
            "現) 국민권익위원회 전문상담위원(변호사)",
            "現) 한국공인노무사회 법률자문단 고문",
            "現) 서울소방본부 권리구제 법률자문단"
        ]
    },
    {
        id: 2,
        name: "김철기",
        role: "손해사정사",
        image: "/expert_kim_chulgi.jpg",
        quote: "전문 손해사정사의 정밀한 장해 평가",
        careers: [
            "명지대학교 교통공학 학사",
            "손해사정사, 차량손해사정사",
            "現) 더드림 법률사무소",
            "前) 더케이손해보험 대인, 대물 보상팀"
        ]
    },
    {
        id: 3,
        name: "김선우",
        role: "노무사",
        image: "/expert_kim_sunwoo.jpg",
        quote: "산재 및 권리구제 전문 노무사",
        careers: [
            "세종대학교 졸업",
            "33기 공인노무사",
            "現) 더드림 법률사무소",
            "現) 서울소방본부 권리구제 법률자문단",
            "前) YK 노무법인"
        ]
    }
];

const ExpertSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === experts.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? experts.length - 1 : prev - 1));
    };

    const currentExpert = experts[activeIndex];

    return (
        <section id="our-team" className="relative py-24 bg-white overflow-hidden">
            {/* Background Image Layer with Teal tint */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]"
                style={{
                    backgroundImage: 'url("/intro_img1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <ScrollReveal>
                <div className="container mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded bg-[#E0F2F1] text-[#006064] text-sm font-bold tracking-widest mb-4">
                            OUR TEAM
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#333333]">
                            결과를 바꾸는 더드림의 <span className="text-[#0D9488]">드림팀</span>을 소개합니다.
                        </h2>
                    </div>

                    {/* Expert Carousel */}
                    <div className="max-w-5xl mx-auto mb-24 relative">
                        <div className="bg-[#F0FDF4] rounded-3xl overflow-hidden shadow-xl border border-emerald-50 flex flex-col md:flex-row h-[750px] md:h-[650px]">

                            {/* Image Section */}
                            <div className="md:w-5/12 relative flex-1 min-h-0 md:h-full bg-slate-200">
                                <img
                                    src={currentExpert.image}
                                    alt={currentExpert.name}
                                    className="absolute inset-0 w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/60 to-transparent md:hidden"></div>
                                <div className="absolute bottom-4 left-4 text-white md:hidden">
                                    <p className="text-sm opacity-90">{currentExpert.role}</p>
                                    <h3 className="text-2xl font-bold">{currentExpert.name}</h3>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="md:w-7/12 p-6 md:p-12 flex flex-col justify-center relative md:h-full h-auto shrink-0 md:shrink">
                                <div className="mb-8 hidden md:block">
                                    <p className="text-[#0D9488] font-bold mb-1 text-sm">{currentExpert.role}</p>
                                    <h3 className="text-4xl font-black text-[#333333]">{currentExpert.name}</h3>
                                </div>

                                <div className="mb-6 md:mb-8 flex-1 flex flex-col justify-start md:justify-center">
                                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-emerald-200 mb-3 md:mb-4 fill-current" />
                                    <p className="text-lg md:text-2xl font-medium text-slate-700 italic leading-relaxed">
                                        <span className="quote-font">"{currentExpert.quote}"</span>
                                    </p>
                                </div>

                                <ul className="space-y-2 md:space-y-3 mb-8">
                                    {currentExpert.careers.map((career, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-2.5 flex-shrink-0"></div>
                                            <span className="text-sm">{career}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Navigation Controls */}
                                <div className="flex items-center gap-2 md:gap-4 mt-auto pt-6 border-t border-emerald-100 w-full justify-between md:justify-start">
                                    <button
                                        onClick={prevSlide}
                                        className="p-3 rounded-full border border-emerald-200 hover:bg-white hover:border-[#0D9488] hover:text-[#0D9488] transition-all flex-shrink-0"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <div className="flex gap-2">
                                        {experts.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveIndex(idx)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${idx === activeIndex ? "bg-[#0D9488] w-8" : "bg-emerald-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={nextSlide}
                                        className="p-3 rounded-full border border-emerald-200 hover:bg-white hover:border-[#0D9488] hover:text-[#0D9488] transition-all flex-shrink-0"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 Promises */}
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#333333]">
                                변하지 않는 더드림의 <span className="text-[#0D9488]">세 가지 약속</span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Promise 1 */}
                            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-12 h-12 bg-emerald-50 text-[#0D9488] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#064E3B] group-hover:text-white transition-colors">
                                    <UserCheck className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-[#333333] mb-3">
                                    <span className="text-[#0D9488] text-sm block mb-1">원칙 1</span>
                                    산재 전문 노무사가<br />초기 상담을 진행합니다.
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    다른 곳에서는 종종 보조인이 전화를 받고, 전문가는 수임 후에나 만날 수 있습니다.
                                    더드림에서는 <strong>산재 전문 노무사가 처음부터 직접 상담</strong>합니다.
                                </p>
                            </div>

                            {/* Promise 2 */}
                            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-12 h-12 bg-emerald-50 text-[#0D9488] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#064E3B] group-hover:text-white transition-colors">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-[#333333] mb-3">
                                    <span className="text-[#0D9488] text-sm block mb-1">원칙 2</span>
                                    착수금 없이,<br />상담을 진행합니다.
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    <strong>부담없이 상담</strong>받을 수 있으며, <strong>착수금이 없기</strong> 때문에 부담없이 사고초기부터 의뢰가 가능합니다.
                                </p>
                            </div>

                            {/* Promise 3 */}
                            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-12 h-12 bg-emerald-50 text-[#0D9488] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#064E3B] group-hover:text-white transition-colors">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-[#333333] mb-3">
                                    <span className="text-[#0D9488] text-sm block mb-1">원칙 3</span>
                                    객관적으로<br />사건을 판단해드립니다.
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    무리하게 사건수임하지 않으며, 의뢰인 입장에서 전문가 개입이 유리하지 않은 사건에 대해서는 <strong>가감없이 객관적으로</strong> 조언드립니다.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href="#contact-form"
                                className="inline-flex items-center justify-center bg-[#064E3B] hover:bg-[#043327] text-white px-6 md:px-10 py-5 rounded-2xl font-bold text-base md:text-xl transition-all shadow-[0_0_20px_rgba(6,78,59,0.3)] hover:shadow-[0_0_30px_rgba(6,78,59,0.5)] transform hover:-translate-y-1 whitespace-nowrap"
                            >
                                전문가에게 내 사건 상담하기
                            </a>
                        </div>
                    </div>

                </div>
            </ScrollReveal>
        </section>
    );
};

export default ExpertSection;
