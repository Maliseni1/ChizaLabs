'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// The options users can vote for
const options = [
  { id: 'ios', label: 'Audire for iOS (iPhone)', votes: 45 },
  { id: 'desktop', label: 'Omnis for Windows/Mac', votes: 32 },
  { id: 'health', label: 'More Calon Health Features', votes: 28 },
  { id: 'ai', label: 'New AI Art Tools', votes: 15 },
];

export default function CommunityPoll() {
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(options);
  const [totalVotes, setTotalVotes] = useState(0);

  // Load vote state from local storage on mount
  useEffect(() => {
    const savedVote = localStorage.getItem('chiza-poll-vote');
    if (savedVote) {
      setHasVoted(true);
      // In a real app, you'd fetch live stats here. 
      // For now, we simulate the user's vote being added to the static numbers.
      const updatedVotes = options.map(opt => 
        opt.id === savedVote ? { ...opt, votes: opt.votes + 1 } : opt
      );
      setVotes(updatedVotes);
    }
    
    // Calculate total
    const total = options.reduce((acc, curr) => acc + curr.votes, 0) + (savedVote ? 1 : 0);
    setTotalVotes(total);
  }, []);

  const handleVote = (id: string) => {
    // 1. Save to local storage
    localStorage.setItem('chiza-poll-vote', id);
    
    // 2. Update local state to show animation
    const updatedVotes = votes.map(opt => 
      opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
    );
    setVotes(updatedVotes);
    setTotalVotes(totalVotes + 1);
    setHasVoted(true);

    // TODO: In the future, send this 'id' to Formspree or your database
    // console.log("User voted for:", id);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <span className="text-blue-500">📊</span> Community Vote
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Help shape the future of Chiza Labs. What should we work on next?
        </p>

        <div className="space-y-3">
          {votes.map((option) => {
            const percentage = Math.round((option.votes / totalVotes) * 100) || 0;
            
            return (
              <button
                key={option.id}
                onClick={() => !hasVoted && handleVote(option.id)}
                disabled={hasVoted}
                className="relative w-full text-left group"
              >
                {/* Background Progress Bar (Visible after voting) */}
                {hasVoted && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-blue-100 dark:bg-blue-900/30 rounded-lg"
                  />
                )}

                {/* Content */}
                <div className={`relative z-10 flex justify-between items-center p-3 rounded-lg border transition-all duration-200 ${
                  hasVoted 
                    ? 'border-transparent' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}>
                  <span className={`font-medium text-sm ${hasVoted ? 'text-gray-800 dark:text-gray-200' : 'text-gray-700 dark:text-gray-300'}`}>
                    {option.label}
                  </span>
                  
                  {hasVoted && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400"
                    >
                      {percentage}%
                    </motion.span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-between items-center text-xs text-gray-400">
          <span>{totalVotes} votes total</span>
          {hasVoted && <span>Thanks for voting!</span>}
        </div>
      </div>
    </div>
  );
}