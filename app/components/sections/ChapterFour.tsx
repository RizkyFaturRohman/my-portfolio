'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

export default function ChapterFour() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const experiences = [
    {
      period: "OKT 2025",
      role: "Content Creator Intern",
      company: "Suji Experience",
      logo: "/assets/logo/logo-suji.png" 
    },
    {
      period: "SEP 2025",
      role: "Visual Content Trainee",
      company: "BBPVP Bandung",
      logo: "/assets/logo/logo-bbpvp.png"
    },
    {
      period: "SEP 2024 — JAN 2025",
      role: "IT Staff Support (QA)",
      company: "PT. Bio Farma",
      logo: "/assets/logo/logo-bio.png"
    },
    {
      period: "JUL 2024 — AGS 2024",
      role: "Lead Developer & PM",
      company: "Desa KKN Tematik",
      logo: "/assets/logo/logo-kkn.png"
    }
  ];

  return (
    <section className="min-h-screen px-8 md:pl-24 lg:pl-32 md:pr-12 lg:pr-24 py-24 flex flex-col lg:flex-row justify-between bg-[#F4F0E6] text-[#383530] border-t border-[#383530]/10">
      <div className="w-full lg:w-5/12 flex flex-col mb-16 lg:mb-0 relative pr-0 lg:pr-16">
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">Chapter IV</h2>
          </Reveal>
          <Reveal delayClass="delay-100">
            <p className="text-xs uppercase tracking-widest font-mono opacity-60">Selected Experiences</p>
          </Reveal>
        </div>

        <div className="hidden lg:flex w-full max-w-sm aspect-square mt-24 relative bg-[#e0dcd0] border border-[#383530]/10 items-center justify-center p-12 transition-all duration-500">
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
            <span className="text-xs font-mono uppercase tracking-widest opacity-40 text-center px-8">
              Hover over an experience <br/> to view organization
            </span>
          </div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`absolute inset-12 transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] flex items-center justify-center ${
                hoveredIndex === index ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
              }`}
            >
              <Image 
                src={exp.logo} 
                alt={exp.company}
                fill
                className="object-contain mix-blend-multiply opacity-80" // mix-blend agar background putih logo PNG menyatu dengan kanvas
                sizes="(max-width: 1024px) 0vw, 300px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-7/12 flex flex-col justify-center">
        
        <div className="flex flex-col border-t border-[#383530]/20 mt-8 lg:mt-0">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-[#383530]/20 py-8 md:py-12 cursor-default flex flex-col md:flex-row justify-between items-start md:items-center hover:pl-8 transition-all duration-500 ease-out"
            >
              {/* Detail: Company Name */}
              <div className="flex-grow w-full">
                <Reveal delayClass={`delay-${index * 100}`}>
                  <h3 className="text-4xl md:text-5xl lg:text-[4vw] font-serif uppercase tracking-tighter opacity-80 group-hover:opacity-100 group-hover:italic transition-all duration-500 mb-4 md:mb-0">
                    {exp.company}
                  </h3>
                </Reveal>
              </div>
              
              {/* Detail: Role & Timeframe */}
              <div className="md:text-right flex flex-col items-start md:items-end gap-1 w-full md:w-auto">
                <Reveal delayClass={`delay-${(index * 100) + 100}`}>
                  <span className="text-sm md:text-base font-serif italic opacity-90">
                    {exp.role}
                  </span>
                </Reveal>
                <Reveal delayClass={`delay-${(index * 100) + 200}`}>
                  <span className="text-xs font-mono uppercase tracking-widest opacity-50">
                    {exp.period}
                  </span>
                </Reveal>
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-16 opacity-60">
          <Reveal delayClass="delay-500">
             <p className="text-xs uppercase tracking-widest font-mono leading-relaxed max-w-sm">
               A timeline of the roles, collaborations, and milestones that have shaped how I think, design, and solve problems.
             </p>
          </Reveal>
        </div>

      </div>

    </section>
  );
}