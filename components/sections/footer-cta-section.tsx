"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const bookingUrl = "https://calendly.com/karthiklm92/30min";
const linkedInUrl = "https://www.linkedin.com/in/dizkarthik/";
const contactButtonClassName = "h-12 px-5";
const contactRowClassName =
  "contact-row-stroke relative flex flex-col overflow-hidden rounded-2xl border border-white/45 bg-white/60 px-7 py-6 shadow-[0_10px_28px_rgba(33,35,41,0.04)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between";
const footerStampCards = ["/assets/figma-stamp.png", "/assets/codex-stamp.png"] as const;

type CopyKey = "mobile" | "email" | "linkedin";

function SectionSparkIcon() {
  return (
    <img
      src="/assets/connect.svg"
      alt=""
      className="h-16 w-16 object-contain"
      aria-hidden="true"
    />
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-moss" aria-hidden="true">
      <path d="M8.5 5.5h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" strokeWidth="1.7"/>
      <path d="M10 8.5h4" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M12 15.7h.01" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-moss" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2.5" strokeWidth="1.7"/>
      <path d="m6 8 6 5 6-5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-moss" aria-hidden="true">
      <path d="M6.7 8.4a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM5.2 9.8h3v9h-3v-9ZM10 9.8h2.9v1.2h.04c.4-.77 1.4-1.58 2.88-1.58 3.08 0 3.65 2.03 3.65 4.67v4.71h-3v-4.17c0-.99-.02-2.27-1.38-2.27-1.39 0-1.6 1.08-1.6 2.2v4.24h-3v-9Z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <img
      src="/assets/whatsapp.svg"
      alt=""
      className="h-5 w-5 object-contain"
      aria-hidden="true"
    />
  );
}

function CopyableText({
  copyKey,
  value,
  children,
  onCopy,
}: {
  copyKey: CopyKey;
  value: string;
  children: string;
  onCopy: (copyKey: CopyKey, value: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onCopy(copyKey, value)}
      className="group inline-flex items-center gap-2 text-left transition-colors duration-200 hover:text-moss focus:outline-none focus-visible:ring-2 focus-visible:ring-moss/40"
      aria-label={`Copy ${children}`}
    >
      <span>{children}</span>
      <span
        className="relative inline-flex h-[1em] w-[1em] items-center justify-center text-[1em] text-[#747772] transition-colors duration-200 group-hover:text-moss"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[1em] w-[1em]"
        >
          <rect x="9" y="9" width="10" height="10" rx="2" />
          <path d="M5 15V7a2 2 0 0 1 2-2h8" />
        </svg>
      </span>
      <span className="sr-only">Copy</span>
    </button>
  );
}

function FooterStampCard({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="h-[108px] w-[90px] object-contain"
      aria-hidden="true"
    />
  );
}

