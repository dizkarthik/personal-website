import Link from "next/link";
import { notFound } from "next/navigation";

import { FooterCtaSection } from "@/components/sections/footer-cta-section";
import { Navbar } from "@/components/sections/navbar";
import { Container } from "@/components/ui/container";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InteractiveBackground } from "@/components/ui/interactive-background";
import { caseStudies } from "@/lib/site-data";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const projectGoals = [
  "Improve first-week activation by making the next step obvious.",
  "Reduce onboarding confusion across critical product entry points.",
  "Create a repeatable flow that can scale across future journeys.",
  "Tie the experience to retention, revenue, and usage signals.",
];

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

const galleryHeights = [
  "h-[420px]",
  "h-[360px]",
  "h-[520px]",
  "h-[420px]",
  "h-[460px]",
  "h-[520px]",
  "h-[380px]",
  "h-[420px]",
  "h-[560px]",
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
  problemDescription:
    "Users were seeing value too late in the journey. The team needed a clearer product entry path, stronger guidance, and a repeatable way to measure whether onboarding changes were moving retention.",
  keyIssues: problemPoints,
  productGoal:
    "The goal was to simplify the entry journey without flattening the product value. Every screen had to reduce uncertainty and make the next action feel obvious.",
  objectives: projectGoals,
  finalSolution:
    "The final onboarding experience focused on guiding users step by step toward their first meaningful outcome.",
  finalSolutionImprovements: [
    "Clear value communication in the first interaction.",
    "Simplified flow with fewer decision points.",
    "Progressive disclosure instead of overwhelming screens.",
    "Stronger alignment between user intent and product actions.",
  ],
  finalSolutionClosing:
    "This helped users reach value faster and reduced drop-offs significantly.",
  solutionExplorations:
    "The following screens show the shape of the exploration: entry points, guidance patterns, mobile states, review flows, and the operational views needed to support the product experience.",
  closingLine:
    "The final direction brought the onboarding story, product actions, and measurement loop into one clearer system.",
  metrics: conclusionMetrics,
};

function SectionDivider() {
  return (
    <div className="my-12 h-px w-full bg-[repeating-linear-gradient(135deg,#f0dbb1_0,#f0dbb1_1px,transparent_1px,transparent_8px)]" />
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

  const heroImage = study.images[study.initialIndex ?? 0] ?? study.images[0];
  const galleryImages = study.images.slice(0, galleryHeights.length);
  const details = {
    ...fallbackDetails,
    ...study.details,
  };
  const pageTitle = details.pageTitle || study.title;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-canvas">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />

        <article className="pb-16 pt-8 sm:pb-24 sm:pt-12">
          <Container className="rounded-[24px] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(33,35,41,0.06)] sm:px-10 sm:py-12">
            <Link
              href="/#works"
              className="inline-flex items-center gap-2 text-sm font-semibold leading-none text-moss transition-colors duration-200 hover:text-[#6aa931]"
            >
              <span aria-hidden="true">←</span>
              Back
            </Link>

            <header className="mt-8">
              <h1 className="font-serif text-[2rem] font-normal leading-[1.2] text-ink sm:text-[2.5rem]">
                {pageTitle}
              </h1>
              <div className="mt-4 flex flex-col gap-4 text-base leading-7 text-copy">
                {details.pageDescription.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </header>

            <ContainerScroll>
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="h-full w-full object-cover"
              />
            </ContainerScroll>

            <dl className="mt-8 grid gap-5 border-y border-line py-6 sm:grid-cols-4">
              {[
                ["Company", study.company],
                ["Role", study.role],
                ["Scope", study.scope],
                ["Period", study.period],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-moss">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-copy">{value}</dd>
                </div>
              ))}
            </dl>

            <section className="mt-10">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-ink">
                Context
              </h2>
              <p className="mt-4 text-base leading-8 text-copy">
                The onboarding experience had to create a faster bridge between user
                intent and the first meaningful action. We used product signals, friction
                points, and user behavior to identify where the experience needed to become
                clearer and more confident.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-ink">
                The Problem
              </h2>
              <p className="mt-4 text-base leading-8 text-copy">
                {details.problemDescription}
              </p>

              <h3 className="mt-8 text-base font-semibold leading-none text-ink">
                Key Issues
              </h3>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {details.keyIssues.map((point) => (
                  <div key={point.title} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-moss" />
                    <div>
                      <h3 className="text-base font-semibold leading-6 text-ink">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-copy">{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <SectionDivider />

            <section>
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-ink">
                Product Goal
              </h2>
              <p className="mt-4 max-w-[680px] text-base leading-8 text-copy">
                {details.productGoal}
              </p>

              <h3 className="mt-8 text-base font-semibold leading-none text-ink">
                Objectives
              </h3>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {details.objectives.map((goal) => (
                  <div
                    key={goal}
                    className="rounded-[6px] border border-line bg-[#fffaf1] px-5 py-4 text-sm leading-7 text-copy"
                  >
                    {goal}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-ink">
                Final Solution
              </h2>
              <p className="mt-4 text-base leading-8 text-copy">
                {details.finalSolution}
              </p>

              <h3 className="mt-8 text-base font-semibold leading-none text-ink">
                Key improvements included:
              </h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {details.finalSolutionImprovements.map((item) => (
                  <li
                    key={item}
                    className="rounded-[6px] border border-line bg-[#fffaf1] px-5 py-4 text-sm leading-7 text-copy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-8 text-copy">
                {details.finalSolutionClosing}
              </p>
            </section>

            <section className="mt-12">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-ink">
                Solution Explorations
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-base leading-8 text-copy">
                {details.solutionExplorations.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {galleryImages.map((image, index) => (
                  <figure
                    key={`${image.alt}-${index}`}
                    className="overflow-hidden rounded-[6px] border border-line bg-[#fffaf1] p-3 shadow-[0_8px_24px_rgba(33,35,41,0.035)]"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`${galleryHeights[index]} w-full rounded-[4px] object-cover`}
                    />
                  </figure>
                ))}
              </div>
            </section>

            <SectionDivider />

            <section>
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-ink">
                Conclusion
              </h2>
              <p className="mt-4 text-base leading-8 text-copy">
                {details.closingLine}
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {details.metrics.map((metric) => (
                  <div
                    key={metric.title}
                    className="rounded-[6px] border border-line bg-[#fffaf1] px-5 py-4"
                  >
                    <p className="text-[2.5rem] font-semibold leading-none text-moss">
                      {metric.number}
                    </p>
                    <p className="mt-4 text-base font-semibold leading-none text-ink">
                      {metric.title}
                    </p>
                    {metric.description && (
                      <p className="mt-3 text-sm leading-6 text-copy">
                        {metric.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </Container>
        </article>

        <FooterCtaSection />
      </div>
    </main>
  );
}
