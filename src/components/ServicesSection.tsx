"use client";

import { motion } from "framer-motion";
import { Share2, Search, MapPin, Code2, Smartphone, Globe } from "lucide-react";
import { AuroraBackground } from "./AuroraBackground";
import { MagneticButton } from "./MagneticButton";

const services = [
  {
    icon: Share2,
    title: "Social Media Handling",
    desc: "Grow your brand with engaging social media campaigns and audience management.",
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    desc: "Increase search visibility and organic traffic with proven SEO strategies.",
  },
  {
    icon: MapPin,
    title: "Google Business Listing",
    desc: "Maximize local discovery and customer trust with an optimized Google Business profile.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Build fast, responsive websites that convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Launch mobile experiences for Android and iOS that delight users.",
  },
  {
    icon: Globe,
    title: "Website Maintenance",
    desc: "Keep your site secure, updated and performing perfectly around the clock.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-16 sm:py-24">
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.3em]">
            Our Services
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Digital Growth Services for Your Business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base lg:text-lg">
            We deliver performance-first digital solutions that increase traffic, leads, and
            conversions.
          </p>
        </motion.div>

        {/* Horizontal scroll on desktop, grid on mobile */}
        <div className="mt-10 sm:mt-16 lg:mt-20">
          {/* Mobile: grid */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:hidden">
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>

          {/* Desktop: horizontal scroll */}
          <div className="hidden lg:block">
            <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {services.map((s, i) => (
                <div key={s.title} className="w-[340px] shrink-0 snap-start">
                  <ServiceCard service={s} index={i} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground/60">
              ← Scroll horizontally to explore all services →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
    >
      <MagneticButton strength={0.2} className="h-full w-full">
        <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_0_30px_oklch(0.55_0.18_155/0.12)] sm:rounded-3xl sm:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-3xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-primary/5 sm:rounded-3xl" />
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_oklch(0.55_0.18_155/0.35)] sm:rounded-3xl" />
          </div>

          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-14 sm:w-14 sm:rounded-2xl">
            <service.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
          </div>

          <h3 className="relative z-10 mt-5 text-lg font-bold text-foreground sm:mt-6 sm:text-xl">
            {service.title}
          </h3>
          <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
            {service.desc}
          </p>

          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 group-hover:w-full" />
        </div>
      </MagneticButton>
    </motion.div>
  );
}
