'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Updated data to match your screenshots
const features = [
  {
    id: 0,
    title: "Your Library",
    description: "Keep your converted documents organized. Access PDFs, images, and text files instantly from one clean dashboard.",
    screenImage: "/library.jpg", // Using your screenshot
  },
  {
    id: 1,
    title: "Smart Player",
    description: "The heart of Audire. Listen to your docs with natural-sounding voices, control playback speed, and skip through sections.",
    screenImage: "/player.jpg", // Using your screenshot
  },
  {
    id: 2,
    title: "Easy Navigation",
    description: "Access settings, switch profiles, and manage your preferences seamlessly with our intuitive side menu.",
    screenImage: "/side-menu.jpg", // Using your screenshot
  }
];

export default function AppShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience <span className="text-blue-500">Audire</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tap a feature below to see the app in action.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* LEFT: Feature Controls */}
          <div className="flex-1 max-w-md space-y-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                  activeFeature === index
                    ? 'bg-white dark:bg-gray-800 border-blue-500 shadow-lg scale-105'
                    : 'bg-transparent border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${
                  activeFeature === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                }`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>

          {/* RIGHT: The Phone Mockup */}
          <div className="relative">
            {/* The Phone Frame */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-700/50">
              
              {/* The "Notch" */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
              
              {/* The Screen Content */}
              <div className="relative w-full h-full bg-black">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    {/* Screen Image */}
                    <Image 
                      src={features[activeFeature].screenImage}
                      alt={features[activeFeature].title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Decorative blob behind phone */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-blue-500/20 blur-[80px] rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
}