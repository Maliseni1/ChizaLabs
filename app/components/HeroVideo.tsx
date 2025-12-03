'use client';

import ScrollAnimation from './ScrollAnimation';
import MotionLink from './MotionLink';

export default function HeroVideo() {
  return (
    // Added bg-black so white text is visible even if video fails to load
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      
      {/* 1. The Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline // Crucial for iPhones
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60" // Reduced opacity slightly for better text contrast
      >
        {/* reliable Tech Background Video */}
        <source 
          src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" 
          type="video/mp4" 
        />
        {/* Fallback text if video is blocked */}
        Your browser does not support the video tag.
      </video>

      {/* 2. The Overlay (Darkens video so text is readable) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-blue-900/20 z-10"></div>

      {/* 3. The Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <ScrollAnimation>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Innovate. Create. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Deploy.</span>
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 font-light leading-relaxed">
            Chiza Labs builds cutting-edge offline-first mobile applications and AI tools that solve real-world problems.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MotionLink
              href="#applications"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore Apps
            </MotionLink>
            <MotionLink
              href="#contact"
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
            >
              Get in Touch
            </MotionLink>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}