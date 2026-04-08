import { notFound } from "next/navigation";

import { FooterCtaSection } from "@/components/sections/footer-cta-section";
import { Navbar } from "@/components/sections/navbar";
import { Container } from "@/components/ui/container";
import { InteractiveBackground } from "@/components/ui/interactive-background";
import { StickyQuickLinks } from "@/components/ui/sticky-quick-links";
import { caseStudies } from "@/lib/site-data";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const problemPoints = [
  {
    title: "Unclear value moment",
    body:
      "Users were entering the product without enough context to understand what action mattered first.",
  },
  {
    title: "Fragmented guidance",
    body:
      "Key onboarding prompts lived in different places, creating friction between intent and action.",
  },
  {
    title: "Low confidence",
    body:
      "The interface needed stronger cues to help users trust the flow and keep moving.",
  },
  {
    title: "Weak measurement loop",
    body:
      "The team needed cleaner checkpoints to connect design decisions to product outcomes.",
  },
];

const conclusionMetrics = [
  {
    number: "58%",
    title: "Activation Lift",
    description: "More users reached the first meaningful product action.",
  },
  {
    number: "+27%",
    title: "Week-1 Retention",
    description: "The redesigned flow improved early retention signals.",
  },
  {
    number: "4",
    title: "Reusable Patterns",
    description: "Core onboarding patterns were turned into scalable product blocks.",
  },
  {
    number: "2x",
    title: "Faster Iteration",
    description: "The team could test and refine onboarding decisions faster.",
  },
];

const fallbackDetails = {
  pageTitle: "",
  pageDescription:
    "This case study captures the product context, decisions, interface exploration, and outcome structure behind the redesign.",
  context:
    "The onboarding experience had to create a faster bridge between user intent and the first meaningful action. We used product signals, friction points, and user behavior to identify where the experience needed to become clearer and more confident.",
  problemDescription:
    "Users were seeing value too late in the journey. The team needed a clearer product entry path, stronger guidance, and a repeatable way to measure whether onboarding changes were moving retention.",
  problemAreas: [
    "Users entered the app with intent, but did not fully understand how the product worked.",
    "The first action flow created friction before users built confidence.",
    "Wallet movement and returns were not always easy to understand in the first few sessions.",
    "Many users still had enough balance to continue, but did not find a compelling reason to come back.",
  ],
  problemClosing:
    "This weak first-week experience directly affected retention, repeat behavior, and long-term product value.",
  keyIssues: problemPoints,
  problemMethods: [
    {
      title: "Quantitative data",
      body:
        "Users were signing up but not reaching the core value of the product. Early drop-offs were impacting both retention and long term engagement.",
    },
    {
      title: "Customer support call/chat data",
      body:
        "Support conversations helped identify the moments where users were confused, blocked, or unsure about what to do next.",
    },
    {
      title: "User calling",
      body:
        "Direct user conversations helped clarify what people expected from onboarding and where the current journey felt unclear.",
    },
    {
      title: "Unclear value moment",
      body:
        "Users did not quickly understand what the product could do for them or why the first action mattered.",
    },
  ],
  findings: problemPoints,
  productGoal:
    "The goal was to simplify the entry journey without flattening the product value. Every screen had to reduce uncertainty and make the next action feel obvious.",
  goalItems: [
    {
      title: "Improve first-week activation by making the next step obvious.",
      body:
        "The flow needed to make the first key action easier to understand, easier to complete, and easier to measure.",
    },
    {
      title: "Reduce onboarding confusion across critical product entry points.",
      body:
        "The initial journey needed fewer decision points, clearer prompts, and stronger guidance across key touchpoints.",
    },
    {
      title: "Create a repeatable flow that can scale across future journeys.",
      body:
        "Retention work needed to connect onboarding clarity with measurable activation and engagement signals.",
    },
    {
      title: "Tie the experience to retention, revenue, and usage signals.",
      body:
        "The product direction needed to support both user confidence and commercial outcomes.",
    },
  ],
  finalSolution:
    "The final onboarding experience focused on guiding users step by step toward their first meaningful outcome.",
  solutionItems: [
    {
      title: "Clear value communication in the first interaction",
      body:
        "The experience clarified what users could do next and why the first action mattered.",
    },
    {
      title: "Simplified flow with fewer decision points",
      body:
        "The initial path reduced friction and helped users move faster into action.",
    },
    {
      title: "Progressive disclosure instead of overwhelming screens",
      body:
        "Information was layered to keep the journey understandable without hiding critical context.",
    },
    {
      title: "Stronger alignment between user intent and product actions",
      body:
        "The product journey tied user intent more directly to the next meaningful step.",
    },
  ],
  finalSolutionClosing:
    "This helped users reach value faster and reduced drop-offs significantly.",
  solutionExplorations:
    "We explored multiple onboarding directions to understand how users interacted with different flows. Each iteration focused on reducing friction, improving clarity, and guiding users toward meaningful actions.",
  closingLine:
    "The final direction brought the onboarding story, product actions, and measurement loop into one clearer system.",
  metrics: conclusionMetrics,
  strategicOutcome:
    "The project helped shift the early journey from a fragile first-use experience to a more confident and repeatable product loop.",
  myRole:
    "I led the product design effort end to end across problem framing, retention hypothesis building, UX direction, solution design, and final experience improvements.",
};

