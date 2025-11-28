'use client';

import { appDetails } from '../../data/releases';
import { notFound, useParams } from 'next/navigation';
import MotionLink from '../../components/MotionLink';
import PageTransition from '../../components/PageTransition';
import ThemeToggle from '../../components/ThemeToggle';

export default function AppReleasePage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the app data based on the URL (e.g., /apps/audire)
  // @ts-ignore
  const app = appDetails[slug];

  // If app doesn't exist, show 404 (or you can redirect)
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
      <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        
        {/* Simple Header */}
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

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          
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
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 shadow-md' 
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800'
                    }`}
                >
                  {/* Latest Badge */}
                  {release.isLatest && (
                    <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      LATEST
                    </span>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Version {release.version}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{release.date}</p>
                    </div>
                    
                    <a 
                      href={release.downloadLink}
                      className={`inline-flex items-center justify-center px-6 py-2 rounded-lg font-bold transition-colors
                        ${release.isLatest
                          ? 'bg-blue-500 hover:bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                    >
                      <i className="fas fa-download mr-2"></i> Download APK
                    </a>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What's New:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {/* @ts-ignore */}
                      {release.notes.map((note, i) => (
                        <li key={i}>{note}</li>
                      ))}
                    </ul>
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
      </main>
    </PageTransition>
  );
}