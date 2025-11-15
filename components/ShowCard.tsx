"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ShowCardProps {
  show: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
  index: number;
}

export default function ShowCard({ show, index }: ShowCardProps) {
  // Use object-contain for better image fitting for problematic images
  const useContain = show.image === '/big banf .jpeg';
  
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.05, 
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        whileHover={{ 
          scale: 1.05,
          y: -5,
          transition: { duration: 0.2 }
        }}
        className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-gray-300 dark:border-slate-700 cursor-pointer"
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
        </div>
    </motion.div>
  );
}
