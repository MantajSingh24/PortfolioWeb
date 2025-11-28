"use client";

export default function AnimatedBackground() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(10px) translateX(-15px);
          }
          66% {
            transform: translateY(-15px) translateX(15px);
          }
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          /* Removed backdrop-filter for better performance */
          animation: float 25s ease-in-out infinite;
          will-change: transform;
          transform: translateZ(0); /* Force GPU acceleration */
        }
        .particle-reverse {
          animation: floatReverse 30s ease-in-out infinite;
          will-change: transform;
          transform: translateZ(0); /* Force GPU acceleration */
        }
        @media (prefers-reduced-motion: reduce) {
          .particle, .particle-reverse {
            animation: none;
          }
        }
      `}</style>
      <div className="fixed inset-0 overflow-hidden -z-10" style={{ willChange: 'transform' }}>
        {/* Original gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950" />
        
        {/* Floating particles/effects - optimized for performance (smaller, fewer) */}
        <div className="particle w-32 h-32 md:w-48 md:h-48 top-10 left-10 opacity-20" style={{ animationDelay: '0s' }} />
        <div className="particle particle-reverse w-40 h-40 md:w-64 md:h-64 top-1/3 right-20 opacity-15" style={{ animationDelay: '5s' }} />
        <div className="particle w-36 h-36 md:w-56 md:h-56 bottom-20 left-1/4 opacity-18" style={{ animationDelay: '10s' }} />
        
        {/* Subtle grid pattern - optimized */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            willChange: 'auto'
          }}
        />
      </div>
    </>
  );
}