const sectionTabs = [
  { label: "Context", href: "#context" },
  { label: "The Problem", href: "#the-problem" },
  { label: "Direction", href: "#direction" },
  { label: "Product Goal", href: "#product-goal" },
  { label: "KPI", href: "#outcome" },
  { label: "Process", href: "#process" },
  { label: "Solution", href: "#solution" },
  { label: "Outcome", href: "#outcome" },
];

function SectionBlock({
  id,
  title,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <h2 className="text-[28px] font-semibold leading-tight text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Paragraphs({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-4 text-base leading-7 text-copy">
      {text.split("\n\n").map((paragraph) => (
        <p
          key={paragraph}
          className={
            paragraph.endsWith("became:") ? "font-semibold text-ink" : undefined
          }
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-1 text-base leading-7 text-copy">
      <span className="relative h-7 w-6 shrink-0">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-moss" />
      </span>
      <span className="min-w-0 flex-1">{children}</span>
    </li>
  );
}

function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <BulletItem key={item}>{item}</BulletItem>
      ))}
    </ul>
  );
}

function MediaPanel({
  src,
  alt,
  className = "h-[320px]",
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] border-[5px] border-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] ${className}`}
    >
      {src ? (
        <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
      ) : null}
    </div>
  );
}

function TextGrid({
  items,
}: {
  items: Array<{
    title: string;
    body: string;
  }>;
}) {
  return (
    <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title}>
          <h3 className="text-[20px] font-semibold leading-7 text-ink">
            {item.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-copy">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

function SolutionGrid({
  items,
}: {
  items: Array<{
    title: string;
    body: string;
  }>;
}) {
  return (
    <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2">
      {items.map((item) => {
        const points = item.body
          .split(". ")
          .map((point) => point.replace(/\.$/, "").trim())
          .filter(Boolean);

        return (
          <div key={item.title}>
            <h3 className="text-[20px] font-semibold leading-7 text-ink">
              {item.title}
            </h3>
            <BulletList items={points} className="mt-3 gap-1" />
          </div>
        );
      })}
    </div>
  );
}

function OutcomeCard({
  metric,
}: {
  metric: {
    number: string;
    title: string;
    description?: string;
  };
}) {
  const isDown = metric.number.includes("13%") || metric.number.includes("4.8%");

  return (
    <div className="rounded-[16px] border border-line bg-white p-6">
      <div className="flex items-start gap-3">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <p className="text-[32px] font-semibold leading-9 text-ink">
            {metric.number}
          </p>
          <p className="text-[20px] font-medium leading-7 text-copy">
            {metric.title}
          </p>
        </div>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center text-moss ${
            isDown ? "rotate-90" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | Karthik`,
    description: study.overview,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const details = {
    ...fallbackDetails,
    ...study.details,
  };
  const pageTitle = details.pageTitle || study.title;
  const heroImage = details.heroImage ?? study.images[study.initialIndex ?? 0] ?? study.images[0];
  const visualImages = study.images.slice(0, 4);
  const findings = details.findings.slice(0, 6);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-canvas">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />

        <article className="pb-16 pt-8 sm:pb-24 sm:pt-12">
          <Container className="rounded-[20px] bg-[#FFFDF8] px-6 py-8 shadow-[0_24px_80px_rgba(33,35,41,0.06)] sm:px-10 sm:py-10">
            <header>
              <h1 className="font-serif text-[2rem] font-normal leading-tight text-ink">
                {pageTitle}
              </h1>
              <div className="mt-5 flex flex-col gap-4 text-base leading-7 text-copy">
                {details.pageDescription.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </header>

            <div className="mt-8 h-[260px] overflow-hidden sm:h-[360px]">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <StickyQuickLinks links={sectionTabs} />
            </div>

            <div className="mt-8 flex flex-col gap-16">
              <SectionBlock id="context" title="Product Context" className="scroll-mt-28" >
                <Paragraphs text={details.context} />
              </SectionBlock>

              <SectionBlock id="the-problem" title="The Problem Statement" className="scroll-mt-28">
                <Paragraphs text={details.problemDescription} />
                <BulletList items={details.problemAreas} className="mt-5 gap-3" />
                <p className="mt-4 text-base leading-7 text-copy">
                  {details.problemClosing}
                </p>
              </SectionBlock>

              <div className="grid gap-5 sm:grid-cols-2">
                <MediaPanel
                  src="/assets/data-1.png"
                  alt="Retention curve chart showing the steepest drop in the first week"
                  className="h-[240px] sm:h-[320px]"
                />
                <MediaPanel
                  src="/assets/data-2.png"
                  alt="Weekly cohort chart comparing retention across multiple IPL cohorts"
                  className="h-[240px] sm:h-[320px]"
                />
              </div>

              <SectionBlock id="direction" title="Problem Identification Method" className="scroll-mt-28">
                <TextGrid items={details.problemMethods} />
              </SectionBlock>

              <SectionBlock title="Findings">
                <BulletList
                  items={findings.map((finding) => finding.title)}
                  className="gap-x-3 gap-y-3 sm:grid-cols-2"
                />
              </SectionBlock>

              <SectionBlock id="product-goal" title="Product Goal" className="scroll-mt-28">
                <p className="text-base leading-7 text-copy">
                  {details.productGoal}
                </p>
                <div className="mt-6">
                  <TextGrid items={details.goalItems} />
                </div>
              </SectionBlock>

              <SectionBlock id="solution" title="Final Solution" className="scroll-mt-28">
                <p className="text-base leading-7 text-copy">
                  {details.finalSolution}
                </p>
                <h3 className="mt-6 text-[20px] font-semibold leading-7 text-ink">
                  Key Issues
                </h3>
                <div className="mt-3">
                  <SolutionGrid items={details.solutionItems} />
                </div>
                <div id="process" className="mt-6 scroll-mt-28 flex gap-5 overflow-hidden p-1">
                  <MediaPanel
                    src={visualImages[2]?.src}
                    alt={visualImages[2]?.alt}
                    className="h-[360px] min-w-[76%] sm:h-[600px] sm:min-w-[92%]"
                  />
                  <MediaPanel
                    src={visualImages[3]?.src}
                    alt={visualImages[3]?.alt}
                    className="h-[360px] min-w-[76%] sm:h-[600px] sm:min-w-[92%]"
                  />
                </div>
              </SectionBlock>

              <SectionBlock id="outcome" title="Outcome and Metrics" className="scroll-mt-28">
                <div className="grid gap-5 sm:grid-cols-2">
                  {details.metrics.map((metric) => (
                    <OutcomeCard key={metric.title} metric={metric} />
                  ))}
                </div>
                <p className="mt-6 text-base leading-7 text-copy">
                  {details.strategicOutcome}
                </p>
              </SectionBlock>

            </div>
          </Container>
        </article>

        <FooterCtaSection />
      </div>
    </main>
  );
}
