
import React, { useState } from 'react';
import { SAMPLE_FACTS } from '../constants';
import { AnimalFact } from '../types';
import DeepDive from './DeepDive';

interface ProfileScreenProps {
  discoveredIds: string[];
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ discoveredIds }) => {
  const [selectedFact, setSelectedFact] = useState<AnimalFact | null>(null);
  const discoveredAnimals = SAMPLE_FACTS.filter(fact => discoveredIds.includes(fact.id));
  
  const badges = [
    { icon: '🌟', label: '시작이 반' },
    { icon: '🐾', label: '동물 친구' },
    { icon: '🔍', label: '미궁 박사' },
    { icon: '📸', label: '찰나의 순간' },
  ];

  return (
    <div className="h-full bg-bg-soft flex flex-col overflow-hidden">
      {/* Top Profile Section */}
      <div className="pt-16 px-8 pb-8 bg-white rounded-b-[3.5rem] shadow-sm">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-4xl transform rotate-3 shadow-inner">
              🐹
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[14px]">edit</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-text-dark">프로 동물러 <span className="text-primary italic">.</span></h2>
            <p className="text-sm font-bold text-text-muted mt-0.5">상큼한 쿼카님 반가워요!</p>
          </div>
        </div>

        {/* Level Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2 px-1">
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Mastery Level 04</span>
            <span className="text-sm font-black text-primary italic">85%</span>
          </div>
          <div className="h-3 w-full bg-bg-soft rounded-full overflow-hidden border border-gray-50">
            <div className="h-full bg-primary rounded-full w-[85%] transition-all duration-1000 shadow-[0_0_15px_rgba(255,107,53,0.3)]"></div>
          </div>
        </div>

        {/* Badges */}
        <div>
          <h3 className="text-[10px] font-black text-text-muted/40 uppercase tracking-[0.2em] mb-3">Earned Badges</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
            {badges.map((badge, idx) => (
              <div key={idx} className="shrink-0 flex flex-col items-center gap-1.5">
                <div className="w-12 h-12 rounded-2xl bg-bg-soft flex items-center justify-center text-xl grayscale hover:grayscale-0 transition-all cursor-pointer">
                  {badge.icon}
                </div>
                <span className="text-[9px] font-bold text-text-muted">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Archive Grid Section */}
      <div className="flex-1 flex flex-col pt-8 px-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-black text-text-dark italic">My Archive <span className="text-primary text-sm">({discoveredAnimals.length})</span></h3>
          <span className="material-symbols-outlined text-text-muted">grid_view</span>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
          {discoveredAnimals.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {discoveredAnimals.map((fact) => (
                <div 
                  key={fact.id}
                  onClick={() => setSelectedFact(fact)}
                  className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  <img src={fact.revealImageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={fact.animalName} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-4">
                    <span className="inline-block px-2 py-0.5 bg-primary/30 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-md mb-1 w-fit">
                      {fact.category}
                    </span>
                    <p className="text-white text-[15px] font-bold leading-tight truncate">{fact.animalName}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-10">
              <span className="material-symbols-outlined text-5xl mb-3">auto_awesome_motion</span>
              <p className="text-sm font-black text-text-muted">아직 수집된 지식이 없어요.<br/>플레이 탭에서 지식을 발견해보세요!</p>
            </div>
          )}
        </div>
      </div>

      {/* Deep Dive Modal Integration */}
      {selectedFact && (
        <DeepDive 
          fact={selectedFact} 
          onClose={() => setSelectedFact(null)} 
        />
      )}
    </div>
  );
};

export default ProfileScreen;
