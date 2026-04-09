"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo-mark";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const resumeUrl =
  "https://drive.google.com/file/d/18jIcINZE1Y5NgtuFuKycQwAzGhoYqaQE/view";
const bookingUrl = "https://calendly.com/karthiklm92/30min";

export function Navbar() {
  const lastScrollYRef = useRef(0);
  const autoHideTimeoutRef = useRef<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const clearAutoHide = () => {
      if (autoHideTimeoutRef.current) {
        window.clearTimeout(autoHideTimeoutRef.current);
        autoHideTimeoutRef.current = null;
      }
    };

    const scheduleAutoHide = () => {
      clearAutoHide();
      autoHideTimeoutRef.current = window.setTimeout(() => {
        if (window.scrollY > 8) {
          setIsHidden(true);
        }
      }, 2000);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setIsScrolled(currentScrollY > 8);

      if (currentScrollY <= 8) {
        clearAutoHide();
        setIsHidden(false);
      } else if (scrollDelta > 6) {
        clearAutoHide();
        setIsHidden(true);
      } else if (scrollDelta < -6) {
        setIsHidden(false);
        scheduleAutoHide();
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearAutoHide();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const keepVisibleBriefly = () => {
    if (!isScrolled) {
      return;
    }

    if (autoHideTimeoutRef.current) {
      window.clearTimeout(autoHideTimeoutRef.current);
    }

    setIsHidden(false);
    autoHideTimeoutRef.current = window.setTimeout(() => setIsHidden(true), 2000);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] py-4 transition-[padding,transform] duration-300 md:py-5",
          isScrolled && "py-3 md:py-4",
          isHidden && "-translate-y-full",
        )}
        onMouseEnter={keepVisibleBriefly}
        onFocus={keepVisibleBriefly}
      >
        <Container>
          <div
            className={cn(
              "flex flex-col gap-5 transition-[background-color,border-color,box-shadow,backdrop-filter,padding] duration-300 ease-out md:flex-row md:items-center md:justify-between",
              isScrolled &&
                "mx-auto max-w-[980px] rounded-[16px] border border-[rgba(33,35,41,0.08)] bg-canvas/70 px-4 py-3 shadow-[0_12px_40px_rgba(33,35,41,0.1)] backdrop-blur-xl md:px-5",
            )}
          >
            <div className="flex items-center justify-between gap-4 md:justify-start md:gap-8">
              <a href="/" aria-label="Go to homepage">
                <LogoMark />
              </a>
              <nav aria-label="Primary navigation" className="hidden overflow-x-auto md:block">
                <ul className="flex min-w-max items-center gap-10 text-base text-ink">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="transition-colors duration-200 hover:text-moss"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-2 md:hidden">
                <Button
                  href={resumeUrl}
                  target="_blank"
                  variant="secondary"
                  className="px-4 py-2 text-xs"
                >
                  Resume
                </Button>
                <Button href={bookingUrl} target="_blank" className="px-4 py-2 text-xs">
                  Book
                </Button>
              </div>
            </div>

            <nav aria-label="Primary mobile navigation" className="overflow-x-auto md:hidden">
              <ul className="flex min-w-max items-center gap-6 text-base text-ink sm:gap-10">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors duration-200 hover:text-moss"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Button
                href={resumeUrl}
                target="_blank"
                variant="secondary"
                className="px-4 py-3 text-base"
              >
                Download Resume
              </Button>
              <Button href={bookingUrl} target="_blank" className="px-5 py-3 text-base">
                Book a Call
              </Button>
            </div>
          </div>
        </Container>
      </header>
      <div className="h-[104px] md:h-[96px]" aria-hidden="true" />
    </>
  );
}
