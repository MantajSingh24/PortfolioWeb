"use client";

import SkillBadge from "./SkillBadge";
import { skillGroups } from "@/lib/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-8"
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
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            contain: 'layout style paint',
          }}
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
                className={groupIndex > 0 ? "pt-8 border-t border-gray-200/50 dark:border-gray-700/50" : ""}
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
