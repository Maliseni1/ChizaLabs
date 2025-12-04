'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MotionLink from './MotionLink'; // Use MotionLink for navigation

export default function UserBadge() {
  const [hasBadge, setHasBadge] = useState(false);

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

  // Wrapped in MotionLink to navigate to Dashboard
  return (
    <MotionLink href="/dashboard">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full border border-yellow-400/50 ml-4 cursor-pointer"
        title="Go to My Dashboard"
      >
        <span className="text-lg">🏆</span>
        <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">Insider</span>
      </motion.div>
    </MotionLink>
  );
}