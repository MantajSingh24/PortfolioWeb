"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button from 3rd section onwards (approximately after 2 viewport heights)
      const viewportHeight = window.innerHeight;
      if (window.scrollY > viewportHeight * 1.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Instant scroll for better performance
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  if (!isVisible) return null;

  return (
    <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-yellow-100/80 hover:bg-yellow-100 text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-150 flex items-center justify-center border-2 border-yellow-100/50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
  );
}

