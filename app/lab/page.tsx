'use client';

import { labProjects } from '../data/lab-projects';
import MotionLink from '../components/MotionLink';
import PageTransition from '../components/PageTransition';
import ThemeToggle from '../components/ThemeToggle';
import ScrollAnimation from '../components/ScrollAnimation';

export default function LabPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-slate-900 text-white transition-colors duration-300">
        
        {/* Header (Distinct Dark Theme) */}
        <header className="bg-black/50 backdrop-blur-md border-b border-white/10 p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
             <div className="flex items-center gap-4">
               <MotionLink href="/" className="font-bold hover:text-blue-400 transition-colors flex items-center text-sm">
                 <span className="mr-2">←</span> Exit to Main Site
               </MotionLink>
               <span className="text-gray-600">|</span>
               <span className="font-mono text-green-400">CHIZA_LABS_R&D</span>
             </div>
             <ThemeToggle />
          </div>
        </header>

        {/* Lab Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <ScrollAnimation>
              <div className="inline-block border border-green-500/30 bg-green-500/10 px-4 py-1 rounded-full text-green-400 font-mono text-xs mb-6">
                // EXPERIMENTAL PROJECTS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Lab</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                This is our playground. Here you will find experiments, prototypes, and moonshot ideas 
                that aren't ready for the public yet. <span className="text-white">Proceed with curiosity.</span>
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labProjects.map((project, index) => (
                <ScrollAnimation key={project.id} delay={index * 0.1}>
                  <div className="group relative bg-white/5 border border-white/10 hover:border-green-500/50 rounded-xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-blue-500/20 text-blue-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                        {project.status}
                      </div>
                      <div className="text-gray-500 font-mono text-xs">
                        {project.id}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </ScrollAnimation>
              ))}
            </div>
            
            <div className="mt-16 text-center border-t border-white/10 pt-8">
              <p className="text-gray-500 text-sm">
                Want to collaborate on one of these experiments? <a href="/#contact" className="text-green-400 hover:underline">Contact Us</a>.
              </p>
            </div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}