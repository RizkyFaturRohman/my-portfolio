'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [displayYear, setDisplayYear] = useState(2022);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000; 
    const startYear = 2022; 
    const endYear = 2026;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startYear + (endYear - startYear) * easeOutProgress);
      
      setDisplayYear(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setTimeout(() => setLoading(false), 800);
      }
    };
    window.requestAnimationFrame(step);
  }, []);

  return (
    <>
      {/* LOADING SCREEN (Tidak diubah, sudah bagus) */}
      <div 
        className={`fixed inset-0 z-50 bg-[#383530] flex items-center justify-center transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          loading ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full h-full relative">
          <h1 className="text-[35vw] md:text-[28vw] leading-none font-serif text-[#F4F0E6] tracking-tighter opacity-90 drop-shadow-lg">
            {displayYear}
          </h1>
          <p className="absolute bottom-8 md:bottom-12 right-8 md:right-12 text-xs md:text-sm font-serif italic text-[#F4F0E6] opacity-70">
            A journey through years of design
          </p>
        </div>
      </div>

      <section className="h-screen relative overflow-hidden bg-[#383530] flex md:pl-16 lg:pl-24">
        
        {/* SIDEBAR VERTIKAL - Fade In */}
        <div className={`fixed top-0 left-0 h-screen w-16 lg:w-24 border-r border-[#F4F0E6]/10 hidden md:flex flex-col justify-between items-center py-8 z-30 pointer-events-none mix-blend-difference text-[#F4F0E6] transition-opacity duration-1000 delay-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
           <div className="h-24 w-full"></div> 
           <div className="flex-grow flex flex-col justify-center items-center space-y-32">
              <div className="-rotate-90 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest opacity-60">Folio — Edition</div>
              <div className="-rotate-90 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest opacity-60">Rizky Fatur Rohman™</div>
           </div>
           <div className="-rotate-90 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest opacity-60 mb-8">© {new Date().getFullYear()}</div>
        </div>

        {/* KONTEN HERO */}
        <div className="flex-grow flex flex-col justify-between pt-24 pb-8 relative">
          
          <div className="flex justify-end items-start px-8 md:px-12 lg:px-24 text-sm font-serif">
            <div className={`max-w-xs md:max-w-sm text-right text-[#F4F0E6] transition-all duration-1000 delay-[600ms] ${loading ? 'opacity-0 translate-y-4' : 'opacity-90 translate-y-0'}`}>
              <p className="text-base md:text-lg leading-relaxed">
                Independent Full Stack Developer & Multimedia Designer based in Indonesia — focused on thoughtful, considered digital work.
              </p>
            </div>
          </div>

          {/* ANIMASI NAMA BERUNTUN (Staggered Mask Reveal) */}
          <div className="flex-grow flex flex-col justify-center px-8 md:px-12 lg:px-24">
            <div className="overflow-hidden">
              <h1 className={`text-[17vw] md:text-[14vw] leading-[0.85] font-serif uppercase tracking-tighter text-[#F4F0E6] transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] delay-[400ms] ${loading ? 'translate-y-full' : 'translate-y-0'}`}>
                RIZKY
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className={`text-[17vw] md:text-[14vw] leading-[0.85] font-serif uppercase tracking-tighter text-[#F4F0E6] md:pl-[8vw] transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] delay-[550ms] ${loading ? 'translate-y-full' : 'translate-y-0'}`}>
                FATUR
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className={`text-[17vw] md:text-[14vw] leading-[0.85] font-serif uppercase tracking-tighter text-[#F4F0E6] md:pl-[16vw] transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] delay-[700ms] ${loading ? 'translate-y-full' : 'translate-y-0'}`}>
                ROHMAN
              </h1>
            </div>
          </div>

          <div className={`flex justify-between items-end px-8 md:px-12 lg:px-24 text-xs md:text-sm font-sans tracking-wide text-[#F4F0E6] transition-all duration-1000 delay-[1000ms] ${loading ? 'opacity-0 translate-y-4' : 'opacity-80 translate-y-0'}`}>
            <div className="space-y-1"><p>Bandung, Indonesia</p><p>(GMT+7) 19:15</p></div>
            <div className="text-center hidden md:block space-y-1"><p>Open for</p><p>collaborations</p></div>
            <div className="text-right">
              <p className="font-serif italic text-3xl md:text-4xl pr-4 opacity-100 hover:opacity-70 transition-opacity cursor-pointer">Scroll</p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}