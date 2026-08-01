"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { TeamCarousel } from "./TeamCarousel";

const features = [
  "Custom solutions tailored to your needs",
  "24/7 automated systems working for you",
  "Seamless integration with existing tools",
  "Dedicated support and maintenance",
  "Scalable architecture for growth",
  "Data-driven decision making",
];

export function ExpertiseSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-16 sm:py-24">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Team 3D Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1 }}
            className="text-center text-xs font-extrabold uppercase text-primary sm:text-sm"
          >
            Meet Our Team
          </motion.p>
          <h2 className="mt-3 text-center text-2xl font-extrabold leading-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            The People Behind Profit Curve
          </h2>

          <div className="mt-8 sm:mt-14">
            <TeamCarousel />
          </div>
        </motion.div>

        {/* About Content */}
        <div className="mt-16 grid max-w-7xl items-center gap-8 sm:mt-24 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary sm:text-sm">
              About Us
            </p>
            <h2 className="mt-3 text-balance text-2xl font-extrabold leading-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Take Your Business to the Next Level
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base lg:text-lg">
              We are a team of tech specialists, developers, and automation experts dedicated to
              helping businesses leverage the power of artificial intelligence. Our mission is to
              make advanced technology accessible and practical for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {features.map((f, index) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 p-3 backdrop-blur-sm sm:gap-3 sm:rounded-xl sm:p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">{f}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 text-center shadow-lg sm:rounded-2xl sm:p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl">
                  190+
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:mt-2 sm:text-sm">
                  Projects
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 text-center shadow-lg sm:rounded-2xl sm:p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl">
                  160+
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:mt-2 sm:text-sm">
                  Happy Clients
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
