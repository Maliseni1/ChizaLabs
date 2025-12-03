// app/page.tsx
'use client';

import { blogPosts } from './data/posts';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import MotionLink from './components/MotionLink';
import PageTransition from './components/PageTransition';
import ThemeToggle from './components/ThemeToggle';
import ScrollAnimation from './components/ScrollAnimation';
import Newsletter from './components/Newsletter';
import AppShowcase from './components/AppShowcase';
import Quiz from './components/Quiz';
import UserBadge from './components/UserBadge';
import SmartBanner from './components/SmartBanner';
import HoverCard from './components/HoverCard';
import HeroVideo from './components/HeroVideo';
import CommunityPoll from './components/CommunityPoll';
import WebinarSection from './components/WebinarSection';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ======== SCROLL SPY LOGIC ========
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { 
      rootMargin: "-45% 0px -45% 0px" 
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Helper to determine link styles
  const getLinkClasses = (sectionId: string) => {
    const baseClasses = "transition-colors duration-300";
    const isActive = activeSection === sectionId;
    return `${baseClasses} ${isActive ? 'text-blue-400 font-bold' : 'text-gray-300 hover:text-white'}`;
  };

  return (
    <PageTransition>
      {/* Main Container: White in Light Mode, Deep Gray in Dark Mode */}
      <main className="flex min-h-screen flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <header className="bg-gray-900 dark:bg-gray-950 text-white p-4 shadow-md sticky top-0 z-50 transition-colors duration-300">
          <div className="container mx-auto flex justify-between items-center">
            <MotionLink href="#home" className="flex items-center space-x-2">
              <Image src="/chizalabs-logo.png" alt="Chiza Labs Logo" width={80} height={40} />
            </MotionLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center">
              <MotionLink href="#home" className={getLinkClasses('home')}>Home</MotionLink>
              <MotionLink href="#applications" className={getLinkClasses('applications')}>Applications</MotionLink>
              <MotionLink href="#insights" className={getLinkClasses('insights')}>Insights</MotionLink>
              <MotionLink href="#about" className={getLinkClasses('about')}>About</MotionLink>
              <MotionLink href="#contact" className={getLinkClasses('contact')}>Contact</MotionLink>
              
              <div className="ml-4 pl-4 border-l border-gray-700 flex items-center">
                <ThemeToggle />
                <UserBadge />
              </div>
            </nav>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button onClick={toggleMenu} className="flex flex-col space-y-1 focus:outline-none">
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-gray-800 dark:bg-gray-900 py-4 px-4 border-t border-gray-700">
              <ul className="flex flex-col space-y-4">
                <li><MotionLink href="#home" className={`${getLinkClasses('home')} block`} onClick={() => setIsMenuOpen(false)}>Home</MotionLink></li>
                <li><MotionLink href="#applications" className={`${getLinkClasses('applications')} block`} onClick={() => setIsMenuOpen(false)}>Applications</MotionLink></li>
                <li><MotionLink href="#insights" className={`${getLinkClasses('insights')} block`} onClick={() => setIsMenuOpen(false)}>Insights</MotionLink></li>
                <li><MotionLink href="#about" className={`${getLinkClasses('about')} block`} onClick={() => setIsMenuOpen(false)}>About</MotionLink></li>
                <li><MotionLink href="#contact" className={`${getLinkClasses('contact')} block`} onClick={() => setIsMenuOpen(false)}>Contact</MotionLink></li>
              </ul>
            </nav>
          )}
        </header>

        {/* VIDEO HERO SECTION */}
        <HeroVideo />

        {/* Applications Section */}
        <section id="applications" className="py-16 bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-3xl text-center mb-8 text-gray-900 dark:text-white font-bold">Our Applications</h2>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Nyumba App Card */}
              <HoverCard>
              <ScrollAnimation delay={0.1}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
                  <img src="/nyumba-preview.png" alt="Nyumba App Screenshot" className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Nyumba</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
                    The premier rental listings on the digital frontier. Find your dream home.
                  </p>
                  <div>
                    <a href="https://nyumba-app.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                      Visit Site
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
              </HoverCard>

              {/* PhotoGen App Card */}
              <HoverCard>
              <ScrollAnimation delay={0.2}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
                  <img src="/photogen-preview.png" alt="PhotoGen App Screenshot" className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">PhotoGen</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
                    Unleash your creativity with AI. Turn your imagination into visual art in seconds.
                  </p>
                  <div>
                    <a href="https://photo-gen-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                      Visit Site
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
              </HoverCard>

              {/* Audire App Card */}
              <HoverCard>
              <ScrollAnimation delay={0.3}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
                  <img src="/audire-preview.png" alt="Audire App Screenshot" className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Audire</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
                    Turn any file into audio instantly. An offline mobile tool for listening to documents on the go. v1.1.2
                  </p>
                  <div className="flex gap-3">
                    <a href="https://github.com/Maliseni1/Audire/releases/download/v1.1.2/Audire-v1.1.2-Modern.apk" className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded transition-colors duration-300 text-sm">
                      Download
                    </a>
                    <a href="/apps/audire" className="flex-1 text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold py-2 px-2 rounded transition-colors duration-300 text-sm">
                      Versions
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
              </HoverCard>

              {/* CutCam */}
              <HoverCard>
              <ScrollAnimation delay={0.1}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
                  <img src="/cutcam-preview.png" alt="CutCam Preview" className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">CutCam</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
                    AI-driven assistant for DIY haircuts. Real-time head detection and step-by-step guard recommendations. v1.0.0
                  </p>
                  <div className="flex gap-3">
                    <a href="https://github.com/Maliseni1/CutCam/releases/download/v1.0.0/app-release.apk" className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded transition-colors duration-300 text-sm">
                      Download
                    </a>
                    <a href="/apps/cutcam" className="flex-1 text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold py-2 px-2 rounded transition-colors duration-300 text-sm">
                      Versions
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
              </HoverCard>

              {/* Calon - NOW LIVE v1.0.0 */}
              <HoverCard>
              <ScrollAnimation delay={0.2}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
                  <img src="/calon-preview.png" alt="Calon App" className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Calon</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
                    Your secure wellness hub. Log symptoms, get medication reminders, access offline first aid, and find nearby health facilities.
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="https://github.com/Maliseni1/calon-releases/releases/download/v1.0.0/app-release.apk" 
                      className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded transition-colors duration-300 text-sm"
                    >
                      Download
                    </a>
                    <a 
                      href="/apps/calon" 
                      className="flex-1 text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold py-2 px-2 rounded transition-colors duration-300 text-sm"
                    >
                      Versions
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
              </HoverCard>

              {/* Nyumba Mobile */}
              <HoverCard>
              <ScrollAnimation delay={0.3}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
                  <img src="/nyumba-preview.png" alt="Nyumba Mobile App" className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Nyumba Mobile</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
                    The Nyumba experience, optimized for your phone. Browse listings, chat with landlords, and get notifications on the go.
                  </p>
                  <div>
                    <span className="inline-block bg-gray-400 cursor-not-allowed text-white font-bold py-2 px-4 rounded">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
              </HoverCard>

              {/* Omnis */}
              <HoverCard>
              <ScrollAnimation delay={0.4}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
                  <img src="/omnis-preview.png" alt="Omnis Preview" className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Omnis</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
                    Your universal file companion. Read, edit, convert, and manage docs, PDFs, and more with AI assistance across Mobile, Windows, and Linux.
                  </p>
                  <div>
                    <span className="inline-block bg-gray-400 cursor-not-allowed text-white font-bold py-2 px-4 rounded">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
              </HoverCard>

              {/* Resumind AI Card */}
              <HoverCard>
              <ScrollAnimation delay={0.5}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col border border-gray-100 dark:border-gray-700 h-full">
                  <img src="/Resumind-preview.png" alt="Resumind Preview" className="w-full h-48 object-cover mb-4 rounded bg-gray-200" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Resumind AI</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">
                    We&apos;re always working on new and innovative solutions. Check back soon!
                  </p>
                  <div>
                    <span className="inline-block bg-gray-400 cursor-not-allowed text-white font-bold py-2 px-4 rounded">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section (NEW) */}
        <ScrollAnimation>
          <AppShowcase />
        </ScrollAnimation>

        {/* Latest Insights (Blog) Section */}
        <section id="insights" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-3xl text-center mb-8 text-gray-900 dark:text-white font-bold">Latest Insights</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.slice(0, 3).map((post, index) => (
                <ScrollAnimation key={post.id} delay={index * 0.1}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col border border-gray-100 dark:border-gray-700 h-full">
                    <div className="h-48 bg-gray-200 w-full relative">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-sm text-blue-500 font-semibold mb-2">{post.date}</span>
                      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto">
                        {post.isAvailable ? (
                          <a 
                            href={`/blog/${post.slug}`} 
                            className="text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
                          >
                            Read Article <span className="ml-2">→</span>
                          </a>
                        ) : (
                          <span className="text-gray-400 font-medium cursor-not-allowed text-sm">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            
            <div className="text-center mt-10">
               <ScrollAnimation>
                 <a 
                   href="/blog" 
                   className="inline-block border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-bold py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                 >
                   View All Posts
                 </a>
               </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Live Events / Webinars */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-3xl text-center mb-12 text-gray-900 dark:text-white font-bold">
                Events & Community
              </h2>
              <WebinarSection />
            </ScrollAnimation>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-3xl text-center mb-8 text-gray-900 dark:text-white font-bold">About Chiza Labs</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Chiza Labs, we are driven by a passion for innovation and a commitment to excellence.
                  We specialize in creating intuitive, powerful, and scalable web and mobile applications that solve
                  real-world problems.
                </p>
                <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  From AI-powered tools to comprehensive real-estate platforms, our goal is to
                  leverage the latest technologies to build solutions that make a tangible impact.
                  Our small, dedicated team works tirelessly to turn complex ideas into simple,
                  elegant user experiences.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-3xl text-center mb-8 text-gray-900 dark:text-white font-bold">Get In Touch</h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Have a project in mind or just want to say hello? Send us a message!
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <form
                id="contact-form"
                className="max-w-md mx-auto"
                method="POST"
                action="https://formspree.io/f/mldoooqo"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </ScrollAnimation>
            <div id="form-status" className="mt-4 text-center"></div>
          </div>
        </section>

        {/* Engagement Zone: Quiz & Poll */}
        <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-300">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Engage with Chiza Labs
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Test your knowledge to earn badges, or cast your vote to influence our next big release.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

              {/* Quiz Component */}
              <ScrollAnimation delay={0.2}>
                <Quiz />
              </ScrollAnimation>

              {/* Poll Component */}
              <ScrollAnimation delay={0.4}>
                <CommunityPoll />
              </ScrollAnimation>

            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <ScrollAnimation>
          <Newsletter />
        </ScrollAnimation>

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

        {/* AI Recommendation Engine */}
        <SmartBanner />

      </main>
    </PageTransition>
  );
}