"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 190, suffix: "+", label: "Projects Delivered" },
  { value: 160, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 99.9, suffix: "%", label: "System Uptime" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(stat.value, 2000, inView);
  const display = stat.value % 1 === 0 ? Math.round(count).toString() : count.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <p className="bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-4xl font-extrabold tabular-nums text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground sm:mt-3 sm:text-sm">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-card/30 py-20 sm:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:gap-12 sm:px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
