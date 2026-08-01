"use client";

import { motion } from "framer-motion";
import { Share2, Search, MapPin, Code2, Smartphone, Globe } from "lucide-react";

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
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.3em]"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Digital Growth Services for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base lg:text-lg"
          >
            We deliver performance-first digital solutions that increase traffic, leads, and
            conversions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-7"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: 30, scale: 0.92 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
              whileHover={{
                y: -12,
                rotateY: 4,
                rotateX: -2,
                transition: { type: "spring", stiffness: 300, damping: 18 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition-colors sm:rounded-3xl sm:p-8"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              {/* Glowing border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-3xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 sm:rounded-3xl" />
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_oklch(0.55_0.18_155/0.4)] sm:rounded-3xl" />
              </div>

              {/* Animated icon container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20 sm:h-14 sm:w-14 sm:rounded-2xl"
              >
                <s.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
              </motion.div>

              <h3 className="relative z-10 mt-5 text-lg font-bold text-foreground sm:mt-6 sm:text-xl">
                {s.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                {s.desc}
              </p>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
