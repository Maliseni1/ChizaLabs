'use client';

import { labProjects } from '../data/lab-projects';
import Image from 'next/image'; 
import MotionLink from '../components/MotionLink';
import PageTransition from '../components/PageTransition';
import ThemeToggle from '../components/ThemeToggle';
import ScrollAnimation from '../components/ScrollAnimation';
import SeasonSwitcher from '../components/SeasonSwitcher';
import UserBadge from '../components/UserBadge';
import { useSeasonalTheme } from '../context/SeasonalThemeContext';

export default function LabPage() {
  const { themeConfig } = useSeasonalTheme();
  const primary = themeConfig.colors.primary;
  const accent = themeConfig.colors.accent;

  return (
    <PageTransition>
      {/* Main Container - Deep Dark Space Theme (Dark) | Vibrant Tech Lab (Light) */}
      <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-[#050505] dark:via-[#0a0a0a] dark:to-[#050505] text-slate-900 dark:text-gray-300 selection:bg-emerald-500/30 selection:text-emerald-700 dark:selection:text-emerald-200 overflow-x-hidden font-sans transition-colors duration-500">
        
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-400/20 dark:bg-emerald-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-pulse-slow delay-1000"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08] dark:opacity-[0.03] invert dark:invert-0"></div>
        </div>

        {/* Header */}
        <header className="fixed top-0 w-full z-50 border-b border-slate-200/60 dark:border-white/5 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl transition-colors duration-300 supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto px-4 h-16 flex justify-between items-center">
             <div className="flex items-center gap-6">
               <MotionLink href="/" className="group flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                 <span className="group-hover:-translate-x-1 transition-transform font-black">←</span> 
                 <span>EXIT LAB</span>
               </MotionLink>
               <div className="h-4 w-[2px] bg-slate-300 dark:bg-white/10 rounded-full"></div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
                 <span className="font-mono text-sm tracking-widest text-emerald-600 dark:text-emerald-500 font-bold">R&D_DIVISION</span>
               </div>
             </div>

             <div className="flex items-center gap-4">
               <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-gray-500 shadow-sm dark:shadow-none backdrop-blur-md">
                  <span>SYS.STATUS:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">ONLINE</span>
               </div>
               <div className="flex items-center gap-2">
                 <SeasonSwitcher />
                 <ThemeToggle />
                 <UserBadge />
               </div>
             </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-white/80 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 text-xs font-bold font-mono mb-8 uppercase tracking-widest shadow-lg shadow-emerald-100/50 dark:shadow-none backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
                </span>
                Internal Experiments
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter drop-shadow-sm dark:drop-shadow-none">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 animate-gradient-x">LAB</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                Where we break things to build the future. 
                <br className="hidden md:block" />
                Explore our <span className="text-slate-900 dark:text-white font-bold decoration-emerald-400 underline decoration-2 underline-offset-2">prototypes</span>, <span className="text-slate-900 dark:text-white font-bold decoration-cyan-400 underline decoration-2 underline-offset-2">concepts</span>, and <span className="text-slate-900 dark:text-white font-bold decoration-blue-500 underline decoration-2 underline-offset-2">moonshots</span>.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-32 relative z-10 flex-grow">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {labProjects.map((project, index) => (
                <ScrollAnimation key={project.id} delay={index * 0.1}>
                  <div className="group relative h-full bg-white/70 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] border border-white/60 dark:border-white/10 hover:border-emerald-400 dark:hover:border-emerald-500/50 rounded-3xl p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/40 dark:hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] backdrop-blur-md">
                    
                    {/* Tech Corner Decoration */}
                    <div className="absolute top-0 right-0 p-5 opacity-40 dark:opacity-50 group-hover:opacity-100 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-600 dark:text-emerald-500/50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" strokeWidth="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        </svg>
                    </div>

                    <div className="h-full bg-gradient-to-b from-slate-50/50 to-white/80 dark:from-[#0A0A0A] dark:to-[#0A0A0A] rounded-2xl p-8 flex flex-col relative overflow-hidden border border-slate-100 dark:border-transparent">
                      
                      {/* NEW: Project Logo & Status Header */}
                      <div className="flex justify-between items-start mb-6">
                        {/* Logo */}
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-1 shadow-sm">
                           <Image 
                              src={project.image} 
                              alt={project.title} 
                              width={48} 
                              height={48} 
                              className="w-full h-full object-contain"
                           />
                        </div>

                        {/* Status Badge */}
                        <div className="flex flex-col items-end">
                            <div className={`
                              text-[10px] font-bold px-3 py-1.5 rounded-full border uppercase tracking-widest shadow-sm mb-1
                              ${project.status === 'Concept' ? 'border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10' : ''}
                              ${project.status === 'Prototype' ? 'border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10' : ''}
                              ${project.status === 'Alpha' ? 'border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-500/10' : ''}
                            `}>
                              {project.status}
                            </div>
                            <div className="font-mono text-[10px] font-bold text-slate-400 dark:text-gray-600">
                              ID: {project.id.toUpperCase()}
                            </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed mb-8 flex-grow font-medium">
                        {project.description}
                      </p>

                      {/* Disclaimer */}
                      {project.disclaimer && (
                        <div className="mb-8 p-4 bg-amber-50 dark:bg-yellow-900/10 border-l-4 border-amber-400 dark:border-yellow-600/50 text-amber-900 dark:text-yellow-500/80 text-xs font-mono rounded-r-lg">
                          <span className="font-black mr-2">WARN:</span>
                          {project.disclaimer}
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200 dark:border-white/5">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[11px] font-bold font-mono text-slate-600 dark:text-gray-500 bg-white dark:bg-white/5 border border-slate-200 dark:border-transparent px-3 py-1.5 rounded-md hover:text-black dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-colors cursor-default shadow-sm dark:shadow-none">
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            
            <div className="mt-24 text-center">
               <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent w-full max-w-xs mb-8"></div>
               <p className="text-slate-500 dark:text-gray-500 text-sm font-mono">
                Have an idea for the lab? <a href="mailto:maliseni1205@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 underline decoration-dotted underline-offset-4 font-bold">Initialize Protocol</a>
              </p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-white/5 py-12 transition-colors duration-300">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 opacity-80 dark:opacity-50">
                <img src="/c.logo.png" className="w-8 h-8 grayscale opacity-80" alt="" />
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-900 dark:text-white tracking-widest">CHIZA LABS</span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-500">R&D DEPARTMENT</span>
                </div>
            </div>
            <div className="flex space-x-8">
              <a href="https://github.com/Maliseni1" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-black dark:text-gray-600 dark:hover:text-white cursor-pointer uppercase tracking-widest transition-colors">
                GitHub
              </a>
              <a href="https://x.com/malisenichavula" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-black dark:text-gray-600 dark:hover:text-white cursor-pointer uppercase tracking-widest transition-colors">
                X
              </a>
              <a href="www.linkedin.com/in/maliseni-chavula-b162953a0" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-black dark:text-gray-600 dark:hover:text-white cursor-pointer uppercase tracking-widest transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>

      </main>
    </PageTransition>
  );
}