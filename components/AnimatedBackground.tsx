"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="animated-gradient" />
      <div className="animated-gradient animated-gradient-2" />
      <div className="particle-noise" />
    </div>
  );
}
