"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-[100px] sm:h-[700px] sm:w-[700px] sm:blur-[150px]" 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
          className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card to-background p-6 text-center shadow-2xl sm:rounded-[2rem] sm:p-10 md:rounded-[3rem] md:p-16"
        >
          {/* Shimmer effect */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-0 -z-10 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-black tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Ready to Automate Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed font-medium sm:mt-6 sm:text-base lg:text-lg"
          >
            Book a free strategy session with our team. We&apos;ll analyze your workflows and show you exactly how AI can transform your operations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/918005150056"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_30px_oklch(0.55_0.18_155/0.3)] transition-all hover:shadow-[0_0_50px_oklch(0.55_0.18_155/0.5)] sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current transition-transform group-hover:scale-110 group-hover:-rotate-12 sm:h-6 sm:w-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+918005150056"
              className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 shadow-lg sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
            >
              <Phone className="h-4 w-4 text-primary transition-transform group-hover:rotate-12 sm:h-5 sm:w-5" />
              +91 80051-50056
            </motion.a>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-xs font-semibold tracking-wide text-primary uppercase sm:mt-8 sm:text-sm"
          >
            No commitment required. 100% free consultation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
