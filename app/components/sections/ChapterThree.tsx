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

export default function ChapterThree() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const skills = [
    {
      num: "01",
      title: "FULL STACK DEV",
      desc: "Building end-to-end web and mobile applications utilizing React.js, Next.js, Laravel, and Tailwind CSS.",
      image: "/assets/skill-1.jpg" 
    },
    {
      num: "02",
      title: "QA & SYSTEM DESIGN",
      desc: "Conducting system functionality testing (Black Box) and architecting technical documents alongside visual workflows.",
      image: "/assets/skill-2.jpg" 
    },
    {
      num: "03",
      title: "CREATIVE MULTIMEDIA",
      desc: "Producing commercial visual assets, designing social media carousel content, and video editing using CapCut & Canva.",
      image: "/assets/skill-3.jpg"
    },
    {
      num: "04",
      title: "DATA & ADMIN",
      desc: "Managing Client-Server architectures, MySQL databases, and streamlining administrative data processing.",
      image: "/assets/skill-4.jpg"
    }
  ];

  return (
    <section className="min-h-screen pl-0 md:pl-16 lg:pl-24 border-t border-[#F4F0E6]/20 flex flex-col bg-[#383530] text-[#F4F0E6]">
      
      {/* ==========================================
          HEADER CHAPTER III
          ========================================== */}
      <div className="px-8 md:px-16 lg:px-32 py-16 md:py-24 flex flex-col lg:flex-row gap-8 lg:gap-24">
        <div className="w-full lg:w-1/4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">Chapter III</h2>
          </Reveal>
          <Reveal delayClass="delay-100">
            <p className="text-xs uppercase tracking-widest font-mono opacity-60">What I Do</p>
          </Reveal>
        </div>
        <div className="w-full lg:w-3/4 lg:pr-24">
          <Reveal delayClass="delay-200">
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              Fusing solid programming logic with engaging, highly functional visual experiences.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ==========================================
          GRID LAYANAN (Hover Image Reveal)
          ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-grow border-t border-[#F4F0E6]/20">
        {skills.map((skill, index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative p-8 md:p-10 lg:p-12 border-b lg:border-b-0 border-[#F4F0E6]/20 flex flex-col justify-between min-h-[50vh] lg:min-h-[70vh] overflow-hidden lg:border-r last:border-r-0 cursor-pointer"
          >

            <div 
              className={`absolute inset-0 z-0 transition-opacity duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-[#383530]/60 z-10 transition-colors duration-500 group-hover:bg-[#383530]/40"></div>
              <Image 
                src={skill.image} 
                alt={skill.title} 
                fill 
                className={`object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  hoveredIndex === index ? 'scale-100' : 'scale-110'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <Reveal delayClass={`delay-${index * 100}`}>
                <div className="text-6xl md:text-7xl font-serif text-[#F4F0E6] opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2">
                  {skill.num}
                </div>
              </Reveal>
              
              <div className="mt-24 lg:mt-32">
                <Reveal delayClass={`delay-${(index * 100) + 100}`}>
                  <h3 className="text-xl md:text-2xl uppercase tracking-tighter mb-6 font-serif border-b border-[#F4F0E6]/20 pb-4 text-[#F4F0E6] group-hover:border-[#F4F0E6]/60 transition-colors duration-500">
                    {skill.title}
                  </h3>
                </Reveal>
                <Reveal delayClass={`delay-${(index * 100) + 200}`}>
                  <p className="text-[#F4F0E6]/60 text-sm leading-relaxed font-light group-hover:text-[#F4F0E6]/90 transition-colors duration-500">
                    {skill.desc}
                  </p>
                </Reveal>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}