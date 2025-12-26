"use client";

import { skillCategories } from "@/lib/skills";
import { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiR,
  SiPandas,
  SiScikitlearn,
  SiPostgresql,
  SiMongodb,
  SiTableau,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
  SiGithub,
  SiDocker,
  SiVercel,
  SiJupyter,
} from "react-icons/si";
import { FaDatabase, FaCog, FaChartBar, FaWarehouse, FaJava, FaRobot } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

// Logo paths for Excel and Power BI - using local files from public folder
const LOGO_PATHS = {
  Excel: "/Microsoft_Excel-Logo.wine.png",
  "Power BI": "/New_Power_BI_Logo.svg.png",
} as const;

// Mapping skill names to their icon components - memoized outside component
const iconMap: Record<string, IconType> = {
  Python: SiPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  C: SiC,
  R: SiR,
  SQL: FaDatabase,
  Pandas: SiPandas,
  "Scikit-learn": SiScikitlearn,
  "Machine Learning": FaRobot,
  "Data Science": FaChartBar,
  "Jupyter Lab/Notebook": SiJupyter,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Tableau: SiTableau,
  "ETL Processes": FaCog,
  "Data Visualization": FaChartBar,
  "Data Warehousing": FaWarehouse,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "HTML/CSS": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  "Git/GitHub": SiGithub,
  Docker: SiDocker,
  Vercel: SiVercel,
  "Automation Scripts": FaCog,
  "VS Code": VscCode,
};

export default function Skills() {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-3">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A comprehensive overview of my technical expertise across AI, data engineering, and software development
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-[#151515] rounded-xl p-4 sm:p-5 border border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-300">
                  {category.category}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List - Golden Circular Boxes with Icons */}
              <div className="flex flex-col gap-2">
                {category.skills.map((skill, skillIndex) => {
                  // Use images for Excel and Power BI, icons for others
                  const useImage = skill.name === "Excel" || skill.name === "Power BI";
                  const Icon = iconMap[skill.name] || FaCog;
                  
                  return (
                    <div
                      key={`${category.category}-${skillIndex}`}
                      className="px-3 py-1.5 rounded-full bg-yellow-100/90 text-gray-900 text-sm font-medium border border-yellow-100/50 shadow-sm hover:shadow-md transition-all duration-200 w-fit flex items-center gap-2"
                    >
                      {useImage ? (
                        <img
                          src={LOGO_PATHS[skill.name as keyof typeof LOGO_PATHS]}
                          alt={skill.name}
                          className="w-4 h-4 object-contain flex-shrink-0"
                          style={{ display: "inline-block" }}
                          loading="lazy"
                        />
                      ) : (
                        <Icon className="w-4 h-4" style={{ display: "inline-block" }} />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
