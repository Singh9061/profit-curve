"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  parallax?: boolean;
}

export function SectionReveal({
  children,
  className = "",
  id,
  fullHeight = false,
  parallax = false,
}: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [60, -60] : [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={parallax ? { y, opacity } : undefined}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${fullHeight ? "section-cinematic" : ""} ${className}`}
    >
      {children}
    </motion.section>
  );
}
