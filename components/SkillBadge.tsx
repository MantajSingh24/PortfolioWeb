"use client";

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
  "Gradient Boosting": "📈",
  "AI/ML Algorithms": "🧠",
  "AI Modelling Enthusiast": "🤖",
  
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
};

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const icon = skillIcons[skill] || "💻";
  
  return (
    <span
      className="px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm font-medium flex items-center gap-2 cursor-pointer border-2 border-gray-300 dark:border-slate-700 shadow-sm hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-105 hover:-translate-y-1 transition-all duration-200"
    >
      <span className="text-base">{icon}</span>
      {skill}
    </span>
  );
}
