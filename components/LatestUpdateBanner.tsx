"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function LatestUpdateBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Update this when you have new features
  const UPDATE_VERSION = "v1.1.0"; // Change this to force showing again
  const UPDATE_DATE = "Dec 2025";
  const UPDATE_TITLE = "Email Verification Added";
  const UPDATE_DESCRIPTION = "Contact form now requires email verification via magic link to prevent spam and ensure authentic messages reach me";
  const UPDATE_LINK = "/contact"; // Optional: link to the feature

  useEffect(() => {
    // Check if user has dismissed this version
    const dismissedVersion = localStorage.getItem("dismissedUpdateBanner");
    if (dismissedVersion !== UPDATE_VERSION) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("dismissedUpdateBanner", UPDATE_VERSION);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isClosing ? -100 : 0, opacity: isClosing ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
      >
        <div className="pointer-events-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg border-b border-yellow-100/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              {/* Left side - Icon and content */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Sparkle icon - animation removed for performance */}
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">
                      {UPDATE_DATE}
                    </span>
                    <span className="text-sm font-bold">
                      {UPDATE_TITLE}
                    </span>
                  </div>
                  <p className="text-xs text-white/90 mt-0.5 hidden sm:block">
                    {UPDATE_DESCRIPTION}
                  </p>
                </div>
              </div>

              {/* Right side - CTA and close button */}
              <div className="flex items-center gap-2 sm:gap-3">
                {UPDATE_LINK && (
                  <Link href={UPDATE_LINK}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs sm:text-sm font-semibold bg-yellow-100/90 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-yellow-50 transition-colors duration-200 shadow-md hover:shadow-yellow-100/30"
                    >
                      Try it out →
                    </motion.button>
                  </Link>
                )}

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDismiss}
                  className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="Dismiss update banner"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Static underline - animation removed for performance */}
          <div className="h-0.5 bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 mt-1" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

