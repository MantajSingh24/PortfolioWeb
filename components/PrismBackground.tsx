"use client";

import { useEffect, useRef } from "react";

export default function PrismBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Prism/Particle class for starry background
    class Particle {
      x: number;
      y: number;
      z: number; // Depth for 3D effect
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      parallaxFactor: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        
        // Random starting position
        this.baseX = Math.random() * canvasWidth;
        this.baseY = Math.random() * canvasHeight;
        this.x = this.baseX;
        this.y = this.baseY;
        
        // 3D depth (0 = far, 1 = close)
        this.z = Math.random();
        
        // Velocity for smooth movement - increased speed
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        
        // Size based on depth (closer = bigger)
        this.radius = (0.5 + this.z * 1.5) * (Math.random() * 0.8 + 0.4);
        
        // Opacity based on depth and twinkling
        this.opacity = 0.4 + this.z * 0.6;
        this.twinkleSpeed = Math.random() * 0.02 + 0.015;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        
        // Parallax factor based on depth
        this.parallaxFactor = 0.1 + this.z * 0.3;
      }

      update(mouseX: number, mouseY: number, time: number) {
        // Smooth floating movement - faster
        this.baseX += this.vx;
        this.baseY += this.vy;
        
        // Wrap around edges
        if (this.baseX < 0) this.baseX = this.canvasWidth;
        if (this.baseX > this.canvasWidth) this.baseX = 0;
        if (this.baseY < 0) this.baseY = this.canvasHeight;
        if (this.baseY > this.canvasHeight) this.baseY = 0;
        
        // Parallax effect with mouse
        const parallaxX = (mouseX - 0.5) * this.parallaxFactor * 100;
        const parallaxY = (mouseY - 0.5) * this.parallaxFactor * 100;
        
        // Final position with parallax
        this.x = this.baseX + parallaxX;
        this.y = this.baseY + parallaxY;
        
        // Twinkling effect
        const twinkle = Math.sin(time * this.twinkleSpeed + this.twinkleOffset) * 0.4 + 0.6;
        this.opacity = (0.4 + this.z * 0.6) * twinkle;
      }

      draw() {
        if (!ctx) return;
        
        // Draw star with gradient for prism-like effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add bright center point
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create particles - slightly more for richer background
    const numParticles = Math.floor((canvas.width * canvas.height) / 22000);
    const particles: Particle[] = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Set canvas size
    const resizeCanvas = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Update particle positions proportionally
      particles.forEach(particle => {
        particle.baseX = (particle.baseX / oldWidth) * canvas.width;
        particle.baseY = (particle.baseY / oldHeight) * canvas.height;
        particle.canvasWidth = canvas.width;
        particle.canvasHeight = canvas.height;
      });
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // Mouse move handler for parallax - throttled for better performance
    let mouseMoveThrottle: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseMoveThrottle) return;
      mouseMoveThrottle = window.requestAnimationFrame(() => {
        mousePositionRef.current = {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        };
        mouseMoveThrottle = null;
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation loop
    let animationFrameId: number;
    let lastMouseX = 0.5;
    let lastMouseY = 0.5;
    let startTime = Date.now();

    const animate = () => {
      // Smooth mouse position interpolation - faster for better responsiveness
      lastMouseX += (mousePositionRef.current.x - lastMouseX) * 0.1;
      lastMouseY += (mousePositionRef.current.y - lastMouseY) * 0.1;
      
      // Time for animations
      const time = (Date.now() - startTime) * 0.001;

      // Clear canvas with background color - back to blackish
      ctx.fillStyle = "#151515";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(lastMouseX, lastMouseY, time);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseMoveThrottle) cancelAnimationFrame(mouseMoveThrottle);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-[#151515]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          imageRendering: "auto",
          willChange: "transform",
          transform: "translateZ(0)"
        }}
      />
    </div>
  );
}

