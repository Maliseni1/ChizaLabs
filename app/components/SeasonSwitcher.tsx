'use client';

import { useSeasonalTheme } from '../context/SeasonalThemeContext';
import { seasonalThemes, SeasonalTheme } from '../config/themes';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SeasonSwitcher() {
  const { currentTheme, setTheme } = useSeasonalTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
        title="Change Season Theme"
      >
        <span className="text-lg">{seasonalThemes[currentTheme].icon}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close when clicking outside */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full right-0 mt-2 p-2 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 min-w-[160px] z-50"
            >
              <div className="text-xs font-bold text-gray-400 uppercase px-3 py-2">Select Theme</div>
              <div className="flex flex-col gap-1">
                {Object.entries(seasonalThemes).map(([key, config]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key as SeasonalTheme);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors w-full text-left ${
                      currentTheme === key 
                        ? 'bg-gray-100 dark:bg-gray-800 font-bold text-gray-900 dark:text-white' 
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span>{config.icon}</span>
                    <span>{config.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}