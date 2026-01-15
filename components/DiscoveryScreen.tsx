
import React, { useState, useRef, useEffect } from 'react';
import { SAMPLE_FACTS } from '../constants';
import DeepDive from './DeepDive';

interface DiscoveryScreenProps {
  onDiscover: (id: string) => void;
}

const DiscoveryScreen: React.FC<DiscoveryScreenProps> = ({ onDiscover }) => {
  const [index, setIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const touchStartY = useRef<number | null>(null);
  
  const currentFact = SAMPLE_FACTS[index % SAMPLE_FACTS.length];

  const handleNext = () => {
    setIsRevealed(false);
    setIndex(prev => prev + 1);
  };

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      onDiscover(currentFact.id);
    }
  };

  // Handle Swipe Up to open Deep Dive in Revealed state
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartY.current || !isRevealed || isDeepDiveOpen) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (deltaY > 60) {
      setIsDeepDiveOpen(true);
    }
    touchStartY.current = null;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isRevealed && !isDeepDiveOpen && e.deltaY > 40) {
        setIsDeepDiveOpen(true);
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isRevealed, isDeepDiveOpen]);

  return (
    <div 
      className="h-full bg-gradient-to-b from-[#F3E4D4] to-[#E8D2BB] relative flex flex-col items-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <header className="w-full flex items-center justify-between px-6 pt-10 pb-4 z-20">
        <button className="w-10 h-10 flex items-center justify-center text-text-dark active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-3xl font-light">close</span>
        </button>
        <h3 className="text-[15px] font-bold text-text-muted/80 tracking-tight">오늘의 발견</h3>
        <button className="w-10 h-10 flex items-center justify-center text-text-dark active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-3xl font-light">ios_share</span>
        </button>
      </header>

      <div 
        className={`relative w-[90%] h-[68%] mt-4 rounded-[2.5rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-700 cursor-pointer
          ${isRevealed ? 'scale-95' : 'hover:scale-[1.01]'}`}
        onClick={handleReveal}
      >
        {!isRevealed ? (
          <div className="h-full flex flex-col items-center p-8">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-8 shadow-sm">
               <img 
                 src={currentFact.revealImageUrl} 
                 className="w-full h-full object-cover scale-105" 
                 alt="Mystery Animal" 
               />
            </div>
            <div className="mb-4">
               <span className="px-5 py-1.5 bg-primary text-white text-[13px] font-black rounded-full shadow-lg shadow-primary/20">
                 미스터리
               </span>
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-[28px] font-black leading-tight text-text-dark">
                혹시 이거 알아?<br/>대박 신기함
              </h2>
              <div className="pt-4">
                <p className="text-[18px] font-medium text-text-muted leading-relaxed">
                  {currentFact.animalName}에게도 사실 <span className="relative inline-block">
                    <span className="font-black text-text-dark">OO</span>
                    <span className="absolute bottom-1 left-0 w-full h-[3px] bg-primary/30 rounded-full"></span>
                  </span>이 있대...
                </p>
                <p className="text-[18px] font-medium text-text-muted">(속닥)</p>
              </div>
            </div>
            <div className="flex gap-2.5 justify-center mt-10">
              {[0, 1, 2].map(i => (
                <div key={i} className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === index % 3 ? 'bg-gray-400' : 'bg-gray-200'}`}></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col relative animate-in fade-in duration-700">
            <div className="absolute inset-0 z-0">
               <img src={currentFact.revealImageUrl} className="w-full h-full object-cover scale-110 animate-pulse-slow" alt="Revealed" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 flex-1 flex flex-col items-center justify-end p-10 pb-16 text-center">
              <div className="mb-6 transform animate-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-black rounded-full border border-white/30 uppercase tracking-widest">Wow Fact</span>
              </div>
              
              <h2 className="text-[32px] font-black text-white mb-4 leading-tight drop-shadow-xl animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-forwards">
                {currentFact.revealTitle}
              </h2>
              
              <p className="text-[16px] font-bold text-white/90 max-w-[240px] mb-12 drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards">
                {currentFact.revealDescription}
              </p>
              
              <div 
                className="flex flex-col items-center gap-3 cursor-pointer group animate-in zoom-in-90 duration-700 delay-300 fill-mode-forwards"
                onClick={(e) => { e.stopPropagation(); setIsDeepDiveOpen(true); }}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl transition-all group-hover:scale-110">
                  <span className="material-symbols-outlined text-[32px] font-bold">auto_stories</span>
                </div>
                <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase opacity-80">Deep Dive</span>
              </div>
              <div className="absolute bottom-4 flex flex-col items-center opacity-30 animate-bounce">
                <span className="material-symbols-outlined text-white text-xl">keyboard_double_arrow_up</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 w-full flex flex-col items-center justify-center gap-2">
        {!isRevealed ? (
          <div className="flex flex-col items-center gap-1.5 opacity-80 animate-bounce-soft">
             <div className="flex flex-col -space-y-2">
                <span className="material-symbols-outlined text-primary text-2xl font-black">expand_less</span>
                <span className="material-symbols-outlined text-primary text-2xl font-black opacity-50">expand_less</span>
             </div>
             <p className="text-[15px] font-bold text-primary">옆으로 넘겨서 확인해봐!</p>
          </div>
        ) : (
          <button 
            onClick={handleNext}
            className="px-8 h-14 bg-white/40 backdrop-blur-md rounded-2xl flex items-center gap-3 text-text-dark font-black text-sm active:scale-95 transition-all shadow-sm z-30"
          >
            다음 미스터리 발견하기
            <span className="material-symbols-outlined text-primary">arrow_forward</span>
          </button>
        )}
      </div>

      {isDeepDiveOpen && (
        <DeepDive 
          fact={currentFact} 
          onClose={() => setIsDeepDiveOpen(false)} 
        />
      )}
    </div>
  );
};

export default DiscoveryScreen;
