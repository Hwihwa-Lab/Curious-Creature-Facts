
import React, { useState } from 'react';
import { SAMPLE_FACTS } from '../constants';
import { AnimalFact } from '../types';
import DeepDive from './DeepDive';

interface ArchiveScreenProps {
  discoveredIds: string[];
}

const ArchiveScreen: React.FC<ArchiveScreenProps> = ({ discoveredIds }) => {
  const [selectedFact, setSelectedFact] = useState<AnimalFact | null>(null);
  
  const discoveredAnimals = SAMPLE_FACTS.filter(fact => discoveredIds.includes(fact.id));
  const totalCount = SAMPLE_FACTS.length;
  const discoveredCount = discoveredAnimals.length;
  const progressPercentage = (discoveredCount / totalCount) * 100;

  return (
    <div className="h-full bg-bg-soft flex flex-col overflow-hidden">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 flex flex-col gap-1">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-black text-text-dark tracking-tight">나의 도감</h1>
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-text-dark">
            <span className="material-symbols-outlined font-light">filter_list</span>
          </div>
        </div>
        <p className="text-sm font-bold text-text-muted">지금까지 발견한 신비로운 동물들</p>
      </header>

      {/* Progress Card */}
      <div className="px-6 mb-8">
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50">
          <div className="flex justify-between items-end mb-3">
            <div>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Discovery Progress</span>
              <h3 className="text-xl font-black text-text-dark">
                {discoveredCount} <span className="text-sm text-gray-300 font-bold">/ {totalCount} 마리</span>
              </h3>
            </div>
            <span className="text-lg font-black text-primary italic">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="h-3 w-full bg-bg-soft rounded-full overflow-hidden border border-gray-50">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Discovered Grid */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 no-scrollbar">
        {discoveredAnimals.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {discoveredAnimals.map((fact) => (
              <div 
                key={fact.id}
                onClick={() => setSelectedFact(fact)}
                className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <img 
                  src={fact.revealImageUrl} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={fact.animalName} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="inline-block px-2 py-0.5 bg-primary/20 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-md mb-1 w-fit">
                    {fact.category}
                  </span>
                  <p className="text-white text-[15px] font-bold leading-tight truncate">
                    {fact.animalName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-20">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-4xl text-gray-400">pets</span>
            </div>
            <p className="text-lg font-black text-text-muted">아직 발견한 동물이 없어요.<br/>플레이 탭에서 탐험을 시작해보세요!</p>
          </div>
        )}

        {/* Locked Slots Hint */}
        {totalCount > discoveredCount && (
          <div className="mt-8 mb-4">
            <h4 className="text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] mb-4 text-center">Remaining Mysteries</h4>
            <div className="grid grid-cols-4 gap-3 opacity-20">
              {Array.from({ length: Math.min(4, totalCount - discoveredCount) }).map((_, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-400">lock</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Deep Dive Modal when an archive item is clicked */}
      {selectedFact && (
        <DeepDive 
          fact={selectedFact} 
          onClose={() => setSelectedFact(null)} 
        />
      )}
    </div>
  );
};

export default ArchiveScreen;
