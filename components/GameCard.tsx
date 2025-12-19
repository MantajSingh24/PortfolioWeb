"use client";

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
    <div
      className="bg-white/70 dark:bg-[#151515]/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/30 dark:border-gray-700/30 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.01]"
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
    </div>
  );
}