export function FooterCtaSection() {
  const [toastMessage, setToastMessage] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toastTimeoutRef = useRef<number | null>(null);

  const copyValue = async (copyKey: CopyKey, value: string) => {
    await navigator.clipboard.writeText(value);
    const labels: Record<CopyKey, string> = {
      mobile: "Mobile number copied",
      email: "Email copied",
      linkedin: "LinkedIn profile copied",
    };

    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }

    setToastMessage(labels[copyKey]);
    toastTimeoutRef.current = window.setTimeout(() => setToastMessage(""), 1800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const updateScrollTopVisibility = () => {
      setShowScrollTop(window.scrollY > 240);
    };

    updateScrollTopVisibility();
    window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollTopVisibility);
    };
  }, []);

  return (
    <footer id="contact" className="pb-10 pt-4 sm:pb-14">
      <Container>
        <div className="grid gap-10 rounded-[20px] border border-white/45 bg-card/65 px-12 py-9 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl sm:px-[60px] sm:py-12 lg:grid-cols-[1fr_34.5rem] lg:items-center lg:justify-between">
          <div className="flex flex-col items-start gap-7">
            <SectionSparkIcon />
            <h2 className="font-serif text-[2.5rem] font-normal leading-[1.25] text-ink">
              Let&apos;s build something meaningful together.
            </h2>
            <Button href={bookingUrl} target="_blank">Book a call</Button>
          </div>

          <div className="flex flex-col gap-4">
            <div className={`${contactRowClassName} gap-12`}>
              <div className="relative z-10 flex items-center gap-4 text-base font-medium text-ink">
                <ContactIcon />
                <CopyableText
                  copyKey="mobile"
                  value="+918760798283"
                  onCopy={copyValue}
                >
                  8760798283
                </CopyableText>
              </div>
              <div className="relative z-10 grid w-full grid-cols-2 gap-4 sm:w-auto">
                <Button href="tel:+918760798283" variant="secondary" className={contactButtonClassName}>
                  Call Me
                </Button>
                <Button href="https://wa.me/918760798283" target="_blank" variant="secondary" className={`${contactButtonClassName} gap-1`}>
                  Send Hi
                  <WhatsAppIcon />
                </Button>
              </div>
            </div>

            <div className={`${contactRowClassName} gap-5`}>
              <div className="relative z-10 flex items-center gap-4 text-base font-medium text-ink">
                <MailIcon />
                <CopyableText
                  copyKey="email"
                  value="hello@dizkarthik.com"
                  onCopy={copyValue}
                >
                  hello@dizkarthik.com
                </CopyableText>
              </div>
              <Button href="mailto:hello@dizkarthik.com" variant="secondary" className={`relative z-10 ${contactButtonClassName}`}>
                Send a mail
              </Button>
            </div>

            <div className={`${contactRowClassName} gap-5`}>
              <div className="relative z-10 flex items-center gap-4 text-base font-medium text-ink">
                <LinkedInIcon />
                <CopyableText
                  copyKey="linkedin"
                  value={linkedInUrl}
                  onCopy={copyValue}
                >
                  LinkedIn
                </CopyableText>
              </div>
              <Button href={linkedInUrl} target="_blank" variant="secondary" className={`relative z-10 ${contactButtonClassName}`}>
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="overflow-hidden py-12 sm:py-16">
        <Container className="overflow-visible">
          <div className="flex flex-col gap-10 px-0 sm:px-6 lg:grid lg:grid-cols-[max-content_minmax(0,1fr)] lg:items-end lg:gap-[100px]">
            <div className="max-w-[32rem]">
              <div className="flex gap-4">
                {footerStampCards.map((card) => (
                  <FooterStampCard key={card} src={card} />
                ))}
              </div>
              <p className="mt-8 whitespace-nowrap text-[0.875rem] leading-[1.3] text-ink sm:text-[1rem]">
                I designed and built this website with two close collaborators
              </p>
              <p className="mt-2 whitespace-nowrap font-serif text-[1.6rem] leading-none text-ink sm:text-[2.5rem]">
                Figma and Codex in ~16h
              </p>
            </div>

          <div className="flex overflow-visible lg:min-w-0 lg:items-end lg:justify-end">
            <img
              src="/assets/design-for-love.svg"
              alt="Karthik"
              className="-translate-y-[3px] h-auto w-full sm:ml-auto sm:max-w-[18rem] lg:h-[125px] lg:w-auto lg:max-w-none lg:translate-x-3"
            />
          </div>
          </div>
        </Container>
      </div>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Go to top"
        className={`fixed bottom-6 right-6 z-[180] inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink/15 bg-ink px-4 text-sm font-medium text-white shadow-[0_12px_30px_rgba(33,35,41,0.18)] transition-[opacity,transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#30333b] focus:outline-none focus-visible:ring-2 focus-visible:ring-moss/40 sm:bottom-8 sm:right-8 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <span>Scroll to Top</span>
      </button>
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 rounded-full bg-black px-5 py-3 text-base font-medium leading-none text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-[opacity,transform] duration-200 ${
          toastMessage
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {toastMessage}
      </div>
    </footer>
  );
}
