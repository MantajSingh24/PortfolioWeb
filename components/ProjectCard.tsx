"use client";

import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const skillIcons: { [key: string]: string } = {
  Python: "🐍",
  Java: "☕",
  JavaScript: "📜",
  TypeScript: "📘",
  React: "⚛️",
  "Next.js": "▲",
  Node: "🟢",
  "Node.js": "🟢",
  "Express.js": "🟢",
  SQL: "🗄️",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Git: "📦",
  GitHub: "🐙",
  Docker: "🐳",
  "Power BI": "📊",
  Excel: "📈",
  Pandas: "🐼",
  "scikit-learn": "🤖",
  HTML: "🌐",
  CSS: "🎨",
  "Tailwind CSS": "🎨",
  ETL: "⚙️",
  "Machine Learning": "🤖",
  "Data Science": "📊",
  "Game Development": "🎮",
  HTML5: "🌐",
  "React Router": "⚛️",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-150 border-2 border-gray-200/50 dark:border-gray-800/50"
    >
      <div
        className="aspect-video relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #191D23 0%, #57707A 60%, #7B919C 100%)" }}
      >
        {project.image && project.image !== "/project-placeholder.jpg" ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-3xl font-bold opacity-30">
            {project.title.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-gray-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => {
              const icon = skillIcons[tech] || "💻";
              return (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-700 font-medium flex items-center gap-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              >
                  <span>{icon}</span>
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {project.liveUrl && (
            <div className="flex-1">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-3 py-2 sm:py-1.5 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100 rounded-lg text-center text-xs font-medium transition-all duration-300 border-2 border-gray-300 dark:border-slate-700 hover:border-yellow-100/50"
              >
                {project.title === "Vendor Performance Dashboard" ? "View Dashboard" : "Live"}
              </Link>
            </div>
          )}
          <div className={project.liveUrl ? "flex-1" : "w-full"}>
            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-3 py-2 sm:py-1.5 bg-yellow-100/90 dark:bg-yellow-100/80 hover:bg-yellow-50 dark:hover:bg-yellow-100 text-gray-900 dark:text-gray-900 rounded-lg text-center text-xs font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-yellow-100/30"
            >
              Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
