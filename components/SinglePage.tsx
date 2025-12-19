"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import Image from "next/image";
import PrismBackground from "./PrismBackground";
import PortfolioHeader from "./PortfolioHeader";
import ScrollToTop from "./ScrollToTop";

// Lazy load heavy components for code splitting
const ProjectCard = lazy(() => import("./ProjectCard"));
const Skills = lazy(() => import("./Skills"));
const Details = lazy(() => import("./Details"));
const HobbiesPage = lazy(() => import("./HobbiesPage"));
const Contact = lazy(() => import("./Contact"));
const SectionReveal = lazy(() => import("./SectionReveal"));

// Import projects data (lightweight)
import { projects } from "@/lib/projects";

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-yellow-100/30 border-t-yellow-100/90 rounded-full animate-spin" />
  </div>
);

export default function SinglePage() {
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    // Show title after 400ms for smoother entry
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 400);

    // Show description after 1200ms (800ms after title starts animating)
    const descTimer = setTimeout(() => {
      setShowDescription(true);
    }, 1200);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(descTimer);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Portfolio Header */}
      <PortfolioHeader />
      
      {/* Single shared background for entire page */}
      <PrismBackground />
      
      {/* Home/Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden -mb-1 pt-16">
        {/* Profile Picture - Top Right Corner - Bigger and moved left - Fixed to first page only */}
        <div className="absolute top-20 right-16 sm:right-20 md:right-24 lg:right-32 z-20 opacity-100">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44">
            <div className="relative w-full h-full rounded-full overflow-hidden z-10 border-2 border-yellow-100/30 hover:scale-105 transition-transform duration-200"
              style={{ 
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Image
                src="/WhatsApp Image 2025-11-12 at 22.52.17_a524b729.jpg"
                alt="Mantaj Singh"
                fill
                className="object-cover"
                priority
                sizes="176px"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-16 pb-8">
          <div className="max-w-4xl mx-auto w-full">
            {/* WHO AM I? Heading */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300 text-center mb-8 sm:mb-12 tracking-tight transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                showTitle 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                willChange: showTitle ? 'auto' : 'transform, opacity'
              }}
            >
              WHO AM I?
            </h1>

            {/* Centered Description Box */}
            <div 
              className={`relative bg-gray-800/10 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-yellow-100/40 overflow-hidden shadow-2xl max-w-3xl mx-auto transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                showDescription 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                willChange: showDescription ? 'auto' : 'transform, opacity'
              }}
            >
              {/* Modern style header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-100/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-400 font-mono">about.txt</span>
              </div>
              
              {/* Enhanced content styling */}
              <div className="font-mono text-sm sm:text-base leading-relaxed space-y-3">
                <p className="text-gray-300">
                  <span className="text-[#A79986]">const</span>{" "}
                  <span className="text-green-400">about</span> = {"{"}
                </p>
                <div className="ml-4 sm:ml-6 space-y-2 text-gray-300">
                  <p className="break-words">
                    <span className="text-purple-400">name</span>:{" "}
                    <span className="text-yellow-100/90">&quot;Mantaj Singh&quot;</span>,
                  </p>
                  <p className="break-words">
                    <span className="text-purple-400">role</span>:{" "}
                    <span className="text-yellow-100/90">&quot;Computer Science Student with Data Analytics&quot;</span>,
                  </p>
                  <p className="break-words">
                    <span className="text-purple-400">university</span>:{" "}
                    <span className="text-yellow-100/90">&quot;Acadia University&quot;</span>,
                  </p>
                  <p className="break-words">
                    <span className="text-purple-400">location</span>:{" "}
                    <span className="text-yellow-100/90">&quot;Wolfville, Canada&quot;</span>,
                  </p>
                  <p className="break-words">
                    <span className="text-purple-400">specialization</span>:{" "}
                    <span className="text-yellow-100/90">&quot;Full-Stack Development, Data Analytics & Machine Learning, Research & ETL Pipelines&quot;</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">status</span>:{" "}
                    <span className="text-green-400">&quot;Seeking Co-op&quot;</span>
                  </p>
                </div>
                <p className="text-gray-300">{"}"}</p>
              </div>
            </div>

            {/* Action Buttons - Below Description */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10">
              <a
                href="#contact"
                className="px-8 py-3 bg-yellow-100/90 hover:bg-yellow-50 text-gray-900 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-yellow-100/30 hover:scale-105 hover:-translate-y-0.5 text-base"
              >
                Let&apos;s Connect
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-transparent hover:bg-gray-800/50 text-gray-300 rounded-full font-semibold transition-all duration-200 border-2 border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 text-base"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Experience Section - Lazy Loaded */}
      <section id="experience" className="relative -mt-1 -mb-1">
        <Suspense fallback={<SectionLoader />}>
          <SectionReveal className="relative z-10">
            <Details />
          </SectionReveal>
        </Suspense>
      </section>

      {/* Projects Section - Lazy Loaded */}
      <section id="projects" className="relative -mt-1 -mb-1">
        <Suspense fallback={<SectionLoader />}>
          <SectionReveal className="relative z-10">
            <div className="relative overflow-hidden pt-16">
              <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-2">
                    Featured Projects
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg">
                    Open source contributions, AI innovations, and automation tools that make a real impact
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {projects.map((project, index) => (
                    <Suspense key={project.id} fallback={<SectionLoader />}>
                      <ProjectCard project={project} index={index} />
                    </Suspense>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </Suspense>
      </section>

      {/* Skills Section - Lazy Loaded */}
      <section id="skills" className="relative -mt-1 -mb-1">
        <Suspense fallback={<SectionLoader />}>
          <SectionReveal className="relative z-10">
            <Skills />
          </SectionReveal>
        </Suspense>
      </section>

      {/* Hobbies Section - Lazy Loaded */}
      <section id="hobbies" className="relative -mt-1 -mb-1">
        <Suspense fallback={<SectionLoader />}>
          <SectionReveal className="relative z-10">
            <HobbiesPage />
          </SectionReveal>
        </Suspense>
      </section>

      {/* Contact Section - Lazy Loaded */}
      <section id="contact" className="relative -mt-1">
        <Suspense fallback={<SectionLoader />}>
          <SectionReveal className="relative z-10">
            <Contact />
          </SectionReveal>
        </Suspense>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
