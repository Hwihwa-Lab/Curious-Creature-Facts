
import React from 'react';
import { AppScreen } from '../types';

interface BottomNavProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { key: 'main_feed', icon: 'home', label: '홈' },
    { key: 'discovery', icon: 'explore', label: '플레이' },
    { key: 'ranking', icon: 'groups', label: '광장' },
    { key: 'profile', icon: 'person', label: '프로필' },
  ];

  return (
    <nav className="h-20 bg-white/90 backdrop-blur-xl border-t border-gray-100 px-6 flex items-center justify-between z-30">
      {navItems.map((item) => {
        const isActive = currentScreen === item.key;
        return (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key as AppScreen)}
            className={`flex flex-col items-center gap-1 transition-all ${isActive ? 'scale-110' : 'opacity-30'}`}
          >
            <span className={`material-symbols-outlined text-[28px] ${isActive ? 'fill-1 text-primary' : 'text-text-dark'}`}>
              {item.icon}
            </span>
            <span className={`text-[10px] font-black uppercase tracking-[0.1em] ${isActive ? 'text-primary' : 'text-text-dark'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
