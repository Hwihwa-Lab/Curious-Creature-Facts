
import React, { useState, useEffect } from 'react';
import { AppScreen } from './types';
import SplashScreen from './components/SplashScreen';
import MainFeed from './components/MainFeed';
import DiscoveryScreen from './components/DiscoveryScreen';
import RankingScreen from './components/RankingScreen';
import ProfileScreen from './components/ProfileScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('splash');
  const [isReady, setIsReady] = useState(false);
  const [discoveredIds, setDiscoveredIds] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isReady && currentScreen === 'splash') {
      setCurrentScreen('discovery');
    }
  }, [isReady, currentScreen]);

  const handleDiscover = (id: string) => {
    if (!discoveredIds.includes(id)) {
      setDiscoveredIds(prev => [...prev, id]);
    }
  };

  return (
    <div className="relative w-full h-screen max-w-md mx-auto bg-bg-soft shadow-2xl overflow-hidden flex flex-col">
      {currentScreen === 'splash' && <SplashScreen />}
      
      {currentScreen !== 'splash' && (
        <>
          <div className="flex-1 overflow-hidden relative">
            {currentScreen === 'main_feed' && <MainFeed />}
            {currentScreen === 'discovery' && (
              <DiscoveryScreen onDiscover={handleDiscover} />
            )}
            {currentScreen === 'ranking' && (
              <RankingScreen />
            )}
            {currentScreen === 'profile' && (
              <ProfileScreen discoveredIds={discoveredIds} />
            )}
          </div>
          <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        </>
      )}
    </div>
  );
};

export default App;
