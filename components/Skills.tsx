"use client";

import SectionWrapper from "./SectionWrapper";
import SkillBadge from "./SkillBadge";
import { skillGroups, currentlyLearning } from "@/lib/skills";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function Skills() {
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
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-800 shadow-lg"
        >
          <div className="space-y-8">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: groupIndex * 0.1 + 0.3, 
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={groupIndex > 0 ? "pt-8 border-t-2 border-gray-200 dark:border-slate-800" : ""}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      index={groupIndex * 10 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
            
            {/* Currently Learning Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: skillGroups.length * 0.1 + 0.3, 
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="pt-8 border-t-2 border-indigo-300 dark:border-indigo-700"
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Currently Learning
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {currentlyLearning.map((skill, skillIndex) => {
                  const getIcon = (skillName: string) => {
                    if (skillName.includes("SQL")) return "🗄️";
                    if (skillName.includes("Python")) return "🐍";
                    if (skillName === "AWS") return "☁️";
                    if (skillName === "TensorFlow") return "🤖";
                    if (skillName === "Deep Learning") return "🧠";
                    if (skillName === "GraphQL") return "🔌";
                    return "📚";
                  };
                  
                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: skillIndex * 0.1, 
                        duration: 0.3
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors border-2 border-indigo-300 dark:border-indigo-700 flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-base">{getIcon(skill)}</span>
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
