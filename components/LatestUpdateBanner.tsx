"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function LatestUpdateBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Update this when you have new features
  const UPDATE_VERSION = "v1.2.0"; // Change this to force showing again
  const UPDATE_DATE = "Dec 2025";
  const UPDATE_TITLE = "Email Verification Added";
  const UPDATE_DESCRIPTION = "Contact form now requires email verification via magic link to prevent spam and ensure authentic messages reach me";
  const UPDATE_LINK = "/contact"; // Optional: link to the feature

  useEffect(() => {
    // Check if user has dismissed this version
    // Only check localStorage on client side
    if (typeof window !== 'undefined') {
      const dismissedVersion = localStorage.getItem("dismissedUpdateBanner");
      if (dismissedVersion !== UPDATE_VERSION) {
        setIsVisible(true);
      }
    } else {
      // Show by default on server side
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
    <div
      className={`fixed left-4 top-20 z-[9999] pointer-events-none transition-all duration-300 ease-out ${
        isClosing ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="pointer-events-auto bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl border-2 border-yellow-100/50 rounded-xl p-4 max-w-[280px]">
        {/* Close button - Top right */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200 hover:rotate-90"
          aria-label="Dismiss update banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content - Vertical layout */}
        <div className="flex flex-col gap-3">
          {/* Icon and Title */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full w-fit">
                  {UPDATE_DATE}
                </span>
                <span className="text-sm font-bold leading-tight">
                  {UPDATE_TITLE}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-300 leading-relaxed">
            {UPDATE_DESCRIPTION}
          </p>

          {/* CTA Button */}
          {UPDATE_LINK && (
            <Link href={UPDATE_LINK}>
              <button
                className="w-full text-xs font-semibold bg-yellow-100/90 text-gray-900 px-3 py-2 rounded-full hover:bg-yellow-50 transition-all duration-200 shadow-md hover:shadow-yellow-100/30 hover:scale-105"
              >
                Try it out →
              </button>
            </Link>
          )}

          {/* Decorative underline */}
          <div className="h-0.5 bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}
