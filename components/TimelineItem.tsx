"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface TimelineItemProps {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description?: string;
  fullDescription?: string[];
  logo?: string;
  index: number;
}

export default function TimelineItem({
  title,
  organization,
  location,
  period,
  description,
  fullDescription,
  logo,
  index,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative pl-8 pb-8 border-l-2 border-gray-300 dark:border-slate-700 last:border-l-0 last:pb-0"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 border-2 border-white dark:border-slate-900" />
      <motion.div
        whileHover={{ scale: 1.01, x: 5 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200 dark:border-slate-800"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            {logo && (
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800">
                <Image
                  src={logo}
                  alt={organization}
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="64px"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {title}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                {organization}
              </p>
              {location && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{location}</p>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{period}</p>
              {description && !isExpanded && (
                <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
              )}
              
              <AnimatePresence>
                {isExpanded && fullDescription && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-3 space-y-2"
                  >
                    {fullDescription.map((item, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1">→</span>
                        <span>{item}</span>
                      </motion.p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {fullDescription && fullDescription.length > 0 && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex-shrink-0 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
