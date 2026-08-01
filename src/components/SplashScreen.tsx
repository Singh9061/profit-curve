"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const graphRef = useRef<SVGPathElement>(null);
  const graphAreaRef = useRef<SVGPathElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  /* ── Canvas: aurora ribbons + 3D-ish particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      r: number;
    };
    const particles: P[] = [];

    const resize = () => {
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        z: Math.random() * 0.8 + 0.2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2 + 0.5,
      });
    }

    const drawAurora = (time: number) => {
      // Deep void
      ctx.fillStyle = "#050a08";
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      // Morphing aurora bands
      const bands = [
        { y: 0.25, h: 0.35, c1: "rgba(20,120,80,0.22)", c2: "rgba(40,180,100,0.08)" },
        { y: 0.45, h: 0.3, c1: "rgba(30,100,90,0.18)", c2: "rgba(60,200,130,0.06)" },
        { y: 0.6, h: 0.28, c1: "rgba(15,90,70,0.15)", c2: "rgba(80,220,140,0.05)" },
      ];

      for (let b = 0; b < bands.length; b++) {
        const band = bands[b];
        const wave = Math.sin(time * 0.0004 + b * 1.5) * 40;
        const grad = ctx.createLinearGradient(
          0,
          innerHeight * band.y + wave,
          innerWidth,
          innerHeight * (band.y + band.h) - wave
        );
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.3, band.c1);
        grad.addColorStop(0.5, band.c2);
        grad.addColorStop(0.7, band.c1);
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(0, innerHeight * band.y + wave);
        for (let x = 0; x <= innerWidth; x += 20) {
          const y =
            innerHeight * band.y +
            Math.sin(x * 0.004 + time * 0.0008 + b) * 30 +
            Math.cos(x * 0.002 - time * 0.0005) * 18 +
            wave;
          ctx.lineTo(x, y);
        }
        for (let x = innerWidth; x >= 0; x -= 20) {
          const y =
            innerHeight * (band.y + band.h) +
            Math.sin(x * 0.003 + time * 0.0006 + b + 2) * 25 +
            wave * 0.5;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Center spotlight
      const spot = ctx.createRadialGradient(
        innerWidth / 2,
        innerHeight / 2,
        0,
        innerWidth / 2,
        innerHeight / 2,
        innerWidth * 0.45
      );
      spot.addColorStop(0, "rgba(60,200,120,0.07)");
      spot.addColorStop(1, "transparent");
      ctx.fillStyle = spot;
      ctx.fillRect(0, 0, innerWidth, innerHeight);
    };

    const draw = (time: number) => {
      t = time;
      drawAurora(time);

      // Particles with depth (fake 3D)
      for (const p of particles) {
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        if (p.x < 0) p.x = innerWidth;
        if (p.x > innerWidth) p.x = 0;
        if (p.y < 0) p.y = innerHeight;
        if (p.y > innerHeight) p.y = 0;

        const size = p.r * p.z * 2.2;
        const alpha = 0.15 + p.z * 0.55;

        // Glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4);
        g.addColorStop(0, `rgba(140,255,160,${alpha * 0.4})`);
        g.addColorStop(1, "rgba(140,255,160,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,255,160,${alpha})`;
        ctx.fill();
      }

      // Connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(100,220,130,${(1 - dist / 110) * 0.12})`;
            ctx.lineWidth = 0.6;
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

  /* ── GSAP cinematic timeline ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(rootRef.current, {
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
            duration: 0.55,
            ease: "power2.inOut",
            onComplete: () => {
              setDone(true);
              onComplete();
            },
          });
        },
      });

      // Glass panel
      tl.fromTo(
        glassRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
        0.1
      );

      // 3D logo reveal
      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.3,
          rotateY: -90,
          rotateX: 25,
          filter: "blur(16px)",
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
        },
        0.25
      );

      // Title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 24, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55, ease: "power2.out" },
        0.55
      );

      // Tagline
      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        0.75
      );

      // Graph line draw
      if (graphRef.current) {
        const len = graphRef.current.getTotalLength();
        gsap.set(graphRef.current, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
        tl.to(
          graphRef.current,
          { strokeDashoffset: 0, duration: 0.85, ease: "power2.inOut" },
          0.7
        );
      }

      // Graph area fade
      tl.fromTo(
        graphAreaRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        1.0
      );

      // Progress bar
      tl.fromTo(
        barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: "power2.inOut" },
        0.9
      );

      // Hold then exit
      tl.to({}, { duration: 0.45 });
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "#050a08" }}
    >
      {/* Full-scene aurora + particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Premium lighting vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Glassmorphism panel */}
      <div
        ref={glassRef}
        className="relative z-10 flex flex-col items-center px-10 py-12 text-center sm:px-14 sm:py-14"
        style={{
          background: "rgba(8, 18, 14, 0.55)",
          backdropFilter: "blur(32px) saturate(1.6)",
          WebkitBackdropFilter: "blur(32px) saturate(1.6)",
          borderRadius: "32px",
          border: "1px solid rgba(120, 255, 150, 0.1)",
          boxShadow:
            "0 0 80px rgba(40, 180, 100, 0.1), 0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          opacity: 0,
        }}
      >
        {/* 3D Logo */}
        <div
          ref={logoRef}
          className="relative mb-6"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            opacity: 0,
          }}
        >
          <div
            className="absolute inset-0 scale-[1.8] rounded-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(80,220,130,0.35) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <img
            src="/images/logo.jpeg"
            alt="Profit Curve"
            className="relative h-[72px] w-[72px] rounded-2xl object-cover sm:h-20 sm:w-20"
            style={{
              boxShadow:
                "0 0 30px rgba(80,220,130,0.3), 0 8px 24px rgba(0,0,0,0.5)",
              border: "2px solid rgba(120,255,150,0.25)",
            }}
          />
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          style={{
            fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif",
            opacity: 0,
            background:
              "linear-gradient(135deg, oklch(0.7 0.18 155), oklch(0.85 0.12 145), oklch(0.6 0.16 160))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Profit Curve
        </h1>

        {/* Tagline */}
        <p
          ref={tagRef}
          className="mt-2.5 text-sm tracking-[0.15em] text-white/40 sm:text-base"
          style={{ opacity: 0 }}
        >
          TURNING MEDIA INTO PROFIT
        </p>

        {/* Financial graph */}
        <div className="mt-8">
          <svg
            viewBox="0 0 160 56"
            className="h-12 w-40 sm:h-14 sm:w-48"
            fill="none"
          >
            {/* subtle grid */}
            {[14, 28, 42].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="160"
                y2={y}
                stroke="rgba(120,255,150,0.06)"
                strokeWidth="0.5"
              />
            ))}

            {/* Area */}
            <path
              ref={graphAreaRef}
              d="M0,48 C20,46 30,38 50,34 C70,30 85,22 105,16 C125,10 145,6 160,3 L160,56 L0,56 Z"
              fill="url(#splashGraphGrad)"
              style={{ opacity: 0 }}
            />

            {/* Line */}
            <path
              ref={graphRef}
              d="M0,48 C20,46 30,38 50,34 C70,30 85,22 105,16 C125,10 145,6 160,3"
              stroke="oklch(0.72 0.17 155)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* End glow dot */}
            <circle cx="160" cy="3" r="3.5" fill="oklch(0.75 0.18 155)">
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>

            <defs>
              <linearGradient id="splashGraphGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.6 0.18 155)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(0.6 0.18 155)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Progress bar */}
        <div className="mt-7 h-[2px] w-36 overflow-hidden rounded-full bg-white/5 sm:w-44">
          <div
            ref={barRef}
            className="h-full origin-left rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.65 0.18 155), oklch(0.75 0.15 145), transparent)",
              transform: "scaleX(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
