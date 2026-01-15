
import React from 'react';

const MainFeed: React.FC = () => {
  // Helper to generate image URL based on keyword
  const getImgUrl = (keyword: string, w = 600, h = 800) => `https://loremflickr.com/${w}/${h}/${keyword}`;

  return (
    <div className="flex flex-col h-full bg-bg-soft overflow-y-auto no-scrollbar pb-32">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-bg-soft/95 backdrop-blur-md px-6 py-5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-0.5">Premium Archive</span>
          <h1 className="text-2xl font-black text-text-dark tracking-tight">웨이왓 <span className="text-primary">.</span></h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-text-dark">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-primary rounded-full shadow-lg shadow-primary/20 text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* Hero Section - Automatic Image Matching */}
      <div className="px-4 py-4">
        <div className="group relative aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary/10 bg-gray-200">
          <img 
            src={getImgUrl('cow,animal', 1000, 700)} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Hero Animal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-lg shadow-lg shadow-primary/30 uppercase tracking-widest">
                오늘의 핫픽
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">
                3분 탐험
              </span>
            </div>
            <h2 className="text-3xl font-black text-white leading-[1.1] mb-3 drop-shadow-xl">
              소들도 우리처럼<br/>찐친이 있다는 사실! 🐮
            </h2>
            <p className="text-white/80 text-sm font-medium line-clamp-2 max-w-[280px]">
              단짝이랑 떨어지면 스트레스를 받을 정도로 소들은 섬세한 감정을 가진 동물이랍니다.
            </p>
          </div>
        </div>
      </div>

      {/* Level & Progress Section */}
      <div className="px-4 mb-8">
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transform -rotate-3">
              <span className="material-symbols-outlined text-3xl fill-1">workspace_premium</span>
            </div>
            <div>
              <p className="text-xs font-black text-primary/60 uppercase tracking-widest mb-0.5">Explorer Level</p>
              <h3 className="text-xl font-black text-text-dark">프로 동물러 <span className="text-sm font-bold text-gray-300 ml-1">Lv. 4</span></h3>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-sm font-black text-primary italic">NEXT 85%</span>
            <div className="h-2 w-28 bg-bg-soft rounded-full overflow-hidden border border-gray-100">
              <div className="h-full bg-primary rounded-full w-[85%] shadow-[0_0_10px_rgba(255,107,53,0.4)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Content - Automatic Keyword Extraction */}
      <div className="px-4 pb-12">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-1.5 h-6 bg-primary rounded-full"></div>
          <h4 className="text-lg font-black text-text-dark">최근 발견된 미스터리</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { 
              title: '문어 지능은 상상 그 이상! 🐙', 
              cat: '해양', 
              keyword: 'octopus'
            },
            { 
              title: '나무늘보의 은밀한 갓생 비결', 
              cat: '포유류', 
              keyword: 'sloth'
            },
            { 
              title: '플라밍고가 분홍색인 진짜 이유', 
              cat: '조류', 
              keyword: 'flamingo'
            },
            { 
              title: '코알라에게도 지문이 있다?', 
              cat: '포유류', 
              keyword: 'koala'
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-100">
              <img 
                src={getImgUrl(item.keyword)} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-5">
                <div className="mb-2">
                  <span className="inline-block px-2.5 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-[0.1em] rounded-lg shadow-lg">
                    {item.cat}
                  </span>
                </div>
                <p className="text-white text-[14px] font-bold leading-tight line-clamp-2 drop-shadow-sm group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFeed;
