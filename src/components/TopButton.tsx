"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const TopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 md:right-8 right-4 z-50 p-3 md:p-4 rounded-full bg-[#1A1A1A] text-white shadow-2xl transition-all duration-300 hover:bg-[#C77E1E] hover:-translate-y-1 active:scale-95 border border-white/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
    );
};

export default TopButton;
