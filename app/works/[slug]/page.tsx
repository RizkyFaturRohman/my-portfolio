import Navigation from "../../components/sections/Navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// SIMULASI DATABASE PROYEK (Data dilengkapi dari CV Anda)
const projectsData = [
  {
    slug: "fb-landing-page",
    name: "F&B Landing Page",
    role: "Front-End Developer",
    year: "2026",
    heroImage: "/assets/projects/project-1.png",
    overview: "Designed and developed a commercial landing page for a culinary business to increase online visibility. Implemented responsive UI design utilizing Tailwind CSS to ensure seamless adaptation across mobile and desktop devices.",
    techStack: ["Next.js", "Tailwind CSS", "React.js"],
    link: "https://github.com/RizkyFaturRohman"
  },
  {
    slug: "finance-tracker",
    name: "Finance Tracker",
    role: "Mobile Developer",
    year: "2026",
    heroImage: "/assets/projects/project-6.png",
    overview: "Developed a cross-platform mobile application based on the React ecosystem. Designed a custom algorithm to automate the calculation of daily savings progress with smooth state management execution.",
    techStack: ["React Native", "JavaScript", "Mobile UI"],
    link: "https://github.com/RizkyFaturRohman"
  },
  {
    slug: "inventory-system",
    name: "Inventory System",
    role: "Full Stack Developer",
    year: "2025",
    heroImage: "/assets/projects/project-3.png",
    overview: "Built dynamic front-end interfaces using React.js by implementing efficient modern components and state management. Integrated the front-end with secure RESTful APIs from a Laravel backend.",
    techStack: ["Laravel", "React.js", "MySQL", "REST API"],
    link: "https://github.com/RizkyFaturRohman"
  },
  {
    slug: "live-commerce",
    name: "Live Commerce",
    role: "Front-End Developer",
    year: "2025",
    heroImage: "/assets/projects/project-4.png", // Sesuaikan jika nama file mockup-nya berbeda
    overview: "Built a responsive UI utilizing React, Vite, and Tailwind CSS, integrated with Supabase to enable real-time data synchronization and push notifications for Buyer and Seller roles. Engineered an end-to-end transaction flow.",
    techStack: ["React", "Vite", "Supabase", "Tailwind CSS"],
    link: "https://github.com/RizkyFaturRohman"
  },
  {
    slug: "attendance-system",
    name: "Attendance System",
    role: "Full Stack Developer",
    year: "2025",
    heroImage: "/assets/projects/project-5.png", // Sesuaikan jika nama file mockup-nya berbeda
    overview: "Designed an automated attendance tracking system utilizing QR code scanning to streamline daily check-ins. Developed the core logic and robust database architecture using Laravel and MySQL to manage and store attendance records securely.",
    techStack: ["Laravel", "MySQL", "QR System"],
    link: "https://github.com/RizkyFaturRohman"
  }
];

// PERUBAHAN UTAMA: Menambahkan 'async' dan Promise pada parameter
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Menunggu params diselesaikan oleh Next.js 15
  const resolvedParams = await params;
  
  // Mencari data proyek berdasarkan URL (slug)
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  // Jika URL tidak cocok dengan slug apa pun, tampilkan halaman 404
  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#F4F0E6] text-[#383530] selection:bg-[#383530] selection:text-[#F4F0E6]">
      <Navigation />

      {/* HEADER SECTION */}
      <section className="pt-32 md:pt-48 px-8 md:px-16 lg:px-32 pb-16">
        <h1 className="text-[12vw] md:text-[8vw] font-serif uppercase tracking-tighter leading-[0.85] mb-12">
          {project.name}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#383530]/20 pt-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-2">Role</p>
            <p className="font-serif text-lg">{project.role}</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-2">Year</p>
            <p className="font-serif text-lg">{project.year}</p>
          </div>
          <div className="col-span-2 md:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-sm font-mono border border-[#383530]/20 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="px-8 md:px-16 lg:px-32 pb-16">
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#e0dcd0] overflow-hidden rounded-sm">
          <Image 
            src={project.heroImage}
            alt={project.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="px-8 md:px-16 lg:px-32 pb-32 flex flex-col md:flex-row justify-between gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-serif uppercase tracking-widest">The Challenge & Output</h2>
        </div>
        <div className="w-full md:w-2/3 md:pl-16">
          <p className="text-lg md:text-2xl font-serif leading-relaxed opacity-80 mb-12">
            {project.overview}
          </p>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#383530] text-[#F4F0E6] px-8 py-4 text-sm font-mono uppercase tracking-widest hover:bg-[#383530]/80 transition-colors"
          >
            View Live Project ↗
          </a>
        </div>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="py-24 text-center border-t border-[#383530]/10">
        <Link href="/works" className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif italic hover:opacity-50 transition-all duration-500 border-b border-[#383530] pb-2 cursor-pointer">
          <span className="transform transition-transform duration-500 group-hover:-translate-x-2">←</span>
          <span>Back to All Works</span>
        </Link>
      </section>

    </main>
  );
}