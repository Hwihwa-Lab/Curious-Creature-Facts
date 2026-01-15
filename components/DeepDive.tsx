
import React from 'react';
import { AnimalFact } from '../types';

interface DeepDiveProps {
  fact: AnimalFact;
  onClose: () => void;
}

const DeepDive: React.FC<DeepDiveProps> = ({ fact, onClose }) => {
  return (
    <div className="absolute inset-0 z-40 animate-in slide-in-from-bottom duration-700 flex flex-col bg-white">
      {/* Magazine Header Image */}
      <div className="relative h-[50%] shrink-0 overflow-hidden">
        <img src={fact.deepDiveImageUrl} className="w-full h-full object-cover scale-105" alt="Story Detail" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20"></div>
        
        {/* Top Controls */}
        <div className="absolute top-12 left-0 right-0 px-6 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined font-bold">close</span>
          </button>
          <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Exclusive Story</span>
          </div>
          <button className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
            <span className="material-symbols-outlined font-bold">bookmark</span>
          </button>
        </div>

        {/* Floating Title Tag */}
        <div className="absolute bottom-12 left-8">
           <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-md mb-3 inline-block">
             {fact.category} Archive
           </span>
           <h1 className="text-4xl font-black text-white leading-none tracking-tight drop-shadow-2xl">
              {fact.animalName}<span className="text-primary">.</span>
           </h1>
        </div>
      </div>

      {/* Article Content Area */}
      <div className="flex-1 -mt-8 bg-white rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
        <div className="w-full flex justify-center py-6">
          <div className="w-12 h-1.5 bg-gray-100 rounded-full"></div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-8 pb-40 no-scrollbar">
          {/* Metadata Section */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-text-muted text-xl">menu_book</span>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Reading Time</p>
                <p className="text-sm font-black text-text-dark">{fact.readTime}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Difficulty</p>
              <div className="flex gap-0.5 mt-0.5">
                {[1, 2, 3].map(i => <div key={i} className={`w-3 h-1 rounded-full ${i <= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>)}
              </div>
            </div>
          </div>
          
          {/* Headline */}
          <h2 className="text-2xl font-black text-text-dark leading-[1.3] mb-8">
            {fact.revealTitle} 사실을<br/>알고 계셨나요?
          </h2>
          
          {/* Body Text */}
          <div className="space-y-8 text-text-muted text-[17px] font-medium leading-[1.8] tracking-tight">
            {fact.deepDiveStory.split('\n\n').map((para, i) => (
              <p key={i} className={i === 0 ? "first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1" : ""}>
                {para}
              </p>
            ))}
          </div>

          {/* Fact Check Card */}
          <div className="mt-16 p-8 bg-bg-soft rounded-[2.5rem] border border-gray-100 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-5 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
               <span className="material-symbols-outlined text-8xl font-black">verified</span>
             </div>
             <div className="relative z-10">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                   <span className="material-symbols-outlined text-sm">check</span>
                 </div>
                 <span className="text-sm font-black text-primary tracking-widest uppercase">Fact Verified</span>
               </div>
               <h4 className="text-lg font-black text-text-dark mb-2">믿을 수 있는 정보인가요?</h4>
               <p className="text-sm text-text-muted font-bold leading-relaxed mb-6">
                 웨이왓의 모든 콘텐츠는 전문 동물학자의 감수와 최신 논문을 바탕으로 작성되었습니다.
               </p>
               <button className="text-xs font-black text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                 출처 확인하기 <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </button>
             </div>
          </div>
        </div>

        {/* Bottom Persistent Action Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/90 backdrop-blur-xl border-t border-gray-50 flex gap-4 items-center">
          <button className="flex-1 h-16 bg-text-dark rounded-[1.5rem] flex items-center justify-center gap-3 text-white font-black shadow-2xl hover:bg-black active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined text-xl">share_windows</span>
            친구에게 공유하기
          </button>
          <button className="w-16 h-16 bg-primary/10 rounded-[1.5rem] flex items-center justify-center text-primary active:scale-90 transition-all">
            <span className="material-symbols-outlined fill-1 text-2xl">favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeepDive;
