"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

/* ─── Lightweight particle canvas ─────────────────────────────────────────── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles: { x: number; y: number; r: number; vx: number; vy: number; a: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        a: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 255, 140, ${p.a})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ zIndex: 1 }}
    />
  );
}

/* ─── Mini profit graph SVG ───────────────────────────────────────────────── */
function ProfitGraph() {
  return (
    <svg
      viewBox="0 0 120 48"
      className="h-10 w-28 sm:h-12 sm:w-32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid lines */}
      <line x1="0" y1="36" x2="120" y2="36" stroke="rgba(120,255,140,0.1)" strokeWidth="0.5" />
      <line x1="0" y1="24" x2="120" y2="24" stroke="rgba(120,255,140,0.08)" strokeWidth="0.5" />
      <line x1="0" y1="12" x2="120" y2="12" stroke="rgba(120,255,140,0.06)" strokeWidth="0.5" />

      {/* Area fill */}
      <motion.path
        d="M0,40 C15,38 25,30 40,28 C55,26 65,18 80,14 C95,10 110,6 120,4 L120,48 L0,48 Z"
        fill="url(#graphGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />

      {/* Line */}
      <motion.path
        d="M0,40 C15,38 25,30 40,28 C55,26 65,18 80,14 C95,10 110,6 120,4"
        stroke="oklch(0.65 0.18 155)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* End dot */}
      <motion.circle
        cx="120"
        cy="4"
        r="3"
        fill="oklch(0.7 0.18 155)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3, type: "spring" }}
      />

      <defs>
        <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.18 155)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 155)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Main Splash ─────────────────────────────────────────────────────────── */
export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(8px)",
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* ── Morphing Aurora / Mesh background ── */}
          <div className="absolute inset-0 bg-[oklch(0.09_0.02_155)]" />

          <motion.div
            className="absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.45 0.16 155 / 0.35) 0%, transparent 70%)",
            }}
            animate={{
              x: [0, 60, -30, 0],
              y: [0, 40, -20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 h-[60%] w-[60%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.5 0.14 145 / 0.25) 0%, transparent 70%)",
            }}
            animate={{
              x: [0, -50, 40, 0],
              y: [0, -30, 50, 0],
              scale: [1, 0.85, 1.15, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute left-1/3 top-1/2 h-[40%] w-[40%] -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.55 0.12 160 / 0.15) 0%, transparent 70%)",
            }}
            animate={{
              x: [0, 30, -40, 0],
              scale: [1, 1.3, 0.95, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Particles */}
          <ParticleField />

          {/* ── Glassmorphism card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center px-8 py-10 text-center sm:px-12 sm:py-12"
            style={{
              background: "rgba(20, 30, 25, 0.45)",
              backdropFilter: "blur(24px) saturate(1.4)",
              WebkitBackdropFilter: "blur(24px) saturate(1.4)",
              borderRadius: "28px",
              border: "1px solid rgba(120, 255, 140, 0.12)",
              boxShadow:
                "0 0 60px rgba(80, 200, 120, 0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* 3D Logo reveal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.4,
                rotateY: -60,
                rotateX: 20,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ perspective: "800px", transformStyle: "preserve-3d" }}
              className="relative mb-5"
            >
              {/* Glow behind logo */}
              <div className="absolute inset-0 scale-150 rounded-2xl bg-primary/25 blur-2xl" />
              <img
                src="/images/logo.jpeg"
                alt="Profit Curve"
                className="relative h-16 w-16 rounded-2xl object-cover shadow-2xl ring-2 ring-primary/40 sm:h-20 sm:w-20"
              />
            </motion.div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}
            >
              <span className="bg-gradient-to-r from-primary via-[oklch(0.7_0.16_145)] to-[oklch(0.55_0.18_160)] bg-clip-text text-transparent">
                Profit Curve
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="mt-2 text-sm tracking-wide text-muted-foreground sm:text-base"
            >
              Turning Media Into Profit
            </motion.p>

            {/* Animated profit graph */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-6"
            >
              <ProfitGraph />
            </motion.div>

            {/* Thin progress line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 w-32 overflow-hidden rounded-full bg-white/5 sm:w-40"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.0, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
