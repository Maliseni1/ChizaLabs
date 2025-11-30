// app/components/Preloader.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for the fade-out animation to finish before removing from DOM
      setTimeout(() => setIsVisible(false), 500); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-gray-950 transition-opacity duration-500 ease-in-out ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Logo Animation */}
      <div className="relative w-32 h-32 mb-4 animate-bounce-slow">
        <Image 
          src="/c.logo.png" // Using your square logo icon
          alt="Chiza Labs" 
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Text Animation */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-pulse">
        Chiza Labs
      </h1>
      
      {/* Optional: Small Loading Spinner/Dots */}
      <div className="flex gap-2 mt-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}