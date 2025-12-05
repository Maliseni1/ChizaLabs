'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  
  // Refs to track state across closures and prevent Garbage Collection
  const isReadingRef = useRef(false);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    }
  }, []);

  // Sync state to ref
  useEffect(() => {
    isReadingRef.current = isReading;
  }, [isReading]);

  // --- High Contrast & Font Size Logic ---
  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = `${fontSize}%`;
    
    if (isHighContrast) {
      html.classList.add('high-contrast-mode');
      
      const style = document.createElement('style');
      style.id = 'high-contrast-style';
      style.innerHTML = `
        .high-contrast-mode, .high-contrast-mode body {
          background-color: #000000 !important;
          color: #ffff00 !important;
        }
        .high-contrast-mode main, .high-contrast-mode section, .high-contrast-mode footer, .high-contrast-mode header {
           background-color: #000000 !important;
           color: #ffff00 !important;
           border-color: #ffff00 !important;
        }
        .high-contrast-mode * {
          border-color: #ffff00 !important;
          box-shadow: none !important;
          text-shadow: none !important;
        }
        .high-contrast-mode img, .high-contrast-mode video {
          filter: grayscale(100%) contrast(150%);
          opacity: 0.8 !important;
        }
        /* Fix for disappearing buttons in High Contrast */
        .high-contrast-mode button, 
        .high-contrast-mode a,
        .high-contrast-mode input,
        .high-contrast-mode textarea {
          background-color: #000000 !important;
          color: #ffff00 !important;
          border: 2px solid #ffff00 !important;
        }
        /* Specific fix for our floating action buttons */
        .high-contrast-mode .fixed {
           z-index: 9999 !important; 
           opacity: 1 !important;
        }
        /* Reader highlight style */
        .tts-highlight {
          background-color: #ffff00 !important;
          color: #000000 !important;
          outline: 4px solid #ffff00 !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      html.classList.remove('high-contrast-mode');
      const existingStyle = document.getElementById('high-contrast-style');
      if (existingStyle) existingStyle.remove();
    }
  }, [fontSize, isHighContrast]);

  // --- Text-to-Speech Logic ---
  const toggleSpeech = () => {
    if (!speechSupported) return;

    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      document.querySelectorAll('.tts-highlight').forEach(el => {
        el.classList.remove('tts-highlight');
        (el as HTMLElement).style.backgroundColor = '';
        (el as HTMLElement).style.color = '';
      });
    } else {
      // 1. Collect readable elements
      const contentArea = document.querySelector('main') || document.body;
      const allElements = Array.from(contentArea.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote')) as HTMLElement[];
      
      const readableElements = allElements.filter(el => {
        const text = el.innerText.trim();
        const isAccessMenu = el.closest('.fixed.bottom-40');
        return text.length > 2 && el.offsetParent !== null && !isAccessMenu;
      });

      if (readableElements.length === 0) return;

      setIsReading(true);
      isReadingRef.current = true; // Ensure ref is set for the loop immediately
      
      let currentIndex = 0;

      const speakNext = () => {
        // Check ref instead of state to avoid stale closures
        if (!isReadingRef.current) return;
        
        if (currentIndex >= readableElements.length) {
          setIsReading(false);
          return;
        }

        const element = readableElements[currentIndex];
        const textToRead = element.innerText.replace(/\s+/g, ' ').trim();

        if (!textToRead) {
          currentIndex++;
          speakNext();
          return;
        }
        
        // --- Highlight Logic ---
        document.querySelectorAll('.tts-highlight').forEach(el => {
          el.classList.remove('tts-highlight');
          (el as HTMLElement).style.backgroundColor = '';
          (el as HTMLElement).style.color = '';
        });

        element.classList.add('tts-highlight');
        element.style.backgroundColor = '#fef08a'; 
        element.style.color = '#000';
        element.style.transition = 'background-color 0.3s';
        
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // -----------------------

        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = 1;
        utterance.pitch = 1;

        // Assign to ref to prevent Garbage Collection
        currentUtteranceRef.current = utterance;

        utterance.onend = () => {
           element.classList.remove('tts-highlight');
           element.style.backgroundColor = ''; 
           element.style.color = '';
           
           currentIndex++;
           if (isReadingRef.current) {
             setTimeout(() => speakNext(), 50);
           }
        };

        utterance.onerror = (e) => {
            console.error("Speech error", e);
            // Clear highlight on error
            element.classList.remove('tts-highlight');
            element.style.backgroundColor = ''; 
            element.style.color = '';
            
            // Try to skip to next element instead of stopping completely
            currentIndex++;
            if (isReadingRef.current) {
                setTimeout(() => speakNext(), 50);
            }
        };

        // Do NOT cancel here, as it interrupts the flow in some browsers
        window.speechSynthesis.speak(utterance);
      };

      window.speechSynthesis.cancel();
      speakNext();
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (typeof document !== 'undefined') {
        const style = document.getElementById('high-contrast-style');
        if (style) style.remove();
        document.querySelectorAll('.tts-highlight').forEach(el => {
            el.classList.remove('tts-highlight');
            (el as HTMLElement).style.backgroundColor = '';
            (el as HTMLElement).style.color = '';
        });
      }
    };
  }, []);

  return (
    // MOVED UP: bottom-40 to safely clear Global Search (bottom-6) and prevent overlap
    <div className="fixed bottom-40 left-6 z-[100] flex flex-col items-start pointer-events-none">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden pointer-events-auto p-4 w-64"
          >
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-2">
              Accessibility Tools
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-2">Text Size</p>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 border border-gray-300 dark:border-gray-700">
                  <button 
                    onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                    className="flex-1 py-1 text-sm font-bold hover:bg-white dark:hover:bg-gray-700 rounded shadow-sm transition-all"
                  >
                    A-
                  </button>
                  <span className="text-xs w-8 text-center font-mono">{fontSize}%</span>
                  <button 
                    onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                    className="flex-1 py-1 text-lg font-bold hover:bg-white dark:hover:bg-gray-700 rounded shadow-sm transition-all"
                  >
                    A+
                  </button>
                </div>
              </div>

              <button
                onClick={() => setIsHighContrast(!isHighContrast)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                  isHighContrast 
                    ? 'bg-yellow-400 text-black border-black' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-transparent'
                }`}
              >
                <span>High Contrast</span>
                <i className={`fas ${isHighContrast ? 'fa-toggle-on' : 'fa-toggle-off'} text-lg`}></i>
              </button>

              {speechSupported && (
                <button
                  onClick={toggleSpeech}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                    isReading 
                      ? 'bg-blue-600 text-white border-blue-800' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-transparent'
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

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center pointer-events-auto transition-colors outline-none z-50 ${
          isHighContrast 
            ? 'bg-yellow-400 text-black border-4 border-black'
            : 'bg-gray-900 dark:bg-white text-white dark:text-black border-2 border-transparent'
        }`}
        aria-label="Accessibility Menu"
        title="Accessibility Tools"
      >
        <i className="fas fa-universal-access text-xl"></i>
      </motion.button>

    </div>
  );
}