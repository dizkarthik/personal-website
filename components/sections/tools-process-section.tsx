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

const profileImage =
  "https://www.figma.com/api/mcp/asset/0042c21a-31fa-4099-b9c4-8a6b6b3ebb33";
const awardIcon =
  "https://www.figma.com/api/mcp/asset/a736592b-b186-4bf0-b5d8-4d5e93a8edaa";
const resumeUrl =
  "https://drive.google.com/file/d/18jIcINZE1Y5NgtuFuKycQwAzGhoYqaQE/view";

const skills = [
  "Vibe Coding",
  "Figma MCP",
  "Design to Code",
  "Product Thinking",
  "0 to 1 and Scale",
  "User Research",
  "Design Systems",
  "Collaboration",
];

const tools: Tool[] = [
  { name: "Figma", icon: "/assets/tool-logos/figma.png" },
  { name: "Illustrator", icon: "/assets/tool-logos/illustrator.png" },
  { name: "Lottie Files", icon: "/assets/tool-logos/lottie-files.png" },
  { name: "Webflow", icon: "/assets/tool-logos/webflow.png" },
  { name: "Posthog", icon: "/assets/tool-logos/posthog.png" },
  { name: "Mixpanel", icon: "/assets/tool-logos/mixpanel.png" },
  { name: "Notion", icon: "/assets/tool-logos/notion.png" },
  { name: "Codex", icon: "/assets/tool-logos/codex.png" },
];

const aboutStats: AboutStat[] = [
  {
    title: (
      <>
        B2B & B2C
        <br />
        Experience
      </>
    ),
    description: "Built products for both end users and business workflows",
  },
  {
    title: (
      <>
        <span className="whitespace-nowrap font-sans text-base font-normal leading-8">
          Founding Designer to
        </span>
        <br />
        Head Of Design
      </>
    ),
    description: "Built and scaled the design function from scratch",
  },
  {
    title: (
      <>
        <span className="font-sans text-xl font-normal leading-8">0-5M+ Users</span>
        <br />
        <span className="whitespace-nowrap">Scaled to Millions</span>
      </>
    ),
    description: "Built high-growth products at scale",
  },
  {
    title: (
      <>
        <span className="whitespace-nowrap">Product, Design &</span>
        <br />
        Growth
      </>
    ),
    description: "Worked across product, marketing, and ecosystem touchpoints",
  },
];

function SkillTickerItems() {
  return (
    <>
      {skills.map((skill) => (
        <span key={skill} className="inline-flex items-center gap-3">
          <span>{skill}</span>
          <span className="h-1 w-1 rounded-full bg-moss" />
        </span>
      ))}
    </>
  );
}

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
          <div className="grid gap-5 lg:grid-cols-[200px_minmax(0,680px)_200px]">
            <figure className="overflow-hidden rounded-[20px] border border-white/45 bg-card/65 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
              <div className="h-[160px] overflow-hidden sm:h-[204px]">
                <img
                  src={profileImage}
                  alt="Karthik M"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="bg-white/60 px-4 py-4 text-center text-base font-medium leading-none text-moss backdrop-blur-xl">
                Karthik M
              </figcaption>
            </figure>

            <div className="flex min-h-[240px] flex-col justify-start rounded-[16px] border border-white/45 bg-card/65 px-7 py-8 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
              <div>
                <h2 className="font-serif text-[1.625rem] font-normal leading-none text-ink">
                  About Me
                </h2>
                <p className="mt-4 text-base leading-6 text-copy">
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

            <div className="flex min-h-[240px] flex-col justify-start rounded-[20px] border border-white/45 bg-card/65 px-6 pb-8 pt-6 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
              <img
                src={awardIcon}
                alt=""
                className="mb-4 h-12 w-12 object-contain"
                aria-hidden="true"
              />
              <h3 className="font-serif text-[1.45rem] font-normal leading-7 text-ink">
                Adobe Award
                <br />
                Winner
              </h3>
              <p className="mt-4 text-base leading-6 text-copy">
                Best Portfolio Award 2017
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat, index) => (
              <article
                key={index}
                className="min-h-[204px] rounded-[16px] border border-white/45 bg-card/65 px-8 py-7 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl"
              >
                <h3 className="font-serif text-[1.45rem] font-normal leading-7 text-ink">
                  {stat.title}
                </h3>
                <p className="mt-4 text-base leading-6 text-copy">
                  {stat.description}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <TickerRow direction="left-to-right">
              <SkillTickerItems />
            </TickerRow>

            <TickerRow direction="right-to-left">
              <ToolTickerItems />
            </TickerRow>
          </div>
        </div>
      </Container>
    </section>
  );
}
