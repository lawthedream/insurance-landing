"use client";
import * as React from "react";
import { useState } from "react";
import { Send, Phone, MessageCircle } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const FinalCTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "",
    message: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
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
          name: formData.name,
          phone: formData.phone,
          accidentType: formData.type,
          disabilityStatus: '', // Not strictly tracked in this landing page
          message: formData.message,
          sourcePage: '후유장해보험금 랜딩페이지',
        }),
      });

      if (response.ok) {
        window.location.href = '/success';
      } else {
        const errorData = await response.json();
        alert(`신청 중 오류가 발생했습니다: ${errorData.error || '잠시 후 다시 시도해주세요.'}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Consultation submission error:", error);
      alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section id="contact-form" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: 'url("/visual03.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#2D2D2D] rounded-full filter blur-[100px] opacity-40"></div>
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#C77E1E] rounded-full filter blur-[120px] opacity-20"></div>

      <ScrollReveal>
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Content */}
            <div className="lg:col-span-5 text-white pt-4">
              <span className="inline-block py-1 px-3 rounded bg-white/10 text-[#C77E1E] text-sm font-bold tracking-widest mb-6 border border-white/20">
                START CONSULTATION
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-8 leading-[1.2]">
                <span className="text-[#C77E1E] underline decoration-[#C77E1E]/30 underline-offset-4 font-black">절대</span> 보험사의 거절에<br />
                포기하지 마세요.
              </h2>

              <div className="mb-10 text-slate-300 text-lg md:text-xl leading-relaxed space-y-2 font-medium">
                <p>
                  포기하면 <strong className="text-white">받아야할 보험금</strong>을<br />
                  눈 앞에서 놓치게 됩니다.
                </p>
                <p className="pt-4 text-[#C77E1E]">
                  알아보는데 비용은 들지 않습니다.<br />
                  <strong className="text-white text-2xl mt-1 block">착수금 없이 상담을 시작해보세요.</strong>
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 font-sans max-w-sm">
                <a href="tel:02-6959-5053" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-2xl border border-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-[#2D2D2D] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[#C77E1E]" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">전화 상담 (평일 09:00 - 18:00)</div>
                    <div className="text-white text-xl md:text-2xl font-bold tracking-tight mb-0 leading-none">02-6959-5053</div>
                  </div>
                </a>

                <a href="tel:010-7618-5053" className="flex items-center gap-4 bg-red-500/10 hover:bg-red-500/20 p-5 rounded-2xl border border-red-500/20 transition-colors group">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-red-300 text-sm mb-1 font-bold tracking-wide">긴급 상담 (야간/주말 가능)</div>
                    <div className="text-white text-xl md:text-2xl font-bold tracking-tight mb-0 leading-none">010-7618-5053</div>
                  </div>
                </a>

                <a href="http://pf.kakao.com/_uDksxb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#FEE500]/10 hover:bg-[#FEE500]/20 p-5 rounded-2xl border border-[#FEE500]/20 transition-colors group">
                  <div className="w-12 h-12 bg-[#FEE500] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-[#381E1F]" />
                  </div>
                  <div>
                    <div className="text-[#C77E1E] text-sm mb-1">카카오톡 상담</div>
                    <div className="text-white text-lg font-bold">실시간 채팅 바로가기</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7" id="contact-form-target">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#2D2D2D] to-[#C77E1E] rounded-t-3xl border-t border-slate-100"></div>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-3">
                    서류검토 의뢰
                  </h3>
                  <p className="text-slate-500 text-[15px] font-medium">정보를 남겨주시면 담당자가 빠르게 연락드리겠습니다.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">성함 <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-700 outline-none focus:border-[#2D2D2D] focus:ring-1 focus:ring-[#2D2D2D] transition-colors font-medium placeholder-slate-400 font-sans"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-700 outline-none focus:border-[#2D2D2D] focus:ring-1 focus:ring-[#2D2D2D] transition-colors font-medium placeholder-slate-400 font-sans"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-bold text-slate-700 mb-2">상황 유형 (선택)</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-700 outline-none focus:border-[#2D2D2D] focus:ring-1 focus:ring-[#2D2D2D] transition-colors font-medium font-sans appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
                    >
                      <option value="">어떤 상황에 해당하시나요?</option>
                      <option value="진단서 발급 거절">진단서 발급 거절</option>
                      <option value="의료자문 부지급/감액">의료자문 부지급/감액</option>
                      <option value="기왕증 감액 통보">기왕증 감액 통보</option>
                      <option value="소송 전환 필요">소송 전환 필요</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">문의 내용 (선택)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-700 outline-none focus:border-[#2D2D2D] focus:ring-1 focus:ring-[#2D2D2D] transition-colors resize-none font-medium placeholder-slate-400 font-sans"
                      placeholder="사고 일시, 다치신 부위, 현재 상황 등을 간략히 적어주시면 더 정확한 상담이 가능합니다."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 mt-6 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        id="agree"
                        name="agree"
                        type="checkbox"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="w-5 h-5 border-slate-300 rounded text-[#2D2D2D] focus:ring-[#2D2D2D] focus:ring-opacity-50 transition-colors cursor-pointer"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="agree" className="text-sm text-slate-600 font-medium cursor-pointer block leading-snug">
                        개인정보 수집 및 이용 동의 <span className="text-red-500">*</span>
                      </label>
                      <p className="text-xs text-slate-400 mt-1 font-sans">
                        수집된 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-2 bg-[#2D2D2D] hover:bg-[#111111] text-white py-5 px-6 rounded-xl font-black text-xl transition-all shadow-lg hover:-translate-y-1 mt-6 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        서류검토 신청하기
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center border-t border-slate-100 pt-6">
                  <p className="text-slate-500 font-bold text-lg tracking-widest">더드림법률사무소</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default FinalCTASection;