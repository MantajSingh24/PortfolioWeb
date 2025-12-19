"use client";

import { experiences, education } from "@/lib/experience";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Details() {
  const [expandedExp, setExpandedExp] = useState<string | null>(null);
  const detailsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedExp && detailsRef.current[expandedExp]) {
        const detailsElement = detailsRef.current[expandedExp];
        const buttonElement = (event.target as HTMLElement).closest('button');
        
        // Don't close if clicking the button itself or inside the details
        if (
          detailsElement && 
          !detailsElement.contains(event.target as Node) &&
          (!buttonElement || !buttonElement.textContent?.includes('Details'))
        ) {
          setExpandedExp(null);
        }
      }
    };

    if (expandedExp) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedExp]);

  return (
    <div className="relative overflow-hidden pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">
            Work Experience & Education
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Professional journey and academic achievements
          </p>
        </div>

        {/* Innovative Layout - Work Experience */}
        <div className="mb-10">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-100/90 to-yellow-50 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-100">
                Work Experience
              </h3>
            </div>
          </div>

          {/* Modern Card Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="group relative"
                style={{ 
                  zIndex: expandedExp === exp.id ? 10 : 1 
                }}
              >
                <div className="bg-[#151515] backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                  {/* Logo and Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {exp.logo && (
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-800 p-2 border-2 border-gray-700/50 flex-shrink-0">
                        <Image
                          src={exp.logo}
                          alt={exp.organization}
                          fill
                          className="object-contain"
                          loading="lazy"
                          sizes="64px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-slate-100 mb-1 leading-tight">
                        {exp.title}
                      </h4>
                      <p className="text-yellow-100/80 font-semibold text-sm mb-1">
                        {exp.organization}
                      </p>
                      {exp.location && (
                        <p className="text-xs text-gray-400">{exp.location}</p>
                      )}
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-100/20 text-yellow-100/90 text-xs font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-sm text-gray-300 mb-4 flex-1">
                      {exp.description}
                    </p>
                  )}

                  {/* Expandable Details */}
                  {exp.fullDescription && Array.isArray(exp.fullDescription) && exp.fullDescription.length > 0 && (
                    <div className="mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedExp(prev => prev === exp.id ? null : exp.id);
                        }}
                        className="w-full flex items-center justify-between gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm font-medium text-gray-300"
                      >
                        <span>{expandedExp === exp.id ? 'Hide' : 'View'} Details</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-150"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ transform: expandedExp === exp.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {expandedExp === exp.id && (
                        <div
                          ref={(el) => {
                            detailsRef.current[exp.id] = el;
                          }}
                          className="absolute top-full left-0 right-0 mt-2 p-4 bg-gray-800 rounded-xl shadow-2xl border-2 border-yellow-100/30 z-20 max-h-64 overflow-y-auto transition-all duration-150"
                        >
                          <div className="space-y-2">
                            {exp.fullDescription.map((item, idx) => (
                              <div key={`${exp.id}-${idx}`} className="flex items-start gap-2 text-sm text-gray-300">
                                <span className="text-yellow-100/80 mt-1 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovative Layout - Education */}
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-100/90 to-yellow-50 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-100">
                Education
              </h3>
            </div>
          </div>

          {/* Modern Horizontal Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-[#151515] backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    {edu.logo && (
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-800 p-3 border-2 border-gray-700/50 flex-shrink-0 shadow-md">
                        <Image
                          src={edu.logo}
                          alt={edu.university}
                          fill
                          className="object-contain"
                          loading="lazy"
                          sizes="80px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-yellow-100/20 text-yellow-100/90 text-xs font-semibold mb-2">
                          {edu.degree}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-100 mb-2 leading-tight">
                        {edu.major}
                      </h4>
                      <p className="text-yellow-100/80 font-semibold mb-2">
                        {edu.university}
                      </p>
                      <p className="text-sm text-gray-400">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
