"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Owner, Kidikart",
    text: "Profit Curve transformed our online presence. Leads increased by 3x within 2 months. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Founder, Saubhagyam",
    text: "Their SEO and social media work is top-notch. Professional team and great results.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Director, Amritsari Haveli",
    text: "From website to Google Business — everything was handled perfectly. Our local visibility skyrocketed.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "CEO, NextScale",
    text: "Automation solutions saved us hours every week. The team truly understands business needs.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Owner, New Naresh",
    text: "Clean design, fast delivery, and continuous support. Profit Curve is our go-to digital partner.",
    rating: 5,
  },
  {
    name: "Sneha Joshi",
    role: "Marketing Head",
    text: "Best decision we made. Clear communication and measurable growth every month.",
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="mx-3 w-[300px] shrink-0 rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm sm:mx-4 sm:w-[340px] sm:rounded-3xl sm:p-7">
      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} className="text-primary text-sm">★</span>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  // Duplicate for seamless loop
  const row = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-extrabold uppercase tracking-widest text-primary sm:text-sm"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-2xl font-black text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl"
        >
          What Our Clients Say
        </motion.h2>
      </div>

      {/* Infinite marquee */}
      <div className="relative mt-10 sm:mt-14">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {row.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
