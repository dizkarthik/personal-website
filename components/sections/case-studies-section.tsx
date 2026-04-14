"use client";

import { useState } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { playButtonSound } from "@/components/ui/button-sounds";
import { additionalCaseStudyCards, caseStudies } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type CaseStudy = (typeof caseStudies)[number];
type AdditionalCaseStudyCard = (typeof additionalCaseStudyCards)[number];

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.8v4.7l3.1 1.8" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CaseStudyInfoCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      prefetch={false}
      onClick={() => playButtonSound("click")}
      className="group flex min-h-[600px] w-full flex-col bg-transparent px-6 py-8 transition-[background-color] duration-200 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-moss/40 sm:px-10 xl:w-[400px]"
      aria-label={`View case study: ${study.title}`}
    >
      <div className="flex flex-1 flex-col justify-between gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {study.categories.map((category, index) => (
              <div key={category} className="flex items-center gap-3">
                {index > 0 && (
                  <span className="block h-1 w-1 rounded-full bg-moss" />
                )}
                <p className="text-base font-medium leading-none text-moss">
                  {category}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-2xl font-normal leading-[1.25] text-ink">
              {study.title}
            </h3>
            <p className="text-base leading-7 text-copy">{study.description}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#d9dccf] bg-[#f8f8f3] px-4 py-2.5 text-base leading-none text-[#747772]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-1 text-base font-semibold leading-none text-moss transition-colors duration-200 group-hover/case:text-[#6aa931]">
          View Case Study
          <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 ease-out group-hover/case:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function CarouselButton({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      onClick={() => {
        playButtonSound("click");
        onClick();
      }}
      className="relative h-12 w-12 overflow-hidden rounded-full bg-black/60 transition-[background-color,transform] duration-200 hover:scale-[1.03] hover:bg-black/70"
      aria-label={isPrevious ? "Show previous case study image" : "Show next case study image"}
    >
      <ArrowRightIcon
        className={cn(
          "absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-white",
          isPrevious && "rotate-180",
        )}
      />
    </button>
  );
}

function CaseStudyCarousel({ study }: { study: CaseStudy }) {
  const totalImages = study.images.length;
  const [activeIndex, setActiveIndex] = useState(
    Math.min(study.initialIndex ?? 0, totalImages - 1),
  );
  const activeImage = study.images[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? totalImages - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === totalImages - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="relative h-[420px] w-full overflow-hidden bg-transparent sm:h-[520px] xl:h-[600px] xl:w-[660px]">
      <img
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        className="absolute -inset-px h-[calc(100%+2px)] w-[calc(100%+2px)] max-w-none object-cover"
      />

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-6 xl:bottom-[17px] xl:left-8 xl:right-6">
        <p
          className="inline-flex items-center rounded-full bg-[rgba(255,253,248,0.88)] px-4 py-2 text-base font-medium leading-none text-black shadow-[0_6px_16px_rgba(33,35,41,0.08)] backdrop-blur-sm"
          aria-live="polite"
        >
          {activeIndex + 1} of {totalImages}
        </p>
        <div className="flex items-center gap-4">
          <CarouselButton direction="previous" onClick={showPrevious} />
          <CarouselButton direction="next" onClick={showNext} />
        </div>
      </div>
    </div>
  );
}

function SecondaryCaseStudyCard({
  card,
}: {
  card: AdditionalCaseStudyCard;
}) {
  const hasOverlay = Boolean(card.overlaySrc);

  return (
    <article className="overflow-hidden rounded-[24px] bg-card/65 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl transition-shadow duration-200 hover:shadow-[0_20px_54px_rgba(33,35,41,0.08)]">
      <div className="relative h-[240px] overflow-hidden rounded-t-[24px] bg-[#d1d1d1]">
        {card.imageSrc ? (
          <>
            <img
              src={card.imageSrc}
              alt={card.imageAlt}
              className={cn(
                "absolute inset-x-0 top-0 w-full",
                hasOverlay ? "h-[240px] object-cover object-top" : "h-full object-cover",
              )}
            />
            {card.overlaySrc ? (
              <img
                src={card.overlaySrc}
                alt=""
                aria-hidden="true"
                className="absolute left-5 top-[162px] h-auto w-[200px] rounded-[10px] object-contain shadow-[0_8px_20px_rgba(33,35,41,0.08)]"
              />
            ) : null}
          </>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 px-8 pb-10 pt-6">
        <div className="flex flex-wrap items-center gap-3">
          {card.categories.map((category, index) => (
            <div key={category} className="flex items-center gap-3">
              {index > 0 && (
                <span className="block h-1 w-1 rounded-full bg-[#a8aba0]" />
              )}
              <p className="text-base font-medium leading-none text-ink">
                {category}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-serif text-2xl font-normal leading-[1.25] text-ink">
          {card.title}
        </h3>
        <p className="text-base leading-7 text-copy">{card.description}</p>

        {card.status ? (
          <div className="pt-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ecebe8] px-5 py-3 text-[1.125rem] font-medium leading-none text-ink">
              <ClockIcon />
              {card.status}
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function CaseStudiesSection() {
  const visibleCaseStudies = caseStudies.slice(0, 1);

  return (
    <section id="works" className="pb-16 pt-6 sm:pb-20">
      <Container className="max-w-[1140px]">
        <div className="mb-10 flex flex-col gap-6 px-5">
          <div>
            <h2 className="font-serif text-[2.5rem] font-normal leading-[52px] text-ink">
              Case Studies
            </h2>
            <p className="text-base leading-7 text-copy">
              A curated set of work showcasing how I approach complex problems, design systems, and business impact.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {visibleCaseStudies.map((study, index) => (
            <article
              key={`${study.title}-${index}`}
              className="group/case flex flex-col overflow-hidden rounded-[24px] bg-card/65 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl transition-shadow duration-200 hover:shadow-[0_20px_54px_rgba(33,35,41,0.08)] xl:flex-row xl:items-center"
            >
              <CaseStudyInfoCard study={study} />
              <CaseStudyCarousel study={study} />
            </article>
          ))}

          <div className="grid gap-10 lg:grid-cols-2">
            {additionalCaseStudyCards.map((card) => (
              <SecondaryCaseStudyCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
