"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Details", href: "/details" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-x-0">
          <Link
            href="/"
            className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--accent-strong)] transition-colors border-b-2 border-transparent hover:border-[var(--accent-strong)]"
          >
            Mantaj Singh
          </Link>
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors border-b-2 ${
                    pathname === link.href
                      ? "text-[var(--accent)] dark:text-[var(--accent-strong)] border-[var(--accent)] dark:border-[var(--accent-strong)]"
                      : "text-[var(--text-muted)] dark:text-[var(--text-muted)] hover:text-[var(--accent-strong)] border-transparent hover:border-[var(--accent-strong)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-[var(--border)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--accent)] border border-[var(--accent)] bg-[color-mix(in srgb,var(--surface),var(--background) 80%)]"
                    : "text-[var(--text-muted)] dark:text-[var(--text-muted)] hover:text-[var(--accent-strong)] hover:bg-[color-mix(in srgb,var(--surface),var(--background) 80%)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
