"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Smartphone, Search, Megaphone, Globe } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Grow your business with targeted online marketing strategies."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Improve your website ranking and visibility on search engines."
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Build fast, modern, and scalable websites tailored to your business."
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Create powerful mobile apps for Android and iOS platforms."
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Automate repetitive tasks with intelligent AI solutions to boost productivity."
  },
  {
    icon: Globe,
    title: "Website Maintenance",
    desc: "Keep your website secure, updated, and running smoothly at all times."
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-16 relative overflow-hidden sm:py-24">
      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[100px]"
      />

      <div className="mx-auto max-w-7xl px-4 relative z-10 sm:px-6">
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
            What We Do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Services That Accelerate Your Growth
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base lg:text-lg"
          >
            We help businesses scale faster with innovative and future ready solutions.
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
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: 45, scale: 0.9 },
                show: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ 
                scale: 1.05,
                y: -15,
                rotateY: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:rounded-3xl sm:p-8"
            >
              <motion.div 
                className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20 sm:h-14 sm:w-14 sm:rounded-2xl">
                <s.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:rotate-12 sm:h-7 sm:w-7" />
              </div>
              <h3 className="relative z-10 mt-4 text-lg font-bold text-foreground sm:mt-6 sm:text-xl">{s.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-muted-foreground leading-relaxed sm:mt-3 sm:text-base">{s.desc}</p>
              
              {/* Highlight line on hover */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
