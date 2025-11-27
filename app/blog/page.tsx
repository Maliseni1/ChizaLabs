'use client';

import { blogPosts } from '../data/posts';
import MotionLink from '../components/MotionLink';
import PageTransition from '../components/PageTransition';

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        {/* Simple Header */}
        <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
             <MotionLink href="/" className="font-bold text-xl hover:text-blue-400 transition-colors">
               ← Back to Home
             </MotionLink>
          </div>
        </header>

        {/* Blog Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">All Insights</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                  {/* Image */}
                  <div className="h-48 bg-gray-200 w-full relative">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-90" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-blue-500 font-semibold mb-2">{post.date}</span>
                    <h2 className="text-xl font-bold mb-3 text-gray-800 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                       {post.isAvailable ? (
                        <span className="text-blue-600 font-bold flex items-center cursor-pointer">
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
      </main>
    </PageTransition>
  );
}