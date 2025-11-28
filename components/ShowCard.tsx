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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          delay: index * 0.02, 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        whileHover={{ 
          scale: 1.03,
          y: -3,
          transition: { duration: 0.2 }
        }}
        className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/30 dark:border-gray-700/30 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          boxShadow: '0 4px 20px 0 rgba(31, 38, 135, 0.1)',
        }}
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
