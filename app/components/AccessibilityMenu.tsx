'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100); // Percentage
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  // Check for Speech Synthesis Support
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    }
  }, []);

  // Apply Font Size & Contrast
  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = `${fontSize}%`;
    
    if (isHighContrast) {
      html.classList.add('high-contrast');
      document.body.style.filter = 'contrast(150%) brightness(110%) grayscale(100%)';
    } else {
      html.classList.remove('high-contrast');
      document.body.style.filter = '';
    }
  }, [fontSize, isHighContrast]);

  // Handle Text-to-Speech
  const toggleSpeech = () => {
    if (!speechSupported) return;

    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      // Read the main content only (skip nav/footer if possible, but here we read body text)
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      
      utterance.onend = () => setIsReading(false);
      
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start pointer-events-none">
      
      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden pointer-events-auto p-4 w-64"
          >
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-2">
              Accessibility Tools
            </h3>

            <div className="space-y-4">
              {/* Font Resizer */}
              <div>
                <p className="text-xs text-gray-500 mb-2">Text Size</p>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                  <button 
                    onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                    className="flex-1 py-1 text-sm font-bold hover:bg-white dark:hover:bg-gray-700 rounded shadow-sm transition-all"
                  >
                    A-
                  </button>
                  <span className="text-xs w-8 text-center">{fontSize}%</span>
                  <button 
                    onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                    className="flex-1 py-1 text-lg font-bold hover:bg-white dark:hover:bg-gray-700 rounded shadow-sm transition-all"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <button
                onClick={() => setIsHighContrast(!isHighContrast)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isHighContrast 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span>High Contrast</span>
                <i className={`fas ${isHighContrast ? 'fa-toggle-on' : 'fa-toggle-off'} text-lg`}></i>
              </button>

              {/* Text-to-Speech Toggle */}
              {speechSupported && (
                <button
                  onClick={toggleSpeech}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isReading 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <span>{isReading ? 'Stop Reading' : 'Read Page Aloud'}</span>
                  <i className={`fas ${isReading ? 'fa-volume-up animate-pulse' : 'fa-volume-off'} text-lg`}></i>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full shadow-xl flex items-center justify-center pointer-events-auto transition-colors border-2 border-transparent focus:border-blue-500 outline-none"
        aria-label="Accessibility Menu"
        title="Accessibility Tools"
      >
        <i className="fas fa-universal-access text-xl"></i>
      </motion.button>

    </div>
  );
}