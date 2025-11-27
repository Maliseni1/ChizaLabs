// app/page.tsx
'use client'; // Add this at the top if not already present. We need client-side state.

import Image from 'next/image';
import { useState } from 'react'; // Import useState for managing state
import MotionLink from './components/MotionLink'; // Import the animated link component
import PageTransition from './components/PageTransition'; // Import the page transition component

export default function Home() {
  // State to manage the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Wrap the entire content with PageTransition
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        {/* Navigation Bar */}
        <header className="bg-gray-800 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <MotionLink href="/" className="flex items-center space-x-2">
              {/* Increase the logo size to fit the navbar */}
              <Image src="/chizalabs-logo.png" alt="Chiza Labs Logo" width={80} height={40} />
              {/* Removed the "Chiza Labs" text as requested */}
            </MotionLink>

            {/* Desktop Navigation - Use MotionLink */}
            <nav className="hidden md:flex space-x-6">
              <MotionLink
                href="#applications"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Applications
              </MotionLink>
              <MotionLink
                href="#about"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                About
              </MotionLink>
              <MotionLink
                href="#contact"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </MotionLink>
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu (conditionally rendered) - Use MotionLink */}
          {isMenuOpen && (
            <nav className="md:hidden bg-gray-700 py-4 px-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <MotionLink
                    href="#applications"
                    className="text-white hover:text-blue-400 transition-colors duration-300 block"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click - FIXED: Changed onCLick to onClick
                  >
                    Applications
                  </MotionLink>
                </li>
                <li>
                  <MotionLink
                    href="#about"
                    className="text-white hover:text-blue-400 transition-colors duration-300 block"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click - FIXED: Changed onCLick to onClick
                  >
                    About
                  </MotionLink>
                </li>
                <li>
                  <MotionLink
                    href="#contact"
                    className="text-white hover:text-blue-400 transition-colors duration-300 block"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click - FIXED: Changed onCLick to onClick
                  >
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
          <div className="container mx-auto">
            <h2 className="text-3xl text-center mb-8 text-gray-900">Our Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Nyumba App Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Nyumba</h3>
                <p className="mb-4">
                  The premier rental listings on the digital frontier. Find your dream home.
                </p>
                <a
                  href="https://nyumba-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Visit Site
                </a>
              </div>

              {/* PhotoGen App Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">PhotoGen</h3>
                <p className="mb-4">
                  Unleash your creativity with AI. Turn your imagination into visual art in seconds.
                </p>
                <a
                  href="https://photo-gen-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Visit Site
                </a>
              </div>

              {/* Resumind AI Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Resumind AI</h3>
                <p className="mb-4">
                We&apos;re always working on new and innovative solutions. Check back soon!
                </p>
                <a
                  href="#"
                  className="inline-block bg-gray-400 cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto">
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
          <div className="container mx-auto">
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
                <i className="fab fa-github fa-lg"></i> {/* GitHub Icon */}
              </a>
              <a
                href="https://x.com/Malisenichavula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                aria-label="X"
              >
                <i className="fab fa-x-twitter fa-lg"></i> {/* X (Twitter) Icon */}
              </a>
              <a
                href="https://www.linkedin.com/in/maliseni-chavula-7100b323b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg"></i> {/* LinkedIn Icon */}
              </a>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
}