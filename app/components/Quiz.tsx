'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "Which Chiza Labs app helps you listen to documents offline?",
    options: ["CutCam", "Audire", "Nyumba", "Omnis"],
    answer: "Audire"
  },
  {
    id: 2,
    question: "What technology does CutCam use to guide haircuts?",
    options: ["Lidar", "Computer Vision", "GPS", "NFC"],
    answer: "Computer Vision"
  },
  {
    id: 3,
    question: "What is the primary goal of Local-First software?",
    options: ["Cloud dependency", "Offline reliability", "Expensive hosting", "Slower speeds"],
    answer: "Offline reliability"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);

  // Check if user already has the badge
  useEffect(() => {
    const hasBadge = localStorage.getItem('chiza-badge');
    if (hasBadge) setBadgeUnlocked(true);
  }, []);

  const handleAnswer = (selected: string) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      // If they get all right, save badge
      if (score + (selected === questions[currentQuestion].answer ? 1 : 0) === questions.length) {
        localStorage.setItem('chiza-badge', 'true');
        setBadgeUnlocked(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative">
        
        {/* Header */}
        <div className="bg-blue-600 p-4 text-center">
          <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
            <i className="fas fa-gamepad"></i> Chiza Tech Challenge
          </h3>
        </div>

        <div className="p-8 min-h-[300px] flex flex-col justify-center">
          {showScore ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                You scored {score} out of {questions.length}
              </h2>
              
              {score === questions.length ? (
                <div className="mb-6">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="inline-block text-6xl mb-4"
                  >
                    🏆
                  </motion.div>
                  <p className="text-green-500 font-bold text-lg">Badge Unlocked: Chiza Insider!</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">This badge is now saved to your browser.</p>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400 mb-6">So close! Try again to unlock the badge.</p>
              )}

              <button 
                onClick={resetQuiz}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Play Again
              </button>
            </motion.div>
          ) : (
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentQuestion}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <span className="text-sm font-bold text-blue-500 tracking-widest uppercase">
                    Question {currentQuestion + 1} / {questions.length}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                <div className="grid gap-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 text-gray-700 dark:text-gray-200 font-medium"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}