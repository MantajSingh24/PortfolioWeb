"use client";

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
    <div
        className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/30 dark:border-gray-700/30 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.01]"
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
                <div
                  className="bg-gradient-to-r from-yellow-100/90 dark:from-purple-600 to-yellow-50 dark:to-purple-500 h-full rounded-full"
                  style={{ width: `${show.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
    </div>
  );
}
