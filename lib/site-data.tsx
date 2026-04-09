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
    title: "Fixing early drop-offs by improving week one retention by 27%",
    company: "Sixer",
    role: "Product Design Lead",
    scope: "1G Trading, Retention, IPL Activation",
    period: "2026",
    description:
      "Improved early retention for Sixer's 1G trading experience by simplifying first-week friction, clarifying wallet and trade outcomes, and strengthening the path from acquisition to repeat trading.",
    overview:
      "A focused first-week retention redesign for Sixer's IPL acquisition window, shaped around product clarity, trading confidence, and measurable activation improvements.",
    details: {
      pageTitle: "Fixing early drop-offs by improving week one retention by 27%",
      pageDescription:
        "Users were signing up, but dropping off after their first trade. We redesigned the early journey to reduce friction, build trust, and improve week one retention.",
      context:
        "Sixer is a fantasy sports trading platform where users buy and sell player stocks based on expected performance. Unlike traditional fantasy formats, the first-time user journey depends heavily on understanding pricing, outcomes, confidence, and wallet movement early in the experience.",
      problemDescription:
        "A large number of users were dropping off within the first week. Users were completing onboarding but not returning after their first trade, failing to build confidence in the product early.",
      problemAreas: [
        "Users were not dropping due to losses alone.",
        "Many churners still had money left.",
        "Flat outcomes were more dangerous than small losses.",
        "They were dropping due to lack of confidence and unclear outcomes.",
      ],
      problemClosing: "",
      keyIssues: [
        {
          title: "Trust and clarity gaps were hurting confidence",
          body:
            "Users struggled with wallet understanding, consecutive loss perception, low visible bonus value, and unclear next steps after the first few sessions.",
        },
        {
          title: "Flat outcomes were more dangerous than small losses",
          body:
            "Users were more likely to return when they had a clear outcome. No-profit and no-loss days had the lowest comeback rate.",
        },
        {
          title: "Many churners still had money left",
          body:
            "Around 60 to 70 percent of week-one churners still had sufficient real wallet or chips for more transactions, but were not engaging.",
        },
        {
          title: "The biggest drop happened in the first week",
          body:
            "The sharpest retention decline happened right after onboarding and first trading, making week one the highest-leverage journey to fix.",
        },
      ],
      problemMethods: [
        {
          title: "Quantative data",
          body:
            "We analyzed IPL cohort retention and found that the biggest drop was happening after users completed their first trade participation. The highest-risk inactivity window sat within the first 3 to 7 days.",
        },
        {
          title: "Wallet and RTP analysis",
          body:
            "Cumulative profit influenced comeback behavior more than single outcomes.",
        },
        {
          title: "Behavioral analysis",
          body:
            "Many week-one churners still had wallet balance left, showing the issue was not just money exhaustion, but also low confidence and weak motivation to return.",
        },
        {
          title: "Competitive and lifecycle inputs",
          body:
            "We reviewed competitor retention flows and lifecycle nudges to understand how stronger post-trade reinforcement could improve repeat engagement.",
        },
      ],
      findings: [
        {
          title: "Users were not dropping due to losses alone.",
          body: "",
        },
        {
          title: "Many churners still had money left.",
          body: "",
        },
        {
          title: "Flat outcomes were more dangerous than small losses.",
          body: "",
        },
        {
          title: "They were dropping due to lack of confidence and unclear outcomes.",
          body: "",
        },
      ],
      productGoal:
        "The product goal was to improve early retention by making the first-week journey more structured, more understandable, and more confidence-building.",
      goalItems: [
        {
          title: "Help users understand product value within the first session",
          body:
            "Make trading easier to decode by simplifying how the product works, what outcomes mean, and how users can make progress.",
        },
        {
          title: "Increase completion of key onboarding actions",
          body:
            "Improve the path from signup to first trade by reducing confusion and decision friction.",
        },
        {
          title: "Reduce friction across the initial user journey",
          body:
            "Improve discovery, trade entry, and wallet clarity so users can move faster with more confidence.",
        },
        {
          title: "Improve week-one re-engagement and activation",
          body:
            "Design for the first 3 to 5 day drop-off window and help users return before they hard churn.",
        },
      ],
      finalSolution:
        "We approached the retention problem through three focused interventions: discovery, trust, and lifecycle reinforcement.",
      solutionItems: [
        {
          title: "Improve home discovery and player recommendation",
          body:
            "Made relevant matches and players easier to discover, reducing friction and accelerating first trade decisions.",
        },
        {
          title: "Better trust communication",
          body:
            "Clarified wallet movement, returns, and outcomes to reduce ambiguity and build confidence after each trade.",
        },
        {
          title: "Lifecycle communication",
          body:
            "Added early retention nudges and comeback triggers to support repeat engagement during the highest-risk churn window.",
        },
      ],
      finalSolutionClosing: "",
      solutionExplorations: "",
      closingLine:
        "The redesign improved both activation and trading health.",
      metrics: [
        {
          number: "27.2%",
          title: "Week 1 Retention",
        },
        {
          number: "+34%",
          title: "Repeat trade rate",
        },
        {
          number: "+55 Cr",
          title: "Monthly trading volume",
        },
      ],
      strategicOutcome:
        "",
      myRole:
        "I led the product design effort end to end across problem framing, retention hypothesis building, UX direction, solution design, and final experience improvements. This included working closely with analytics inputs, lifecycle thinking, and business KPI alignment to ensure the design changes improved both user confidence and commercial outcomes.",
      heroImage: {
        src: "/assets/sixer-facelift-home.png",
        alt: "Sixer facelift home banner showing the trading home screen and highlighted match card",
      },
      designGallery: [
        {
          src: "/assets/case-study-1-design-1.png",
          alt: "Old design exploration showing player and match discovery layout",
        },
        {
          src: "/assets/case-study-1-design-2.png",
          alt: "Old design critique showing weak connection between players and matches",
        },
        {
          src: "/assets/case-study-1-design-3.png",
          alt: "Low fidelity explorations for match and player modules",
        },
        {
          src: "/assets/case-study-1-design-4.png",
          alt: "New design exploration showing stronger information hierarchy and relevance",
        },
        {
          src: "/assets/case-study-1-design-5.png",
          alt: "Final design selected after testing",
        },
      ],
    },
    tags: ["Onboarding", "Retention", "User Research", "Drop Offs"],
    initialIndex: 0,
    images: [
      {
        src: "/assets/case-study-1-carousel-1.png",
        alt: "Sixer app home screen showing featured matches and trading cards",
      },
      {
        src: "/assets/case-study-1-carousel-2.png",
        alt: "Legacy Sixer design with old discovery and trading layout",
      },
      {
        src: "/assets/case-study-1-carousel-3.png",
        alt: "Old design discovery experience highlighting weak player-to-match connection",
      },
      {
        src: "/assets/case-study-1-carousel-4.png",
        alt: "New Sixer design improving information hierarchy and player discovery",
      },
      {
        src: "/assets/case-study-1-carousel-5.png",
        alt: "Final Sixer design showing clearer player-to-match connection and improved trust",
      },
    ],
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

export const additionalCaseStudyCards = [
  {
    categories: ["Zoho", "ITSM", "Productivity"],
    status: "Publishing soon",
    title: "How we reduced ticket resolution time using AI assistance",
    description:
      "Designed an AI-assisted workflow that helped technicians resolve tickets faster through contextual suggestions and automated field updates.",
    imageSrc: "/assets/case-study-1-zoho.png",
    overlaySrc: undefined,
    imageAlt:
      "Zoho ServiceDesk Plus dashboard with AI assistant workflow preview",
  },
  {
    categories: ["GTM", "AI", "Onboarding"],
    status: "Publishing soon",
    title: "Designing an onboarding experience that drives activation",
    description:
      "Reimagined onboarding to help users quickly understand value, set up workflows, and reach meaningful activation faster.",
    imageSrc: "/assets/case-study-2-gtm.png",
    overlaySrc: undefined,
    imageAlt: "Placeholder preview for GTM onboarding case study",
  },
];
