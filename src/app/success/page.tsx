"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Home, ArrowLeft } from "lucide-react";

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-[#F4F7F9] flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-up">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-black text-[#1B3B5A] mb-4">
                    상담 신청이 완료되었습니다
                </h1>

                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                    더드림법률사무소를 믿고 신청해주셔서 감사합니다.<br />
                    담당 전문가가 내용을 검토한 후,<br />
                    <span className="text-[#3182A4] font-bold">1일 이내</span>에 순차적으로 연락드리겠습니다.
                </p>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full bg-[#1B3B5A] hover:bg-[#152e46] text-white font-bold py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1"
                    >
                        <Home className="w-5 h-5" />
                        메인으로 돌아가기
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-xl transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        이전 페이지로
                    </button>
                </div>

                <p className="mt-12 text-sm text-slate-400">
                    긴급한 문의사항이 있으시면 대표번호로 연락주세요.<br />
                    <span className="font-bold">02-6959-5053</span>
                </p>
            </div>
        </main>
    );
}
