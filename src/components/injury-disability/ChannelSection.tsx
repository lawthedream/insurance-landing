"use client";

import * as React from "react";
import { useState, useEffect } from 'react';
import { Youtube, ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const videos = [
    {
        id: "b9fmi1RcLvM",
        title: "13년 전 사고로 남은 후유장해 보험금 지급이 가능할까?",
        thumbnail: "https://img.youtube.com/vi/b9fmi1RcLvM/maxresdefault.jpg"
    },
    {
        id: "WBEeAQNt8hY",
        title: "척추압박골절의 후유장해 보험금을 받기위한 핵심조언!",
        thumbnail: "https://img.youtube.com/vi/WBEeAQNt8hY/maxresdefault.jpg"
    },
    {
        id: "GxZS8QS7UWA",
        title: "실제사례로 알아보는 해외근재보험과 보상",
        thumbnail: "https://img.youtube.com/vi/GxZS8QS7UWA/maxresdefault.jpg"
    }
];

const ChannelSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    useEffect(() => {
        if (playingVideoId) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [playingVideoId]);

    const nextSlide = () => {
        setPlayingVideoId(null);
        setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setPlayingVideoId(null);
        setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    return (
        <section id="channel" className="py-24 bg-[#F9F9F7] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#2C3E50]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-10 md:mb-16">
                        <span className="inline-block py-1 px-3 rounded bg-[#2C3E50]/10 text-[#2C3E50] text-sm font-bold tracking-widest mb-4">
                            CHANNEL
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#333333] mb-6">
                            상해후유장해, <span className="text-[#EDC967]">알수록 유리합니다.</span>
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            더드림의 변호사·노무사·손해사정사가<br className="hidden md:block" />
                            직접 전하는 보상 정보를 확인하세요.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="max-w-5xl mx-auto relative group">
                    <div className="text-center mb-6">
                        <h3 className="flex flex-col md:flex-row items-center justify-center gap-2 text-xl md:text-2xl font-bold text-[#333333]">
                            <div className="flex items-center gap-2">
                                <Youtube className="w-8 h-8 text-red-600" />
                                더드림TV
                            </div>
                            <span className="text-slate-400 font-medium text-sm md:text-base">— 보험보상 대표 유튜브채널</span>
                        </h3>
                    </div>

                    <ScrollReveal>
                        <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                            {videos.map((video, idx) => (
                                <div
                                    key={video.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                                        }`}
                                >
                                    {playingVideoId === video.id ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <button
                                            onClick={() => setPlayingVideoId(video.id)}
                                            className="block w-full h-full relative group/video"
                                        >
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/10 transition-colors flex items-center justify-center">
                                                <div className="w-12 h-12 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover/video:scale-110 transition-transform">
                                                    <Play className="w-6 h-6 md:w-10 md:h-10 fill-current ml-1" />
                                                </div>
                                            </div>
                                            {/* Title: Overlay on Desktop, Hidden on Mobile inside the box */}
                                            <div className="hidden md:block absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/80 to-transparent text-left">
                                                <p className="text-white text-2xl font-bold">{video.title}</p>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Title: Below video on Mobile */}
                        <div className="md:hidden mt-4 text-center px-2 min-h-[3rem] flex items-center justify-center">
                            <p className="text-[#2C3E50] text-lg font-bold leading-tight break-keep">
                                {videos[activeIndex].title}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {videos.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-2 rounded-full transition-all ${idx === activeIndex ? "bg-[#2C3E50] w-8" : "bg-slate-300 w-2"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <ScrollReveal>
                    <div className="text-center mt-12">
                        <a
                            href="https://www.youtube.com/@the_Dream_Traffic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#2C3E50] text-[#EDC967] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a2533] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            유튜브 채널 바로가기
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ChannelSection;
