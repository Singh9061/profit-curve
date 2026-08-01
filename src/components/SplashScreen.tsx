"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Progress animation
    const duration = 2500; // 2.5 seconds
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsExiting(true);
        // Wait for exit animation then call onComplete
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.11 0.03 155) 0%, oklch(0.15 0.04 155) 40%, oklch(0.12 0.025 160) 100%)",
          }}
        >
          {/* Soft ambient orbs */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] sm:h-80 sm:w-80"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-primary/10 blur-[80px]"
            />
          </div>

          {/* Glass card container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center px-6 text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                type: "spring",
                stiffness: 120,
              }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl" />
              <img
                src="/images/logo.jpeg"
                alt="Profit Curve Logo"
                className="relative h-20 w-20 rounded-2xl object-cover shadow-2xl ring-2 ring-primary/40 sm:h-24 sm:w-24"
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif",
              }}
            >
              <span className="bg-gradient-to-r from-primary via-[oklch(0.65_0.16_145)] to-[oklch(0.55_0.18_160)] bg-clip-text text-transparent">
                Profit Curve
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-3 max-w-xs text-sm text-muted-foreground sm:text-base"
            >
              Turning Media Into Profit
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 w-48 sm:w-56"
            >
              <div className="h-1 overflow-hidden rounded-full bg-foreground/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.6_0.16_145)]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground/70">
                Loading experience...
              </p>
            </motion.div>

            {/* Animated dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 flex items-center gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute bottom-8 left-0 right-0 text-center"
          >
            <p className="text-xs text-muted-foreground/50">
              © 2026 Profit Curve · All rights reserved
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
