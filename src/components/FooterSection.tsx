"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Social Media Handling", href: "#services" },
  { label: "SEO Optimisation", href: "#services" },
  { label: "Google Business Listing", href: "#services" },
  { label: "Web Development", href: "#services" },
  { label: "App Development", href: "#services" },
  { label: "Website Maintenance", href: "#services" },
];
const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Process", href: "/our-process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "#contact" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40 pt-0 pb-8 sm:pb-10">
      {/* Animated wave */}
      <div className="relative h-20 w-full overflow-hidden sm:h-28">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <motion.path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="oklch(0.13 0.03 155)"
            initial={{ d: "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
                "M0,40 C240,0 480,100 720,40 C960,0 1200,100 1440,40 L1440,120 L0,120 Z",
                "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,80 C240,40 480,100 720,80 C960,40 1200,100 1440,80 L1440,120 L0,120 Z"
            fill="oklch(0.15 0.035 155 / 0.6)"
            animate={{
              d: [
                "M0,80 C240,40 480,100 720,80 C960,40 1200,100 1440,80 L1440,120 L0,120 Z",
                "M0,70 C240,110 480,30 720,70 C960,110 1200,30 1440,70 L1440,120 L0,120 Z",
                "M0,80 C240,40 480,100 720,80 C960,40 1200,100 1440,80 L1440,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Soft glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Profit Curve Logo"
              className="h-8 w-8 rounded-lg object-cover sm:h-10 sm:w-10"
            />
            <h3 className="text-xl font-black tracking-tight text-foreground sm:text-2xl">
              Profit Curve
            </h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
            Empowering businesses with digital solutions that drive growth and efficiency.
          </p>
          <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            <li className="group flex items-center gap-3 text-sm text-muted-foreground sm:gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-10 sm:w-10">
                <Mail className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              </div>
              <span className="truncate text-xs transition-colors group-hover:text-foreground sm:text-sm">
                theprofitcurve@gmail.com
              </span>
            </li>
            <li className="group flex items-center gap-3 text-sm text-muted-foreground sm:gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-10 sm:w-10">
                <Phone className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              </div>
              <span className="text-xs transition-colors group-hover:text-foreground sm:text-sm">
                +91 76518-76854
              </span>
            </li>
            <li className="group flex items-start gap-3 text-sm text-muted-foreground sm:gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-10 sm:w-10">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
              </div>
              <span className="mt-1.5 text-xs transition-colors group-hover:text-foreground sm:mt-2 sm:text-sm">
                Patrakarpuram, Raebareli 229001
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-base font-bold text-foreground sm:text-lg">Services</h4>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-base font-bold text-foreground sm:text-lg">Company</h4>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-base font-bold text-foreground sm:text-lg">Legal</h4>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mx-auto mt-12 max-w-7xl border-t border-border/50 px-4 pt-6 sm:mt-16 sm:px-6 sm:pt-8"
      >
        <p className="text-center text-xs font-medium tracking-wide text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} Profit Curve. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
