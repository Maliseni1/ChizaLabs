// app/blog/page.tsx
'use client';

import { blogPosts } from '../data/posts';
import MotionLink from '../components/MotionLink';
import PageTransition from '../components/PageTransition';

export default function BlogPage() {
  return (
    <PageTransition>
      {/* Updated Main Container for Dark Mode & Sticky Footer */}
      <main className="flex min-h-screen flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
        
        {/* Header */}
        <header className="bg-gray-900 dark:bg-gray-950 text-white p-4 shadow-md sticky top-0 z-50 transition-colors duration-300">
          <div className="container mx-auto flex justify-between items-center">
             <MotionLink href="/" className="font-bold text-xl hover:text-blue-400 transition-colors flex items-center">
               <span className="mr-2">←</span> Back to Home
             </MotionLink>
          </div>
        </header>

        {/* Blog Content */}
        <section className="py-20 flex-grow">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">All Insights</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col border border-gray-100 dark:border-gray-700">
                  {/* Image */}
                  <div className="h-48 bg-gray-200 w-full relative">
                     {/* Replace with <Image /> if using Next.js Image component in the future */}
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-90" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-blue-500 font-semibold mb-2">{post.date}</span>
                    <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                       {post.isAvailable ? (
                        <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center cursor-pointer hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                          Read Article <span className="ml-2">→</span>
                        </span>
                      ) : (
                        <span className="text-gray-400 font-medium cursor-not-allowed text-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer (Added) */}
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