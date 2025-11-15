"use client";

import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SectionWrapper className="bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Some of my recent work
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

