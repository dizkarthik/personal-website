"use client";

import { useEffect, useRef, useState } from "react";

const perchSectionIds = ["home", "about", "works", "tools", "contact"];

type Point = {
  x: number;
  y: number;
};

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function getVisiblePerch(): Point {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let bestSection: HTMLElement | null = null;
  let bestVisibility = 0;

  for (const sectionId of perchSectionIds) {
    const section = document.getElementById(sectionId);

    if (!section) {
      continue;
    }

    const rect = section.getBoundingClientRect();
    const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const visibility = Math.max(visibleHeight, 0);

    if (visibility > bestVisibility) {
      bestVisibility = visibility;
      bestSection = section;
    }
  }

  if (!bestSection) {
    return {
      x: viewportWidth - 120,
      y: 160,
    };
  }

  const rect = bestSection.getBoundingClientRect();
  const sectionSeed = bestSection.id.length * 37;
  const xOffset = 0.18 + ((sectionSeed % 7) / 10);
  const yOffset = 44 + (sectionSeed % 42);

  return {
    x: clamp(rect.left + rect.width * xOffset, 44, viewportWidth - 92),
    y: clamp(Math.max(rect.top, 0) + yOffset, 118, viewportHeight - 92),
  };
}

export function PerchingBird() {
  const cursorOffsetRef = useRef<Point>({ x: 0, y: 0 });
  const flightTimeoutRef = useRef<number | null>(null);
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [facing, setFacing] = useState<"left" | "right">("right");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;

    const updatePerch = () => {
      const nextPerch = getVisiblePerch();
      const cursorOffset = cursorOffsetRef.current;
      const nextPosition = {
        x: clamp(nextPerch.x + cursorOffset.x, 32, window.innerWidth - 92),
        y: clamp(nextPerch.y + cursorOffset.y, 104, window.innerHeight - 84),
      };

      setPosition((currentPosition) => {
        const distance = Math.hypot(
          nextPosition.x - currentPosition.x,
          nextPosition.y - currentPosition.y,
        );

        if (currentPosition.x !== 0 && distance > 18) {
          setIsFlying(true);

          if (flightTimeoutRef.current) {
            window.clearTimeout(flightTimeoutRef.current);
          }

          flightTimeoutRef.current = window.setTimeout(() => {
            setIsFlying(false);
            flightTimeoutRef.current = null;
          }, 920);
        }

        if (currentPosition.x !== 0 && nextPosition.x < currentPosition.x) {
          setFacing("left");
        } else if (currentPosition.x !== 0 && nextPosition.x > currentPosition.x) {
          setFacing("right");
        }

        return nextPosition;
      });
      setIsReady(true);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updatePerch);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      cursorOffsetRef.current = {
        x: ((event.clientX / viewportWidth) - 0.5) * 28,
        y: ((event.clientY / viewportHeight) - 0.5) * 18,
      };
      scheduleUpdate();
    };

    updatePerch();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (flightTimeoutRef.current) {
        window.clearTimeout(flightTimeoutRef.current);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[80] h-14 w-20 transition-[transform] duration-[1600ms] ease-[cubic-bezier(.22,.9,.2,1)]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scaleX(${facing === "left" ? -1 : 1})`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 96 64"
        className={`h-full w-full overflow-visible ${isFlying ? "bird-is-flying" : ""}`}
      >
        <g className="bird-wing">
          <path
            d="M57 25c8-12 22-15 32-7-8 5-17 12-31 18"
            fill="#5a8f22"
          />
        </g>
        <path
          d="M17 35c8-18 29-25 47-13 10 6 13 17 7 25-8 12-33 12-48 3-7-4-9-9-6-15Z"
          fill="#fffaf1"
          stroke="#5a8f22"
          strokeWidth="2.2"
        />
        <path
          d="M28 36c4-10 15-15 28-12 5 1 11 5 14 10-11 10-29 11-42 2Z"
          fill="#efe1cd"
        />
        <path
          d="M21 34c2-9 10-16 20-18-4 7-8 13-8 24-5-1-9-3-12-6Z"
          fill="#5a8f22"
          opacity="0.72"
        />
        <path d="M14 35 5 31l10-4" fill="#5a8f22" />
        <circle cx="24" cy="28" r="2.6" fill="#212329" />
        <path
          d="M42 48c-2 4-4 7-8 9M52 50c-1 4 1 7 4 10"
          fill="none"
          stroke="#5a8f22"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <path
          d="M31 57h-7M57 60h7"
          fill="none"
          stroke="#5a8f22"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    </div>
  );
}
