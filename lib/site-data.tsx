export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#works" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const heroMetrics = [
  {
    title: "Own, Build & Ship",
    description: "Taking ideas from zero to production with end-to-end ownership",
    iconSrc: "/assets/own-build-ship.svg",
  },
  {
    title: "Systems That Scale",
    description: "Designing scalable experiences with clarity and usability.",
    iconSrc: "/assets/b2b-b2cc.svg",
  },
  {
    title: "Big Teams to Lean Setups",
    description: "Thriving in both structured orgs and fast-moving environments",
    iconSrc: "/assets/big-lean.svg",
  },
];

export const experienceLogos = [
  {
    alt: "Dream11 logo",
    src: "/assets/dream11-logo.svg",
    width: 175.78,
    height: 48,
  },
  {
    alt: "Zoho logo",
    src: "/assets/zoho-logo.svg",
    width: 112.73,
    height: 48,
  },
];

export const impactNumbers = [
  {
    title: "Scaled to 5M+ Users",
    subtitle: "from 0 base",
    brand: "sixer" as const,
  },
  {
    title: "40% SU-D Funnel",
    subtitle: "from 15% base",
    brand: "sixer" as const,
  },
  {
    title: "Led Full UI Revamp",
    subtitle: "for ServiceDesk Plus",
    brand: "zoho" as const,
  },
  {
    title: "40% Improvement",
    subtitle: "in Time to First Workflow",
    brand: "gtm" as const,
  },
  {
    title: "-28% Resolution Time",
    subtitle: "from 18% base",
    brand: "zoho" as const,
  },
  {
    title: "+55Cr Increase in",
    subtitle: "Trading Volume",
    brand: "sixer" as const,
  },
  {
    title: "Activation Improved",
    subtitle: "by revamped onboarding",
    brand: "gtm" as const,
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

const aiOnboardingEvidenceImages = [
  {
    src: `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760">
        <rect width="1200" height="760" rx="36" fill="#ffffff"/>
        <text x="80" y="110" fill="#212329" font-family="Figtree, Arial, sans-serif" font-size="44" font-weight="700">Signup to first workflow drop-off</text>
        <text x="80" y="158" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="26">Most users never reached workflow creation or execution.</text>
        <line x1="110" y1="620" x2="1090" y2="620" stroke="#d9dccf" stroke-width="2"/>
        <line x1="110" y1="620" x2="110" y2="180" stroke="#d9dccf" stroke-width="2"/>
        <polyline points="110,210 260,310 430,392 610,458 790,514 970,566 1090,592" fill="none" stroke="#7db34c" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="110" cy="210" r="8" fill="#7db34c"/>
        <circle cx="260" cy="310" r="8" fill="#7db34c"/>
        <circle cx="430" cy="392" r="8" fill="#7db34c"/>
        <circle cx="610" cy="458" r="8" fill="#7db34c"/>
        <circle cx="790" cy="514" r="8" fill="#7db34c"/>
        <circle cx="970" cy="566" r="8" fill="#7db34c"/>
        <circle cx="1090" cy="592" r="8" fill="#7db34c"/>
        <text x="96" y="664" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="22">Signup</text>
        <text x="215" y="664" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="22">Homepage</text>
        <text x="395" y="664" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="22">Builder</text>
        <text x="553" y="664" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="22">Draft</text>
        <text x="725" y="664" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="22">Workflow</text>
        <text x="914" y="664" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="22">Run</text>
        <text x="1012" y="664" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="22">Value</text>
      </svg>`,
    )}`,
    alt: "Activation funnel showing steep drop-off before users reached their first workflow",
  },
  {
    src: `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760">
        <rect width="1200" height="760" rx="36" fill="#ffffff"/>
        <text x="80" y="110" fill="#212329" font-family="Figtree, Arial, sans-serif" font-size="44" font-weight="700">What users needed before they could activate</text>
        <text x="80" y="158" fill="#747772" font-family="Figtree, Arial, sans-serif" font-size="26">Interview themes consistently pointed to ambiguity, not capability gaps.</text>
        <rect x="84" y="230" width="484" height="120" rx="28" fill="#f8f8f3" stroke="#e6e8dc"/>
        <rect x="632" y="230" width="484" height="120" rx="28" fill="#f8f8f3" stroke="#e6e8dc"/>
        <rect x="84" y="390" width="484" height="120" rx="28" fill="#f8f8f3" stroke="#e6e8dc"/>
        <rect x="632" y="390" width="484" height="120" rx="28" fill="#f8f8f3" stroke="#e6e8dc"/>
        <text x="124" y="286" fill="#212329" font-family="Figtree, Arial, sans-serif" font-size="30" font-weight="600">What should I build first?</text>
        <text x="672" y="286" fill="#212329" font-family="Figtree, Arial, sans-serif" font-size="30" font-weight="600">Which use case is right for me?</text>
        <text x="124" y="446" fill="#212329" font-family="Figtree, Arial, sans-serif" font-size="30" font-weight="600">What does success look like?</text>
        <text x="672" y="446" fill="#212329" font-family="Figtree, Arial, sans-serif" font-size="30" font-weight="600">Can I trust the AI to set this up?</text>
      </svg>`,
    )}`,
    alt: "Interview insight cards showing where onboarding ambiguity blocked activation",
  },
];

