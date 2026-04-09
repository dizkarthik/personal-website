import { notFound } from "next/navigation";

import { FooterCtaSection } from "@/components/sections/footer-cta-section";
import { Navbar } from "@/components/sections/navbar";
import { Container } from "@/components/ui/container";
import { HorizontalScrollGallery } from "@/components/ui/horizontal-scroll-gallery";
import { InteractiveBackground } from "@/components/ui/interactive-background";
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
  metrics: [
    {
      number: "+27%",
      title: "Week 1 Retention",
      subtitle: "Reduced early churn and improved user activation",
    },
    {
      number: "+34%",
      title: "Repeat trade rate",
      subtitle: "shows behavioral retention improvement",
    },
    {
      number: "+₹55 Cr",
      title: "Monthly trading volume",
      subtitle: "Revenue Boost",
    },
  ],
  strategicOutcome:
    "The project helped shift the early journey from a fragile first-use experience to a more confident and repeatable product loop.",
  myRole:
    "I led the product design effort end to end across problem framing, retention hypothesis building, UX direction, solution design, and final experience improvements.",
};

const assumptionCopy =
  "Our initial assumption was that RTP was weaker, meaning users were making a loss in their first few trades and not seeing enough proof of value early enough.";

const designPrinciples = [
  "Reduce cognitive load in the first session",
  "Make the first action obvious and confidence-building",
  "Build trust before asking users to commit",
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
    <div className={`overflow-hidden rounded-[20px] ${className}`}>
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
    subtitle?: string;
  };
}) {
  const isDown = metric.number.trim().startsWith("-");
  const directionLabel = isDown ? "decreased by" : "increased by";

  return (
    <div className="rounded-[16px] border border-[#f0dbb1] bg-white p-6">
      <div className="flex items-start gap-3">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <p className="text-[20px] font-medium leading-7 text-copy">
            {metric.title} {directionLabel}
          </p>
          <p className="text-[32px] font-semibold leading-9 text-moss">
            {metric.number}
          </p>
          {metric.subtitle ? (
            <p className="text-base leading-6 text-copy">
              {metric.subtitle}
            </p>
          ) : null}
        </div>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center text-moss ${
            isDown ? "rotate-90" : ""
          }`}
        >
          <img
            src="/assets/up-aarow.svg"
            alt=""
            className="h-12 w-12 object-contain"
            aria-hidden="true"
          />
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
  const designGallery = details.designGallery ?? [];
  const findings = details.findings.map((finding) => finding.title);
  const outcomeMetrics = [
    details.metrics[0],
    details.metrics[1],
    details.metrics[2],
  ].filter(Boolean);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-canvas">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />

        <article className="pb-10 pt-4 sm:pb-14 sm:pt-6">
          <Container className="max-w-[1040px] rounded-[20px] bg-[#FFFDF8] px-6 py-8 shadow-[0_24px_80px_rgba(33,35,41,0.06)] sm:px-10 sm:py-10">
            <header>
              <h1 className="font-serif text-[2rem] font-normal leading-tight text-ink">
                {pageTitle}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {study.categories.map((category, index) => (
                  <div key={category} className="flex items-center gap-3">
                    {index > 0 && (
                      <span className="block h-1 w-1 rounded-full bg-moss" />
                    )}
                    <p className="text-base font-medium leading-none text-moss">
                      {category}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-4 text-base leading-7 text-copy">
                {details.pageDescription.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </header>

            <div className="mt-8 h-[260px] overflow-hidden rounded-[24px] sm:h-[360px]">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8 flex flex-col gap-16">
              <SectionBlock title="Product Context">
                <Paragraphs text={details.context} />
              </SectionBlock>

              <SectionBlock title="The Problem Statement">
                <Paragraphs text={details.problemDescription} />
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

              <section className="rounded-[20px] border border-[#f0dbb1] bg-white px-8 py-6">
                <h2 className="text-[28px] font-semibold leading-tight text-ink">
                  Assumption
                </h2>
                <p className="mt-3 text-base leading-7 text-copy">
                  {assumptionCopy}
                </p>
              </section>

              <SectionBlock title="Validating the assumption through multiple lenses">
                <TextGrid items={details.problemMethods} />
              </SectionBlock>

              <SectionBlock title="Findings">
                <BulletList items={findings} className="gap-x-3 gap-y-3 sm:grid-cols-2" />
              </SectionBlock>

              <SectionBlock title="Design Principles">
                <div className="grid gap-5 md:grid-cols-3">
                  {designPrinciples.map((principle, index) => (
                    <div
                      key={principle}
                      className="rounded-[16px] border border-[#f0dbb1] bg-white px-5 py-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#e5f4a8] font-serif text-[20px] leading-6 text-moss">
                        {index + 1}
                      </div>
                      <p className="mt-3 text-base font-medium leading-6 text-ink">
                        {principle}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionBlock>

              <SectionBlock title="Final Solution">
                <p className="text-base leading-7 text-copy">
                  {details.finalSolution}
                </p>
                <div className="mt-3">
                  <SolutionGrid items={details.solutionItems} />
                </div>
              </SectionBlock>

              <div className="flex flex-col gap-1">
                {designGallery.length > 0 ? (
                  <HorizontalScrollGallery images={designGallery} />
                ) : null}

                <SectionBlock title="Outcome and Metrics">
                  <p className="mb-5 text-base leading-7 text-copy">
                    {details.closingLine}
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {outcomeMetrics.map((metric) => (
                      <OutcomeCard key={metric.title} metric={metric} />
                    ))}
                  </div>
                </SectionBlock>
              </div>

              <SectionBlock title="Conclusion">
                <p className="text-base leading-7 text-copy">
                  By improving the early experience, we helped users move from confusion to confidence, driving stronger retention and better engagement. The solution was released alongside a broader UI refresh, but the retention gains came from focused product changes.
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
