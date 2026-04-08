"use client";

import { useState } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { playButtonSound } from "@/components/ui/button-sounds";
import { caseStudies } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type CaseStudy = (typeof caseStudies)[number];

const readCaseStudyIcon =
  "https://www.figma.com/api/mcp/asset/ea77c8c0-1f07-449d-9880-0b3135f59431";
const previousIcon =
  "https://www.figma.com/api/mcp/asset/9ca4e264-4254-4ac0-a3c7-5c9d309e269c";
const nextIcon =
  "https://www.figma.com/api/mcp/asset/442803ef-a424-491f-a464-a4156992f4f7";

function CaseStudyInfoCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      onPointerEnter={() => playButtonSound("hover")}
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
                  <span className="block h-1 w-1 rounded-full bg-[#c9c9c9]" />
                )}
                <p className="text-base font-medium leading-none text-copy">
                  {category}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-2xl font-normal leading-7 text-ink">
              {study.title}
            </h3>
            <p className="text-base leading-[26px] text-copy">{study.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f3f3f3] px-3 py-1.5 text-sm leading-none text-[#747772]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-1 text-base font-semibold leading-none text-moss transition-colors duration-200 group-hover/case:text-[#6aa931]">
          View Case Study
          <img
            src={readCaseStudyIcon}
            alt=""
            className="h-6 w-6 transition-transform duration-300 ease-out group-hover/case:translate-x-1"
            aria-hidden="true"
          />
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
      onPointerEnter={() => playButtonSound("hover")}
      onClick={() => {
        playButtonSound("click");
        onClick();
      }}
      className="relative h-12 w-12 overflow-hidden rounded-full bg-black/60 transition-[background-color,transform] duration-200 hover:scale-[1.03] hover:bg-black/70"
      aria-label={isPrevious ? "Show previous case study image" : "Show next case study image"}
    >
      <img
        src={isPrevious ? previousIcon : nextIcon}
        alt=""
        aria-hidden="true"
        className={cn(
          "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2",
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
    <div className="relative h-[420px] w-full overflow-hidden bg-transparent sm:h-[520px] xl:h-[600px] xl:w-[720px]">
      <img
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        className="absolute left-[-155px] top-[-103px] h-[832px] w-[1281px] max-w-none object-cover"
      />

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-6 xl:bottom-[17px] xl:left-8 xl:right-6">
        <p className="text-base font-medium leading-none text-black" aria-live="polite">
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

export function CaseStudiesSection() {
  const visibleCaseStudies = caseStudies.slice(0, 1);

  return (
    <section id="works" className="pb-16 pt-6 sm:pb-20">
      <Container className="max-w-[1140px]">
        <div className="mb-10 flex flex-col gap-6">
          <div>
            <h2 className="font-serif text-[2.5rem] font-normal leading-[52px] text-ink">
              Case Studies
            </h2>
            <p className="text-base leading-7 text-copy">
              Some case studies are data sensitive, so you need password to see that.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          {visibleCaseStudies.map((study, index) => (
            <article
              key={`${study.title}-${index}`}
              className="group/case flex flex-col overflow-hidden rounded-[24px] border border-white/45 bg-card/65 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl transition-[border-color,box-shadow] duration-200 hover:border-white/70 hover:shadow-[0_20px_54px_rgba(33,35,41,0.08)] xl:flex-row xl:items-center"
            >
              <CaseStudyInfoCard study={study} />
              <CaseStudyCarousel study={study} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
