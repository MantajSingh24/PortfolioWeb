"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ShowCardProps {
  show: {
    id: string;
    name: string;
    description: string;
    image: string;
    progress?: number;
  };
  index: number;
}

export default function ShowCard({ show, index }: ShowCardProps) {
  // Use object-contain for better image fitting for problematic images
  const useContain = show.image === '/big banf .jpeg';
  
  return (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          delay: Math.min(index * 0.01, 0.2), 
          duration: 0.2,
          ease: "easeOut"
        }}
        className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/30 dark:border-gray-700/30 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1"
      >
        <div className="relative w-24 h-36 mx-auto mt-2 bg-gray-100 dark:bg-slate-800 rounded">
          <Image
            src={show.image}
            alt={show.name}
            fill
            className={useContain ? "object-contain rounded" : "object-cover rounded"}
            loading="lazy"
            sizes="96px"
            quality={95}
          />
        </div>
        <div className="p-2">
          <h3 className="text-xs font-medium text-slate-900 dark:text-slate-100 text-center truncate">
            {show.name}
          </h3>
          {show.progress && (
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">
                  {show.progress}% Completed
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${show.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full"
                />
              </div>
            </div>
          )}
        </div>
    </motion.div>
  );
}
