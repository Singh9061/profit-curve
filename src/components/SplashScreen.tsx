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
  const logoImgRef = useRef<HTMLImageElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const graphRef = useRef<SVGPathElement>(null);
  const graphAreaRef = useRef<SVGPathElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  /* ── Heavy aurora + particle background ── */
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
      // Deep black-green void
      ctx.fillStyle = "#020805";
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      // Stronger multi-layer aurora
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

      // Intense center bloom
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

      // Particles
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

      // Network lines
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

  /* ── GSAP: sudden heavy logo impact ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(rootRef.current, {
            opacity: 0,
            scale: 1.05,
            filter: "blur(14px)",
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              setDone(true);
              onComplete();
            },
          });
        },
      });

      // Background already visible — brief black beat then LOGO IMPACT
      tl.set(logoRef.current, { opacity: 0, scale: 2.5, rotateY: 0, filter: "blur(20px)" });
      tl.set(flashRef.current, { opacity: 0 });
      tl.set(ringRef.current, { scale: 0.3, opacity: 0 });

      // ── SUDDEN LOGO SLAM ──
      tl.to({}, { duration: 0.25 }); // tiny pause

      // White/green flash
      tl.to(
        flashRef.current,
        { opacity: 0.7, duration: 0.06, ease: "power4.out" },
        0.25
      );
      tl.to(
        flashRef.current,
        { opacity: 0, duration: 0.35, ease: "power2.out" },
        0.32
      );

      // Logo SMASHES in — big scale down, overshoot
      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 2.8,
          rotateY: -40,
          rotateX: 15,
          filter: "blur(24px)",
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.55,
          ease: "back.out(2.2)",
        },
        0.28
      );

      // Shockwave ring expands from logo
      tl.fromTo(
        ringRef.current,
        { scale: 0.4, opacity: 0.8 },
        { scale: 3.5, opacity: 0, duration: 0.7, ease: "power2.out" },
        0.32
      );

      // Logo punch pulse
      tl.to(
        logoImgRef.current,
        { scale: 1.12, duration: 0.12, ease: "power2.out" },
        0.55
      );
      tl.to(
        logoImgRef.current,
        { scale: 1, duration: 0.25, ease: "elastic.out(1, 0.4)" },
        0.67
      );

      // Glass panel rises
      tl.fromTo(
        glassRef.current,
        { opacity: 0, y: 30, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" },
        0.5
      );

      // Title snaps in
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 20, scale: 0.9, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.45,
          ease: "power3.out",
        },
        0.65
      );

      // Tagline
      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        0.85
      );

      // Graph draw
      if (graphRef.current) {
        const len = graphRef.current.getTotalLength();
        gsap.set(graphRef.current, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(
          graphRef.current,
          { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" },
          0.85
        );
      }
      tl.fromTo(
        graphAreaRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        1.15
      );

      // Progress bar
      tl.fromTo(
        barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.55, ease: "power2.inOut" },
        1.0
      );

      // Hold
      tl.to({}, { duration: 0.4 });
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "#020805" }}
    >
      {/* Heavy background */}
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
      <div
        ref={flashRef}
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(180,255,160,0.5) 0%, rgba(60,200,120,0.15) 40%, transparent 70%)",
          opacity: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo + shockwave ring */}
        <div className="relative mb-2 flex items-center justify-center">
          {/* Expanding ring on impact */}
          <div
            ref={ringRef}
            className="pointer-events-none absolute rounded-full"
            style={{
              width: 90,
              height: 90,
              border: "2px solid rgba(120,255,150,0.6)",
              boxShadow: "0 0 30px rgba(80,220,130,0.4)",
              opacity: 0,
            }}
          />

          <div
            ref={logoRef}
            className="relative"
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            {/* Intense glow */}
            <div
              className="absolute inset-0 scale-[2] rounded-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(80,230,130,0.5) 0%, rgba(40,180,100,0.15) 40%, transparent 70%)",
                filter: "blur(18px)",
              }}
            />
            <img
              ref={logoImgRef}
              src="/images/logo.jpeg"
              alt="Profit Curve"
              className="relative h-[80px] w-[80px] rounded-2xl object-cover sm:h-[90px] sm:w-[90px]"
              style={{
                boxShadow:
                  "0 0 40px rgba(80,230,130,0.45), 0 0 80px rgba(40,180,100,0.2), 0 12px 30px rgba(0,0,0,0.6)",
                border: "2.5px solid rgba(140,255,160,0.35)",
              }}
            />
          </div>
        </div>

        {/* Glass panel for text + graph */}
        <div
          ref={glassRef}
          className="mt-5 flex flex-col items-center px-10 py-8 text-center sm:px-14 sm:py-10"
          style={{
            background: "rgba(6, 16, 12, 0.6)",
            backdropFilter: "blur(28px) saturate(1.5)",
            WebkitBackdropFilter: "blur(28px) saturate(1.5)",
            borderRadius: "28px",
            border: "1px solid rgba(120, 255, 150, 0.12)",
            boxShadow:
              "0 0 60px rgba(40, 180, 100, 0.12), 0 20px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
            opacity: 0,
          }}
        >
          <h1
            ref={titleRef}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif",
              opacity: 0,
              background:
                "linear-gradient(135deg, oklch(0.72 0.18 155), oklch(0.88 0.1 145), oklch(0.62 0.16 160))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Profit Curve
          </h1>

          <p
            ref={tagRef}
            className="mt-2 text-sm tracking-[0.2em] text-white/40 sm:text-base"
            style={{ opacity: 0 }}
          >
            TURNING MEDIA INTO PROFIT
          </p>

          {/* Graph */}
          <div className="mt-7">
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
              <path
                ref={graphAreaRef}
                d="M0,48 C20,46 30,38 50,34 C70,30 85,22 105,16 C125,10 145,6 160,3 L160,56 L0,56 Z"
                fill="url(#gGrad)"
                style={{ opacity: 0 }}
              />
              <path
                ref={graphRef}
                d="M0,48 C20,46 30,38 50,34 C70,30 85,22 105,16 C125,10 145,6 160,3"
                stroke="oklch(0.75 0.17 155)"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle cx="160" cy="3" r="3.5" fill="oklch(0.8 0.18 155)">
                <animate attributeName="opacity" values="1;0.35;1" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <defs>
                <linearGradient id="gGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.65 0.18 155)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="oklch(0.65 0.18 155)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mt-6 h-[2px] w-36 overflow-hidden rounded-full bg-white/5 sm:w-44">
            <div
              ref={barRef}
              className="h-full origin-left rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.7 0.18 155), oklch(0.8 0.14 145), transparent)",
                transform: "scaleX(0)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
