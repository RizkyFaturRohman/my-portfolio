'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { num: '01.', title: 'HOME', href: '/' },
    { num: '02.', title: 'ABOUT', href: '/about' },
    { num: '03.', title: 'WORKS', href: '/#works' },
    { num: '04.', title: 'CONTACT', href: '/#contact' },
  ];
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-[400ms]'];

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 left-4 md:left-[1.125rem] lg:left-[1.875rem] z-50 w-12 h-12 flex flex-col justify-center items-center group mix-blend-difference cursor-pointer"
        aria-label="Toggle Menu"
      >
        <div className="relative w-8 h-4">
          <span className={`absolute left-0 w-8 h-[2px] bg-[#F4F0E6] transition-all duration-500 ease-out origin-center ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
          <span className={`absolute left-0 w-8 h-[2px] bg-[#F4F0E6] transition-all duration-500 ease-out origin-center ${isOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
        </div>
      </button>

      <div className={`fixed inset-0 bg-[#383530] z-40 flex flex-col justify-center px-8 md:px-16 lg:px-32 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        
        <button 
          onClick={() => setIsOpen(false)}
          className={`absolute top-8 right-8 md:top-12 md:right-12 text-sm font-serif italic text-[#F4F0E6] hover:opacity-50 transition-all duration-500 delay-300 cursor-pointer ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          Close
        </button>

        <div className="flex flex-col gap-2 md:gap-4 pl-4 md:pl-24 lg:pl-32">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-baseline gap-4 md:gap-8 text-[#F4F0E6] hover:opacity-50 transition-opacity duration-300 w-max overflow-hidden cursor-pointer"
            >
              <span className={`text-xl md:text-2xl font-mono opacity-50 transition-transform duration-700 ${delays[index]} ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                {item.num}
              </span>
              <span className={`text-6xl md:text-8xl lg:text-[8vw] font-serif uppercase tracking-tighter leading-tight transition-transform duration-700 ease-out ${delays[index]} ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        <div className={`absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-8 text-xs font-mono uppercase tracking-widest text-[#F4F0E6] transition-all duration-700 delay-500 ${isOpen ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a href="https://linkedin.com/in/rfaturrohman/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity cursor-pointer">LinkedIn</a>
          <a href="https://github.com/RizkyFaturRohman" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity cursor-pointer">GitHub</a>
        </div>
      </div>
    </>
  );
}