export const caseStudies = [
  {
    slug: "fixing-early-drop-offs-retention-trading-volume",
    legacySlugs: ["nrev-onboarding-retention"],
    categories: ["Sixer", "Mobile", "Retention"],
    title:
      "Fixing early drop-offs to improve week one retention by 27% and drive ₹55 Cr in trading volume",
    company: "Sixer",
    role: "Product Design Lead",
    scope: "1G Trading, Retention, IPL Activation",
    period: "2026",
    description:
      "Improved early retention for Sixer's 1G trading experience by simplifying first-week friction, clarifying wallet and trade outcomes, and strengthening the path from acquisition to repeat trading.",
    overview:
      "A focused first-week retention redesign for Sixer's IPL acquisition window, shaped around product clarity, trading confidence, and measurable activation improvements.",
    details: {
      pageTitle:
        "Fixing early drop-offs to improve week one retention by 27% and drive ₹55 Cr in trading volume",
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
          alt: "Old and new UI comparison for the Sixer discovery experience",
        },
        {
          src: "/assets/case-study-1-design-2.png",
          alt: "Problem breakdown of the old Sixer discovery experience",
        },
        {
          src: "/assets/case-study-1-design-3.png",
          alt: "Low fidelity explorations for the redesigned Sixer modules",
        },
        {
          src: "/assets/case-study-1-design-4.png",
          alt: "Annotated card showing improved information hierarchy and decision support",
        },
        {
          src: "/assets/case-study-1-design-5.png",
          alt: "Annotated tab structure and discovery-to-decision transition for the final design",
        },
        {
          src: "/assets/case-study-1-design-6.png",
          alt: "Final design comparison with before and after insights table",
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
    slug: "ai-onboarding-activation",
    categories: ["nRev", "AI", "Activation"],
    title:
      "Improving activation through system intelligence and faster time to value",
    company: "nRev",
    role: "Product Design Lead",
    scope: "AI-led Onboarding, Activation, Workflow Automation",
    period: "2026",
    description:
      "As a product design consultant, I redesigned onboarding for a GTM AI product to make the experience more context-aware, reduce ambiguity, and accelerate time to value.",
    overview:
      "A structured onboarding redesign for a GTM AI platform, shaped around system intelligence, workflow guidance, and faster time to value.",
    details: {
      pageTitle:
        "Improving activation through system intelligence and faster time to value",
      pageDescription:
        "As a product design consultant, I redesigned onboarding for a GTM AI product to make the experience more context-aware, reduce ambiguity, and accelerate time to value.",
      topPills: [],
      context:
        "nRev is a GTM AI platform that helps teams build automated workflows for revenue operations such as lead enrichment, routing, and outreach.\n\nWhile the product had strong capabilities, users struggled to get started. The challenge was not feature availability, but helping users understand what to build, how to start, and how quickly they could achieve value.",
      problemDescription:
        "A large number of users dropped off immediately after signup.\n\nThere was no onboarding experience. Users were redirected to a generic homepage without guidance, context, or a clear next step.\n\nThis directly impacted activation and product adoption.",
      problemAreas: [
        "Users did not understand what to do",
        "Users did not create workflows",
        "Users did not reach their first meaningful outcome",
      ],
      assumption: "",
      dataImages: [],
      researchMethodsTitle: "Research Methods",
      problemMethods: [
        {
          title: "Behavioral Analysis",
          body:
            "We analyzed how users navigated post-signup and observed hesitation, drop-offs, and incomplete actions.",
        },
        {
          title: "Qualitative Feedback",
          body:
            "User conversations revealed confusion around use cases, starting points, and expected outcomes.",
        },
        {
          title: "Competitive Analysis",
          body:
            "We analyzed onboarding patterns across tools like Clay, Gumloop, n8n, String by Pipedream, and Apollo to understand how similar products guide users.",
        },
      ],
      findings: [
        {
          title:
            "Users were not dropping due to product capability, but due to lack of direction.",
          body: "",
        },
        { title: "Users did not know what to build or where to start", body: "" },
        { title: "The system expected high upfront thinking", body: "" },
        { title: "There was no guided path from intent to action", body: "" },
        { title: "No early proof of value was shown", body: "" },
      ],
      keyInsight:
        "The product was not leveraging available user context to make onboarding relevant and actionable.\n\nBy capturing a user’s work email, we could infer role, company, likely goals, and relevant workflows.\n\nHowever, the existing flow did not nudge users to provide this input, missing a key opportunity to personalize the experience.",
      designApproach:
        "We approached this as a system design problem rather than just a UI problem, using available user context to make onboarding more relevant from the first step.\n\nWe created a structured onboarding framework:\n\n1. Identify Role -> 2. Understand Goals -> 3. Choose Setup Style -> 4. Connect Essentials selectively -> 5. Activate with Relevant Workflow",
      designPrinciples: [
        "Reduce ambiguity early: Guide users from intent to action",
        "Show value before effort: Let users experience outcomes before asking them to build",
        "Shorten time to first value: Help users achieve meaningful output quickly",
      ],
      finalSolution:
        "We introduced a structured onboarding layer to replace the generic homepage entry.",
      solutionItems: [
        {
          title: "Role-based entry point",
          body:
            "We encouraged users to sign up using their work email. This allowed the system to infer user context such as role, company, and likely goals. Reduced friction in asking multiple questions. Enabled smarter personalization. Improved relevance from the first step.",
        },
        {
          title: "Goal and use-case selection",
          body:
            "Users were guided to define what they wanted to achieve. Instead of generic questions, we framed it around outcomes like lead qualification, lead routing, and lead discovery. Reduced ambiguity. Aligned onboarding with user intent. Improved clarity on what to build.",
        },
        {
          title: "Guided vs flexible setup",
          body:
            "Users could choose how they wanted to start: AI-guided setup, template-based workflows, or manual exploration. Supported different user preferences. Reduced cognitive overload. Increased confidence.",
        },
        {
          title: "Context-aware activation",
          body:
            "Based on user inputs, we surfaced relevant workflows instead of a blank builder. Users saw pre-built workflows, suggested starting points, and contextual recommendations. Faster transition to action. Reduced decision paralysis.",
        },
        {
          title: "Early value preview",
          body:
            "We introduced sample outputs and previews before users committed to building workflows. Built trust. Increased motivation. Helped users understand product value.",
        },
        {
          title: "Instant value demonstration",
          body:
            "To build early trust and anticipation, we introduced an auto-run workflow based on the user’s role and context. Instead of asking users to build from scratch, we generated a sample output immediately after onboarding. For example, users could see enriched data such as leads derived from their LinkedIn activity, along with a clear explanation of how this output connects to their goals. This acted as a free preview of the product’s capability. Users were not just told what the product can do. They experienced it instantly. Built immediate trust in the system. Reduced uncertainty about product value. Increased confidence to proceed. Improved transition from onboarding to action.",
        },
      ],
      closingLine:
        "Since the experience launched recently, we want to validate its performance over a longer period. So far, early signals are trending ahead of our expected KPIs.",
      metrics: [],
      tradeOffs: [
        "We initially considered collecting tech stack data but removed it to reduce friction",
        "We prioritized faster activation over deeper personalization",
        "We limited inputs to only high-impact information",
      ],
      conclusion:
        "By introducing onboarding where none existed, we shifted the experience from confusion to clarity.\n\nThe key was not just improving UI, but turning user context and intent into a more relevant onboarding experience.\n\nBy combining guided onboarding with instant value demonstration, users were able to experience meaningful outcomes early, building trust and accelerating activation.\n\nSince the experience launched recently, we are continuing to validate performance over time. Early signals are encouraging and currently tracking ahead of our expected KPIs.",
      embedUrl: "",
      heroImage: {
        src: "/assets/nrev-casestudy-cover.png",
        alt: "nRev AI onboarding case study cover",
      },
      designGallery: [
        {
          src: "/assets/nrev-case-study-slide-1.png",
          alt: "Old nRev signup screen",
        },
        {
          src: "/assets/nrev-case-study-slide-2.png",
          alt: "Old nRev signup to home flow",
        },
        {
          src: "/assets/nrev-case-study-slide-3.png",
          alt: "Problem analysis of the old nRev homepage flow",
        },
        {
          src: "/assets/nrev-case-study-slide-4.png",
          alt: "New signup approach using system intelligence",
        },
        {
          src: "/assets/nrev-case-study-slide-5.png",
          alt: "Form versus conversational onboarding comparison",
        },
        {
          src: "/assets/nrev-case-study-slide-6.png",
          alt: "Using system intelligence to turn email into context",
        },
        {
          src: "/assets/nrev-case-study-slide-7.png",
          alt: "Auto-run sample data to build user confidence",
        },
        {
          src: "/assets/nrev-case-study-slide-8.png",
          alt: "Faster time to value with context-aware workflow recommendations",
        },
        {
          src: "/assets/nrev-case-study-slide-9.png",
          alt: "Lightweight UI refresh creating more clarity in the entry experience",
        },
      ],
    },
    tags: [
      "Activation",
      "Onboarding",
      "AI UX",
      "Time to Value",
      "Hypothesis Testing",
      "User Interviews",
      "Product Strategy",
      "Workflow Automation",
    ],
    initialIndex: 0,
    images: [
      {
        src: "/assets/nrev-case-study-slide-1.png",
        alt: "Old nRev signup screen",
      },
      {
        src: "/assets/nrev-case-study-slide-2.png",
        alt: "Old nRev signup to home flow",
      },
      {
        src: "/assets/nrev-case-study-slide-3.png",
        alt: "Problem analysis of the old nRev homepage flow",
      },
      {
        src: "/assets/nrev-case-study-slide-4.png",
        alt: "New signup approach using system intelligence",
      },
      {
        src: "/assets/nrev-case-study-slide-5.png",
        alt: "Form versus conversational onboarding comparison",
      },
      {
        src: "/assets/nrev-case-study-slide-6.png",
        alt: "Using system intelligence to turn email into context",
      },
      {
        src: "/assets/nrev-case-study-slide-7.png",
        alt: "Auto-run sample data to build user confidence",
      },
      {
        src: "/assets/nrev-case-study-slide-8.png",
        alt: "Faster time to value with context-aware workflow recommendations",
      },
      {
        src: "/assets/nrev-case-study-slide-9.png",
        alt: "Lightweight UI refresh creating more clarity in the entry experience",
      },
    ],
  },
];

export const additionalCaseStudyCards = [
  {
    categories: ["nRev", "AI", "Activation"],
    href: "/case-studies/ai-onboarding-activation",
    status: "",
    title:
      "Improving activation through system intelligence and faster time to value",
    description:
      "Redesigned onboarding for a GTM AI product to leverage system intelligence, reduce ambiguity, and help users reach value faster.",
    imageSrc: "/assets/case-study-2-gtm.png",
    overlaySrc: undefined,
    imageAlt: "Preview for the nRev AI onboarding activation case study",
  },
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
];
