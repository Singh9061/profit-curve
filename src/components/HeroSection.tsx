"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { NetworkBackground } from "./NetworkBackground";
import { ScrollIndicator } from "./ScrollIndicator";

/* ─── Letter-by-letter reveal ─────────────────────────────────────────────── */
function LetterReveal({
  text,
  delayStart = 0,
  className = "",
}: {
  text: string;
  delayStart?: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ opacity: 0, y: 50, rotateX: 90, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            delay: delayStart + i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "center bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Word-by-word reveal (for shorter lines) ─────────────────────────────── */
function WordReveal({
  text,
  delayStart = 0,
  className = "",
}: {
  text: string;
  delayStart?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: delayStart + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

const trustedCompanies = ["Kidikart", "New Naresh", "Saubhagyam", "Amritsari Haveli", "NextScale"];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ scale: bgScale }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 30%, oklch(0.22 0.08 155 / 0.5) 0%, transparent 55%), linear-gradient(160deg, oklch(0.11 0.04 155) 0%, oklch(0.08 0.03 160) 50%, oklch(0.07 0.025 150) 100%)",
          }}
        />
        <NetworkBackground />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, oklch(0.06 0.02 155 / 0.7) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6"
      >
        {/* ── Line 1: Turning Media into Profit ── */}
        <h1
          className="text-[2.4rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
          style={{
            fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif",
            perspective: "900px",
          }}
        >
          <LetterReveal
            text="Turning"
            delayStart={0.15}
            className="bg-gradient-to-r from-primary via-[oklch(0.65_0.16_145)] to-[oklch(0.55_0.18_160)] bg-clip-text text-transparent"
          />{" "}
          <LetterReveal text="Media" delayStart={0.45} className="text-foreground" />{" "}
          <LetterReveal text="into" delayStart={0.7} className="text-foreground" />{" "}
          <LetterReveal
            text="Profit"
            delayStart={0.9}
            className="bg-gradient-to-r from-primary via-[oklch(0.65_0.16_145)] to-[oklch(0.55_0.18_160)] bg-clip-text text-transparent"
          />
        </h1>

        {/* ── Line 2: Supercharge Your Business ── */}
        <h2
          className="mt-3 text-xl font-semibold tracking-tight text-foreground/90 sm:mt-5 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          style={{
            fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif",
            perspective: "900px",
          }}
        >
          <WordReveal text="Supercharge Your Business" delayStart={1.35} />
        </h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.85, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:mt-7 sm:text-lg md:text-xl"
        >
          Automate workflows. Reduce costs. Scale faster — with solutions that work 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-11 sm:flex-row sm:gap-5"
        >
          <a
            href="https://wa.me/918005150056"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-primary-foreground sm:w-auto"
          >
            <span className="absolute inset-0 rounded-full bg-primary transition-all duration-300 group-hover:scale-105" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_40px_oklch(0.55_0.18_155/0.45)] transition-all duration-300 group-hover:shadow-[0_0_70px_oklch(0.55_0.18_155/0.65)]" />
            <span className="relative z-10 flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-primary sm:w-auto"
          >
            <span className="absolute inset-0 rounded-full border border-primary/50 bg-primary/5 backdrop-blur-md transition-all duration-300 group-hover:border-primary group-hover:bg-primary/15" />
            <span className="relative z-10 flex items-center gap-2.5">
              Book Appointment
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {/* Trusted brands */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-14 sm:mt-18"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/50">
            Trusted by
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="text-sm font-medium text-muted-foreground/30 transition-colors hover:text-muted-foreground/60 sm:text-base"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
