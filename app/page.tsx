import { BuildProcessSection } from "@/components/sections/build-process-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { FooterCtaSection } from "@/components/sections/footer-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactNumbersSection } from "@/components/sections/impact-numbers-section";
import { Navbar } from "@/components/sections/navbar";
import { ToolsProcessSection } from "@/components/sections/tools-process-section";
import { InteractiveBackground } from "@/components/ui/interactive-background";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-canvas">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <CaseStudiesSection />
        <ImpactNumbersSection />
        <ToolsProcessSection />
        <BuildProcessSection />
        <FooterCtaSection />
      </div>
    </main>
  );
}
