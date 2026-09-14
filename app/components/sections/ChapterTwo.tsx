'use client'; 

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChapterTwo() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Perubahan: Hanya Finance Tracker yang mobile, Digital Village diganti Live Commerce
  const projects = [
    { name: "F&B Landing Page", role: "Front-End", year: "2026", image: "/assets/projects/project-1.png", type: "desktop" },
    { name: "Finance Tracker", role: "Mobile App", year: "2026", image: "/assets/project-2.jpg", type: "mobile" },
    { name: "Inventory System", role: "Full Stack", year: "2025", image: "/assets/project-3.jpg", type: "desktop" },
    { name: "Live Commerce", role: "Front-End", year: "2025", image: "/assets/project-5.jpg", type: "desktop" },
    { name: "Attendance System", role: "Full Stack", year: "2025", image: "/assets/project-4.jpg", type: "desktop" },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    setIsLeaving(true); 
    setTimeout(() => router.push("/works"), 800);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-zoom-in-out {
          animation: slowZoom 15s ease-in-out infinite alternate;
        }
        .animate-zoom-out-in {
          animation: slowZoom 20s ease-in-out infinite alternate-reverse;
        }
      `}} />

      <div className={`fixed inset-0 bg-[#383530] z-[100] transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none ${isLeaving ? 'translate-y-0' : '-translate-y-full'}`} />

      <section id="works" className="min-h-screen px-8 md:pl-24 lg:pl-32 md:pr-12 lg:pr-24 py-24 flex flex-col border-t border-[#F4F0E6]/20 bg-[#383530] text-[#F4F0E6]">
        
        {/* ==========================================
            BAGIAN ATAS: DAFTAR PROYEK & KANVAS PREVIEW
            ========================================== */}
        <div className="flex flex-col lg:flex-row justify-between w-full">
          {/* KOLOM KIRI (Kanvas) */}
          <div className="w-full lg:w-5/12 flex flex-col mb-16 lg:mb-0 relative pr-0 lg:pr-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">Chapter II</h2>
              <p className="text-xs uppercase tracking-widest font-mono opacity-60">Selected Work</p>
            </div>

            <div className="hidden lg:block w-full aspect-[4/3] mt-16 relative border border-[#F4F0E6]/10 bg-[#2a2824] overflow-hidden group rounded-sm">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
                >
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    fill
                    // Gambar mobile menyesuaikan ukuran, gambar desktop menutup penuh
                    className={project.type === "mobile" ? "object-contain p-8 drop-shadow-2xl" : "object-cover"}
                    sizes="(max-width: 1024px) 0vw, 400px"
                  />
                </div>
              ))}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredIndex !== null ? "opacity-0" : "opacity-100"}`}>
                <span className="text-xs font-mono uppercase tracking-widest opacity-30">[ Hover project to preview ]</span>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN (Daftar) */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest font-mono mb-8 opacity-60 hidden lg:block text-right">The Portfolio</p>
            <div className="flex flex-col border-t border-[#F4F0E6]/20">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative border-b border-[#F4F0E6]/20 py-8 md:py-10 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center hover:pl-8 hover:bg-[#F4F0E6]/5 transition-all duration-500 ease-out"
                >
                  <h3 className="text-4xl md:text-5xl lg:text-[4vw] font-serif uppercase tracking-tighter opacity-70 group-hover:opacity-100 group-hover:italic transition-all duration-500 mb-4 md:mb-0">
                    {project.name}
                  </h3>
                  <div className="md:text-right flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-1 transition-opacity duration-300">
                    <span className="text-xs font-mono uppercase tracking-widest opacity-60">{project.role}</span>
                    <span className="text-xs font-mono opacity-60 flex items-center gap-2">
                      {project.year} 
                      <span className="inline-block transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">↗</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================
            BAGIAN BAWAH: VISUAL BREAK (Auto Zoom Images)
            ========================================== */}
        <div className="w-full mt-32 mb-16 relative flex justify-end items-end h-[60vh] md:h-[80vh]">
          
          <div className="absolute top-0 left-0 text-xs font-mono uppercase tracking-widest opacity-40 max-w-xs z-20">
            <p>Visual exploration</p>
            <p className="mt-2">Detail and precision in every pixel engineered.</p>
          </div>

          <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#2a2824] rounded-sm">
            <Image 
              src="/assets/project-3.jpg"
              alt="Visual Background"
              fill
              className="object-cover opacity-60 grayscale animate-zoom-in-out"
            />
          </div>

          <div className="relative w-2/3 md:w-1/3 aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-[#e0dcd0] border border-[#383530]/20 z-10 -translate-x-4 translate-y-8 md:-translate-x-12 md:translate-y-12 drop-shadow-2xl">
            <Image 
              src="/assets/project-2.jpg" 
              alt="Visual Foreground"
              fill
              className="object-cover animate-zoom-out-in"
            />
          </div>
        </div>

        {/* ==========================================
            TOMBOL VIEW ALL WORK
            ========================================== */}
        <div className="mt-16 text-right z-20">
          <a href="/works" onClick={handleNavigation} className="group inline-flex items-center gap-2 text-lg md:text-2xl font-serif italic hover:opacity-50 transition-all duration-500 border-b border-[#F4F0E6] pb-1 cursor-pointer">
            <span>View All Work</span>
            <span className="transform transition-transform duration-500 group-hover:translate-x-2">→</span>
          </a>
        </div>

      </section>
    </>
  );
}