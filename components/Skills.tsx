"use client";

import SkillBadge from "./SkillBadge";
import { skillGroups } from "@/lib/skills";

export default function Skills() {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">
            Skills
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Technologies and tools I work with
          </p>
        </div>
        <div
          className="bg-[#151515] backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/30 shadow-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            contain: 'layout style paint',
          }}
        >
          <div className="space-y-8">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={group.category}
                className={groupIndex > 0 ? "pt-8 border-t border-gray-200/50 dark:border-gray-700/50" : ""}
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-4">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
