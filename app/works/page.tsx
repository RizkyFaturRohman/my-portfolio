'use client';

import Navigation from "../components/sections/Navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ==========================================
// MASK REVEAL ANIMATION 
// ==========================================
const Reveal = ({ children, delayClass = "" }: { children: React.ReactNode, delayClass?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
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

export default function Works() {
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsEntering(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // DATA PROYEK (Ditambahkan properti 'slug' untuk URL rute halaman detail)
  const projects = [
    { 
      name: "F&B Landing Page", role: "Front-End", year: "2026", image: "/assets/projects/project-1.png", 
      type: "desktop", colSpan: "md:col-span-2", aspect: "aspect-[16/9]",
      slug: "fb-landing-page" 
    },
    { 
      name: "Finance Tracker", role: "Mobile App", year: "2026", image: "/assets/project-2.jpg", 
      type: "mobile", colSpan: "md:col-span-1", aspect: "aspect-[3/4] lg:aspect-[4/5]",
      slug: "finance-tracker"
    },
    { 
      name: "Inventory System", role: "Full Stack", year: "2025", image: "/assets/project-3.jpg", 
      type: "desktop", 
      colSpan: "md:col-span-3", // Berubah menjadi 3 kolom (Layar penuh)
      aspect: "aspect-[21/9] md:aspect-[21/7]", // Rasio memanjang (panoramic)
      slug: "inventory-system"
    },
    { 
      name: "Attendance System", role: "Full Stack", year: "2025", image: "/assets/project-4.jpg", 
      type: "desktop", 
      colSpan: "md:col-span-3", 
      aspect: "aspect-[21/9] md:aspect-[21/7]",
      slug: "attendance-system"
    },
    { 
      // Digital Village sudah diganti menjadi Live Commerce agar selaras dengan Chapter II
      name: "Live Commerce", role: "Front-End", year: "2025", image: "/assets/project-5.jpg", 
      type: "desktop", colSpan: "md:col-span-3", aspect: "aspect-[21/9] md:aspect-[21/7]",
      slug: "live-commerce"
    },
  ];

  return (
    <>
      <div className={`fixed inset-0 bg-[#383530] z-[100] transition-transform duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none ${isEntering ? 'translate-y-0' : 'translate-y-full'}`} />

      <main className="min-h-screen bg-[#F4F0E6] text-[#383530] selection:bg-[#383530] selection:text-[#F4F0E6]">
        <Navigation />

        <section className="pt-32 md:pt-48 px-8 md:px-16 lg:px-32 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <Reveal>
                <h1 className="text-[15vw] md:text-[12vw] font-serif uppercase tracking-tighter leading-[0.85]">The Work</h1>
              </Reveal>
            </div>
            <div className="mb-4">
              <Reveal delayClass="delay-200">
                <p className="text-sm md:text-base font-mono uppercase tracking-widest opacity-60">
                  ( {projects.length} Selected Projects )
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-8 md:px-16 lg:px-32 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {projects.map((project, index) => (
              
              // PERUBAHAN UTAMA: Wrapper <div> diubah menjadi <Link> dan diarahkan ke href={`/works/${project.slug}`}
              <Link href={`/works/${project.slug}`} key={index} className={`flex flex-col group cursor-pointer ${project.colSpan}`}>
                <Reveal delayClass={`delay-${(index % 3) * 100}`}>
                  
                  <div className={`relative w-full ${project.aspect} overflow-hidden bg-[#e0dcd0] mb-6 rounded-sm`}>
                    <div className="absolute inset-0 bg-[#383530]/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    
                    <Image 
                      src={project.image}
                      alt={project.name}
                      fill
                      className={`grayscale group-hover:grayscale-0 transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                        project.type === "mobile" 
                        ? "object-contain p-8 md:p-12 group-hover:scale-110 drop-shadow-2xl" 
                        : "object-cover group-hover:scale-105"
                      }`}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-tighter group-hover:italic transition-all duration-300">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-widest opacity-60 mt-2">
                        {project.role}
                      </p>
                    </div>
                    <span className="text-xs font-mono opacity-60 mt-1">{project.year}</span>
                  </div>

                </Reveal>
              </Link>

            ))}
          </div>
        </section>

        <section className="py-24 text-center border-t border-[#383530]/10">
          <Reveal>
            <Link href="/" className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif italic hover:opacity-50 transition-all duration-500 border-b border-[#383530] pb-2 cursor-pointer">
              <span className="transform transition-transform duration-500 group-hover:-translate-x-2">←</span>
              <span>Back to Home</span>
            </Link>
          </Reveal>
        </section>

      </main>
    </>
  );
}