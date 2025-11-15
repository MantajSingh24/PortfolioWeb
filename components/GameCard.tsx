"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GameCardProps {
  game: {
    id: string;
    title: string;
    description: string;
    image: string;
    status: "completed" | "playing" | "bucket";
    progress?: number;
  };
  index: number;
}

export default function GameCard({ game, index }: GameCardProps) {
  // Use object-contain for better image fitting, especially for problematic images
  const useContain = ['/god of war s.avif', '/rdr 2.jpg', '/Assasijn creed.png', '/death starnding.webp'].includes(game.image);
  
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
          src={game.image}
          alt={game.title}
          fill
          className={useContain ? "object-contain rounded" : "object-cover rounded"}
          loading="lazy"
          sizes="96px"
          quality={95}
        />
      </div>
      <div className="p-2">
        <h3 className="text-xs font-medium text-slate-900 dark:text-slate-100 text-center truncate">
          {game.title}
        </h3>
      </div>
    </motion.div>
  );
}
