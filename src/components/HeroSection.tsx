import { motion } from "framer-motion";
import { ArrowRight, Phone, Bot } from "lucide-react";
import { Link } from "@tanstack/react-router";

function AnimatedWord({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, rotateY: 90, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0.7, 1],
            rotateY: [90, 0, 0, 0, 0],
            scale: [0.5, 1.1, 1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            delay: delayStart + i * 0.08,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}

const trustedCompanies = ["Kidikart", "New Naresh", "Saubhagyam", "Amritsari Haveli", "NextScale"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl" style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif", perspective: "800px" }}>
            <span className="bg-gradient-to-r from-primary via-[oklch(0.6_0.15_140)] to-[oklch(0.5_0.18_160)] bg-clip-text text-transparent">
              <AnimatedWord text="Turning" delayStart={0} />
            </span>
            {" "}
            <AnimatedWord text="Media" delayStart={0.6} />
            {" "}
            <AnimatedWord text="into" delayStart={1.0} />
            {" "}
            <AnimatedWord text="Profit" delayStart={1.3} />
          </h1>
          <h2 className="mt-4 text-2xl font-normal text-foreground md:text-3xl lg:text-4xl" style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}>
            <AnimatedWord text="Supercharge" delayStart={1.3} />
            {" "}
            <AnimatedWord text="Your" delayStart={2.2} />
            {" "}
            <AnimatedWord text="Business" delayStart={2.6} />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          We help businesses automate workflows, reduce costs, and scale faster with custom AI solutions that work 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/918726260303"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_30px_oklch(0.55_0.18_155/0.3)] transition-all hover:shadow-[0_0_50px_oklch(0.55_0.18_155/0.5)] hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            Chat on WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            <Bot className="h-5 w-5" />
            Book Appointment
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-sm text-muted-foreground">Trusted by innovative brands</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            {trustedCompanies.map((company) => (
              <span key={company} className="text-lg font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground/60">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
