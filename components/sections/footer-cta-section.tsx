"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const contactIcon = "https://www.figma.com/api/mcp/asset/07e5a6ac-5198-4990-98e2-c53c2ee484a6";
const mailIcon = "https://www.figma.com/api/mcp/asset/cff7a77b-37ec-4ca8-8cfd-b9c57a048f0b";
const linkedInIcon = "https://www.figma.com/api/mcp/asset/2663e4c7-023e-4e9a-973c-5188c3273b6c";
const ctaIcon = "https://www.figma.com/api/mcp/asset/06c37a87-a4d2-4171-bd56-69439facb6ab";
const whatsAppIcon = "https://www.figma.com/api/mcp/asset/15488d21-688a-499c-b696-297527b7666e";
const bookingUrl = "https://calendly.com/karthiklm92/30min";
const linkedInUrl = "https://www.linkedin.com/in/dizkarthik/";
const contactButtonClassName = "min-h-[52px] px-4 py-3";
const contactRowClassName =
  "contact-row-stroke relative flex flex-col overflow-hidden rounded-2xl border border-white/45 bg-white/60 px-7 py-6 shadow-[0_10px_28px_rgba(33,35,41,0.04)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between";

type CopyKey = "mobile" | "email" | "linkedin";

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

export function FooterCtaSection() {
  const [toastMessage, setToastMessage] = useState("");
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

  return (
    <footer id="contact" className="pb-24 pt-4 sm:pb-36">
      <Container>
        <div className="grid gap-10 rounded-[20px] border border-white/45 bg-card/65 px-7 py-9 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl sm:px-16 sm:py-12 lg:grid-cols-[1fr_34.5rem] lg:items-center lg:justify-between">
          <div className="flex flex-col items-start gap-7">
            <img src={ctaIcon} alt="" className="h-16 w-16 object-contain" />
            <h2 className="font-serif text-[2.5rem] font-normal leading-[1.25] text-ink">
              Let&apos;s build something meaningful together.
            </h2>
            <Button href={bookingUrl} target="_blank">Book a call</Button>
          </div>

          <div className="flex flex-col gap-4">
            <div className={`${contactRowClassName} gap-12`}>
              <div className="relative z-10 flex items-center gap-4 text-base font-medium text-ink">
                <img src={contactIcon} alt="" className="h-6 w-6 object-contain" />
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
                <Button href="https://wa.me/918760798283" variant="secondary" className={`${contactButtonClassName} gap-1`}>
                  Send Hi
                  <img src={whatsAppIcon} alt="" className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className={`${contactRowClassName} gap-5`}>
              <div className="relative z-10 flex items-center gap-4 text-base font-medium text-ink">
                <img src={mailIcon} alt="" className="h-6 w-6 object-contain" />
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
                <img src={linkedInIcon} alt="" className="h-6 w-6 object-contain" />
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
