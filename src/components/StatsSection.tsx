import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 190, suffix: "+", label: "Projects Delivered" },
  { value: 160, suffix: "+", label: "Happy Clients" },
  { value: 5,   suffix: "+", label: "Years Experience" },
  { value: 99.9, suffix: "%", label: "System Uptime" },
];

// ─── Counting hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (target - startValue) * eased;
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

// ─── Individual stat card ─────────────────────────────────────────────────────
function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.value, 2000, inView);

  // Format the number nicely
  const display =
    stat.value % 1 === 0
      ? Math.round(count).toString()
      : count.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6, y: 40 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.15,
        type: "spring",
        stiffness: 180,
        damping: 14,
      }}
      whileHover={{ scale: 1.08, y: -8, transition: { type: "spring", stiffness: 300 } }}
      className="group relative rounded-2xl bg-background/50 p-6 text-center backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Animated number */}
      <p className="bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl tabular-nums">
        {display}
        {stat.suffix}
      </p>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
        className="mt-3 text-sm font-medium tracking-wide text-muted-foreground uppercase"
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/50 py-16">
      {/* Background animated conic gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,rgba(14,165,233,0.05)_100%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
