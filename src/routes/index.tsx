import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Profit Curve | AI Automation Agency - Grow Your Business with AI" },
      { name: "description", content: "Supercharge your business with Profit Curve. We help businesses automate workflows, reduce costs, and scale faster with custom AI solutions that work 24/7." },
      { property: "og:title", content: "Profit Curve | AI Automation Agency - Grow Your Business with AI" },
      { property: "og:description", content: "We help businesses automate workflows, reduce costs, and scale faster with custom AI solutions." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ExpertiseSection />
      <HowItWorksSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
