"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Mesh / Aurora blobs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] sm:h-[500px] sm:w-[500px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -25, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-20 bottom-0 h-[350px] w-[350px] rounded-full bg-[oklch(0.55_0.15_145)]/8 blur-[90px] sm:h-[450px] sm:w-[450px]"
      />
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -20, 35, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute left-1/3 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[80px] sm:h-[300px] sm:w-[300px]"
      />
    </div>
  );
}
