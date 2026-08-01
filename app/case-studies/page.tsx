"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";

const cases = [
  {
    title: "Local Business Growth",
    client: "Amritsari Haveli",
    category: "Google Business + Website",
    result: "3.2x more local leads",
    desc: "Delivered a conversion-focused website and fully optimised Google Business profile for better local discovery and walk-ins.",
    metrics: [
      { label: "Leads", value: "+220%" },
      { label: "Visibility", value: "+180%" },
      { label: "Reviews", value: "45+" },
    ],
    icon: Users,
    color: "from-emerald-500/20 to-transparent",
  },
  {
    title: "SEO & Organic Traffic",
    client: "Kidikart",
    category: "SEO Optimisation",
    result: "Top 3 rankings in 90 days",
    desc: "Implemented technical SEO, content strategy and on-page optimisation that pushed key keywords into the top 3 positions.",
    metrics: [
      { label: "Traffic", value: "+340%" },
      { label: "Keywords", value: "28" },
      { label: "Months", value: "3" },
    ],
    icon: Search,
    color: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Automation & Lead Capture",
    client: "NextScale",
    category: "Web + Automation",
    result: "70% less manual work",
    desc: "Built automated lead capture, WhatsApp notifications and CRM integration so the team never misses a potential customer.",
    metrics: [
      { label: "Time Saved", value: "70%" },
      { label: "Response", value: "<2min" },
      { label: "Conversion", value: "+45%" },
    ],
    icon: TrendingUp,
    color: "from-violet-500/20 to-transparent",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
          <AuroraBackground />

          <section className="relative z-10 border-b border-border/40 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
            <div className="mx-auto max-w-5xl">
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
              <div className="text-center">
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary sm:text-sm">
                  Case Studies
                </p>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Real Results for Real Businesses
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base">
                  Explore how we helped businesses improve visibility, automate processes, and grow
                  online.
                </p>
              </div>
            </div>
          </section>

          <section className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="grid gap-8 sm:gap-10">
              {cases.map((c, i) => (
                <motion.article
                  key={c.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_0_40px_oklch(0.55_0.18_155/0.12)] sm:rounded-3xl sm:p-8 md:p-10"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                          <c.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                            {c.category}
                          </p>
                          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                            {c.title}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-2 text-sm text-muted-foreground">
                        Client: <span className="font-medium text-foreground">{c.client}</span>
                      </p>

                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {c.desc}
                      </p>

                      <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                        <ArrowUpRight className="h-4 w-4" />
                        {c.result}
                      </p>
                    </div>

                    <div className="flex shrink-0 gap-3 sm:gap-4">
                      {c.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="flex min-w-[72px] flex-col items-center rounded-xl border border-border/50 bg-background/60 px-3 py-3 sm:min-w-[90px] sm:rounded-2xl sm:px-4 sm:py-4"
                        >
                          <span className="text-lg font-black text-primary sm:text-xl">
                            {m.value}
                          </span>
                          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center sm:mt-20"
            >
              <p className="text-sm text-muted-foreground sm:text-base">
                Want similar results for your business?
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_oklch(0.55_0.18_155/0.3)] transition-all hover:scale-105 hover:shadow-[0_0_50px_oklch(0.55_0.18_155/0.5)] sm:px-8 sm:py-3.5"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </section>
        </main>
      </PageTransition>
      <FooterSection />
    </>
  );
}
