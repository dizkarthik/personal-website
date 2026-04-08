import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function SproutIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 20V11" />
      <path d="M12 13C8.5 13 6 10.5 6 7c3.5 0 6 2.5 6 6Z" />
      <path d="M12 10c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z" />
      <path d="M8 20h8" />
    </svg>
  );
}

function GrowthIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 16l4-4 3 3 7-7" />
      <path d="M14 8h5v5" />
      <path d="M5 5v14h14" />
    </svg>
  );
}

function TeamIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <path d="M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M21 20v-1.5a3.5 3.5 0 0 0-2.6-3.38" />
      <path d="M15.5 4.2a3.5 3.5 0 0 1 0 6.6" />
    </svg>
  );
}

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#works" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const heroMetrics = [
  {
    title: "Built from Scratch",
    description: "From idea to launch",
    icon: SproutIcon,
    iconSrc: "/assets/built-from-scratch.svg",
  },
  {
    title: "0 → 1 → Scale",
    description: "Built and scaled products",
    icon: GrowthIcon,
    iconSrc: "/assets/zero-one-scale.svg",
  },
  {
    title: "Lean Teams, High Impact",
    description: "Built and led lean, high-performing teams",
    icon: TeamIcon,
    iconSrc: "/assets/lean-teams-high-impact.svg",
  },
];

export const experienceLogos = [
  {
    alt: "Dream11 logo",
    src: "https://www.figma.com/api/mcp/asset/68cf1d8d-60ec-45ef-8906-6fb46a38fa0e",
    width: 175.78,
    height: 48,
  },
  {
    alt: "Zoho logo",
    src: "https://www.figma.com/api/mcp/asset/47d6eff6-1f02-4f0a-9eaa-7f320c73df98",
    width: 112.73,
    height: 48,
  },
];

export const buildSteps = [
  {
    title: "Diagnose Gaps",
    description:
      "Identify friction across user behavior, product logic, and business metrics.",
  },
  {
    title: "Define Outcomes",
    description:
      "Tie design decisions to measurable product and business impact.",
  },
  {
    title: "Partner Deeply",
    description:
      "Collaborate deeply with product and engineering to balance speed, feasibility, and experience.",
  },
  {
    title: "Build Systems",
    description:
      "Create scalable architecture, not isolated screens.",
  },
  {
    title: "Validate fast",
    description:
      "Iterate through real usage, data, and feedback loops.",
  },
];

export const sixerHeroImage =
  "https://www.figma.com/api/mcp/asset/97a788e4-f8cc-4f0d-9b93-5a3c9120f576";

export const sixerBrandImage =
  "https://www.figma.com/api/mcp/asset/9b2082e8-439e-43bb-9c00-56baaf53935f";

export const sixerCards = [
  {
    title: "Founding Designer to",
    emphasis: "Head of Design",
    description: "Built and scaled the design function from scratch.",
  },
  {
    title: "Lean 2 Member",
    emphasis: "Design Team",
    description:
      "Built and scaled the product with a high-output, small team.",
  },
  {
    title: "₹250+ Cr",
    eyebrow: "Monthly Trading Volume",
    description:
      "Powered a high-frequency, real-time trading platform.",
  },
  {
    title: "Product,",
    emphasis: "Branding & Growth",
    description:
      "Owned experience across product, marketing, and ecosystem integration.",
  },
];

