
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-bg-soft">
      {/* Background Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl transform scale-150"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="mb-10 relative flex items-center justify-center animate-[pulse_1.5s_infinite_ease-in-out]">
          <div className="absolute -top-5 -right-6 text-primary/80 rotate-12 text-4xl font-black">✦</div>
          <div className="absolute -bottom-2 -left-8 text-yellow-400 -rotate-12 text-3xl font-black">✦</div>
          
          <div className="w-32 h-32 bg-primary rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary/30 transform rotate-3 relative overflow-hidden">
            <div className="flex items-center justify-center transform scale-110 select-none">
              <span className="font-display font-black text-white text-[80px] leading-none transform -rotate-[15deg] translate-x-3 drop-shadow-sm">?</span>
              <span className="font-display font-black text-white text-[80px] leading-none transform rotate-[10deg] -translate-x-1 translate-y-1 drop-shadow-sm">!</span>
            </div>
          </div>
          {/* Ghost layer for depth */}
          <div className="absolute -z-10 w-32 h-32 bg-primary/40 rounded-[2rem] transform -rotate-6 scale-95"></div>
        </div>

        <h1 className="text-5xl font-black tracking-tight text-text-dark mb-10">
          웨이왓
        </h1>

        <div className="w-64 flex flex-col items-center">
          <div className="w-full flex justify-between items-end mb-2 px-1">
            <span className="text-sm font-bold text-primary">몰랐지? 로딩 중...</span>
            <span className="text-sm font-bold text-primary">85%</span>
          </div>
          <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-primary rounded-full w-[85%] transition-all duration-1000 ease-out"></div>
          </div>
          <p className="text-sm font-medium text-text-muted text-center tracking-wide">
            당신만 몰랐던 뜻밖의 동물 이야기
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
