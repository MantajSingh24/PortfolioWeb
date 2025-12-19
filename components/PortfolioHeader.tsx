"use client";

import { useState, useEffect } from "react";

  const navLinks = [
    { name: "About", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

export default function PortfolioHeader() {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only show title when at the top of the first page
          if (currentScrollY < 100) {
            setShowTitle(true);
          } else {
            // Hide title when scrolled away from top
            setShowTitle(false);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      style={{ willChange: "transform" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Navigation buttons in rounded box */}
          <div className="flex items-center gap-2 bg-gray-900/80 rounded-full px-3 py-1.5 border border-gray-700/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.substring(1);
                  const element = document.getElementById(targetId);
                  if (element) {
                    // Instant scroll - no animation
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'auto' });
                  }
                }}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center - Title */}
          <div className={`absolute left-1/2 -translate-x-1/2 text-center transition-opacity duration-300 ${
            showTitle ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
            <h1 className="text-xl font-bold text-yellow-100">
              Mantaj Singh&apos;s Portfolio
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Computer Science Student with Data Analytics
            </p>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href="/Mantaj_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-900/80 hover:bg-gray-800/70 text-gray-300 hover:text-white transition-all duration-150 flex items-center gap-1.5 border border-gray-700/50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Résumé
            </a>
            <a
              href="mailto:taranpalbrar58@gmail.com"
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-100/90 hover:bg-yellow-50 text-gray-900 transition-all duration-150 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