const caseStudyPlaceholderSlides = [
  {
    background: "#fff0e7",
    accent: "#ff8a63",
    label: "Slide 01",
  },
  {
    background: "#eef7ff",
    accent: "#4f8edb",
    label: "Slide 02",
  },
  {
    background: "#eff8e9",
    accent: "#5a8f22",
    label: "Slide 03",
  },
  {
    background: "#fff7dd",
    accent: "#d99a16",
    label: "Slide 04",
  },
  {
    background: "#f6edff",
    accent: "#9d68d8",
    label: "Slide 05",
  },
  {
    background: "#ffeef3",
    accent: "#d95c80",
    label: "Slide 06",
  },
  {
    background: "#ecfbf7",
    accent: "#27a286",
    label: "Slide 07",
  },
  {
    background: "#f2f2f2",
    accent: "#747772",
    label: "Slide 08",
  },
  {
    background: "#eef0ff",
    accent: "#5966d8",
    label: "Slide 09",
  },
  {
    background: "#fff3e6",
    accent: "#c86b2d",
    label: "Slide 10",
  },
].map((slide) => ({
  src: `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1281" height="832" viewBox="0 0 1281 832">
      <rect width="1281" height="832" fill="${slide.background}"/>
      <rect x="116" y="116" width="1049" height="600" rx="40" fill="#ffffff" opacity="0.72"/>
      <rect x="176" y="176" width="420" height="24" rx="12" fill="${slide.accent}" opacity="0.45"/>
      <rect x="176" y="238" width="760" height="56" rx="28" fill="#212329" opacity="0.9"/>
      <rect x="176" y="342" width="928" height="200" rx="28" fill="#ffffff" stroke="${slide.accent}" stroke-width="4"/>
      <rect x="176" y="590" width="280" height="42" rx="21" fill="${slide.accent}" opacity="0.28"/>
      <rect x="484" y="590" width="360" height="42" rx="21" fill="${slide.accent}" opacity="0.18"/>
      <text x="640.5" y="432" fill="${slide.accent}" font-family="Figtree, Arial, sans-serif" font-size="64" font-weight="700" text-anchor="middle">${slide.label}</text>
    </svg>`,
  )}`,
  alt: `Placeholder case study carousel ${slide.label}`,
}));

export const caseStudies = [
  {
    slug: "nrev-onboarding-retention",
    categories: ["Sixer", "Mobile", "Retention"],
    title: "Fixing early drop-offs: increasing week-1 retention by 27%",
    company: "nRev",
    role: "Product Design Lead",
    scope: "Onboarding, Retention, Revenue Impact",
    period: "2026",
    description:
      "Early user drop-offs were impacting activation. I redesigned the onboarding experience by addressing key friction points and aligning flows with user intent, leading to a 27% increase in week-1 retention.",
    overview:
      "A focused onboarding redesign shaped around first-week activation, product clarity, and measurable retention improvement.",
    details: {
      pageTitle: "Fixing early drop-offs by improving week one retention by 27%",
      pageDescription:
        "This project focused on improving early user retention for nRev. While acquisition was growing, a large percentage of users dropped off within the first week. The onboarding experience did not clearly communicate value or guide users toward meaningful actions.\n\nThe goal was to identify key friction points, simplify the experience, and improve activation during the initial user journey.",
      problemDescription:
        "Users were signing up but not reaching the core value of the product. Early drop-offs were impacting both retention and long term engagement.",
      keyIssues: [
        {
          title: "Unclear value moment",
          body:
            "Users did not quickly understand what the product could do for them.",
        },
        {
          title: "Fragmented onboarding",
          body:
            "The flow lacked structure and did not guide users toward meaningful actions.",
        },
        {
          title: "Low activation",
          body:
            "A large percentage of users did not complete the first key action.",
        },
        {
          title: "No feedback loop",
          body:
            "There was limited visibility into user behavior after onboarding.",
        },
      ],
      productGoal:
        "The goal was to improve early retention by making onboarding more structured, intuitive, and outcome-driven.",
      objectives: [
        "Help users understand product value within the first session",
        "Increase completion of key onboarding actions",
        "Reduce friction across the initial user journey",
        "Improve week one retention and activation",
      ],
      finalSolution:
        "The final onboarding experience focused on guiding users step by step toward their first meaningful outcome.",
      finalSolutionImprovements: [
        "Clear value communication in the first interaction",
        "Simplified flow with fewer decision points",
        "Progressive disclosure instead of overwhelming screens",
        "Stronger alignment between user intent and product actions",
      ],
      finalSolutionClosing:
        "This helped users reach value faster and reduced drop-offs significantly.",
      solutionExplorations:
        "We explored multiple onboarding directions to understand how users interacted with different flows. Each iteration focused on reducing friction, improving clarity, and guiding users toward meaningful actions.\n\nWe tested variations in structure, content hierarchy, and interaction patterns before arriving at the final approach.",
      closingLine:
        "The redesigned onboarding experience helped users understand value earlier, take meaningful actions faster, and stay engaged beyond the first week.",
      metrics: [
        {
          number: "+27%",
          title: "Increase in week one retention",
          description: "",
        },
        {
          number: "58%",
          title: "Improvement in onboarding completion rate",
          description: "",
        },
        {
          number: "4 Key Flows",
          title: "Redesigned to reduce friction and improve clarity",
          description: "",
        },
        {
          number: "2x Faster Activation",
          title: "Users reached first meaningful action faster",
          description: "",
        },
      ],
    },
    tags: ["Onboarding", "Retention", "User Research", "Drop Offs"],
    initialIndex: 4,
    images: caseStudyPlaceholderSlides,
  },
  {
    slug: "nrev-onboarding-conversion",
    categories: ["nRev", "Web", "Onboarding"],
    title: "How we increased our week-1 retention by 27%?",
    company: "nRev",
    role: "Product Design Lead",
    scope: "Onboarding, Retention, Revenue Impact",
    period: "2026",
    description:
      "Built and scaled the design function from scratch. Built and scaled the design function from scratch. Built and scaled the design function from scratch. Built and scaled the design function from scratch.Built and scaled the design function from scratch. Built and scaled the design function from scratch. Built and scaled the design function from scratch. Built and scaled the design function from scratch.",
    overview:
      "A focused onboarding redesign shaped around first-week activation, product clarity, and measurable retention improvement.",
    tags: ["Onboarding", "Retention", "Revenue Impact", "Business Problem"],
    initialIndex: 4,
    images: caseStudyPlaceholderSlides,
  },
];

export const credentialCards = [
  {
    eyebrow: "Leadership",
    title: "14+ years leading design through ambiguity and scale.",
    description:
      "Experience spanning early-stage product definition, platform evolution, and org building.",
    span: "lg:col-span-2",
    tone: "warm",
  },
  {
    eyebrow: "Specialty",
    title: "0 → 1 → scale",
    description:
      "I help teams move from ideas and prototypes into durable product systems.",
    tone: "plain",
  },
  {
    eyebrow: "Product Scope",
    title: "Fintech, AI, growth, and ecosystem design.",
    description:
      "Cross-functional work across product experience, monetization, brand touchpoints, and go-to-market.",
    tone: "plain",
  },
  {
    eyebrow: "Operating Style",
    title: "Systems-first, outcome-driven, deeply collaborative.",
    description:
      "I balance user insight, business priorities, and technical feasibility without losing craft.",
    span: "md:col-span-2",
    tone: "soft",
  },
  {
    eyebrow: "Availability",
    title: "Consulting, leadership advisory, and selective in-house roles.",
    description:
      "Open to senior design leadership conversations where product quality and strategic clarity matter.",
    tone: "accent",
  },
];
