"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: PhoneCall, num: "01", title: "Discovery Call", desc: "We start with a free consultation to understand your business, challenges, and goals." },
  { icon: ClipboardList, num: "02", title: "Strategy & Planning", desc: "Our team designs a custom solution blueprint tailored specifically to your needs." },
  { icon: Code2, num: "03", title: "Development", desc: "We build and test your AI automation systems with precision and care." },
  { icon: Rocket, num: "04", title: "Launch & Support", desc: "Deploy your solution and enjoy ongoing support to ensure optimal performance." },
];

export function HowItWorksSection() {
  return (
    <section id="process" className="bg-card/50 py-16 relative overflow-hidden sm:py-24">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 relative z-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-extrabold uppercase tracking-widest text-primary sm:text-sm"
          >
            Our Process
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="mt-3 text-2xl font-black text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            How We Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:mt-6 sm:text-base lg:text-lg"
          >
            A streamlined process designed to deliver results quickly and efficiently.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 }
            }
          }}
          className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={{
                hidden: { opacity: 0, y: 100, rotateY: 90, scale: 0.8 },
                show: { opacity: 1, y: 0, rotateY: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -20,
                boxShadow: "0 25px 50px -12px rgba(var(--primary), 0.25)"
              }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 sm:rounded-3xl sm:p-8"
            >
              {/* Connection line between steps (hidden on mobile) */}
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[80%] w-full border-t-2 border-dashed border-border/50 z-0">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: i * 0.2 + 1 }}
                    className="absolute top-[-2px] left-0 border-t-2 border-primary" 
                  />
                </div>
              )}
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-3xl" />
              
              <div className="relative z-10">
                <motion.span 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="inline-block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-primary/5 sm:text-4xl lg:text-5xl"
                >
                  {step.num}
                </motion.span>
                <motion.div 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                  className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-primary/60 shadow-lg sm:mt-4 sm:h-14 sm:w-14 sm:rounded-2xl"
                >
                  <step.icon className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
                </motion.div>
                <h3 className="mt-5 text-lg font-bold text-foreground sm:mt-8 sm:text-xl lg:text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-medium sm:mt-3 sm:text-base">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
