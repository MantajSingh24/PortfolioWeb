"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";
import Skills from "./Skills";
import Details from "./Details";
import HobbiesPage from "./HobbiesPage";
import Contact from "./Contact";
import PortfolioHeader from "./PortfolioHeader";
import ScrollToTop from "./ScrollToTop";

export default function SinglePage() {
  return (
    <div className="relative w-full">
      {/* Portfolio Header */}
      <PortfolioHeader />
      
      {/* Single shared background for entire page */}
      <AnimatedBackground />
      
      {/* Home/Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden -mb-1 pt-16">
        {/* Profile Picture - Top Right Corner - Bigger and moved left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="fixed top-20 right-16 sm:right-20 md:right-24 lg:right-32 z-20"
        >
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full rounded-full overflow-hidden z-10 border-2 border-yellow-100/30"
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
            </motion.div>
          </div>
        </motion.div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-16 pb-8">
          <div className="max-w-4xl mx-auto w-full">
            {/* WHO AM I? Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-8 sm:mb-12 tracking-tight"
            >
              WHO AM I?
            </motion.h1>

            {/* Centered Description Box */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative bg-gray-800/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-yellow-100/40 dark:border-purple-500/40 overflow-hidden shadow-2xl max-w-3xl mx-auto"
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
                <p className="text-gray-200">
                  <span className="text-[#A79986]">const</span>{" "}
                  <span className="text-green-400">about</span> = {"{"}
                </p>
                <div className="ml-4 sm:ml-6 space-y-2 text-gray-200">
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
                <p className="text-gray-200">{"}"}</p>
              </div>
            </motion.div>

            {/* Action Buttons - Below Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 bg-yellow-100/90 dark:bg-purple-600 hover:bg-yellow-50 dark:hover:bg-purple-700 text-gray-900 dark:text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-100/30 dark:hover:shadow-purple-500/30 text-base"
              >
                Let&apos;s Connect
              </motion.a>
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 bg-transparent hover:bg-gray-800/50 text-white rounded-full font-semibold transition-all duration-300 border-2 border-gray-700/50 shadow-lg hover:shadow-xl text-base"
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-8">
          <div className="py-12 sm:py-16 md:py-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Projects
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Some of my recent work
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative -mt-1 -mb-1">
        <div className="relative z-10">
          <Skills />
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="relative -mt-1 -mb-1">
        <div className="relative z-10">
          <Details />
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="relative -mt-1 -mb-1">
        <div className="relative z-10">
          <HobbiesPage />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative -mt-1">
        <div className="relative z-10">
          <Contact />
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

