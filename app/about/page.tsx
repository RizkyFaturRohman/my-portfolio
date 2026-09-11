'use client';

import Navigation from "../components/sections/Navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// (Komponen Reveal tetap sama)
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
      <div className={`transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] ${isVisible ? "translate-y-0" : "translate-y-full"} ${delayClass}`}>
        {children}
      </div>
    </div>
  );
};

export default function About() {
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-[#383530] z-[100] transition-transform duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none ${
          isEntering ? 'translate-y-0' : 'translate-y-full'
        }`}
      />

      <main className="min-h-screen bg-[#383530] text-[#F4F0E6] selection:bg-[#F4F0E6] selection:text-[#383530]">
        <Navigation />
        
        {/* SECTION 1: HERO ABOUT */}
        <section className="pt-32 md:pt-48 px-8 md:px-16 lg:px-32 pb-24 border-b border-[#F4F0E6]/10">
          <div className="flex flex-col gap-2 mb-12">
            <Reveal delayClass="delay-[500ms]">
              <h1 className="text-[13vw] md:text-[11vw] font-serif uppercase tracking-tighter leading-[0.85]">
                Logic 
              </h1>
            </Reveal>
            <Reveal delayClass="delay-[600ms]">
              <h1 className="text-[13vw] md:text-[11vw] font-serif uppercase tracking-tighter leading-[0.85] pl-[10vw] md:pl-[15vw] italic opacity-80">
                & Aesthetics
              </h1>
            </Reveal>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-16 md:mt-32">
            <div className="w-full md:w-1/3">
              <Reveal delayClass="delay-[700ms]">
                <div className="text-xs md:text-sm font-mono uppercase tracking-widest opacity-60">
                  <p>Rizky Fatur Rohman</p>
                  <p>Bandung, Indonesia</p>
                </div>
              </Reveal>
            </div>
            
            <div className="w-full md:w-2/3 md:pl-12 lg:pl-24">
              <Reveal delayClass="delay-[800ms]">
                <p className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight">
                  I believe that great applications are not just about bug-free code, but also about visually pleasing interfaces and intuitive interactions.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 2: DUALITY */}
        <section className="px-8 md:px-16 lg:px-32 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="group">
              <Reveal><div className="border-b border-[#F4F0E6]/20 pb-8 mb-8 group-hover:border-[#F4F0E6] transition-colors duration-500"><h2 className="text-4xl md:text-6xl font-serif">The Developer</h2></div></Reveal>
              <Reveal delayClass="delay-100"><p className="text-lg opacity-80 leading-relaxed mb-8 font-light">As an Informatics Management graduate from LP3I Polytechnic, I build system architectures from the ground up—from designing relational databases to structuring solid APIs.</p></Reveal>
              <Reveal delayClass="delay-200">
                <ul className="text-xs md:text-sm font-mono uppercase tracking-widest opacity-60 space-y-3">
                  <li>— React.js & Next.js</li><li>— Laravel & MySQL</li><li>— React Native</li><li>— Tailwind CSS</li>
                </ul>
              </Reveal>
            </div>
            <div className="group md:mt-32">
              <Reveal delayClass="delay-200"><div className="border-b border-[#F4F0E6]/20 pb-8 mb-8 group-hover:border-[#F4F0E6] transition-colors duration-500"><h2 className="text-4xl md:text-6xl font-serif">The Designer</h2></div></Reveal>
              <Reveal delayClass="delay-300"><p className="text-lg opacity-80 leading-relaxed mb-8 font-light">My experience in producing visual assets has shaped a keen eye for aesthetics. I don&apos;t just assemble components, but consider the empty space, typography, and composition.</p></Reveal>
              <Reveal delayClass="delay-[400ms]">
                <ul className="text-xs md:text-sm font-mono uppercase tracking-widest opacity-60 space-y-3">
                  <li>— UI/UX Prototyping (Figma)</li><li>— Video Editing (CapCut)</li><li>— Color Grading (Lightroom)</li><li>— Visual Identity</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 3: LIFESTYLE */}
        <section className="px-8 md:px-16 lg:px-32 py-32 bg-[#F4F0E6] text-[#383530]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2">
              <Reveal><h2 className="text-xs md:text-sm font-mono uppercase tracking-widest mb-8 opacity-60">Life Outside Editor</h2></Reveal>
              <Reveal delayClass="delay-100"><p className="text-3xl md:text-5xl font-serif leading-tight">When I&apos;m not writing code or designing interfaces, I maintain my balance by long-distance running, brewing oat milk lattes, or immersing myself in HoYoverse RPG games.</p></Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal delayClass="delay-300">
                <div className="aspect-square relative bg-[#e0dcd0] border border-[#383530]/20 flex items-center justify-center p-8 text-center group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-[#383530]/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  <p className="text-xs font-mono opacity-50 uppercase tracking-widest z-10">[Ganti dengan foto gaya hidup:<br/>saat lari, ngopi, atau setup meja]</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 4: FOOTER ABOUT */}
        <section className="py-24 text-center">
          <Reveal>
            <Link href="/" className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif italic hover:opacity-50 transition-all duration-500 border-b border-[#F4F0E6] pb-2 cursor-pointer">
              <span className="transform transition-transform duration-500 group-hover:-translate-x-2">←</span>
              <span>Back to Folio</span>
            </Link>
          </Reveal>
        </section>
      </main>
    </>
  );
}