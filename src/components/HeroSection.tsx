"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NetworkBackground } from "./NetworkBackground";

function AnimatedWord({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, rotateY: 90, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0.7, 1],
            rotateY: [90, 0, 0, 0, 0],
            scale: [0.5, 1.1, 1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            delay: delayStart + i * 0.08,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}

const trustedCompanies = ["Kidikart", "New Naresh", "Saubhagyam", "Amritsari Haveli", "NextScale"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Deep green base matching the reference image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 30%, oklch(0.22 0.08 155 / 0.5) 0%, transparent 55%), linear-gradient(160deg, oklch(0.11 0.04 155) 0%, oklch(0.08 0.03 160) 50%, oklch(0.07 0.025 150) 100%)",
        }}
      />

      {/* Animated network particles (exact style of the image you shared) */}
      <NetworkBackground />

      {/* Soft vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, oklch(0.06 0.02 155 / 0.7) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif",
              perspective: "800px",
            }}
          >
            <span className="bg-gradient-to-r from-primary via-[oklch(0.65_0.16_145)] to-[oklch(0.55_0.18_160)] bg-clip-text text-transparent">
              <AnimatedWord text="Turning" delayStart={0} />
            </span>{" "}
            <AnimatedWord text="Media" delayStart={0.6} />{" "}
            <AnimatedWord text="into" delayStart={1.0} />{" "}
            <AnimatedWord text="Profit" delayStart={1.3} />
          </h1>
          <h2
            className="mt-3 text-xl font-normal text-foreground sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}
          >
            <AnimatedWord text="Supercharge" delayStart={1.3} />{" "}
            <AnimatedWord text="Your" delayStart={2.2} />{" "}
            <AnimatedWord text="Business" delayStart={2.6} />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl px-2 text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl"
        >
          We help businesses automate workflows, reduce costs, and scale faster with custom
          solutions that work 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href="https://wa.me/918726260303"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_oklch(0.55_0.18_155/0.4)] transition-all hover:scale-105 hover:shadow-[0_0_50px_oklch(0.55_0.18_155/0.6)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Book Appointment
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 sm:mt-16"
        >
          <p className="text-xs text-muted-foreground sm:text-sm">Trusted by innovative brands</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:mt-6 sm:gap-8">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="text-sm font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground/60 sm:text-lg"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
