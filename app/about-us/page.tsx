"use client";

import { PageTransition } from "@/components/PageTransition";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
          <AuroraBackground />
          <section className="relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <div className="rounded-[2rem] border border-border/60 bg-card/80 p-8 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-10">
              <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">About Us</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Profit Curve is a growth-focused digital agency helping businesses in Raebareli and
                beyond scale with intelligent systems, digital marketing, and performance-driven web
                experiences.
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="text-xl font-bold text-foreground">What We Do</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    We build automated workflows, modern websites, and marketing campaigns that turn
                    visitors into leads and help business owners work less while growing more.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Why Choose Us</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Our team combines technical expertise with local market knowledge to deliver
                    practical solutions, fast execution, and measurable results.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <FooterSection />
    </>
  );
}
