"use client";

import * as React from "react";
import { useState } from "react";
import { Phone, MessageCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ScrollReveal from '../ScrollReveal';

const FinalCTASection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [accidentType, setAccidentType] = useState('산재 신청 필요');
  const [message, setMessage] = useState('');
  const [isConsent, setIsConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('성함과 연락처를 입력해주세요.');
      return;
    }
    if (!isConsent) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          accidentType,
          message,
          sourcePage: '산재보험',
          pageReferrer: typeof document !== 'undefined' ? document.referrer : '',
          landingUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '신청 중 오류가 발생했습니다.');
      }

      router.push('/success');
      // Reset form
      setName('');
      setPhone('');
      setAccidentType('산재 신청 필요');
      setMessage('');
      setIsConsent(false);
    } catch (err: any) {
      console.error('Submission error:', err);
      alert(err.message || '신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 bg-[#064E3B] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D9488] rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 z-0"></div>

        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]"
          style={{
            backgroundImage: 'url("/visual03.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <ScrollReveal>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Left: Persuasive Text & Contact Info */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  <span className="text-yellow-400">90일 후</span><br />
                  후회하면 늦습니다.
                </h2>
                <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
                  불승인 심사청구 90일 기한을 놓치기 전에<br />
                  지금 바로 상담하세요.
                </p>

                <div className="space-y-6">
                  <a href="tel:02-6959-5053" className="flex items-center gap-4 bg-[#043327] p-6 rounded-3xl hover:bg-[#054D3B] transition-colors border border-emerald-800/30 group shadow-lg">
                    <div className="w-12 h-12 bg-[#0D9488] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-emerald-400 text-sm font-bold mb-1">전화 상담</p>
                      <p className="text-2xl font-bold text-white">02-6959-5053</p>
                    </div>
                  </a>

                  <a href="https://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#043327] p-6 rounded-3xl hover:bg-[#054D3B] transition-colors border border-emerald-800/30 group shadow-lg">
                    <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-[#1B3B5A] fill-current" />
                    </div>
                    <div>
                      <p className="text-emerald-400 text-sm font-bold mb-1">카카오톡 상담</p>
                      <p className="text-xl font-bold text-white">실시간 채팅 바로가기</p>
                    </div>
                  </a>

                  <a href="tel:010-7618-5053" className="flex items-center gap-4 bg-[#043327] p-6 rounded-3xl hover:bg-[#054D3B] transition-colors border border-red-900/30 group shadow-lg">
                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-red-400 text-sm font-bold mb-1">긴급 상담 (야간·주말 가능)</p>
                      <p className="text-2xl font-bold text-white">010-7618-5053</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Input Form */}
              <div id="contact-form" className="lg:w-1/2 w-full bg-white rounded-[2.5rem] p-8 md:p-10 text-slate-900 shadow-2xl scroll-mt-24">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#0D9488] rounded-full"></span>
                  간편 산재 상담 신청
                </h3>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 px-1">성함</label>
                      <input
                        type="text"
                        placeholder="성함을 입력해주세요"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#F0FDF4] border border-emerald-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0D9488] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 px-1">연락처</label>
                      <input
                        type="tel"
                        placeholder="010-0000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#F0FDF4] border border-emerald-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0D9488] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 px-1">상황 유형</label>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        '산재 신청 필요',
                        '산재 불승인',
                        '장해등급 불만',
                        '직업병 인정',
                        '회사 비협조',
                        '기타'
                      ].map((type) => (
                        <label key={type} className={`flex items-center justify-center p-3 rounded-2xl border cursor-pointer transition-all ${accidentType === type ? 'bg-[#0D9488] text-white border-[#0D9488]' : 'bg-[#F0FDF4] border-emerald-100 text-slate-600 hover:border-[#0D9488]/50'}`}>
                          <input
                            type="radio"
                            name="accidentType"
                            value={type}
                            checked={accidentType === type}
                            onChange={(e) => setAccidentType(e.target.value)}
                            className="hidden"
                          />
                          <span className="text-xs md:text-sm font-bold">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 px-1">문의 내용 (선택)</label>
                    <textarea
                      rows={3}
                      placeholder="사고 상황을 간단히 적어주시면 더 정확한 상담이 가능합니다."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#F0FDF4] border border-emerald-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0D9488] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer mt-2 px-1">
                    <input
                      type="checkbox"
                      checked={isConsent}
                      onChange={(e) => setIsConsent(e.target.checked)}
                      className="mt-1 text-[#0D9488] rounded-md focus:ring-[#0D9488] w-5 h-5 border-emerald-200"
                    />
                    <span className="text-[13px] text-slate-500 font-medium">개인정보 수집 및 이용에 동의합니다. (상담 목적으로만 사용되며, 상담 완료 후 파기됩니다.)</span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#064E3B] hover:bg-[#043327] text-white font-black py-5 rounded-2xl text-lg md:text-2xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mt-4 whitespace-nowrap flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? '신청 중...' : (
                      <>
                        산재 상담 신청하기
                        <ArrowRight className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

    </>
  );
};

export default FinalCTASection;
