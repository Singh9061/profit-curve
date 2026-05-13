"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";

const features = [
  "Custom solutions tailored to your needs",
  "24/7 automated systems working for you",
  "Seamless integration with existing tools",
  "Dedicated support and maintenance",
  "Scalable architecture for growth",
  "Data-driven decision making",
];

const team = [
  {
    name: "Vashishtha Yadav",
    role: "Founder",
    email: "vashishthayadav1@gmail.com",
    instagram: "https://www.instagram.com/shiv_vashishtha_?igsh=MWd5anlodmxyYnh6NA==",
    image: "/images/cofounder.jpg",
  },
  {
    name: "Devesh Singh Chauhan",
    role: "Co-Founder",
    email: "deveshkv04@gmail.com",
    instagram: "https://www.instagram.com/devx.esh?igsh=c2d3OGJwMjVyenBu",
    image: "/images/founder.jpg",
  },
];

export function ExpertiseSection() {
  return (
    <section id="about" className="bg-background py-16 relative overflow-hidden sm:py-24">
      {/* Background gradients */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 relative z-10 sm:px-6">
        {/* Team Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
            className="mt-8 grid gap-6 max-w-3xl mx-auto sm:mt-16 sm:grid-cols-2 sm:gap-10"
          >
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.8 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ scale: 1.05, y: -10, rotateZ: i % 2 === 0 ? 2 : -2 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-background p-6 text-center shadow-xl transition-all hover:shadow-2xl hover:shadow-primary/20 sm:rounded-[2rem] sm:p-10"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                />
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl transition-colors group-hover:border-primary/50 sm:h-36 sm:w-36 md:h-44 md:w-44"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                  <h3 className="mt-4 text-lg font-black text-foreground sm:mt-6 sm:text-2xl">{member.name}</h3>
                  <p className="mt-1 text-xs font-bold tracking-wide text-primary sm:text-sm">{member.role}</p>
                  <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:mt-4 sm:flex-row">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
                    >
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="truncate max-w-[140px] sm:max-w-none">{member.email}</span>
                    </a>
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-foreground/10 px-3 py-1.5 text-[10px] font-semibold text-foreground transition-all hover:bg-foreground hover:text-background sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* About Content */}
        <div className="grid max-w-7xl gap-8 items-center mt-16 sm:mt-24 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary sm:text-sm">About Us</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground text-balance sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Take Your Business to the Next Level
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed sm:mt-6 sm:text-base lg:text-lg">
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
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {features.map((f, index) => (
                <motion.div 
                  key={f} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-2 rounded-lg bg-card/50 p-3 border border-border/50 backdrop-blur-sm sm:gap-3 sm:rounded-xl sm:p-4"
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
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 text-center shadow-lg sm:rounded-2xl sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary sm:text-4xl md:text-5xl">190+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:mt-2 sm:text-sm">Projects</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 text-center shadow-lg sm:rounded-2xl sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary sm:text-4xl md:text-5xl">160+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:mt-2 sm:text-sm">Happy Clients</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
