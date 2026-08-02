"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/40 p-1.5"
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], height: ["30%", "60%", "30%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 rounded-full bg-primary"
        />
      </motion.div>
    </motion.div>
  );
}
