"use client";
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface CaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'image' | 'youtube' | null;
    src: string | null;
    title: string;
}

const CaseModal: React.FC<CaseModalProps> = ({ isOpen, onClose, type, src, title }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isClient || !isOpen || !src || !type) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const getYoutubeEmbedUrl = (url: string) => {
        const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
        if (videoIdMatch && videoIdMatch[1]) {
            return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1`;
        }
        return url;
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center bg-[#152e46] rounded-2xl overflow-hidden shadow-2xl border border-[#234567]">

                {/* Header */}
                <div className="w-full h-14 bg-[#1a3654] border-b border-[#234567] flex items-center justify-between px-6 flex-shrink-0">
                    <h3 className="text-white font-bold truncate pr-4">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content Body */}
                <div className={`w-full relative flex-grow overflow-auto min-h-[300px] max-h-[calc(90vh-56px)] ${type === 'image' ? 'bg-[#0f2336] p-4 md:p-6 flex justify-center items-start' : 'bg-black flex items-center justify-center'}`}>
                    {type === 'image' && (
                        <img
                            src={src}
                            alt={title}
                            className="max-w-full h-auto shadow-lg"
                        />
                    )}

                    {type === 'youtube' && (
                        <div className="w-full aspect-video bg-black max-h-[calc(90vh-56px)]">
                            <iframe
                                src={getYoutubeEmbedUrl(src)}
                                title={title}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseModal;
