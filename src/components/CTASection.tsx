"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden py-20 sm:min-h-[80svh] sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}
          >
            Ready to Automate
            <br />
            <span className="bg-gradient-to-r from-primary via-[oklch(0.65_0.16_145)] to-primary bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
            Book a free strategy session. We&apos;ll show you exactly how to grow faster with less
            effort.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">
            <a
              href="https://wa.me/918005150056"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.55_0.18_155/0.35)] transition-all hover:scale-105 hover:shadow-[0_0_60px_oklch(0.55_0.18_155/0.55)] sm:w-auto"
            >
              Chat on WhatsApp
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+918005150056"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-primary/40 bg-primary/5 px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary hover:bg-primary/10 sm:w-auto"
            >
              <Phone className="h-5 w-5 text-primary" />
              +91 80051-50056
            </a>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-primary/70">
            Free consultation · No commitment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
