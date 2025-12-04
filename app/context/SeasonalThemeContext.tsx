'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SeasonalTheme, getCurrentSeason, seasonalThemes, ThemeConfig } from '../config/themes';

interface SeasonalContextType {
  currentTheme: SeasonalTheme;
  setTheme: (theme: SeasonalTheme) => void;
  themeConfig: ThemeConfig;
}

const SeasonalContext = createContext<SeasonalContextType | undefined>(undefined);

export function SeasonalThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<SeasonalTheme>('default');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. Check if user manually picked a theme before
    const saved = localStorage.getItem('chiza-season') as SeasonalTheme;
    
    if (saved && seasonalThemes[saved]) {
      setCurrentTheme(saved);
    } else {
      // 2. Otherwise, check the date!
      setCurrentTheme(getCurrentSeason());
    }
  }, []);

  const changeTheme = (theme: SeasonalTheme) => {
    setCurrentTheme(theme);
    localStorage.setItem('chiza-season', theme);
  };

  // CRITICAL FIX: Always render the Provider. 
  // We use 'mounted' to switch from the Server default to the Client preference
  // without removing the Provider from the tree.
  return (
    <SeasonalContext.Provider value={{ 
      currentTheme: mounted ? currentTheme : 'default', 
      setTheme: changeTheme,
      themeConfig: seasonalThemes[mounted ? currentTheme : 'default'] 
    }}>
      {children}
    </SeasonalContext.Provider>
  );
}

export const useSeasonalTheme = () => {
  const context = useContext(SeasonalContext);
  
  // CRITICAL FIX: Return a safe default instead of crashing if context is missing.
  // This makes the app robust against render timing issues.
  if (!context) {
    return {
        currentTheme: 'default' as SeasonalTheme,
        setTheme: () => {},
        themeConfig: seasonalThemes['default']
    };
  }
  
  return context;
};