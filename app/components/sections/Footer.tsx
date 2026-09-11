'use client';

import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, delayClass = "" }: { children: React.ReactNode, delayClass?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden w-full">
      <div 
        className={`transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } ${delayClass}`}
      >
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen px-8 md:pl-24 lg:pl-32 md:pr-12 lg:pr-24 pt-32 pb-12 flex flex-col justify-between bg-[#383530] text-[#F4F0E6] border-t border-[#F4F0E6]/20"
    >
      
      {/* ==========================================
          MAIN CALL TO ACTION (Giant Typography)
          ========================================== */}
      <div className="flex-grow flex flex-col justify-center items-start w-full">
        
        {/* Teks Let's Connect */}
        <div className="flex flex-col w-full text-center md:text-left">
          <Reveal>
            <h2 className="text-[20vw] md:text-[14vw] leading-[0.8] font-serif uppercase tracking-tighter">
              Let&apos;s
            </h2>
          </Reveal>
          <Reveal delayClass="delay-100">
            <h2 className="text-[20vw] md:text-[14vw] leading-[0.8] font-serif uppercase tracking-tighter md:pl-[12vw] italic opacity-90">
              Connect
            </h2>
          </Reveal>
        </div>
        
        {/* Email & Info Bawah - Rata Kanan pada Desktop */}
        <div className="mt-16 md:mt-24 w-full flex justify-center md:justify-end">
          <Reveal delayClass="delay-300">
            <div className="flex flex-col items-center md:items-end">
              <a 
                href="mailto:superrizky3456@gmail.com" 
                className="group inline-flex items-center gap-4 text-2xl md:text-4xl lg:text-5xl font-serif italic hover:opacity-50 transition-all duration-500 border-b border-[#F4F0E6] pb-2 cursor-pointer"
              >
                <span>superrizky3456@gmail.com</span>
                <span className="transform transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
              </a>
              <p className="mt-6 text-sm md:text-base font-mono uppercase tracking-widest opacity-60">
                +62 812-2197-4657
              </p>
            </div>
          </Reveal>
        </div>

      </div>

      {/* ==========================================
          FOOTER BOTTOM INFO (Links & Copyright)
          ========================================== */}
      <div className="border-t border-[#F4F0E6]/20 pt-8 mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 text-xs font-mono uppercase tracking-widest opacity-60">
        
        {/* Lokasi */}
        <div className="space-y-2">
          <p>Contact To</p>
          <p>Bandung, Indonesia</p>
        </div>

        {/* Tautan Sosial Media */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a href="https://linkedin.com/in/rfaturrohman/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/RizkyFaturRohman" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-white transition-colors">GitHub</a>
          <a href="https://bit.ly/Project-RizkyFaturR" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-white transition-colors">Projects</a>
        </div>
        
        {/* Copyright & Back to Top */}
        <div className="md:text-right space-y-4">
          <div className="space-y-2">
            <p>© {new Date().getFullYear()}</p>
            <p>Rizky Fatur Rohman</p>
          </div>
          <button 
            onClick={scrollToTop}
            className="hover:opacity-100 hover:text-white transition-colors cursor-pointer block md:inline-block pt-4 md:pt-0"
          >
            ↑ Back to top
          </button>
        </div>
        
      </div>
    </section>
  );
}