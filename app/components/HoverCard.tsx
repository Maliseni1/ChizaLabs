'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function HoverCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ 
        y: -10, // Move up 10px
        transition: { type: "spring", stiffness: 300 } 
      }}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}