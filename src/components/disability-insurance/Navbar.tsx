"use client";
import * as React from "react";

import { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, PhoneCall } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center gap-2 font-bold text-2xl cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          <img
            src="/logo_new_color.png"
            alt="더드림법률사무소"
            className="h-10 w-auto"
          />
          <span className={isScrolled ? 'text-[#2D2D2D]' : 'text-white'}>
            더드림<span className={`text-sm align-top ml-1 ${isScrolled ? 'text-[#1A1A1A]' : 'text-slate-200'}`}>법률사무소</span>
          </span>
        </div>

        {/* Desktop Menu - Center */}
        <div className={`hidden lg:flex items-center space-x-8 font-medium ${isScrolled ? 'text-[#333333]' : 'text-slate-200'}`}>
          <a href="#solution" className="hover:text-[#2D2D2D] transition-colors whitespace-nowrap">후유장해보험금</a>
          <a href="#success-cases" className="hover:text-[#2D2D2D] transition-colors whitespace-nowrap">성공사례</a>
          <a href="#differentiation" className="hover:text-[#2D2D2D] transition-colors whitespace-nowrap">왜 더드림인가</a>
          <a href="#contact-form" className="hover:text-[#2D2D2D] whitespace-nowrap" onClick={() => setMobileMenuOpen(false)}>상담신청</a>
        </div>

        {/* Desktop Action Buttons - Right */}
        <div className="hidden lg:flex items-center gap-2">
          {pathname !== '/' && (
            <a href="/" className="px-3 py-1 bg-[#2D2D2D] text-white rounded-lg text-sm hover:bg-[#111111] transition-colors whitespace-nowrap">메인</a>
          )}
          {pathname !== '/traffic-accident' && (
            <a href="/traffic-accident" className="px-3 py-1 bg-[#2D2D2D] text-white rounded-lg text-sm hover:bg-[#111111] transition-colors whitespace-nowrap">교통사고합의</a>
          )}
          {pathname !== '/disability-insurance' && (
            <a href="/disability-insurance" className="px-3 py-1 bg-[#2D2D2D] text-white rounded-lg text-sm hover:bg-[#111111] transition-colors whitespace-nowrap">장해보험금분쟁</a>
          )}
          {pathname !== '/industrial-accident' && (
            <a href="/industrial-accident" className="px-3 py-1 bg-[#2D2D2D] text-white rounded-lg text-sm hover:bg-[#111111] transition-colors whitespace-nowrap">산재보험전문</a>
          )}
        </div>


        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={isScrolled ? 'text-[#333333]' : 'text-white'} /> : <Menu className={isScrolled ? 'text-[#333333]' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 lg:hidden text-[#333333] font-bold border-t border-slate-100">
          <a href="#solution" className="hover:text-[#2D2D2D]" onClick={() => setMobileMenuOpen(false)}>후유장해보험금</a>
          <a href="#success-cases" className="hover:text-[#2D2D2D]" onClick={() => setMobileMenuOpen(false)}>성공사례</a>
          <a href="#differentiation" className="hover:text-[#2D2D2D]" onClick={() => setMobileMenuOpen(false)}>왜 더드림인가</a>
          <a href="#contact-form" className="hover:text-[#2D2D2D]" onClick={() => setMobileMenuOpen(false)}>상담신청</a>
          <div className="flex flex-col gap-2 mt-2">
            {pathname !== '/' && (
              <a href="/" className="flex-1 text-center py-2 bg-[#2D2D2D] text-white rounded-lg text-sm hover:bg-[#111111] transition-colors">메인</a>
            )}
            {pathname !== '/traffic-accident' && (
              <a href="/traffic-accident" className="flex-1 text-center py-2 bg-[#2D2D2D] text-white rounded-lg text-sm hover:bg-[#111111] transition-colors">교통사고합의</a>
            )}
            {pathname !== '/disability-insurance' && (
              <a href="/disability-insurance" className="flex-1 text-center py-2 bg-[#2D2D2D] text-white rounded-lg text-sm hover:bg-[#111111] transition-colors">장해보험금분쟁</a>
            )}
            {pathname !== '/industrial-accident' && (
              <a href="/industrial-accident" className="flex-1 text-center py-2 bg-[#2D2D2D] text-white rounded-lg text-sm hover:bg-[#111111] transition-colors">산재보험전문</a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;