'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Replace this URL with your NEW Formspree form ID for "Newsletter"
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/movgwljy";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss a Release
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join the Chiza Labs community. Get notified about new apps like CutCam & Omnis, 
            software updates, and tech insights directly to your inbox.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-sm animate-fade-in-up">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white">You're on the list!</h3>
                <p className="text-blue-100">Thanks for subscribing. We'll keep you posted.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-white underline hover:text-blue-200"
                >
                  Subscribe another email
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-6 py-4 rounded-full text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all shadow-lg placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 rounded-full bg-gray-900 dark:bg-black text-white font-bold hover:bg-gray-800 dark:hover:bg-gray-900 focus:ring-4 focus:ring-gray-500 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i> Joining...
                  </span>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </form>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-red-200 font-medium">
              Oops! Something went wrong. Please try again.
            </p>
          )}
          
          <p className="mt-6 text-sm text-blue-200">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}