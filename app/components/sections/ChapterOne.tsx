'use client'; // Tambahkan ini agar bisa menggunakan hook

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChapterOne() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLeaving(true);
    setTimeout(() => {
      router.push("/about");
    }, 800);
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-[#383530] z-[100] transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none ${
          isLeaving ? 'translate-y-0' : '-translate-y-full'
        }`}
      />

      <section id="about" className="min-h-screen px-8 md:pl-24 lg:pl-32 md:pr-12 lg:pr-24 py-24 flex flex-col lg:flex-row justify-between bg-[#F4F0E6] text-[#383530]">
        
        <div className="w-full lg:w-1/4 mb-16 lg:mb-0 flex flex-col justify-between">
          <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest">Chapter I</h2>
          <div className="hidden lg:block text-xs uppercase tracking-widest font-mono opacity-60">
            <p>Beyond Code:</p><p>QA Testing, Video Editing,</p><p>and Content Creation.</p>
          </div>
        </div>

        <div className="w-full lg:w-3/4 lg:pl-12">
          <p className="text-xs uppercase tracking-widest font-mono mb-8 opacity-60">Quick Intro</p>
          <p className="text-4xl md:text-5xl lg:text-[3.5vw] font-serif leading-[1.1] mb-20">
            Hi, I&apos;m Rizky — an Informatics Management graduate specializing in Full Stack Development and Creative Multimedia. I engineer functional systems paired with captivating visual experiences.
          </p>

          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
            
            <div className="flex flex-col justify-between h-full pt-4">
              <div className="text-sm font-mono uppercase tracking-widest space-y-2 opacity-60">
                <p>&quot;CODE FOR FUNCTION.</p><p>DESIGN FOR IMPACT.&quot;</p>
              </div>

              {/* Tombol yang diubah menggunakan handleNavigation */}
              <div className="mt-12 md:mt-32">
                <a 
                  href="/about"
                  onClick={handleNavigation}
                  className="group inline-flex items-center gap-2 text-lg md:text-2xl font-serif italic hover:opacity-50 transition-all duration-500 border-b border-[#383530] pb-1 cursor-pointer"
                >
                  <span>More about me</span>
                  <span className="transform transition-transform duration-500 group-hover:translate-x-2">→</span>
                </a>
              </div>
            </div>

            <div className="w-full md:w-80 lg:w-[22rem] aspect-[4/5] relative group">
              <div className="absolute inset-0 border border-[#383530]/30 translate-x-4 translate-y-4 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="absolute inset-0 overflow-hidden bg-[#e0dcd0] z-10">
                <Image 
                  src="/assets/profile.jpg" 
                  alt="Rizky Fatur Rohman" fill sizes="(max-width: 768px) 100vw, 350px" priority
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer"
                />
              </div>
            </div>
            
          </div>
          <div className="lg:hidden text-xs uppercase tracking-widest font-mono opacity-60 mt-16">
            <p>Beyond Code: QA Testing, Video Editing, and Content Creation.</p>
          </div>
        </div>
      </section>
    </>
  );
}