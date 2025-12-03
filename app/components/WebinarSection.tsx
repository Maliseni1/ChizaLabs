'use client';

import { useState } from 'react';

const NEXT_EVENT = {
  title: "Building Offline-First Apps for Africa",
  speaker: "Maliseni Chavula",
  role: "Lead Developer, Chiza Labs",
  description: "We are planning a deep dive into local databases, sync logic, and Flutter optimization. Join our waitlist to get notified when we go live.",
};

export default function WebinarSection() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-gray-900 rounded-3xl shadow-2xl overflow-hidden text-white relative">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT: Content */}
        <div className="p-8 lg:p-12 flex-1 z-10">
          <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            ● Coming Soon
          </div>
          
          <h3 className="text-3xl font-bold mb-2">{NEXT_EVENT.title}</h3>
          <p className="text-blue-200 mb-6">with {NEXT_EVENT.speaker} ({NEXT_EVENT.role})</p>
          
          <p className="text-gray-300 mb-8 leading-relaxed max-w-xl">
            {NEXT_EVENT.description}
          </p>

          {/* Date Placeholder instead of Timer */}
          <div className="flex items-center gap-4 mb-8 bg-white/5 p-4 rounded-xl border border-white/10 max-w-md">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl">
              📅
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Event Date</p>
              <p className="text-lg font-bold text-white">To Be Announced (2026)</p>
            </div>
          </div>

          {!isRegistered ? (
            <button 
              onClick={() => setIsRegistered(true)}
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-white/20"
            >
              <i className="fas fa-bell mr-2"></i> Notify Me
            </button>
          ) : (
            <div className="flex items-center gap-2 text-green-400 font-bold bg-green-400/10 px-4 py-2 rounded-lg inline-block">
              <i className="fas fa-check-circle"></i> You're on the waitlist!
            </div>
          )}
        </div>

        {/* RIGHT: Visual / Thumbnail */}
        <div className="lg:w-2/5 bg-gray-800 relative min-h-[300px] lg:min-h-full">
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10">
             <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <i className="fas fa-lock text-3xl ml-1 text-white opacity-60"></i>
             </div>
             <p className="mt-4 font-medium tracking-widest text-sm uppercase text-gray-300">Registration Opening Soon</p>
           </div>
           
           {/* Placeholder Image Background */}
           <img 
             src="/chizalabs-logo.png" 
             className="w-full h-full object-cover opacity-30 grayscale" 
             alt="Webinar Thumbnail" 
           />
        </div>

      </div>
    </div>
  );
}