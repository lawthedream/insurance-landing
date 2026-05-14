import * as React from "react";

import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
            <Play className="w-6 h-6 text-blue-600 fill-current" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            더드림의 <span className="text-blue-600">법률 가이드</span>
          </h2>
          <p className="text-slate-500">어려운 법률 용어, 영상으로 쉽게 설명해드립니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-video">
              <img src="https://picsum.photos/600/338?random=20" alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                 <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                   <Play className="w-8 h-8 text-white fill-current ml-1" />
                 </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              교통사고 합의금, 절대 먼저 말하지 마세요!
            </h3>
            <p className="text-slate-500 mt-2 text-sm">변호사가 알려주는 합의의 정석 - 조회수 15만회</p>
          </div>

          {/* Video 2 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-video">
              <img src="https://picsum.photos/600/338?random=21" alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                 <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                   <Play className="w-8 h-8 text-white fill-current ml-1" />
                 </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              12대 중과실 사고, 형사 합의는 어떻게?
            </h3>
             <p className="text-slate-500 mt-2 text-sm">운전자 보험 활용법과 합의 시기 - 조회수 8만회</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;