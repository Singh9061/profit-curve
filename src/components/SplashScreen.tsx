"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Minimal green loading ring animation (inline JSON — no external dependency on CDN)
const loadingAnimation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  nm: "Loading",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ring",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 90, s: [360] },
          ],
        },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [80, 80] },
            },
            {
              ty: "st",
              c: { a: 0, k: [0.2, 0.85, 0.45, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 6 },
              lc: 2,
              lj: 1,
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 60 } },
                { n: "g", nm: "gap", v: { a: 0, k: 40 } },
              ],
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: "Ring Group",
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
      bm: 0,
    },
  ],
};

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1400);

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
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Soft glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[70px]" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4"
            >
              <img
                src="/images/logo.jpeg"
                alt="Profit Curve"
                className="h-14 w-14 rounded-xl object-cover shadow-lg ring-2 ring-primary/30 sm:h-16 sm:w-16"
              />
            </motion.div>

            {/* Brand */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}
            >
              <span className="bg-gradient-to-r from-primary via-[oklch(0.65_0.16_145)] to-[oklch(0.55_0.18_160)] bg-clip-text text-transparent">
                Profit Curve
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-1.5 text-sm text-muted-foreground"
            >
              Turning Media Into Profit
            </motion.p>

            {/* Lottie loader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-6 h-16 w-16 sm:h-20 sm:w-20"
            >
              <Lottie
                animationData={loadingAnimation}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
