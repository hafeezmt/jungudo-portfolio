"use client";

import { useEffect, useRef } from "react";

type Bubble = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
};

const COLORS = [
  "rgba(59,130,246,", // blue
  "rgba(139,92,246,", // purple
  "rgba(34,211,238,", // cyan
  "rgba(99,102,241,", // indigo
];

export function FloatingBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animId: number;
    const bubbles: Bubble[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn bubbles
    for (let i = 0; i < 28; i++) {
      bubbles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(Math.random() * 0.5 + 0.2),
        opacity: Math.random() * 0.4 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        // Move
        b.x += b.speedX;
        b.y += b.speedY;

        // Reset when off screen
        if (b.y < -20) {
          b.y = canvas.height + 20;
          b.x = Math.random() * canvas.width;
        }
        if (b.x < -20) b.x = canvas.width + 20;
        if (b.x > canvas.width + 20) b.x = -20;

        // Draw bubble
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fillStyle = `${b.color}${b.opacity})`;
        ctx.fill();

        // Draw glow
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.size * 4);
        grad.addColorStop(0, `${b.color}${b.opacity * 0.3})`);
        grad.addColorStop(1, `${b.color}0)`);
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
