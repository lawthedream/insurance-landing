"use client";
import * as React from "react";

import { useState } from 'react';
import { ServiceTab } from '../types';

const tabData: ServiceTab[] = [
  {
    id: 'major',
    label: '중상해/사망',
    title: '중상해 및 사망 사고',
    content: '영구 장해가 남거나 사망에 이른 중대 사고의 경우, 형사 합의와 민사 합의가 동시에 진행되어야 합니다. 전문 변호사의 조력이 필수적입니다.',
    tags: ['#형사합의', '#민사소송', '#영구장해'],
    image: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: 'negligence',
    label: '과실 분쟁',
    title: '과실 비율 분쟁',
    content: '보험사가 제시하는 과실 비율은 절대적이지 않습니다. 블랙박스 분석, 도로교통법 판례 분석을 통해 억울한 과실을 바로잡습니다.',
    tags: ['#과실비율', '#분심위', '#소송'],
    image: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: 'pedestrian',
    label: '보행자/오토바이',
    title: '보행자 및 이륜차 사고',
    content: '신체가 직접 충격을 받는 보행자와 오토바이 사고는 부상 정도가 심각합니다. 향후 치료비와 휴업 손해를 철저히 계산해야 합니다.',
    tags: ['#개호비', '#휴업손해', '#위자료'],
    image: 'https://picsum.photos/800/600?random=12'
  }
];

const InfoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const activeContent = tabData.find(t => t.id === activeTab) || tabData[0];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Tabs Navigation */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold mb-10">
              교통사고 유형별<br />
              <span className="text-blue-400">핵심 대응 전략</span>
            </h2>
            <div className="flex flex-col space-y-2">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-6 py-4 rounded-xl text-lg font-bold transition-all ${activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50 translate-x-2"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-10 p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <p className="text-slate-300 text-sm mb-4">
                내 사고 유형에 맞는 해결책이 궁금하시다면?
              </p>
              <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                전문가와 1:1 상담하기
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-2/3">
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-10 flex flex-col justify-end">
                <div className="flex space-x-2 mb-4">
                  {activeContent.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/80 backdrop-blur text-sm font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-4">{activeContent.title}</h3>
                <p className="text-lg text-slate-200 leading-relaxed max-w-2xl">
                  {activeContent.content}
                </p>
                <button className="mt-6 text-blue-300 font-bold flex items-center hover:text-white transition-colors">
                  자세히 보기 &gt;
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoTabs;