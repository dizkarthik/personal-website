import svgPaths from "./svg-54y0m8o88a";
import imgImage287 from "figma:asset/654801303f5d16f9fdb3715e3c6a6269a5a62263.png";
import imgImage429 from "figma:asset/505ecfc45434c36de7d9788ef011c70943ba5454.png";
import imgSixerAppIcon1 from "figma:asset/e4b09bebf271e9a0b14b66d04602b78c18c3a792.png";
import imgSixerShreyas21501671 from "figma:asset/443132f87f8f94f47f2c3e0c60407a9113d9903c.png";
import imgImage330 from "figma:asset/c8354b07d901345259566da444a47dac3e002bf5.png";
import Group1686558122 from "./Group1686558122";
import { useEffect, useState } from "react";
import { Settings, Gamepad2, Award, Users } from "lucide-react";

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 transition-all duration-300 ${isScrolled ? 'bg-[#fffaf1] shadow-sm pb-5' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between w-full max-w-[1024px] px-4">
        <nav className="flex gap-12 items-center font-['Figtree:Regular',sans-serif] text-[20px] text-black opacity-80">
          <a href="#home" className="hover:opacity-100 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#works" className="hover:opacity-100 transition-opacity">Works</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </nav>
        <button className="bg-[#3c7b1d] text-white rounded-xl font-['Figtree:Regular',sans-serif] hover:translate-y-[4px] hover:shadow-none transition-all shadow-[0_4px_0_0_#1e3d0e] active:translate-y-[4px] active:shadow-none text-[18px] px-[24px] py-[12px]">
          Book a call
        </button>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="flex justify-center pt-[159px] px-4">
      <div className="w-full max-w-[1024px] flex items-center justify-between gap-8">
        <div className="flex flex-col gap-6 max-w-[609px]">
          <p className="font-['Rosemartin:Regular',sans-serif] font-normal text-[32px] text-[#45720e]">
            Hi, I'm Karthik
          </p>
          <h1 className="font-['Figtree:Medium',sans-serif] font-medium text-[48px] leading-[54px] text-black">
            I design and scale complex digital products.
          </h1>
          <p className="font-['Figtree:Regular',sans-serif] text-[18px] leading-[34px] text-black">
            Product Design Consultant & Design Leader with 14+ years building and scaling fintech, AI, and high-growth mobile platforms.
          </p>
        </div>
        <div className="relative flex items-center justify-center shrink-0">
          <div className="-rotate-7">
            <div className="relative size-[320px]">
              <img alt="Karthik - Product Designer" className="w-full h-full object-cover" src={imgImage330} />
              <div className="absolute bottom-[33.88px] left-[64.06px] bg-[#a5342f] px-2 py-1">
                <p className="font-['Figtree:Medium',sans-serif] font-medium text-[26.25px] text-[#f0d9af] whitespace-nowrap">
                  PRODUCT DESIGNER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Bar
function StatsBar() {
  return (
    <section className="flex justify-center mt-16 px-4">
      <div className="w-full max-w-[1024px] border-t border-b border-[#f0dbb1] py-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="size-12">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                <path d={svgPaths.p121da880} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p1297ed00} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p26d38a71} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p17ceae40} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </div>
            <p className="font-['Figtree:Medium',sans-serif] font-medium text-[28px] text-black">0 → 4M+ Users</p>
            <p className="font-['Figtree:Regular',sans-serif] text-[18px] text-black">Scaled from launch to millions</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="size-12">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                <path d={svgPaths.p1ce7f140} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p2590ac80} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d="M10 42H38" stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </div>
            <p className="font-['Figtree:Medium',sans-serif] font-medium text-[28px] text-black">0 → 1 → Scale</p>
            <p className="font-['Figtree:Regular',sans-serif] text-[18px] text-black">Built and scaled products</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="size-12">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                <path d={svgPaths.p2b3c4500} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p216a0000} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p211cb980} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p31eb3600} stroke="#3D8519" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </div>
            <p className="font-['Figtree:Medium',sans-serif] font-medium text-[28px] text-black">Lean Teams, High Impact</p>
            <p className="font-['Figtree:Regular',sans-serif] text-[18px] text-black">Built and led lean, high-performing teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience Badge Section
function ExperienceBadge() {
  return (
    <section className="flex justify-center mt-32 px-4">
      <div className="w-full max-w-[1024px] flex items-center justify-between gap-8">
        <div className="relative flex items-center justify-center shrink-0">
          <div className="-rotate-[7.26deg]">
            <div className="relative w-[280px] h-[280px]">
              <Group1686558122 />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-12 max-w-[493px]">
          <p className="font-['Figtree:Medium',sans-serif] font-medium text-[24px] leading-[36px] text-black">
            Built and scaled products in high-growth environments.
          </p>
          <div className="flex gap-20 items-center">
            <div className="h-16 w-[234.371px]">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234.334 63.9389">
                <path clipRule="evenodd" d={svgPaths.p7b49900} fill="#EC1C24" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p277fa180} fill="#F01C24" fillRule="evenodd" />
              </svg>
            </div>
            <div className="h-16 w-[150.312px]">
              <img alt="Company logo" className="w-full h-full object-cover" src={imgImage429} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How I Build Products Section
function ProcessSection() {
  return (
    <section className="flex justify-center mt-32 px-4">
      <div className="w-full max-w-[1024px] flex items-start justify-between gap-16">
        <div className="flex flex-col gap-6 max-w-[420px]">
          <h2 className="font-['Figtree:Medium',sans-serif] font-medium text-[48px] leading-[64px] text-black">
            How I Build<br />Products
          </h2>
          <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[28px] text-black">
            From early ambiguity to scale-stage complexity, I focus on clarity, systems, and measurable impact.
          </p>
        </div>
        
        <div className="flex gap-12">
          <div className="h-[450px] w-0 relative">
            <svg className="absolute -left-1.5 top-0 w-3 h-full" fill="none" viewBox="0 0 12 450">
              <defs>
                <linearGradient id="lineGradient" x1="6.5" x2="6.5" y1="12" y2="438" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D6C5AC" />
                  <stop offset="1" stopColor="#D6C5AC" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d="M6 12V438" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="12" />
            </svg>
          </div>
          
          <div className="flex flex-col gap-9 max-w-[473px]">
            <div className="flex flex-col gap-3">
              <p className="font-['Figtree:Medium',sans-serif] font-medium text-[20px] text-black">Diagnose Gaps</p>
              <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[28px] text-black">
                Identify friction across user behavior, product logic, and business metrics.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="font-['Figtree:Medium',sans-serif] font-medium text-[20px] text-black">Define Outcomes</p>
              <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[28px] text-black">
                Tie design decisions to measurable product and business impact.
              </p>
               <div className="flex flex-col gap-3">
              <p className="font-['Figtree:Medium',sans-serif] font-medium text-[20px] text-black">Partner Deeply</p>
              <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[28px] text-black">
                Collaborate deeply with product and engineering to balance speed, feasibility, and experience.
              </p>
            </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="font-['Figtree:Medium',sans-serif] font-medium text-[20px] text-black">Build Systems</p>
              <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[28px] text-black">
                Create scalable architecture — not isolated screens.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="font-['Figtree:Medium',sans-serif] font-medium text-[20px] text-black">Launch & Validate Fast</p>
              <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[28px] text-black">
               Validate through launch, usage, and iteration.
              </p>
            </div>
            
          
          </div>
        </div>
      </div>
    </section>
  );
}

// My Credentials Section
function MyCredentialsSection() {
  return (
    <section className="flex justify-center mt-32 px-4">
      <div className="w-full max-w-[1024px]">
        <h2 className="font-['Figtree:SemiBold',sans-serif] font-semibold text-[32px] text-black mb-8">
          My Credentials
        </h2>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large Card - 12+ Product Shipped */}
          <div className="col-span-3 row-span-3 bg-[#f5edd9] border border-[#e8d8b8] rounded-3xl p-8 flex flex-col justify-end">
            <p className="font-['Figtree:Bold',sans-serif] font-bold text-[56px] leading-[1] text-black">12<sup className="text-[32px]">+</sup></p>
            <p className="font-['Figtree:Medium',sans-serif] font-medium text-[18px] text-black mt-4">Product Shipped</p>
          </div>
          
          {/* 7+ Years in Design */}
          <div className="col-span-5 row-span-1 bg-[#f5edd9] border border-[#e8d8b8] rounded-3xl p-8 flex items-center gap-6">
            <div className="size-24 rounded-full bg-[#b8d96d] flex items-center justify-center shrink-0">
              <Settings className="size-10 text-[#3D8519]" strokeWidth={2} />
            </div>
            <div>
              <p className="font-['Figtree:Bold',sans-serif] font-bold text-[36px] leading-[1] text-black">7<sup className="text-[20px]">+</sup></p>
              <p className="font-['Figtree:Medium',sans-serif] font-medium text-[16px] text-black mt-2">Years in Design</p>
            </div>
          </div>
          
          {/* Gamepad icon card */}
          <div className="col-span-4 row-span-2 bg-[#f5edd9] border border-[#e8d8b8] rounded-3xl p-8 flex items-center justify-center">
            <div className="size-32 rounded-full bg-[#e8a4c4] flex items-center justify-center">
              <Gamepad2 className="size-16 text-white" strokeWidth={2} />
            </div>
          </div>
          
          {/* SaaS text card */}
          <div className="col-span-5 row-span-2 bg-[#f5edd9] border border-[#e8d8b8] rounded-3xl p-8 flex items-center">
            <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[26px] text-black">
              Designed and scaled SaaS, fintech, and AI product systems built for operational complexity.
            </p>
          </div>
          
          {/* 4+ Awards */}
          <div className="col-span-4 row-span-1 bg-[#f5edd9] border border-[#e8d8b8] rounded-3xl p-8 flex items-center gap-6">
            <div className="size-24 rounded-full bg-[#f4e4c1] flex items-center justify-center shrink-0">
              <Award className="size-10 text-[#d97706]" strokeWidth={2} />
            </div>
            <div>
              <p className="font-['Figtree:Bold',sans-serif] font-bold text-[36px] leading-[1] text-black">4<sup className="text-[20px]">+</sup></p>
              <p className="font-['Figtree:Medium',sans-serif] font-medium text-[16px] text-black mt-2">Awards & Recognitions</p>
            </div>
          </div>
          
          {/* Let's Talk button */}
          <div className="col-span-3 row-span-1 bg-[#f5edd9] border border-[#e8d8b8] rounded-3xl p-8 flex items-center justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-xl font-['Figtree:SemiBold',sans-serif] font-semibold text-[18px] hover:translate-y-[4px] hover:shadow-none transition-all shadow-[0_4px_0_0_#3D8519] active:translate-y-[4px] active:shadow-none">
              Let's Talk
            </button>
          </div>
          
          {/* Scalable platforms text */}
          <div className="col-span-6 row-span-1 bg-[#f5edd9] border border-[#e8d8b8] rounded-3xl p-8 flex items-center">
            <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[26px] text-black">
              Delivered scalable platforms adapted by global users across web and mobile.
            </p>
          </div>
          
          {/* Time zones text */}
          <div className="col-span-6 row-span-1 bg-[#f5edd9] border border-[#e8d8b8] rounded-3xl p-8 flex items-center">
            <p className="font-['Figtree:Regular',sans-serif] text-[16px] leading-[26px] text-black">
              Worked across time zones and disciplines to align strategy, design, and execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Study Header
function CaseStudyHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-6">
        <div className="bg-[#dbdbdb] rounded-[32px] size-[100px] overflow-hidden">
          <img alt="Sixer app icon" className="w-full h-full object-cover" src={imgSixerAppIcon1} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-['Figtree:SemiBold',sans-serif] font-semibold text-[44px] text-black">Sixer by Dream11</h3>
          <p className="font-['Figtree:Regular',sans-serif] text-[20px] text-black">The World's First Fantasy Cricket Trading Platform</p>
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#0303b7] to-[#1a1ad1] text-white px-5 py-4 rounded-xl font-['Figtree:Regular',sans-serif] text-[20px] hover:translate-y-[4px] hover:shadow-none transition-all shadow-[0_4px_0_0_#010168] active:translate-y-[4px] active:shadow-none">
        View Case Study
      </button>
    </div>
  );
}

