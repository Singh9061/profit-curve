"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);

  /* Heavy aurora + particles background */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; z: number; vx: number; vy: number; r: number };
    const particles: P[] = [];

    const resize = () => {
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        z: Math.random() * 0.85 + 0.15,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.4 + 0.6,
      });
    }

    const draw = (time: number) => {
      ctx.fillStyle = "#020805";
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      const bands = [
        { y: 0.15, h: 0.4, amp: 50, speed: 0.0005, c: ["rgba(10,90,55,0.35)", "rgba(40,200,110,0.12)"] },
        { y: 0.35, h: 0.38, amp: 60, speed: 0.0007, c: ["rgba(20,120,70,0.3)", "rgba(60,230,140,0.1)"] },
        { y: 0.5, h: 0.35, amp: 45, speed: 0.0004, c: ["rgba(5,70,50,0.28)", "rgba(80,255,160,0.08)"] },
        { y: 0.65, h: 0.3, amp: 35, speed: 0.0006, c: ["rgba(15,100,65,0.22)", "rgba(50,210,120,0.07)"] },
      ];

      for (let b = 0; b < bands.length; b++) {
        const band = bands[b];
        const wave = Math.sin(time * band.speed + b * 1.3) * band.amp;
        ctx.beginPath();
        ctx.moveTo(0, innerHeight * band.y + wave);
        for (let x = 0; x <= innerWidth; x += 12) {
          const y =
            innerHeight * band.y +
            Math.sin(x * 0.005 + time * band.speed * 2 + b) * band.amp +
            Math.cos(x * 0.0025 - time * band.speed) * (band.amp * 0.5);
          ctx.lineTo(x, y);
        }
        for (let x = innerWidth; x >= 0; x -= 12) {
          const y =
            innerHeight * (band.y + band.h) +
            Math.sin(x * 0.0035 + time * band.speed + b + 2) * (band.amp * 0.7);
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, 0, innerWidth, 0);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.2, band.c[0]);
        grad.addColorStop(0.5, band.c[1]);
        grad.addColorStop(0.8, band.c[0]);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fill();
      }

      const bloom = ctx.createRadialGradient(
        innerWidth / 2,
        innerHeight / 2 - 20,
        0,
        innerWidth / 2,
        innerHeight / 2 - 20,
        innerWidth * 0.4
      );
      bloom.addColorStop(0, "rgba(80,230,140,0.14)");
      bloom.addColorStop(0.4, "rgba(40,180,100,0.06)");
      bloom.addColorStop(1, "transparent");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      for (const p of particles) {
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        if (p.x < 0) p.x = innerWidth;
        if (p.x > innerWidth) p.x = 0;
        if (p.y < 0) p.y = innerHeight;
        if (p.y > innerHeight) p.y = 0;

        const size = p.r * p.z * 2.5;
        const alpha = 0.2 + p.z * 0.6;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 5);
        g.addColorStop(0, `rgba(150,255,170,${alpha * 0.5})`);
        g.addColorStop(1, "rgba(150,255,170,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,255,180,${alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(100,230,140,${(1 - dist / 130) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
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
            scale: 1.06,
            filter: "blur(14px)",
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "#020805" }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

          {/* Vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 48%, transparent 20%, rgba(0,0,0,0.65) 100%)",
            }}
          />

          {/* Impact flash */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background:
                "radial-gradient(circle at 50% 42%, rgba(180,255,160,0.55) 0%, rgba(60,200,120,0.18) 35%, transparent 65%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.85, 0] }}
            transition={{ duration: 0.45, delay: 0.2, times: [0, 0.15, 1] }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Shockwave ring */}
            <motion.div
              className="pointer-events-none absolute rounded-full"
              style={{
                width: 90,
                height: 90,
                border: "2px solid rgba(120,255,150,0.7)",
                boxShadow: "0 0 40px rgba(80,220,130,0.5)",
              }}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.3, 3.8], opacity: [0, 0.9, 0] }}
              transition={{ duration: 0.75, delay: 0.28, ease: "easeOut" }}
            />

            {/* LOGO — sudden heavy slam */}
            <motion.div
              className="relative"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
              initial={{
                opacity: 0,
                scale: 3.2,
                rotateY: -50,
                rotateX: 20,
                filter: "blur(28px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.25,
                duration: 0.55,
                ease: [0.16, 1.4, 0.3, 1],
              }}
            >
              <div
                className="absolute inset-0 scale-[2.2] rounded-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(80,230,130,0.55) 0%, rgba(40,180,100,0.15) 40%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <motion.img
                src="/images/logo.jpeg"
                alt="Profit Curve"
                className="relative h-[84px] w-[84px] rounded-2xl object-cover sm:h-[96px] sm:w-[96px]"
                style={{
                  boxShadow:
                    "0 0 50px rgba(80,230,130,0.5), 0 0 100px rgba(40,180,100,0.25), 0 14px 35px rgba(0,0,0,0.65)",
                  border: "2.5px solid rgba(140,255,160,0.4)",
                }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>

            {/* Glass panel */}
            <motion.div
              className="mt-6 flex flex-col items-center px-10 py-8 text-center sm:px-14 sm:py-10"
              style={{
                background: "rgba(6, 16, 12, 0.6)",
                backdropFilter: "blur(28px) saturate(1.5)",
                WebkitBackdropFilter: "blur(28px) saturate(1.5)",
                borderRadius: "28px",
                border: "1px solid rgba(120, 255, 150, 0.12)",
                boxShadow:
                  "0 0 60px rgba(40, 180, 100, 0.12), 0 20px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif",
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.18 155), oklch(0.88 0.1 145), oklch(0.62 0.16 160))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.7, duration: 0.45 }}
              >
                Profit Curve
              </motion.h1>

              <motion.p
                className="mt-2 text-sm tracking-[0.2em] text-white/40 sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.35 }}
              >
                TURNING MEDIA INTO PROFIT
              </motion.p>

              {/* Graph */}
              <motion.div
                className="mt-7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 }}
              >
                <svg viewBox="0 0 160 56" className="h-12 w-40 sm:h-14 sm:w-48" fill="none">
                  {[14, 28, 42].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="160"
                      y2={y}
                      stroke="rgba(120,255,150,0.07)"
                      strokeWidth="0.5"
                    />
                  ))}
                  <motion.path
                    d="M0,48 C20,46 30,38 50,34 C70,30 85,22 105,16 C125,10 145,6 160,3 L160,56 L0,56 Z"
                    fill="url(#gGrad2)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                  />
                  <motion.path
                    d="M0,48 C20,46 30,38 50,34 C70,30 85,22 105,16 C125,10 145,6 160,3"
                    stroke="oklch(0.75 0.17 155)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.0, duration: 0.7, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="160"
                    cy="3"
                    r="3.5"
                    fill="oklch(0.8 0.18 155)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6, type: "spring" }}
                  />
                  <defs>
                    <linearGradient id="gGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.65 0.18 155)" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="oklch(0.65 0.18 155)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <div className="mt-6 h-[2px] w-36 overflow-hidden rounded-full bg-white/5 sm:w-44">
                <motion.div
                  className="h-full origin-left rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.7 0.18 155), oklch(0.8 0.14 145), transparent)",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.05, duration: 0.6, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
