"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

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
  NumPy: "🔢",
  Matplotlib: "📈",
  Seaborn: "📊",
  "Scikit-learn": "🤖",
  "Jupyter Notebooks": "📓",
  "Data Visualization": "📊",
  "Statistical Analysis": "📉",
  "Machine Learning": "🤖",
  
  // Databases & Data Tools
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  MySQL: "🗄️",
  Excel: "📊",
  "Power BI": "📊",
  Tableau: "📈",
  "ETL Processes": "⚙️",
  "Data Warehousing": "🏭",
  
  // Web Development
  React: "⚛️",
  "Next.js": "▲",
  "Node.js": "🟢",
  "Express.js": "🚂",
  HTML: "🌐",
  CSS: "🎨",
  "Tailwind CSS": "💨",
  "REST APIs": "🔌",
  
  // Tools & Platforms
  Git: "📦",
  GitHub: "🐙",
  Vercel: "▲",
  Docker: "🐳",
  "VS Code": "💻",
  PyCharm: "🐍",
  Postman: "📮",
  Jira: "🎯",
  Confluence: "📚",
  "Azure DevOps": "☁️",
};

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const icon = skillIcons[skill] || "💻";
  
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ 
        scale: 1.15,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors border border-gray-300 dark:border-slate-700 flex items-center gap-2 cursor-pointer"
    >
      <span className="text-base">{icon}</span>
      {skill}
    </motion.span>
  );
}
