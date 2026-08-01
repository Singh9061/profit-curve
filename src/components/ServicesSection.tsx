"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Share2,
  Search,
  MapPin,
  Code2,
  Smartphone,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Content strategy, daily posting, community engagement and paid campaigns that grow your brand presence.",
    tag: "Marketing",
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    desc: "Technical SEO, keyword strategy and on-page optimisation to rank higher and drive organic traffic.",
    tag: "Growth",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Fully optimised local listing so nearby customers find you first — reviews, photos, posts and maps.",
    tag: "Local",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, mobile-first websites designed to convert visitors into leads with clean UI and strong performance.",
    tag: "Build",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Custom Android & iOS apps with smooth UX, reliable backend and features that keep users coming back.",
    tag: "Mobile",
  },
  {
    icon: Globe,
    title: "Website Maintenance",
    desc: "Security updates, speed monitoring, content changes and 24/7 uptime support for your live website.",
    tag: "Support",
  },
];

/* ─── 3D Tilt Card ────────────────────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card/70 p-6 backdrop-blur-md sm:rounded-3xl sm:p-8"
      >
        {/* Animated glow border on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-3xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 sm:rounded-3xl" />
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_oklch(0.55_0.18_155/0.4)] sm:rounded-3xl" />
        </div>

        {/* Floating orb behind icon */}
        <motion.div
          className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/10 blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
        />

        {/* Tag */}
        <div className="relative z-10 mb-5 flex items-center justify-between">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
            {service.tag}
          </span>
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border/40 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
            whileHover={{ scale: 1.15, rotate: 45 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>

        {/* Icon */}
        <motion.div
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 sm:h-16 sm:w-16"
          whileHover={{ scale: 1.1, rotate: -6 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
          <service.icon className="relative h-7 w-7 text-primary sm:h-8 sm:w-8" />
        </motion.div>

        {/* Text */}
        <h3
          className="relative z-10 mt-5 text-lg font-bold text-foreground sm:mt-6 sm:text-xl"
          style={{ transform: "translateZ(20px)" }}
        >
          {service.title}
        </h3>
        <p
          className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-[15px]"
          style={{ transform: "translateZ(10px)" }}
        >
          {service.desc}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary via-primary/60 to-transparent transition-all duration-500 group-hover:w-full" />
      </motion.div>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────────── */
export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-20 bottom-1/4 h-[350px] w-[350px] rounded-full bg-primary/6 blur-[90px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary sm:text-sm"
          >
            Our Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}
          >
            Everything your business
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-[oklch(0.7_0.16_145)] to-primary bg-clip-text text-transparent">
              {" "}needs to grow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:mt-6 sm:text-base lg:text-lg"
          >
            From local visibility to full-scale digital systems — one team, clear results.
          </motion.p>
        </div>

        {/* Cards grid — professional 3-col */}
        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
