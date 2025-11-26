"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import SkillBadge from "./SkillBadge";
import { skillGroups, currentlyLearning } from "@/lib/skills";

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(skillGroups[0]?.category ?? "");

  const handleToggle = (category: string) => {
    setExpandedCategory((current) => (current === category ? "" : category));
  };

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
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-2">
            Skills
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-6">
          {skillGroups.map((group, groupIndex) => {
            const isOpen = expandedCategory === group.category;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: groupIndex * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="surface-panel-strong rounded-3xl p-6"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(group.category)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <div>
                    <p className="text-xl font-semibold text-[var(--foreground)]">
                      {group.category}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {group.skills.length} skills
                    </p>
                  </div>
                  <span
                    className={`text-2xl transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    ⌄
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 flex flex-wrap gap-3"
                    >
                      {group.skills.map((skill, skillIndex) => (
                        <SkillBadge
                          key={skill}
                          skill={skill}
                          index={groupIndex * 15 + skillIndex}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="surface-panel mt-8 rounded-3xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">Currently Learning</h3>
            <p className="text-xs text-[var(--text-muted)]">Explorations</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentlyLearning.map((skill, skillIndex) => (
              <SkillBadge key={skill} skill={skill} index={skillIndex + 1} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

