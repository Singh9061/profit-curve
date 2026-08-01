"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { SplashScreen } from "@/components/SplashScreen";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <CustomCursor />

      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div
        className={`min-h-screen bg-background text-foreground transition-opacity duration-700 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ExpertiseSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}
