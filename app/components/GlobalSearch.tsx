'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { appDetails } from '../data/releases';
import { blogPosts } from '../data/posts';

// --- DATA PREPARATION ---
const apps = Object.keys(appDetails).map((key) => {
  // @ts-ignore
  const app = appDetails[key];
  return {
    id: key,
    title: app.name,
    category: 'Application',
    // @ts-ignore
    url: `/apps/${key}`,
    icon: '📱'
  };
});

const blogs = blogPosts.map((post) => ({
  id: post.id,
  title: post.title,
  category: 'Insight',
  url: `/blog/${post.slug}`,
  icon: '✍️'
}));

const actions = [
  { id: 'contact', title: 'Contact Support', category: 'Action', url: '#contact', icon: '✉️' },
  { id: 'home', title: 'Go to Homepage', category: 'Action', url: '/', icon: '🏠' },
];

const allItems = [...apps, ...blogs, ...actions];

// --- COMPONENT ---
export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false); // New state for voice
  const router = useRouter();

  // Handle Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- VOICE SEARCH LOGIC ---
  const handleVoiceSearch = () => {
    // Check browser support
    const SpeechRecognition = 
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice search is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false; // Stop after one sentence

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript); // Type what was said
    };

    recognition.start();
  };
  // --------------------------

  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (url: string) => {
    setIsOpen(false);
    setQuery('');
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(url);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-4 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 flex items-center gap-3 hover:scale-105 transition-transform"
        title="Search (Ctrl + K)"
      >
        <i className="fas fa-search"></i>
        <span className="hidden md:inline text-sm">Search...</span>
        <span className="hidden md:inline text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded border border-gray-300 dark:border-gray-600">
          Ctrl K
        </span>
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Search Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Input Header */}
              <div className="flex items-center px-4 py-4 border-b border-gray-100 dark:border-gray-800 relative">
                <i className="fas fa-search text-gray-400 text-lg mr-3"></i>
                
                <input
                  autoFocus
                  type="text"
                  placeholder={isListening ? "Listening..." : "Type to find apps, articles..."}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400"
                />

                {/* Voice Button */}
                <button 
                  onClick={handleVoiceSearch}
                  className={`ml-2 p-2 rounded-full transition-all ${
                    isListening 
                      ? 'bg-red-100 text-red-600 animate-pulse' 
                      : 'text-gray-400 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  title="Voice Search"
                >
                  <i className={`fas ${isListening ? 'fa-microphone-lines' : 'fa-microphone'}`}></i>
                </button>

                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-500 text-xs px-2 py-1 rounded ml-3"
                >
                  ESC
                </button>
              </div>

              {/* Results List */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredItems.length > 0 ? (
                  <div className="space-y-1">
                    {filteredItems.map((item) => (
                      <button
                        key={`${item.category}-${item.id}`}
                        onClick={() => handleSelect(item.url)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.icon}</span>
                          <div className="text-left">
                            <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">
                              {item.category}
                            </p>
                          </div>
                        </div>
                        <i className="fas fa-chevron-right text-gray-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all"></i>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <p>No results found for "{query}"</p>
                    <p className="text-sm mt-2">Try speaking clearly or type "Audire"</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-2 text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 flex justify-between">
                <span>Total Items: {filteredItems.length}</span>
                <span>Chiza Labs Intelligence</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}