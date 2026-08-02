"use client";

import { PageTransition } from "@/components/PageTransition";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OurProcessPage() {
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
              <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Our Process</h1>
              <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
                We follow a simple, transparent process to build effective marketing and automation
                systems for your business.
              </p>
              <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
                <div>
                  <h2 className="text-xl font-bold text-foreground">1. Discovery</h2>
                  <p className="mt-3">
                    We start by understanding your business, goals, and current challenges to
                    recommend the right solution.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">2. Strategy</h2>
                  <p className="mt-3">
                    Our team creates a customised plan focused on automation, web growth, SEO, or
                    social media performance.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">3. Delivery</h2>
                  <p className="mt-3">
                    We implement the solution quickly and support you with ongoing updates until
                    your goals are met.
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
