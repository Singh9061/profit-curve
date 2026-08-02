"use client"

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function Splash() {
  const router = useRouter()
  const timeoutRef = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const pointerStartX = useRef<number | null>(null)

  useEffect(() => {
    // Auto-enter after 2s (user requested faster auto-enter)
    timeoutRef.current = window.setTimeout(() => router.push('/'), 2000)
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [router])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
  }

  function handlePointerDown(e: React.PointerEvent) {
    pointerStartX.current = e.clientX
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const endX = e.changedTouches[0].clientX
    const startX = touchStartX.current ?? endX
    const dx = startX - endX
    // If user swipes left (dx > 50) or right (dx < -50), enter immediately
    if (dx > 50 || dx < -50) {
      router.push('/')
    } else {
      // if not a swipe, restart auto-enter faster
      timeoutRef.current = window.setTimeout(() => router.push('/'), 800)
    }
  }

  function handlePointerUp(e: React.PointerEvent) {
    const endX = e.clientX
    const startX = pointerStartX.current ?? endX
    const dx = startX - endX
    if (dx > 50 || dx < -50) {
      router.push('/')
    } else {
      timeoutRef.current = window.setTimeout(() => router.push('/'), 800)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      router.push('/')
    }
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-neutral-900 to-black text-white">
      {/* Animated background: layered SVG curves + floating particles */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#0ea5a4" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#0ea5f5" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          <g>
            <path d="M0,720 C360,600 540,900 900,740 C1200,610 1440,820 1440,820 L1440,900 L0,900 Z"
              fill="url(#g1)" opacity="0.98">
              <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,740 C360,600 540,900 900,740 C1200,610 1440,820 1440,820 L1440,900 L0,900 Z; M0,700 C360,780 540,620 900,760 C1200,880 1440,640 1440,640 L1440,900 L0,900 Z; M0,720 C360,650 540,880 900,730 C1200,600 1440,800 1440,800 L1440,900 L0,900 Z" />
            </path>

            <path d="M0,760 C320,680 480,840 820,700 C1140,560 1440,760 1440,760 L1440,900 L0,900 Z"
              fill="url(#g2)" opacity="0.95">
              <animate attributeName="d" dur="7s" repeatCount="indefinite" values="M0,760 C320,680 480,840 820,700 C1140,560 1440,760 1440,760 L1440,900 L0,900 Z; M0,720 C320,760 480,700 820,760 C1140,820 1440,700 1440,700 L1440,900 L0,900 Z; M0,740 C320,700 480,820 820,710 C1140,600 1440,760 1440,760 L1440,900 L0,900 Z" />
            </path>

            {/* Moving curve lines - multiple layers for heavy motion */}
            <path d="M0,520 C240,420 480,620 720,560 C960,500 1200,620 1440,560"
              fill="none" stroke="rgba(99,102,241,0.28)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)">
              <animate attributeName="stroke-dasharray" from="0,1200" to="1200,0" dur="4.2s" repeatCount="indefinite" />
            </path>
            <path d="M0,480 C200,380 520,640 760,580 C1000,520 1220,640 1440,580"
              fill="none" stroke="rgba(6,182,212,0.22)" strokeWidth="8" strokeLinecap="round" opacity="0.95" filter="url(#glow)">
              <animate attributeName="stroke-dashoffset" from="0" to="-1200" dur="3.8s" repeatCount="indefinite" />
            </path>

            {/* large profit-curve sweep with neon glow */}
            <path d="M-40,620 C160,300 420,520 720,420 C980,350 1200,520 1480,420"
              fill="none" stroke="#34d399" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.9" filter="url(#glow)">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="9s" values="0 0; -30 -8; 0 0" repeatCount="indefinite" />
            </path>
          </g>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* floating particles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float-slow absolute w-3 h-3 bg-emerald-400 rounded-full left-12 top-16 opacity-90 blur-sm" />
          <div className="animate-float absolute w-5 h-5 bg-sky-400 rounded-full left-1/4 top-1/3 opacity-90 blur-sm" />
          <div className="animate-float-fast absolute w-2 h-2 bg-purple-400 rounded-full left-3/4 top-1/4 opacity-80 blur-sm" />
          <div className="animate-float-slower absolute w-3 h-3 bg-emerald-300 rounded-full left-2/3 top-2/3 opacity-60 blur-sm" />
          <div className="animate-float absolute w-6 h-6 bg-emerald-500 rounded-full left-1/6 top-2/5 opacity-60 blur-md" />
          <div className="animate-float-fast absolute w-4 h-4 bg-sky-300 rounded-full left-5/6 top-1/6 opacity-70 blur-sm" />
          <div className="animate-float-slow absolute w-2 h-2 bg-purple-300 rounded-full left-1/2 top-4/5 opacity-50 blur-sm" />
        </div>
      </div>

      <div className="text-center px-6 z-10">
        <div className="mx-auto w-56 h-56 relative rounded-full overflow-hidden shadow-[0_40px_80px_rgba(2,6,23,0.6)]">
          <Image src="/images/logo.jpeg" alt="PROFIT CURVE logo" fill sizes="(max-width: 768px) 160px, 240px" style={{ objectFit: 'cover' }} />
        </div>

        <h1 className="mt-8 text-6xl sm:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 drop-shadow-[0_6px_30px_rgba(3,7,18,0.7)]">
          PROFIT CURVE
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          We help businesses accelerate growth with data-driven pricing and conversion improvements.
        </p>

        <p className="mt-6 text-sm text-slate-400">Entering… (swipe to enter faster)</p>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-26px) translateX(8px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 6.5s cubic-bezier(.3,.7,.4,1) infinite; }
        .animate-float-slow { animation: float-slow 11s cubic-bezier(.3,.7,.4,1) infinite; }
        .animate-float-fast { animation: float-fast 4.2s cubic-bezier(.3,.7,.4,1) infinite; }
        .animate-float-slower { animation: float-slow 14s cubic-bezier(.3,.7,.4,1) infinite; }

        /* Respect prefers-color-scheme for light/dark adjustments */
        @media (prefers-color-scheme: light) {
          :global(body) { background: linear-gradient(180deg,#f8fafc,#ffffff); color: #0f172a }
        }

        /* Logo kept static; heavy animation lives in page background */
        .logo-wrap { display: inline-block; }
        .logo-wrap :global(img) { transition: none; transform: none; }
      `}</style>
    </div>
  )
}
