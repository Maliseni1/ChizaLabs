// app/components/PageTransition.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  // Define the animation variants for the page transition
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20, // Start slightly below its final position
    },
    in: {
      opacity: 1,
      y: 0, // Move to its final position
    },
    out: {
      opacity: 0,
      y: -20, // Move slightly above when leaving (relevant for page-to-page)
    },
  };

  // Define the transition settings explicitly with type assertions
  const transitionSettings = {
    type: "tween" as const, // Explicitly set type to "tween"
    ease: "anticipate" as const, // Explicitly set easing function
    duration: 0.3, // Duration of the animation in seconds
  };

  return (
    // Wrap children in AnimatePresence for enter/exit animations
    <AnimatePresence mode="wait"> {/* mode="wait" ensures the old page exits before the new one enters, if applicable */}
      <motion.div
        // Remove key={pathname} as it's not relevant for scroll-based or single-page animations
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={transitionSettings} // Apply the correctly typed transition settings
        className="min-h-screen flex flex-col" // Ensure it takes full height
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}