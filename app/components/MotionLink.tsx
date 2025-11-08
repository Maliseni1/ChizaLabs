// app/components/MotionLink.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the animation variants for the link
const linkVariants = {
  initial: { scale: 1, color: "#ffffff" }, // White color, normal scale
  hover: { scale: 1.05, color: "#93c5fd" }, // Slightly larger, light blue color on hover
  tap: { scale: 0.95 }, // Slightly smaller on click/tap
};

type MotionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string; // Allow passing additional Tailwind classes
  onClick?: () => void; // Allow onClick handler
};

export default function MotionLink({ href, children, className = '', onClick }: MotionLinkProps) {
  return (
    <motion.div
      variants={linkVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={{ type: "spring", stiffness: 400, damping: 17 }} // Smooth spring animation
      onClick={onClick} // Attach onClick to the motion div
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
