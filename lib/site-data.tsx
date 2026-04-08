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
    title: "Fixing early drop-offs by improving first-week retention",
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
        "This project focused on improving early retention for Sixer's 1G trading experience during a high-intent acquisition window around IPL. While acquisition was strong, a large share of users dropped off within the first week after signup. The core issue was not just awareness, but the gap between user intent, product understanding, and the first meaningful outcome.\n\nThe goal was to identify the biggest first-week friction points, simplify the experience, and improve activation during the most critical part of the journey.",
      context:
        "Sixer is a fantasy sports trading platform where users buy and sell player stocks based on expected performance. Unlike traditional fantasy formats, the first-time user journey depends heavily on understanding pricing, outcomes, confidence, and wallet movement early in the experience.\n\nDuring IPL, user acquisition scaled rapidly. But retention analysis showed a sharp drop immediately after onboarding and first participation. The strongest decline happened in week one, which made early retention the highest-leverage opportunity for product improvement.",
      problemDescription:
        "The main issue was not top-of-funnel drop-off.\n\nUsers were successfully moving through the early funnel. They signed up, completed onboarding, added money to the wallet, and participated in at least one match. The real retention problem started after that first active session.\n\nOnce users entered a trade and completed their first match participation, a large share of them showed no meaningful activity for the next week, even during IPL when marquee matches were happening almost every day.\n\nThis made the problem more serious than a simple onboarding issue. Users were not bouncing before value entry. They were experiencing the product, but the experience was not strong enough to pull them back into the next trading loop.\n\nThe core challenge became:",
      problemAreas: [
        "Users were able to enter the product and complete the first trade journey.",
        "Daily marquee matches were available, yet users were not returning consistently.",
        "The post-trade experience did not create enough momentum for the next session.",
        "The product was failing to convert first participation into repeat match engagement.",
      ],
      problemClosing:
        "This weak post-match loop directly affected week one retention, repeat trading behavior, and long-term trading volume.",
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
          title: "Quantitative data",
          body:
            "We analyzed IPL cohort retention and found that the biggest drop was happening after users completed their first trade participation. The highest-risk inactivity window sat within the first 3 to 7 days.",
        },
        {
          title: "Wallet and RTP analysis",
          body:
            "We studied money flow and trading outcomes to understand return behavior. The analysis showed that cumulative profit had a stronger impact on comeback behavior than single-session outcomes, and flat sessions were especially risky.",
        },
        {
          title: "Behavioral analysis",
          body:
            "We found that many week-one churners still had enough wallet balance or chips to continue. This showed the issue was not only money exhaustion, but also weak confidence and low motivation to return.",
        },
        {
          title: "Competitive and lifecycle inputs",
          body:
            "We reviewed competitor retention flows and lifecycle communication patterns to understand how stronger post-trade nudges and clearer value reinforcement could support repeat engagement.",
        },
      ],
      findings: [
        {
          title: "The biggest drop happened in the first week",
          body:
            "The sharpest retention decline happened right after onboarding and first trading, making week one the most important part of the journey to fix.",
        },
        {
          title: "Referred traffic distorted the baseline",
          body:
            "Non-referred users showed much better retention than referred users, so the design problem needed to be studied through the non-referred base to avoid misleading signals.",
        },
        {
          title: "Flat outcomes were more dangerous than small losses",
          body:
            "Users were more likely to return when they had a clear outcome. The stronger predictor was whether users felt they were ahead overall.",
        },
        {
          title: "Many churners still had money left",
          body:
            "A large portion of week-one churners still had enough value in wallet or chips to continue, but they did not return.",
        },
        {
          title: "Trust and clarity gaps were hurting confidence",
          body:
            "Users struggled with wallet understanding, consecutive loss perception, low visible bonus value, and unclear next steps.",
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
        "We approached the problem as a combination of product experience, discovery, and retention design.",
      solutionItems: [
        {
          title: "Simplified onboarding and first-trade entry",
          body:
            "Improved onboarding and first-trade clarity. Improved onboarding hierarchy so the value proposition was easier to understand. Reduced the learning burden before first participation. Made first trade entry more guided and confidence-building.",
        },
        {
          title: "Better wallet clarity and trust communication",
          body:
            "Improved how wallet state, returns, and outcome progression were communicated. Reduced ambiguity around what happened after a trade. Made the experience feel more trustworthy during volatile early sessions.",
        },
        {
          title: "Improved home discovery and player recommendation",
          body:
            "Made it easier to discover relevant matches and players quickly. Reduced choice paralysis through better recommendations. Improved the path from browsing to trade action.",
        },
        {
          title: "Retention-led product thinking",
          body:
            "Designed around the first 3 to 5 day churn window instead of waiting for long-term churn. Aligned product decisions with lifecycle triggers such as inactivity windows, available redemption value, and comeback nudges. Focused on improving repeat trade behavior, not just first trade completion.",
        },
      ],
      finalSolutionClosing:
        "We treated first-week retention as a system problem, balancing activation, trust, trade completion, and repeat trading instead of optimizing only one funnel step.",
      solutionExplorations:
        "The final solution combined onboarding clarity, discovery improvements, trade confidence, wallet trust, and lifecycle re-engagement around the first 3 to 5 day drop-off window.",
      closingLine:
        "The redesign improved both activation and trading health.",
      metrics: [
        {
          number: "63.4% -> 72.5%",
          title: "Onboarding completion rate",
          description: "Q1 activation impact",
        },
        {
          number: "75.9% -> 82.5%",
          title: "Onboarding completion rate",
          description: "Q1 activation impact",
        },
        {
          number: "45.6% -> 60.9%",
          title: "Repeat trade rate",
          description: "Q2 retention and trading impact",
        },
        {
          number: "4.8% -> 3.1%",
          title: "Failed trade rate",
          description: "Q2 retention and trading impact",
        },
        {
          number: "13% -> 9%",
          title: "Trust-related issue rate",
          description: "Q2 retention and trading impact",
        },
        {
          number: "₹180 Cr -> ₹235 Cr",
          title: "Average monthly trading volume",
          description: "Q2 retention and trading impact",
        },
      ],
      strategicOutcome:
        "The early journey moved from a fragile first-use experience to a more confident and repeatable trading loop. Instead of losing users immediately after onboarding or first participation, the redesigned experience helped more users understand value, complete their first trade, and come back again.",
      myRole:
        "I led the product design effort end to end across problem framing, retention hypothesis building, UX direction, solution design, and final experience improvements. This included working closely with analytics inputs, lifecycle thinking, and business KPI alignment to ensure the design changes improved both user confidence and commercial outcomes.",
      heroImage: {
        src: "/assets/sixer-facelift-home.png",
        alt: "Sixer facelift home banner showing the trading home screen and highlighted match card",
      },
    },
    tags: ["Onboarding", "Retention", "User Research", "Drop Offs"],
    initialIndex: 0,
    images: [
      {
        src: "/assets/sixer-facelift-home.png",
        alt: "Sixer facelift home cover showing the trading home screen and highlighted match card",
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
