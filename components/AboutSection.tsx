"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <SectionWrapper className="min-h-screen flex items-center border-t-2 border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 space-y-6"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-gray-200 dark:border-slate-800 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Data Analytics and Software Development student at Acadia University, 
                with a strong foundation in computer science and data analytics. I specialize in turning 
                complex data into actionable insights using Python, SQL, and modern analytics tools. 
                Currently working as a Research Assistant on YouTube Data Analytics projects, I combine 
                technical skills with real-world problem-solving. I'm actively seeking co-op positions to 
                apply my expertise in data analysis, machine learning, and full-stack development.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/mantaj-s-9448a7271"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors border-2 border-gray-300 dark:border-slate-700"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/MantajSingh24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors border-2 border-gray-300 dark:border-slate-700"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="mailto:taranpalbrar58@gmail.com"
                className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors border-2 border-gray-300 dark:border-slate-700"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/Mantaj_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors border-2 border-indigo-700 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>View Mantaj Singh's Resume</span>
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/details"
                  className="inline-block px-6 py-3 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium transition-colors border-2 border-gray-300 dark:border-slate-700"
                >
                  More Information
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg overflow-hidden border-2 border-gray-300 dark:border-slate-700">
              <Image
                src="/WhatsApp Image 2025-11-12 at 22.52.17_a524b729.jpg"
                alt="Mantaj Singh"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
