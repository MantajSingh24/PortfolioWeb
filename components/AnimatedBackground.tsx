"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Base gradient - original colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950" />
      
      {/* Animated gradient overlay for interactivity */}
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%',
          animation: 'gradientShift 20s ease infinite',
          willChange: 'background-position'
        }}
      />
      
      <style jsx global>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
