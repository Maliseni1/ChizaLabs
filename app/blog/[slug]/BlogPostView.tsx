// app/blog/[slug]/BlogPostView.tsx
'use client';

import { blogPosts } from '../../data/posts';
import MotionLink from '../../components/MotionLink';
import PageTransition from '../../components/PageTransition';
import ThemeToggle from '../../components/ThemeToggle';
import Newsletter from '../../components/Newsletter';
import ScrollAnimation from '../../components/ScrollAnimation';
import ScrollProgress from '../../components/ScrollProgress';

export default function BlogPostView({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <MotionLink href="/blog" className="text-blue-500 hover:underline">← Back to Blog</MotionLink>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <ScrollProgress />
      <main className="flex min-h-screen flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
        
        {/* Header */}
        <header className="bg-gray-900 dark:bg-gray-950 text-white p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
             <div className="flex items-center gap-4">
               <MotionLink href="/blog" className="font-bold hover:text-blue-400 transition-colors flex items-center">
                 <span className="mr-2">←</span> Blog
               </MotionLink>
               <span className="text-gray-500">|</span>
               <span className="font-semibold text-sm md:text-base truncate max-w-[200px]">{post.title}</span>
             </div>
             <ThemeToggle />
          </div>
        </header>

        {/* ======== IMPROVED ARTICLE HERO ======== */}
        <div className="relative h-[50vh] w-full overflow-hidden">
            {/* Background Image - Center aligned, no built-in brightness filter */}
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover object-center"
            />
            
            {/* Dark Gradient Overlay - Makes text pop! */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-transparent"></div>

            {/* Text Content - Positioned bottom-left with high contrast */}
            <div className="absolute inset-0 flex flex-col justify-end items-start p-6 md:p-16 z-10">
                <ScrollAnimation>
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block shadow-lg">
                        {post.date}
                    </span>
                </ScrollAnimation>
                <ScrollAnimation delay={0.1}>
                    {/* Bolder text with shadow for maximum readability */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl leading-tight drop-shadow-xl">
                        {post.title}
                    </h1>
                </ScrollAnimation>
            </div>
        </div>
        {/* ======================================= */}

        {/* Article Content */}
        <article className="container mx-auto px-4 py-16 max-w-3xl flex-grow">
            <ScrollAnimation delay={0.2}>
                <div 
                    // Added 'prose-blue' for better link styling within the text
                    className="prose prose-lg prose-blue dark:prose-invert max-w-none text-gray-800 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />
            </ScrollAnimation>
        </article>

        {/* Newsletter & Footer */}
        <ScrollAnimation>
            <Newsletter />
        </ScrollAnimation>

        <footer className="bg-gray-800 dark:bg-black text-white p-4 mt-auto">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; 2025 Chiza Labs. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="https://github.com/Maliseni1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors"><i className="fab fa-github fa-lg"></i></a>
              <a href="https://x.com/Malisenichavula" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors"><i className="fab fa-x-twitter fa-lg"></i></a>
              <a href="https://www.linkedin.com/in/maliseni-chavula-7100b323b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors"><i className="fab fa-linkedin fa-lg"></i></a>
            </div>
          </div>
        </footer>

      </main>
    </PageTransition>
  );
}