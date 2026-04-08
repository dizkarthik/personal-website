"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type QuickLink = {
  label: string;
  href: string;
};

export function StickyQuickLinks({ links }: { links: QuickLink[] }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const updatePinnedState = () => {
      const sentinel = sentinelRef.current;

      if (!sentinel) {
        return;
      }

      setIsPinned(sentinel.getBoundingClientRect().top <= 0);
    };

    updatePinnedState();
    window.addEventListener("scroll", updatePinnedState, { passive: true });
    window.addEventListener("resize", updatePinnedState);

    return () => {
      window.removeEventListener("scroll", updatePinnedState);
      window.removeEventListener("resize", updatePinnedState);
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-px" aria-hidden="true" />
      <nav
        aria-label="Case study sections"
        className={cn(
          "sticky top-0 z-[120] flex gap-10 overflow-x-auto border-b border-line bg-white/95 py-3 text-base font-medium backdrop-blur-sm transition-shadow duration-200 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          isPinned && "shadow-[0_8px_24px_rgba(33,35,41,0.04)]",
        )}
      >
        {links.map((tab, index) => (
          <a
            key={`${tab.label}-${tab.href}`}
            href={tab.href}
            className={`relative whitespace-nowrap pb-3 ${
              index === 0 ? "text-ink" : "text-[#747772]"
            }`}
          >
            {tab.label}
            {index === 0 ? (
              <span className="absolute bottom-[-13px] left-0 h-1 w-full rounded-full bg-moss" />
            ) : null}
          </a>
        ))}
      </nav>
    </>
  );
}
