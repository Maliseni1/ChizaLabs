'use client';

import { appDetails } from '../../data/releases';
import MotionLink from '../../components/MotionLink';
import PageTransition from '../../components/PageTransition';
import ThemeToggle from '../../components/ThemeToggle';
import { useEffect } from 'react';

// This component receives the slug as a prop
export default function AppReleaseView({ slug }: { slug: string }) {
  // @ts-ignore
  const app = appDetails[slug];

  // === THIS TRACKING LOGIC ===
  useEffect(() => {
    if (app?.category) {
      // Save the category to browser storage
      localStorage.setItem('chiza-interest', app.category);
    }
  }, [app]);
  // ===============================

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">App Not Found</h1>
          <MotionLink href="/" className="text-blue-500 hover:underline">← Go Home</MotionLink>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Added flex-col to main container for sticky footer */}
      <main className="flex min-h-screen flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
        
        {/* Header */}
        <header className="bg-gray-900 dark:bg-gray-950 text-white p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
             <div className="flex items-center gap-4">
               <MotionLink href="/" className="font-bold hover:text-blue-400 transition-colors flex items-center">
                 <span className="mr-2">←</span> Back
               </MotionLink>
               <span className="text-gray-500">|</span>
               <span className="font-semibold">{app.name} Hub</span>
             </div>
             <ThemeToggle />
          </div>
        </header>

        {/* Main Content - Added flex-grow */}
        <div className="container mx-auto px-4 py-12 max-w-4xl flex-grow">
          
          {/* App Hero */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <img src={app.icon} alt={app.name} className="w-full md:w-64 h-48 object-cover rounded-lg shadow-lg" />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{app.name}</h1>
              <p className="text-xl text-blue-500 font-medium mb-4">{app.tagline}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{app.description}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 my-12"></div>

          {/* Releases Section */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Release History</h2>

          {app.releases.length > 0 ? (
            <div className="space-y-8">
              {/* @ts-ignore */}
              {app.releases.map((release, index) => (
                <div 
                  key={index} 
                  className={`relative border rounded-xl p-6 transition-colors duration-300 
                    ${release.isLatest 
                      ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800 shadow-md' 
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800'
                    }`}
                >
                  {/* Latest Badge */}
                  {release.isLatest && (
                    <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      LATEST
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                      Version {release.version}
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({release.date})</span>
                    </h3>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* DOWNLOAD OPTIONS AREA */}
                    <div className="flex-1 space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Select Your Device:</h4>
                        
                        {/* @ts-ignore */}
                        {release.downloads.map((dl, i) => (
                          <a 
                            key={i}
                            href={dl.link}
                            className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200 group
                              ${dl.highlight 
                                ? 'bg-blue-600 hover:bg-blue-700 border-blue-600 text-white shadow-md transform hover:-translate-y-0.5' 
                                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200'
                              }`}
                          >
                            <div className="flex flex-col">
                              <span className={`font-bold text-sm md:text-base ${dl.highlight ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}>
                                {dl.label}
                              </span>
                              {dl.subLabel && (
                                <span className={`text-xs ${dl.highlight ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                                  {dl.subLabel}
                                </span>
                              )}
                            </div>
                            <i className={`fas fa-download ${dl.highlight ? 'text-white' : 'text-gray-400'}`}></i>
                          </a>
                        ))}
                    </div>

                    {/* RELEASE NOTES AREA */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Release Notes:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-black/20 p-4 rounded-lg text-sm md:text-base">
                        {/* @ts-ignore */}
                        {release.notes.map((note, i) => (
                          <li key={i}>{note}</li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
              <p className="text-xl text-gray-500">No releases available yet.</p>
              <span className="inline-block mt-2 px-4 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-400">
                Coming Soon
              </span>
            </div>
          )}

        </div>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-black text-white p-4 mt-auto">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; 2025 Chiza Labs. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="https://github.com/Maliseni1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://x.com/Malisenichavula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                aria-label="X"
              >
                <i className="fab fa-x-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/maliseni-chavula-7100b323b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  ); 
}