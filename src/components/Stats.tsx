import * as React from "react";


const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-widest mb-2">INTRODUCE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            데이터로 증명하는 <span className="text-blue-600">더드림</span>의 실력
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="text-6xl font-black text-slate-800 mb-2 font-mono">
              1<span className="text-3xl text-blue-500 align-top ml-1">위</span>
            </div>
            <p className="text-slate-600 font-medium">
              교통사고 합의 만족도<br/>
              (2024년 자체조사 기준)
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="text-6xl font-black text-slate-800 mb-2 font-mono">
              200<span className="text-3xl text-blue-500 align-top ml-1">억+</span>
            </div>
            <p className="text-slate-600 font-medium">
              누적 합의금 달성액<br/>
              최대 보상을 이끌어냅니다.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="text-6xl font-black text-slate-800 mb-2 font-mono">
              3,000<span className="text-3xl text-blue-500 align-top ml-1">건</span>
            </div>
            <p className="text-slate-600 font-medium">
              누적 상담 및 사건 처리<br/>
              풍부한 경험이 실력입니다.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;