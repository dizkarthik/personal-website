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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics = [
  {
    title: "0 → 4M+ Users",
    description: "Scaled from launch to millions of active users across complex product ecosystems.",
    icon: SproutIcon,
  },
  {
    title: "0 → 1 → Scale",
    description: "Built and scaled products with strong systems thinking and clear product vision.",
    icon: GrowthIcon,
  },
  {
    title: "Lean Teams, High Impact",
    description: "Built and led high-performing design teams that shipped with speed and rigor.",
    icon: TeamIcon,
  },
];

export const experienceLogos = [
  {
    alt: "Dream11 logo",
    src: "https://www.figma.com/api/mcp/asset/bd9acebf-2e2c-40d5-832b-f0eb296606cb",
    className: "h-8 w-auto md:h-10",
  },
  {
    alt: "Zoho logo",
    src: "https://www.figma.com/api/mcp/asset/707097b8-bb24-4fcf-b49c-e96e6b223ba8",
    className: "h-8 w-auto md:h-10",
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
    title: "Build Systems",
    description:
      "Create scalable architecture, not isolated screens.",
  },
  {
    title: "Validate fast",
    description:
      "Iterate through real usage, data, and feedback loops.",
  },
  {
    title: "Partner Deeply",
    description:
      "Collaborate deeply with product and engineering to balance speed, feasibility, and experience.",
  },
];

export const sixerHeroImage =
  "https://www.figma.com/api/mcp/asset/499a2b1d-80f9-4afe-b3af-839e54c7e842";

export const sixerBrandImage =
  "https://www.figma.com/api/mcp/asset/51785a1d-f18e-4e12-8303-6ded7053398f";

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
