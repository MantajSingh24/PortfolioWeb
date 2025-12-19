"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Details", href: "#details" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update if scroll changed significantly (performance optimization)
      if (Math.abs(currentScrollY - lastScrollY) < 5 && ticking) return;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(currentScrollY > 20);
          
          // Auto-hide logic: hide when scrolling down, show when scrolling up
          if (currentScrollY < 100) {
            // Always show navbar at the top
            setVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past threshold - hide navbar
            setVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar
            setVisible(true);
          }
          
          // Update active section only every 10px scroll (performance optimization)
          if (Math.abs(currentScrollY - lastScrollY) > 10) {
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = currentScrollY + 150;
            
            // Check sections from bottom to top
            for (let i = sections.length - 1; i >= 0; i--) {
              const section = document.getElementById(sections[i]);
              if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                  setActiveSection(sections[i]);
                  break;
                }
              }
            }
            lastScrollY = currentScrollY;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      // Set active section immediately
      setActiveSection(targetId);
      
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      
      // Ultra-fast direct scroll - almost instant
      const startPosition = window.scrollY;
      const distance = offsetTop - startPosition;
      const absDistance = Math.abs(distance);
      
      // Very fast: max 250ms, or instant for small distances
      if (absDistance < 200) {
        // Instant scroll for very short distances
        window.scrollTo(0, offsetTop);
        setActiveSection(targetId);
        // Subtle bump effect
        element.style.transform = 'scale(0.99)';
        element.style.transition = 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
          setTimeout(() => {
            element.style.transition = '';
          }, 100);
        }, 10);
      } else {
        // Fast animation for longer distances
        const duration = Math.min(absDistance * 0.3, 250); // Much faster: max 250ms
        const startTime = performance.now();
        
        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Faster easing function
          const ease = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
          window.scrollTo(0, startPosition + distance * ease);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            // Ensure active section is set after scroll completes
            setActiveSection(targetId);
            
            // Subtle bump effect after scroll
            element.style.transform = 'scale(0.99)';
            element.style.transition = 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)';
            setTimeout(() => {
              element.style.transform = 'scale(1)';
              setTimeout(() => {
                element.style.transition = '';
              }, 100);
            }, 10);
          }
        };
        
        requestAnimationFrame(animateScroll);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-16 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-xl shadow-lg border border-gray-700/50"
          : "bg-gray-900/70 backdrop-blur-lg border border-gray-700/30"
      }`}
      style={{ borderRadius: '9999px', padding: '0.375rem 0.75rem' }}
    >
      <div className="flex items-center gap-1">
        {/* Desktop Navigation Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-100 ${
                  isActive
                    ? "bg-yellow-100/90 text-gray-900"
                    : "text-gray-300 hover:bg-gray-800/50"
                }`}
                animate={isActive ? {
                  scale: 1.05,
                } : {}}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                }}
                whileHover={!isActive ? { y: -2 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            );
          })}
        </div>
        
        {/* Theme Toggle - Always visible */}
        <div className="ml-1 pl-1 border-l border-gray-700">
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-2 p-1.5 rounded-full text-gray-300 hover:bg-gray-800/50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-sm bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-700/50 p-4"
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-yellow-100/90 text-gray-900"
                        : "text-gray-300 hover:bg-gray-800/50"
                    }`}
                    animate={isActive ? {
                      scale: 1.02,
                    } : {}}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={!isActive ? { x: 4 } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
