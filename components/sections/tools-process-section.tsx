import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type Tool = {
  name: string;
  icon: string;
};

type AboutStat = {
  title: ReactNode;
  description: string;
};

const profileImage = "/assets/about-me.png";
const resumeUrl =
  "https://drive.google.com/file/d/1snwjB-4Bh393C9JX--dR9_9SPuRbV7hm/view?usp=sharing";

const expertise = [
  "Product Strategy",
  "System Thinking",
  "User Behavior Analysis",
  "Retention & Activation",
  "Data-Driven Decisions",
  "Design Systems",
  "Interaction Design",
  "Visual Design",
  "UX Writing",
  "AI Product Design",
  "A/B Testing",
  "Design to Code",
  "Figma MCP",
  "And more",
];

const tools: Tool[] = [
  { name: "Figma", icon: "/assets/tool-logos/figma.png" },
  { name: "Illustrator", icon: "/assets/tool-logos/illustrator.png" },
  { name: "Lottie Files", icon: "/assets/tool-logos/lottie-files.png" },
  { name: "Webflow", icon: "/assets/tool-logos/webflow.png" },
  { name: "Posthog", icon: "/assets/tool-logos/posthog.png" },
  { name: "Mixpanel", icon: "/assets/tool-logos/mixpanel.png" },
  { name: "Supabase", icon: "/assets/tool-logos/supabase.png" },
  { name: "Notion", icon: "/assets/tool-logos/notion.png" },
  { name: "GitHub", icon: "/assets/tool-logos/github.png" },
  { name: "Vercel", icon: "/assets/tool-logos/vercel.png" },
  { name: "Replit", icon: "/assets/tool-logos/replit.png" },
  { name: "Lovable", icon: "/assets/tool-logos/lovable.png" },
  { name: "Codex", icon: "/assets/tool-logos/codex.png" },
];

const aboutStats: AboutStat[] = [
  {
    title: (
      <>
        <span className="whitespace-nowrap font-sans text-[20px] font-normal leading-8">
          Founding Designer to
        </span>
        <br />
        Head Of Design
      </>
    ),
    description: "Built and scaled the design function at Dream11",
  },
  {
    title: (
      <>
        Scaled to 5M+ Users
      </>
    ),
    description: "Helped grow Sixer to millions of users",
  },
  {
    title: (
      <>
        Product, Design & Growth
      </>
    ),
    description: "Owned key user and business touchpoints",
  },
  {
    title: (
      <>
        Craft & Product Thinking
      </>
    ),
    description: "Balancing visual quality with product impact",
  },
];

function ToolTickerItems() {
  return (
    <>
      {tools.map((tool) => (
        <span key={tool.name} className="inline-flex items-center gap-1">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden">
            <img
              src={tool.icon}
              alt=""
              className="max-h-8 max-w-8 object-contain"
              aria-hidden="true"
            />
          </span>
          <span>{tool.name}</span>
        </span>
      ))}
    </>
  );
}

function TickerRow({
  direction,
  children,
}: {
  direction: "left-to-right" | "right-to-left";
  children: ReactNode;
}) {
  return (
    <div className="my-stacks-fade flex h-12 w-full overflow-hidden border-y border-moss/20 bg-[linear-gradient(90deg,rgba(239,241,193,0)_0%,rgb(239,241,193)_10%,rgb(239,241,193)_90%,rgba(239,241,193,0)_100%)]">
      <div
        className={`flex min-w-max items-center gap-6 whitespace-nowrap px-16 text-base leading-none text-ink ${
          direction === "left-to-right"
            ? "my-stacks-ticker-ltr"
            : "my-stacks-ticker-rtl"
        }`}
        aria-hidden="true"
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}

export function ToolsProcessSection() {
  return (
    <section id="about" className="pb-16 pt-2 sm:pb-20 sm:pt-6">
      <Container>
        <div className="flex flex-col gap-6">
          <div className="grid gap-5 lg:grid-cols-[215px_minmax(0,1fr)]">
            <figure className="overflow-hidden rounded-[22px] border-4 border-white bg-card/65 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
              <div className="h-[258px] overflow-hidden rounded-[18px]">
                <img
                  src={profileImage}
                  alt="Karthik M"
                  className="block h-full w-full object-cover object-center"
                />
              </div>
            </figure>

            <div className="flex min-h-[258px] flex-col justify-center rounded-[16px] border border-white/45 bg-card/65 px-8 py-8 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl md:px-10">
              <div>
                <h2 className="font-serif text-[26px] font-normal leading-none text-ink">
                  About Me
                </h2>
                <p className="mt-4 max-w-[49rem] text-base leading-7 text-copy">
                  I&apos;m drawn to complex product problems that need to feel simple,
                  intuitive, and scalable. I care about bringing clarity to ambiguity,
                  working closely with teams, and building experiences that move both
                  users and the business forward.
                </p>
              </div>
              <Button
                href={resumeUrl}
                target="_blank"
                variant="secondary"
                className="mt-6 w-fit"
              >
                Download Resume
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat, index) => (
              <article
                key={index}
                className="min-h-[204px] rounded-[16px] border border-white/45 bg-card/65 px-8 py-7 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl"
              >
                <h3 className="font-serif text-[24px] font-normal leading-7 text-ink">
                  {stat.title}
                </h3>
                <p className="mt-4 text-base leading-[24px] text-copy">
                  {stat.description}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-start gap-3">
              <div className="px-2 pt-[6px]">
                <h3 className="font-serif text-[24px] font-normal leading-none text-ink">
                  Core Expertise
                </h3>
              </div>
              {expertise.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#e0d2b8] bg-[#fff8ec] px-4 pb-[10px] pt-[12px] text-base leading-none text-ink"
                >
                  {item}
                </span>
              ))}
            </div>

            <TickerRow direction="right-to-left">
              <ToolTickerItems />
            </TickerRow>
          </div>
        </div>
      </Container>
    </section>
  );
}
