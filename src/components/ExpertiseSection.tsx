"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";

const features = [
  "Custom AI solutions tailored to your needs",
  "24/7 automated systems working for you",
  "Seamless integration with existing tools",
  "Dedicated support and maintenance",
  "Scalable architecture for growth",
  "Data-driven decision making",
];

const team = [
  {
    name: "Vashishtha Yadav",
    role: "Founder-theraebarelian",
    email: "vashishthayadav1@gmail.com",
    image: "/images/cofounder.jpg",
  },
  {
    name: "Devesh Singh Chauhan",
    role: "Co-Founder",
    email: "deveshkv04@gmail.com",
    image: "/images/founder.jpg",
  },
];

export function ExpertiseSection() {
  return (
    <section id="about" className="bg-background py-24 relative overflow-hidden">
      {/* Background gradients */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Team Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.p 
             initial={{ opacity: 0, letterSpacing: "0em" }}
             whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
             transition={{ duration: 1 }}
             className="text-center text-sm font-extrabold uppercase text-primary"
          >
            Meet Our Team
          </motion.p>
          <h2 className="mt-4 text-center text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
            The People Behind Profit Curve
          </h2>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.3 }
              }
            }}
            className="mt-16 grid gap-10 sm:grid-cols-2 max-w-3xl mx-auto"
          >
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.8 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ scale: 1.05, y: -10, rotateZ: i % 2 === 0 ? 2 : -2 }}
                className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-b from-card to-background p-10 text-center shadow-xl transition-all hover:shadow-2xl hover:shadow-primary/20"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                />
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl transition-colors group-hover:border-primary/50"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-black text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-bold tracking-wide text-primary">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* About Content */}
        <div className="grid max-w-7xl gap-16 lg:grid-cols-2 items-center mt-32">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
            className="flex flex-col justify-center perspective-[1000px]"
          >
            <p className="text-sm font-extrabold uppercase tracking-widest text-primary">About Us</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Take Your Business to the Next Level
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We are a team of tech specialists, developers, and automation experts dedicated to helping businesses leverage the power of artificial intelligence. Our mission is to make advanced technology accessible and practical for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((f, index) => (
                <motion.div 
                  key={f} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 rounded-xl bg-card/50 p-4 border border-border/50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-10 grid grid-cols-2 gap-6"
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary">190+</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Projects</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary">160+</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Happy Clients</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
