'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MotionLink from '../components/MotionLink';
import PageTransition from '../components/PageTransition';
import ThemeToggle from '../components/ThemeToggle';

// Define the shape of a history item
interface HistoryItem {
  name: string;
  icon: string;
  slug: string;
  date: string;
}

// Define the shape of the user state
interface UserState {
  hasBadge: boolean;
  interest: string;
  history: HistoryItem[];
  pollVote: string | null;
}

export default function Dashboard() {
  // Initialize with proper typing
  const [user, setUser] = useState<UserState>({
    hasBadge: false,
    interest: 'Technology',
    history: [],
    pollVote: null
  });

  useEffect(() => {
    // Hydrate data from Local Storage
    setUser({
      hasBadge: localStorage.getItem('chiza-badge') === 'true',
      interest: localStorage.getItem('chiza-interest') || 'Technology',
      history: JSON.parse(localStorage.getItem('chiza-history') || '[]'),
      pollVote: localStorage.getItem('chiza-poll-vote')
    });
  }, []);

  const clearData = () => {
    if(confirm("Reset your personalization data?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
             <div className="flex items-center gap-4">
               <MotionLink href="/" className="font-bold hover:text-blue-500 transition-colors">
                 ← Back Home
               </MotionLink>
               <span className="text-gray-300">|</span>
               <span className="font-bold text-gray-900 dark:text-white">My Lab Dashboard</span>
             </div>
             <ThemeToggle />
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 max-w-5xl">
          
          {/* Welcome Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden"
          >
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">Welcome back, Insider.</h1>
              <p className="opacity-90">Here is your personalized activity snapshot.</p>
            </div>
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Status Card */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wider mb-4">Status</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${user.hasBadge ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-400'}`}>
                  {user.hasBadge ? '🏆' : '🔒'}
                </div>
                <div>
                  <p className="font-bold text-lg dark:text-white">{user.hasBadge ? 'Chiza Insider' : 'Guest'}</p>
                  <p className="text-xs text-gray-500">{user.hasBadge ? 'Quiz Master Verified' : 'Complete the quiz to upgrade'}</p>
                </div>
              </div>
              {!user.hasBadge && (
                <MotionLink href="/#quiz" className="text-blue-500 text-sm hover:underline">Go to Quiz →</MotionLink>
              )}
            </div>

            {/* 2. Interests Card */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wider mb-4">Your Interests</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Based on your browsing, you seem interested in:
              </p>
              <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full font-bold text-sm">
                {user.interest}
              </span>
            </div>

            {/* 3. Recently Viewed */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wider mb-4">Recent Visits</h3>
              {user.history.length > 0 ? (
                <ul className="space-y-3">
                  {user.history.map((item, i) => (
                    <li key={i}>
                      <MotionLink href={`/apps/${item.slug}`} className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <img src={item.icon} className="w-8 h-8 rounded object-cover" alt="" />
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{item.name}</span>
                      </MotionLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400 italic">No apps viewed yet.</p>
              )}
            </div>

          </div>

          {/* Privacy Controls */}
          <div className="mt-12 text-center">
            <button onClick={clearData} className="text-red-500 hover:text-red-600 text-sm underline opacity-60 hover:opacity-100 transition-opacity">
              Clear all my local data
            </button>
          </div>

        </div>
      </main>
    </PageTransition>
  );
}