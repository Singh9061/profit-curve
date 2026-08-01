"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Total ~1.2s then exit
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={onComplete}
    >
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Soft single glow — no heavy looping orbs */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Logo — quick scale in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5"
            >
              <img
                src="/images/logo.jpeg"
                alt="Profit Curve"
                className="h-16 w-16 rounded-2xl object-cover shadow-lg ring-2 ring-primary/30 sm:h-20 sm:w-20"
              />
            </motion.div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}
            >
              <span className="bg-gradient-to-r from-primary via-[oklch(0.65_0.16_145)] to-[oklch(0.55_0.18_160)] bg-clip-text text-transparent">
                Profit Curve
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="mt-2 text-sm text-muted-foreground"
            >
              Turning Media Into Profit
            </motion.p>

            {/* Slim progress bar — fills once, no dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 w-36 overflow-hidden rounded-full bg-foreground/10 sm:w-44"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, delay: 0.45, ease: "easeInOut" }}
                className="h-0.5 rounded-full bg-primary"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
