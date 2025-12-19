"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Enhanced Star class with 3D effect and smooth circular motion
    class Star {
      x: number;
      y: number;
      z: number; // Depth for 3D effect
      baseX: number;
      baseY: number;
      angle: number;
      speed: number;
      radius: number;
      opacity: number;
      parallaxFactor: number;
      twinkleSpeed: number;
      twinkleOffset: number;
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
        
        // Circular motion parameters - slightly slower for smoother feel
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (Math.random() * 0.03 + 0.015) * (0.5 + this.z); // Slightly slower for smoother motion
        
        // Size based on depth (closer = bigger)
        this.radius = (0.5 + this.z * 1.5) * (Math.random() * 1.5 + 0.5);
        
        // Opacity based on depth and twinkling
        this.opacity = 0.3 + this.z * 0.7;
        this.twinkleSpeed = Math.random() * 0.03 + 0.02;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        
        // Parallax factor based on depth
        this.parallaxFactor = 0.1 + this.z * 0.4;
      }

      update(mouseX: number, mouseY: number, time: number) {
        // Circular motion - update angle
        this.angle += this.speed;
        
        // Update base position with circular motion - increased radius for more visible movement
        const radius = 2 + this.z * 3; // Larger circular path
        this.baseX += Math.cos(this.angle) * radius;
        this.baseY += Math.sin(this.angle) * radius;
        
        // Wrap around edges
        if (this.baseX < 0) this.baseX = this.canvasWidth;
        if (this.baseX > this.canvasWidth) this.baseX = 0;
        if (this.baseY < 0) this.baseY = this.canvasHeight;
        if (this.baseY > this.canvasHeight) this.baseY = 0;
        
        // Parallax effect - smooth movement with mouse
        const parallaxX = (mouseX - 0.5) * this.parallaxFactor * 150;
        const parallaxY = (mouseY - 0.5) * this.parallaxFactor * 150;
        
        // Final position with parallax
        this.x = this.baseX + parallaxX;
        this.y = this.baseY + parallaxY;
        
        // Twinkling effect
        const twinkle = Math.sin(time * this.twinkleSpeed + this.twinkleOffset) * 0.3 + 0.7;
        this.opacity = (0.3 + this.z * 0.7) * twinkle;
      }

      draw() {
        if (!ctx) return;
        
        // Optimized: Use simpler rendering for better performance
        // Draw main star with solid color (faster than gradient)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
        ctx.fill();
        
        // Add a bright center point for depth
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create stars - optimized count for better performance
    const numStars = Math.floor((canvas.width * canvas.height) / 25000); // Even fewer stars for better performance
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star(canvas.width, canvas.height));
    }

    // Set canvas size
    const resizeCanvas = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Update star positions proportionally
      stars.forEach(star => {
        star.baseX = (star.baseX / oldWidth) * canvas.width;
        star.baseY = (star.baseY / oldHeight) * canvas.height;
        star.canvasWidth = canvas.width;
        star.canvasHeight = canvas.height;
      });
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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
      // Smooth mouse position interpolation - optimized (slower for better performance)
      lastMouseX += (mousePositionRef.current.x - lastMouseX) * 0.05;
      lastMouseY += (mousePositionRef.current.y - lastMouseY) * 0.05;
      
      // Time for animations
      const time = (Date.now() - startTime) * 0.001;

      // Clear canvas with dark space background - lighter black for better visibility
      ctx.fillStyle = "#151515";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars - batch operations for better performance
      stars.forEach((star) => {
        star.update(lastMouseX, lastMouseY, time);
        star.draw();
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
    <>
      <div className="fixed inset-0 overflow-hidden -z-10 bg-[#151515]">
        {/* Animated stars canvas */}
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
    </>
  );
}
