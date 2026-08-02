"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discovery",
    desc: "We start with a free consultation to understand your business, challenges, and goals.",
  },
  {
    icon: Lightbulb,
    num: "02",
    title: "Strategy",
    desc: "Our team designs a custom solution blueprint tailored specifically to your needs.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Execution",
    desc: "We build and test your digital systems with precision, care and modern tech.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Optimization",
    desc: "Launch, monitor performance, and continuously refine for better results.",
  },
  {
    icon: TrendingUp,
    num: "05",
    title: "Growth",
    desc: "Scale your business with ongoing support, automation and data-driven decisions.",
  },
];

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 100 }}
      className="relative flex gap-6 sm:gap-8"
    >
      {/* Left timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.2, type: "spring", stiffness: 200 }}
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card shadow-[0_0_20px_oklch(0.55_0.18_155/0.3)] sm:h-14 sm:w-14"
        >
          <step.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: index * 0.12 + 0.4 }}
            className="absolute top-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border sm:top-14"
            style={{ bottom: 0 }}
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className="mb-10 flex-1 rounded-2xl border border-border/60 bg-card/80 p-5 backdrop-blur-sm transition-shadow hover:shadow-[0_0_30px_oklch(0.55_0.18_155/0.12)] sm:mb-12 sm:rounded-3xl sm:p-7"
      >
        <div className="flex items-center gap-3">
          <span className="bg-gradient-to-br from-primary/40 to-primary/10 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
            {step.num}
          </span>
          <h3 className="text-lg font-bold text-foreground sm:text-xl">{step.title}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
          {step.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-card/40 py-16 sm:py-24">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary sm:text-sm">
            Our Process
          </p>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:mt-6 sm:text-base">
            A clear path from discovery to growth — designed to deliver results fast.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16">
          {steps.map((step, i) => (
            <TimelineStep
              key={step.num}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
