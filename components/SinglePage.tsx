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

export default function SinglePage() {
  return (
    <div className="relative w-full">
      {/* Single shared background for entire page */}
      <AnimatedBackground />
      
      {/* Home/Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden -mb-1 section-transition">
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg"
                >
                  <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                    Seeking Co-op Positions
                  </p>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight"
                >
                  Hi, I'm{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Mantaj Singh
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
                >
                  3rd Year | Data Analytics & Software Student
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-lg text-gray-600 dark:text-gray-400"
                >
                  Based in Wolfville, Canada
                </motion.p>

                {/* Tech-styled Description Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-6 rounded-xl border-2 border-gray-300 dark:border-slate-700 overflow-hidden"
                >
                  {/* Terminal-style header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-slate-400 ml-2 font-mono">about.txt</span>
                  </div>
                  
                  {/* Code-style content */}
                  <div className="font-mono text-sm leading-relaxed">
                    <p className="text-slate-300 dark:text-slate-200 mb-2">
                      <span className="text-[#A79986]">const</span>{" "}
                      <span className="text-green-400">about</span> = {"{"}
                    </p>
                    <div className="ml-4 space-y-1 text-slate-300 dark:text-slate-200">
                      <p>
                        <span className="text-purple-400">role</span>:{" "}
                        <span className="text-yellow-400">"Data Analytics & Software Student"</span>,
                      </p>
                      <p>
                        <span className="text-purple-400">university</span>:{" "}
                        <span className="text-yellow-400">"Acadia University"</span>,
                      </p>
                      <p>
                        <span className="text-purple-400">specialization</span>:{" "}
                        <span className="text-yellow-400">"Data-Driven Decision Making, Predictive Analytics, Business Intelligence"</span>,
                      </p>
                      <p>
                        <span className="text-purple-400">status</span>:{" "}
                        <span className="text-green-400">"Seeking Co-op"</span>
                      </p>
                    </div>
                    <p className="text-slate-300 dark:text-slate-200 mt-2">{"}"}</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                  className="flex flex-col gap-3"
                >
                  <motion.a
                    href="https://www.linkedin.com/in/mantaj-s-9448a7271"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, x: 3 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 border-2 border-blue-700 shadow-lg hover:shadow-xl group"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/MantajSingh24"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, x: 3 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 px-5 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300 border-2 border-slate-700 dark:border-slate-600 shadow-lg hover:shadow-xl group"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>Connect on GitHub</span>
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.4 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <motion.a
                    href="/Mantaj_Singh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 border-2 border-indigo-700 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>View Mantaj Singh's Resume</span>
                  </motion.a>
                  <motion.a
                    href="#details"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block px-6 py-3 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium transition-all duration-300 border-2 border-gray-300 dark:border-slate-700 shadow-lg hover:shadow-xl"
                  >
                    View Details
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center relative"
              >
                {/* Profile picture container - fixed size */}
                <div className="relative w-48 h-48 md:w-80 md:h-80">
                  {/* Shiny decorative elements AROUND the picture (not overlapping) */}
                  
                  {/* Rotating rings outside the picture - optimized */}
                  <motion.div
                    className="absolute -inset-4 md:-inset-8 rounded-full border-2 border-indigo-400/30 dark:border-indigo-500/30"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ willChange: 'transform' }}
                  />
                  
                  {/* Reduced particles for performance */}
                  <motion.div
                    className="absolute -top-8 left-1/2 w-3 h-3 bg-indigo-400 rounded-full blur-md"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ willChange: 'transform, opacity' }}
                  />
                  <motion.div
                    className="absolute -bottom-8 left-1/2 w-3 h-3 bg-purple-400 rounded-full blur-md"
                    animate={{
                      y: [0, 20, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                    style={{ willChange: 'transform, opacity' }}
                  />
                  
                  {/* Profile picture - Apple-style border */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full rounded-full overflow-hidden z-10"
                    style={{ 
                      willChange: 'transform',
                      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(255, 255, 255, 0.8), 0 8px 32px rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    <Image
                      src="/WhatsApp Image 2025-11-12 at 22.52.17_a524b729.jpg"
                      alt="Mantaj Singh"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 192px, 320px"
                    />
                  </motion.div>
                  {/* Apple-style outer ring */}
                  <div 
                    className="absolute inset-0 rounded-full pointer-events-none z-20"
                    style={{
                      boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 0 0 2px rgba(0, 0, 0, 0.05)',
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Projects Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="py-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Projects
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Some of my recent work
                </p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative -mt-1 -mb-1 section-transition">
        <div className="relative z-10">
          <Skills />
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="relative -mt-1 -mb-1 section-transition">
        <div className="relative z-10">
          <Details />
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="relative -mt-1 -mb-1 section-transition">
        <div className="relative z-10">
          <HobbiesPage />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative -mt-1 section-transition">
        <div className="relative z-10">
          <Contact />
        </div>
      </section>
    </div>
  );
}

