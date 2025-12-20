"use client";

import { Project } from "@/lib/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Category colors - More vibrant and visible
const getCategoryColor = (category: string) => {
  const categoryMap: { [key: string]: { bg: string; text: string; border: string } } = {
    "AI": {
      bg: "bg-purple-600",
      text: "text-white",
      border: "border-purple-500"
    },
    "AUTOMATION": {
      bg: "bg-green-600",
      text: "text-white",
      border: "border-green-500"
    },
    "DATA SCIENCE": {
      bg: "bg-blue-600",
      text: "text-white",
      border: "border-blue-500"
    },
    "CRYPTOGRAPHY": {
      bg: "bg-red-600",
      text: "text-white",
      border: "border-red-500"
    },
    "WEB": {
      bg: "bg-indigo-600",
      text: "text-white",
      border: "border-indigo-500"
    },
    "GAME": {
      bg: "bg-orange-600",
      text: "text-white",
      border: "border-orange-500"
    },
    "MACHINE LEARNING": {
      bg: "bg-pink-600",
      text: "text-white",
      border: "border-pink-500"
    },
  };
  return categoryMap[category.toUpperCase()] || {
    bg: "bg-gray-600",
    text: "text-white",
    border: "border-gray-500"
  };
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const category = project.category || "WEB";
  const categoryColor = getCategoryColor(category);

  return (
    <div
      className="group relative bg-[#151515] rounded-2xl overflow-hidden border border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-[1.01] flex flex-col h-full project-card-scan"
      style={{ willChange: 'transform' }}
    >
      {/* Golden Corner Highlights */}
      <div className="scan-border"></div>
      {/* Category Badge - Top Left - More Visible */}
      <div className="absolute top-3 left-3 z-20">
        <span className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 shadow-lg ${categoryColor.bg} ${categoryColor.text} ${categoryColor.border}`}>
          {category}
        </span>
      </div>

      {/* Project Image */}
      {project.image && project.image !== "/project-placeholder.jpg" ? (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={85}
            style={{ willChange: 'transform' }}
          />
        </div>
      ) : (
        <div 
          className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
        >
          <div className="text-gray-400 text-4xl font-bold opacity-30">
            {project.title.charAt(0)}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-300 mb-2 group-hover:text-white transition-colors duration-150">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className={`flex flex-wrap gap-2 ${!project.liveUrl && !project.notebookUrl ? 'mb-4' : 'mb-3'}`}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-gray-800/50 text-gray-300 border border-gray-700/50 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col gap-2 ${!project.liveUrl && !project.notebookUrl ? 'mt-5' : 'mt-auto'}`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-100/90 hover:bg-yellow-100 text-gray-900 rounded-lg transition-colors duration-150 border border-yellow-100/50 font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-sm font-medium">View Dashboard</span>
            </a>
          )}
          {project.notebookUrl && (
            <a
              href={project.notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600/90 hover:bg-blue-600 text-white rounded-lg transition-colors duration-150 border border-blue-500/50 font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium">View Notebook</span>
            </a>
          )}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg transition-colors duration-150 border border-gray-700/50"
          >
            <svg
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-sm font-medium text-gray-300">View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
