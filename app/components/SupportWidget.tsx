'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  options?: { label: string; action: string }[];
};

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm the Chiza Assistant. You can ask me about our apps, services, or just say hello!",
      sender: 'bot',
      options: [
        { label: "I need a Mobile App", action: "app" },
        { label: "I need a Website", action: "web" },
      ]
    }
  ]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  // === THE BRAIN: Simple Keyword Logic ===
  const getBotResponse = (text: string): Message => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('quote')) {
      return {
        id: Date.now() + 1,
        text: "Project costs depend on features and complexity. We'd love to give you a custom quote!",
        sender: 'bot',
        options: [{ label: "Get a Quote via WhatsApp", action: "whatsapp" }]
      };
    }
    
    if (lowerText.includes('app') || lowerText.includes('mobile') || lowerText.includes('android') || lowerText.includes('ios')) {
      return {
        id: Date.now() + 1,
        text: "We specialize in offline-first mobile apps like Audire and Calon. Do you have an app idea?",
        sender: 'bot',
        options: [{ label: "Yes, let's chat", action: "whatsapp" }]
      };
    }

    if (lowerText.includes('web') || lowerText.includes('site')) {
      return {
        id: Date.now() + 1,
        text: "We build high-performance websites using Next.js (just like this one!). Fast, SEO-optimized, and beautiful.",
        sender: 'bot'
      };
    }

    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return {
        id: Date.now() + 1,
        text: "Hello there! How can I help you innovate today?",
        sender: 'bot'
      };
    }

    if (lowerText.includes('job') || lowerText.includes('hiring') || lowerText.includes('career')) {
      return {
        id: Date.now() + 1,
        text: "We appreciate your interest but we are not currently for staff, Check back later.",
        sender: 'bot',
        options: [{ label: "Contact Us", action: "email" }]
      };
    }

    // Default Fallback
    return {
      id: Date.now() + 1,
      text: "I'm not sure I understand, but a human engineer can help you!",
      sender: 'bot',
      options: [
        { label: "Chat on WhatsApp", action: "whatsapp" },
        { label: "Send Email", action: "email" }
      ]
    };
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Add User Message
    const userMsg: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    const userText = inputValue; // Store text for logic
    setInputValue(""); // Clear input
    setIsTyping(true); // Show typing indicator

    // 2. Simulate Delay & Bot Response
    setTimeout(() => {
      const response = getBotResponse(userText);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1000); // 1 second delay feels natural
  };

  const handleOptionClick = (option: { label: string; action: string }) => {
    // Treat clicking a button exactly like typing a message
    setInputValue(option.label);
    // We need to trigger the logic manually since state update is async
    const userMsg: Message = { id: Date.now(), text: option.label, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let response: Message;
      
      // Handle Specific Actions
      if (option.action === 'whatsapp') {
        window.open('https://wa.me/260953512090?text=Hi%20Chiza%20Labs', '_blank');
        response = { id: Date.now() + 1, text: "Opening WhatsApp...", sender: 'bot' };
      } else if (option.action === 'email') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        return; // Don't add message if closing
      } else {
        // Fallback to text logic for other buttons
        response = getBotResponse(option.label);
      }

      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] max-w-[90vw] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden pointer-events-auto flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-white font-bold">Chiza Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-blue-100 hover:text-white">
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  
                  <div className={`px-4 py-2 rounded-2xl text-sm max-w-[85%] ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>

                  {msg.options && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => handleOptionClick(opt)}
                          className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1.5 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors border border-blue-200 dark:border-blue-800"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start">
                  <div className="bg-gray-200 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex gap-2 shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto transition-colors"
      >
        {isOpen ? (
          <i className="fas fa-chevron-down text-xl"></i>
        ) : (
          <i className="fas fa-comment-dots text-2xl"></i>
        )}
      </motion.button>

    </div>
  );
}