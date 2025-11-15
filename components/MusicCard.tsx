"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MusicCardProps {
  artist: {
    id: string;
    name: string;
    description: string;
    spotifyUrl: string;
    image: string;
  };
  index: number;
}

export default function MusicCard({ artist, index }: MusicCardProps) {
  // Use object-contain for mohit chauhan for better fitting
  const useContain = artist.image === '/mohit chauhan.jpg';
  
  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.1, 
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        whileHover={{ 
          scale: 1.05,
          y: -5,
          transition: { duration: 0.2 }
        }}
        className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-gray-300 dark:border-slate-700 cursor-pointer"
      >
        <div className="relative w-20 h-20 mx-auto mt-2 bg-gray-100 dark:bg-slate-800 rounded-full">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className={useContain ? "object-contain rounded-full" : "object-cover rounded-full"}
            loading="lazy"
            sizes="80px"
            quality={95}
          />
        </div>
        <div className="p-2">
          <h3 className="text-xs font-medium text-slate-900 dark:text-slate-100 text-center truncate mb-1">
            {artist.name}
          </h3>
          <a
            href={artist.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span>Spotify</span>
          </a>
        </div>
    </motion.div>
  );
}
