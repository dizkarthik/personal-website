import { BuildProcessSection } from "@/components/sections/build-process-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FooterCtaSection } from "@/components/sections/footer-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { SixerCaseStudySection } from "@/components/sections/sixer-case-study-section";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-canvas">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(69,114,14,0.10),transparent_0,transparent_38%),radial-gradient(circle_at_left_top,rgba(193,161,99,0.18),transparent_36%)]" />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <BuildProcessSection />
      <SixerCaseStudySection />
      <CredentialsSection />
      <FooterCtaSection />
    </main>
  );
}