// Metric Cards
function MetricCards() {
  return (
    <div className="flex flex-wrap gap-8 w-full">
      {/* Large Card */}
      <div className="bg-gradient-to-b from-white to-[#fdffe6] rounded-[40px] border border-[#f9f2e7] w-[672px] h-[320px] relative overflow-hidden">
        <div className="absolute bottom-[34px] left-[23px] px-4 flex flex-col gap-3 max-w-[263px]">
          <div className="size-6">
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
              <path d="M16 7H22V13" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p13253c0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="font-['Figtree:Medium',sans-serif] font-medium text-black text-[32px]">0 to 4M+ Users</p>
          <p className="font-['Figtree:Regular',sans-serif] text-[18px] leading-[24px] text-black">
            Scaled from launch to millions of active traders.
          </p>
        </div>
        <div className="absolute h-[800px] w-[600.195px] -top-[100px] left-[216.98px]">
          <img alt="App screenshot" className="w-full h-full object-cover" src={imgSixerShreyas21501671} />
        </div>
      </div>
      
      {/* Small Cards Row 1 */}
      <div className="bg-[#fffefb] rounded-[40px] border border-[#f9f2e7] size-[320px] relative overflow-hidden">
        <div className="absolute bottom-[34px] left-[23px] px-4 flex flex-col gap-3 max-w-[263px] text-black">
          <p className="font-['Figtree:Medium',sans-serif] font-medium text-[20px] -mb-2 leading-tight">Founding Designer to</p>
          <p className="font-['Figtree:Medium',sans-serif] font-medium text-[28px]">Head of Design</p>
          <p className="font-['Figtree:Regular',sans-serif] text-[18px] leading-[24px]">
            Built and scaled the design function from scratch.
          </p>
        </div>
        <div className="absolute right-[26px] top-[26px] size-12">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
            <path d={svgPaths.p1aa5e41c} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p906d4a0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      
      <div className="bg-[#fffefb] rounded-[40px] border border-[#f9f2e7] size-[320px] relative overflow-hidden">
        <div className="absolute bottom-[34px] left-[23px] px-4 flex flex-col gap-3 max-w-[263px] text-black">
          <p className="font-['Figtree:Medium',sans-serif] font-medium text-[24px] leading-[32px]">Lean 3 Member<br />Design Team</p>
          <p className="font-['Figtree:Regular',sans-serif] text-[18px] leading-[24px]">
            Built and scaled the product with a high-output, small team.
          </p>
        </div>
        <div className="absolute right-[26px] top-[26px] size-12">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
            <path d={svgPaths.p2c62d580} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      
      {/* Small Cards Row 2 */}
      <div className="bg-[#fffefb] rounded-[40px] border border-[#f9f2e7] size-[320px] relative overflow-hidden">
        <div className="absolute bottom-[34px] left-[23px] px-4 flex flex-col gap-3 max-w-[263px] text-black">
          <p className="font-['Figtree:Medium','Noto_Sans:Medium',sans-serif] font-medium text-[32px]">₹250+ Cr</p>
          <p className="font-['Figtree:Regular',sans-serif] text-[18px] leading-[24px]">
            Monthly Trading Volume<br /><br />
            Powered a high-frequency, real-time trading platform.
          </p>
        </div>
        <div className="absolute right-[26px] top-[26px] size-12">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
            <path d={svgPaths.p19f1a000} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d="M16 16H32" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d="M16 24H32" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.pfce1e40} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      
      <div className="bg-[#fffefb] rounded-[40px] border border-[#f9f2e7] size-[320px] relative overflow-hidden">
        <div className="absolute bottom-[34px] left-[23px] px-4 flex flex-col gap-3 max-w-[263px] text-black">
          <p className="font-['Figtree:Medium',sans-serif] font-medium text-[24px] leading-[32px]">
            Product,<br />Branding &<br />Growth
          </p>
          <p className="font-['Figtree:Regular',sans-serif] text-[18px] leading-[24px]">
            Owned experience across product, marketing, and ecosystem integration.
          </p>
        </div>
        <div className="absolute right-[26px] top-[26px] size-12">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
            <path d={svgPaths.p3e31ad00} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p2aedfc00} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Case Study Section
function CaseStudySection() {
  return (
    <section className="flex justify-center mt-32 px-4">
      <div className="w-full max-w-[1024px] flex flex-col gap-16">
        <CaseStudyHeader />
        <MetricCards />
      </div>
    </section>
  );
}

// Background Images
function BackgroundImages() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-3.5 left-0 w-[740px] h-[1053px] opacity-10">
        <img alt="" className="w-full h-full object-cover" src={imgImage287} />
        <div className="absolute border border-white inset-0" />
      </div>
      <div className="absolute -top-3.5 right-0 w-[740px] h-[1053px] opacity-10">
        <img alt="" className="w-full h-full object-cover" src={imgImage287} />
      </div>
    </div>
  );
}

// Main Component
export default function CoretexaWebsite() {
  return (
    <div className="bg-[#fffaf1] min-h-screen w-full relative">
      <BackgroundImages />
      <div className="relative z-10">
        <Navigation />
        <main className="pb-32">
          <HeroSection />
          <StatsBar />
          <ExperienceBadge />
          <ProcessSection />
          <MyCredentialsSection />
          <CaseStudySection />
        </main>
      </div>
    </div>
  );
}