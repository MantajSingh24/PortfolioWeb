"use client";

import { skillCategories } from "@/lib/skills";

const skillIcons: { [key: string]: string } = {
  // Programming Languages
  Python: "🐍",
  Java: "☕",
  C: "⚙️",
  SQL: "🗄️",
  JavaScript: "📜",
  TypeScript: "📘",
  R: "📊",
  
  // Data Analytics & Science
  Pandas: "🐼",
  "Scikit-learn": "🤖",
  "Machine Learning": "🤖",
  "Data Science": "📊",
  "Jupyter Lab/Notebook": "📓",
  "Jupyter Notebooks": "📓",
  
  // Databases & Data Tools
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Excel: "📊",
  "Power BI": "📊",
  Tableau: "📈",
  "ETL Processes": "⚙️",
  "Data Visualization": "📊",
  "Data Warehousing": "🏭",
  
  // Web Development
  React: "⚛️",
  "Next.js": "▲",
  "Node.js": "🟢",
  "Express.js": "🚂",
  "HTML/CSS": "🌐",
  "Tailwind CSS": "💨",
  
  // Cloud & DevOps
  "Git/GitHub": "🐙",
  Git: "📦",
  GitHub: "🐙",
  Docker: "🐳",
  Vercel: "▲",
  "Automation Scripts": "⚙️",
  
  // Tools & Platforms
  "VS Code": "💻",
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
          {skillCategories.map((category, index) => (
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
                  const icon = skillIcons[skill.name] || "💻";
                  return (
                    <div
                      key={`${category.category}-${skillIndex}`}
                      className="px-3 py-1.5 rounded-full bg-yellow-100/90 text-gray-900 text-sm font-medium border border-yellow-100/50 shadow-sm hover:shadow-md transition-all duration-200 w-fit flex items-center gap-2"
                    >
                      <span className="text-base">{icon}</span>
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
