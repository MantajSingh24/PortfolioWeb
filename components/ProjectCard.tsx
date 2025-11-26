"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.08, 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        scale: 1.03, 
        y: -8,
        transition: { duration: 0.2 }
      }}
    className="surface-panel rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
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
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-20">
            {project.title.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
          {project.title}
        </h3>
        <p className="text-[var(--text-muted)] mb-3 text-xs leading-relaxed">
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
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
                className="px-2 py-1 text-xs rounded-md tech-pill font-medium flex items-center gap-1 cursor-pointer"
              >
                  <span>{icon}</span>
                  {tech}
                </motion.span>
              );
            })}
          </div>
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-1.5 accent-outline rounded-lg text-center text-xs font-medium transition-all duration-300 border-2 border-[var(--accent)] hover:border-[var(--accent-strong)]"
              >
                {project.title === "Vendor Performance Dashboard" ? "View Live Dashboard" : "Live"}
              </Link>
            </motion.div>
          )}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1.5 accent-btn rounded-lg text-center text-xs font-medium transition-all duration-300 border-2 ${
                project.liveUrl ? "flex-1" : "w-full"
              }`}
            >
              Code
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
