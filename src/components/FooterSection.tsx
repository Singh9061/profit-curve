"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = ["AI Automation", "Web Development", "SEO", "Social Media Marketing"];
const companyLinks = ["About Us", "Our Process", "Case Studies", "Contact"];
const legalLinks = ["Privacy Policy", "Terms of Service"];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/30 pt-12 pb-8 sm:pt-20 sm:pb-10">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[300px] -right-[300px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)] sm:-top-[500px] sm:-right-[500px] sm:h-[1000px] sm:w-[1000px]"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/images/logo.jpeg" alt="Profit Curve Logo" className="h-8 w-8 rounded-lg object-cover sm:h-10 sm:w-10" />
            <h3 className="text-xl font-black text-foreground tracking-tight sm:text-2xl">Profit Curve</h3>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed sm:mt-6 sm:text-base">
            Empowering businesses with AI automation solutions that drive growth and efficiency.
          </p>
          <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            <li className="flex items-center gap-3 text-sm text-muted-foreground group sm:gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-10 sm:w-10">
                <Mail className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              </div>
              <span className="group-hover:text-foreground transition-colors text-xs sm:text-sm truncate">theprofitcurve@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground group sm:gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-10 sm:w-10">
                <Phone className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              </div>
              <span className="group-hover:text-foreground transition-colors text-xs sm:text-sm">+91 80051-50056</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground group sm:gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-10 sm:w-10">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
              </div>
              <span className="mt-1.5 group-hover:text-foreground transition-colors text-xs sm:mt-2 sm:text-sm">Patrakarpuram, Raebareli 229001</span>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-base font-bold text-foreground sm:text-lg">Services</h4>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#services" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-base font-bold text-foreground sm:text-lg">Company</h4>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {companyLinks.map((l) => (
              <li key={l}>
                <a href="#" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-base font-bold text-foreground sm:text-lg">Legal</h4>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {legalLinks.map((l) => (
              <li key={l}>
                <a href="#" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {l}
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
        className="mx-auto mt-12 max-w-7xl border-t border-border/50 px-4 pt-6 sm:mt-20 sm:px-6 sm:pt-8"
      >
        <p className="text-center text-xs font-medium tracking-wide text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} Profit Curve. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
