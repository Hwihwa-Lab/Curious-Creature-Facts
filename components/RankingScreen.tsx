
import React from 'react';

const RankingScreen: React.FC = () => {
  const topExplorers = [
    { name: '상큼한 쿼카', score: '12,450', rank: 1, avatar: '🐹' },
    { name: '심해전문가', score: '10,120', rank: 2, avatar: '🐙' },
    { name: '나무늘보팬', score: '9,840', rank: 3, avatar: '🦥' },
    { name: '동물왕국', score: '7,200', rank: 4, avatar: '🦁' },
    { name: '웨이왓러버', score: '6,550', rank: 5, avatar: '✨' },
  ];

  const popularAnimals = [
    { name: '혹등고래', picks: '3.4k', keyword: 'whale' },
    { name: '레서판다', picks: '2.8k', keyword: 'redpanda' },
    { name: '하프물범', picks: '2.1k', keyword: 'seal' },
  ];

  return (
    <div className="h-full bg-bg-soft overflow-y-auto no-scrollbar pb-24">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <h1 className="text-3xl font-black text-text-dark italic">Ranking Square <span className="text-primary">.</span></h1>
        <p className="text-sm font-bold text-text-muted mt-1">이번 주 최고의 동물 탐험가는 누구?</p>
      </header>

      {/* Top 3 Highlighting */}
      <div className="px-6 mb-8">
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-50 flex items-center justify-around">
          {topExplorers.slice(0, 3).sort((a,b) => b.rank-a.rank).map((user) => (
            <div key={user.rank} className={`flex flex-col items-center gap-2 ${user.rank === 1 ? 'scale-125 -translate-y-2' : 'scale-100 opacity-80'}`}>
              <div className="relative">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-lg
                  ${user.rank === 1 ? 'bg-yellow-400' : user.rank === 2 ? 'bg-gray-200' : 'bg-orange-200'}`}>
                  {user.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[14px] font-black">
                    {user.rank === 1 ? 'workspace_premium' : 'military_tech'}
                  </span>
                </div>
              </div>
              <p className="text-[10px] font-black text-text-dark">{user.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* List 4-10 */}
      <div className="px-6 mb-12">
        <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-4">Top Explorers</h3>
        <div className="space-y-3">
          {topExplorers.map((user) => (
            <div key={user.rank} className="bg-white/60 rounded-2xl p-4 flex items-center justify-between border border-white/40">
              <div className="flex items-center gap-4">
                <span className="text-sm font-black text-text-muted/40 w-4">{user.rank}</span>
                <span className="text-xl">{user.avatar}</span>
                <span className="text-sm font-bold text-text-dark">{user.name}</span>
              </div>
              <span className="text-xs font-black text-primary">{user.score} pt</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Animals (Hot Picks) with Automatic Images */}
      <div className="mb-8">
        <div className="px-6 flex items-center justify-between mb-4">
          <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">Real-time Hot Picks</h3>
          <span className="material-symbols-outlined text-primary">local_fire_department</span>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar scroll-smooth">
          <div className="inline-flex gap-4 px-6">
            {popularAnimals.map((animal, idx) => (
              <div key={idx} className="relative w-40 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm group">
                <img 
                  src={`https://loremflickr.com/400/500/${animal.keyword}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={animal.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <p className="text-white font-black text-sm">{animal.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-primary text-xs fill-1">favorite</span>
                    <span className="text-[10px] text-white/80 font-bold">{animal.picks}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingScreen;
