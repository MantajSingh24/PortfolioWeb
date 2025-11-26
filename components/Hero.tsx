"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  return (
    <SectionWrapper id="about" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
              Hi, I'm{" "}
              <span className="text-gradient-accent bg-clip-text text-transparent">
                Mantaj Singh
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Data Analytics & Software Student based in Canada
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              I'm passionate about turning data into insights and building software
              solutions. Currently pursuing my degree while working on real-world
              projects that combine analytics, backend development, and modern web
              technologies.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="/Mantaj_Singh_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 accent-btn rounded-lg font-medium transition-colors border-2 shadow-lg hover:shadow-xl"
              >
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 surface-panel rounded-lg text-[var(--foreground)] font-medium transition-colors border-2 border-[var(--border)] hover:border-[var(--accent-strong)]"
              >
                Contact Me
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Location</span>
                <p className="text-gray-900 dark:text-gray-100 font-medium">
                  Wolfville, Canada
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">University</span>
                <p className="text-gray-900 dark:text-gray-100 font-medium">
                  BASc Computer Science / Data Analytics
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Role</span>
                <p className="text-gray-900 dark:text-gray-100 font-medium">
                  Aspiring Data Analyst
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg flex items-center justify-center text-white text-4xl md:text-6xl font-bold"
              style={{
                background: "linear-gradient(135deg, #191D23 0%, #57707A 60%, #7B919C 100%)",
              }}
            >
              MS
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

