'use client';

import { useRecommendations } from '../hooks/useRecommendations';
import { motion, AnimatePresence } from 'framer-motion';

export default function SmartBanner() {
  const rec = useRecommendations();

  if (!rec) return null; // Don't show anything if no history

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 z-40 max-w-sm w-full p-4 hidden md:block"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-blue-500/30 p-4 flex gap-4 items-center relative overflow-hidden">
          
          {/* Glowing Effect */}
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>

          <img src={rec.icon} alt="App" className="w-12 h-12 rounded-lg object-cover" />
          
          <div className="flex-1">
            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
              {rec.title}
            </p>
            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
              {rec.suggestion}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
              {rec.desc}
            </p>
          </div>

          <a 
            href={rec.link} 
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            View
          </a>

          {/* Close Button logic could go here, but for now we keep it simple */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}