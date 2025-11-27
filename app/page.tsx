// app/page.tsx
'use client';

import { blogPosts } from './data/posts';
import Image from 'next/image';
import { useState, useEffect } from 'react'; // Added useEffect
import MotionLink from './components/MotionLink';
import PageTransition from './components/PageTransition';

export default function Home() {
  // State to manage the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('home');

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ======== SCROLL SPY LOGIC ========
  useEffect(() => {
    // 1. Select all sections that have an ID
    const sections = document.querySelectorAll('section[id]');
    
    // 2. Create the observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the section is intersecting (visible)
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { 
      // Trigger when the section crosses the middle of the screen
      rootMargin: "-45% 0px -45% 0px" 
    });

    // 3. Observe each section
    sections.forEach((section) => observer.observe(section));

    // 4. Cleanup function
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Helper to determine link styles
  const getLinkClasses = (sectionId: string) => {
    const baseClasses = "transition-colors duration-300";
    // Check if this link matches the active section
    const isActive = activeSection === sectionId;
    
    // Return blue/bold if active, white/hover-blue if not
    return `${baseClasses} ${isActive ? 'text-blue-400 font-bold' : 'text-white hover:text-blue-400'}`;
  };
  // ==================================

  return (
    // Wrap the entire content with PageTransition
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        {/* Navigation Bar */}
        <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <MotionLink href="#home" className="flex items-center space-x-2">
              <Image src="/chizalabs-logo.png" alt="Chiza Labs Logo" width={80} height={40} />
            </MotionLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <MotionLink href="#home" className={getLinkClasses('home')}>
                Home
              </MotionLink>
              <MotionLink href="#applications" className={getLinkClasses('applications')}>
                Applications
              </MotionLink>
              {/* Added Insights Link */}
              <MotionLink href="#insights" className={getLinkClasses('insights')}>
                Insights
              </MotionLink>
              <MotionLink href="#about" className={getLinkClasses('about')}>
                About
              </MotionLink>
              <MotionLink href="#contact" className={getLinkClasses('contact')}>
                Contact
              </MotionLink>
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1 focus:outline-none"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-gray-700 py-4 px-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <MotionLink href="#home" className={`${getLinkClasses('home')} block`} onClick={() => setIsMenuOpen(false)}>
                    Home
                  </MotionLink>
                </li>
                <li>
                  <MotionLink href="#applications" className={`${getLinkClasses('applications')} block`} onClick={() => setIsMenuOpen(false)}>
                    Applications
                  </MotionLink>
                </li>
                 {/* Added Insights Link to Mobile */}
                <li>
                  <MotionLink href="#insights" className={`${getLinkClasses('insights')} block`} onClick={() => setIsMenuOpen(false)}>
                    Insights
                  </MotionLink>
                </li>
                <li>
                  <MotionLink href="#about" className={`${getLinkClasses('about')} block`} onClick={() => setIsMenuOpen(false)}>
                    About
                  </MotionLink>
                </li>
                <li>
                  <MotionLink href="#contact" className={`${getLinkClasses('contact')} block`} onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </MotionLink>
                </li>
              </ul>
            </nav>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Innovate. Create. Deploy.</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Chiza Labs builds cutting-edge applications to solve real-world problems.
              Explore our latest projects.
            </p>
            <MotionLink
              href="#applications"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
            >
              See Our Work
            </MotionLink>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-center mb-8 text-gray-900">Our Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Nyumba App Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <img 
                  src="/nyumba-preview.png" 
                  alt="Nyumba App Screenshot" 
                  className="w-full h-48 object-cover mb-4 rounded bg-gray-200" 
                />
                <h3 className="text-xl font-bold mb-4">Nyumba</h3>
                <p className="mb-4 text-gray-600 flex-grow">
                  The premier rental listings on the digital frontier. Find your dream home.
                </p>
                <div>
                  <a
                    href="https://nyumba-app.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Visit Site
                  </a>
                </div>
              </div>

              {/* PhotoGen App Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <img 
                  src="/photogen-preview.png" 
                  alt="PhotoGen App Screenshot" 
                  className="w-full h-48 object-cover mb-4 rounded bg-gray-200" 
                />
                <h3 className="text-xl font-bold mb-4">PhotoGen</h3>
                <p className="mb-4 text-gray-600 flex-grow">
                  Unleash your creativity with AI. Turn your imagination into visual art in seconds.
                </p>
                <div>
                  <a
                    href="https://photo-gen-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Visit Site
                  </a>
                </div>
              </div>

              {/* Audire App Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <img 
                  src="/audire-preview.png" 
                  alt="Audire App Screenshot" 
                  className="w-full h-48 object-cover mb-4 rounded bg-gray-200" 
                />
                <h3 className="text-xl font-bold mb-4">Audire</h3>
                <p className="mb-4 text-gray-600 flex-grow">
                  Turn any file into audio instantly. An offline mobile tool for listening to documents on the go. v1.0.0
                </p>
                <div className="flex gap-4 items-center">
                  <a
                    // Make sure you updated this link to your GitHub Release from the previous step!
                    href="https://github.com/Maliseni1/ChizaLabs/releases/download/v1.0.0/audire.apk"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Download App
                  </a>
                </div>
              </div>

              {/* Resumind AI Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <img 
                  src="/Resumind-preview.png" 
                  alt="Resumind Preview" 
                  className="w-full h-48 object-cover mb-4 rounded bg-gray-200" 
                />
                <h3 className="text-xl font-bold mb-4">Resumind AI</h3>
                <p className="mb-4 text-gray-600 flex-grow">
                  We&apos;re always working on new and innovative solutions. Check back soon!
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-block bg-gray-400 cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Coming Soon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights (Blog) Section */}
        <section id="insights" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-center mb-8 text-gray-900">Latest Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                  {/* Image Area */}
                  <div className="h-48 bg-gray-200 w-full relative">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-blue-500 font-semibold mb-2">{post.date}</span>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow text-sm">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More Button */}
                    <div className="mt-auto">
                      {post.isAvailable ? (
                        <a 
                          href={`/blog/${post.slug}`} 
                          className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center"
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
              ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center mt-10">
               <a 
                 href="/blog" 
                 className="inline-block border-2 border-blue-500 text-blue-500 font-bold py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
               >
                 View All Posts
               </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-center mb-8 text-gray-900">About Chiza Labs</h2>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                At Chiza Labs, we are driven by a passion for innovation and a commitment to excellence.
                We specialize in creating intuitive, powerful, and scalable web and mobile applications that solve
                real-world problems.
              </p>
              <p className="mb-4">
                From AI-powered tools to comprehensive real-estate platforms, our goal is to
                leverage the latest technologies to build solutions that make a tangible impact.
                Our small, dedicated team works tirelessly to turn complex ideas into simple,
                elegant user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-center mb-8 text-gray-900">Get In Touch</h2>
            <p className="text-center text-gray-600 mb-8">
              Have a project in mind or just want to say hello? Send us a message!
            </p>
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
                className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            <div id="form-status" className="mt-4 text-center"></div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 mt-auto">
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