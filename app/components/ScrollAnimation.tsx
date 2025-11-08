// app/components/ScrollAnimation.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string; // Allow passing additional Tailwind classes
  delay?: number; // Optional delay for staggered animations
};

export default function ScrollAnimation({ children, className = '', delay = 0 }: ScrollAnimationProps) {
  const ref = useRef(null);
  // useInView hook checks if the element is visible in the viewport
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger once when scrolled into view, with a margin

  // Define the animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } }, // Fade in and slide up
  };

  return (
    <motion.div
      ref={ref} // Attach the ref to the element Framer Motion will observe
      initial="hidden" // Start in the 'hidden' state
      animate={isInView ? "visible" : "hidden"} // Animate to 'visible' if in view, otherwise stay 'hidden'
      variants={animationVariants} // Use the defined variants
      className={className} // Pass through any additional classes
    >
      {children}
    </motion.div>
  );
}