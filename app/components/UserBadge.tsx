'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function UserBadge() {
  const [hasBadge, setHasBadge] = useState(false);

  // Check local storage every few seconds (simple way to sync)
  useEffect(() => {
    const checkBadge = () => {
      if (localStorage.getItem('chiza-badge') === 'true') {
        setHasBadge(true);
      }
    };
    
    checkBadge();
    const interval = setInterval(checkBadge, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!hasBadge) return null;

  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="hidden lg:flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full border border-yellow-400/50 ml-4"
      title="Chiza Insider Badge Unlocked"
    >
      <span className="text-lg">🏆</span>
      <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">Insider</span>
    </motion.div>
  );
}