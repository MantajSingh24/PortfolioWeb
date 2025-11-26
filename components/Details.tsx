"use client";

import SectionWrapper from "./SectionWrapper";
import TimelineItem from "./TimelineItem";
import { experiences, education } from "@/lib/experience";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import Image from "next/image";

export default function Details() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      <AnimatedBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Work Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Professional journey and academic achievements
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="surface-panel rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-6 pb-4 border-b-2 border-[var(--border)]">
              Work Experience
            </h3>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  title={exp.title}
                  organization={exp.organization}
                  location={exp.location}
                  period={exp.period}
                  description={exp.description}
                  fullDescription={exp.fullDescription}
                  logo={exp.logo}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="surface-panel rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-6 pb-4 border-b-2 border-[var(--border)]">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.4,
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="surface-panel-strong rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    {edu.logo && (
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 border-[var(--border)] bg-[var(--surface)]">
                        <Image
                          src={edu.logo}
                          alt={edu.university}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-[var(--foreground)] mb-1">
                        {edu.degree} in {edu.major}
                      </h4>
                      <p className="text-[var(--accent)] dark:text-[var(--accent-strong)] font-medium mb-2">
                        {edu.university}
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
