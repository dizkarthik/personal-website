"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

export function HorizontalScrollGallery({
  images,
}: {
  images: GalleryImage[];
}) {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressMap, setProgressMap] = useState<Record<number, number>>({});
  const [visibilityMap, setVisibilityMap] = useState<Record<number, number>>({});

  useEffect(() => {
    const updateActiveCard = () => {
      const viewportAnchor = window.innerHeight * 0.32;
      let nextActiveIndex = 0;
      const nextProgressMap: Record<number, number> = {};
      const nextVisibilityMap: Record<number, number> = {};

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const rawProgress = (viewportAnchor - rect.top) / Math.max(rect.height, 1);
        nextProgressMap[index] = Math.min(Math.max(rawProgress, 0), 1);
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        nextVisibilityMap[index] = Math.min(
          Math.max(visibleHeight / Math.max(rect.height, 1), 0),
          1,
        );

        if (rect.top <= viewportAnchor) {
          nextActiveIndex = index;
        }
      });

      setActiveIndex(nextActiveIndex);
      setProgressMap(nextProgressMap);
      setVisibilityMap(nextVisibilityMap);
    };

    updateActiveCard();
    window.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      window.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  const lastIndex = images.length - 1;

  const bottomSpacing = useMemo(() => {
    return `${Math.max(images.length - 1, 0) * 2}rem`;
  }, [images.length]);

  return (
    <section className="relative" style={{ paddingBottom: bottomSpacing }}>
      <div className="flex flex-col">
        {images.map((image, index) => {
          const isPast = index < activeIndex;
          const isActive = index === activeIndex;
          const isNext = index === activeIndex + 1;
          const activeProgress = progressMap[activeIndex] ?? 0;
          const nextVisibility = visibilityMap[activeIndex + 1] ?? 0;
          const nextReveal = Math.max(0, (activeProgress - 0.56) / 0.44);
          const fadeProgress = Math.max(0, (nextVisibility - 0.5) / 0.5);
          const handoffProgress = Math.max(nextReveal, fadeProgress);

          let scale = 1;
          let opacity = 1;
          let translateY = 0;

          if (isPast) {
            scale = 0.5;
            opacity = 0;
            translateY = -80;
          } else if (isActive) {
            scale = 1 - fadeProgress * 0.12;
            opacity = Math.max(0.12, 1 - fadeProgress * 1.35);
            translateY = -fadeProgress * 46;
          } else if (isNext) {
            scale = 0.985 + handoffProgress * 0.015;
            opacity = handoffProgress;
            translateY = 120 - handoffProgress * 120;
          } else {
            scale = 0.96;
            opacity = 0;
            translateY = 96;
          }

          return (
            <div
              key={image.src}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="relative"
              style={{
                height: index === lastIndex ? "auto" : "76vh",
                marginTop: index === 0 ? 0 : "-18vh",
                zIndex: index + 1,
              }}
            >
              <div
                className="sticky top-24 overflow-hidden rounded-[24px] border border-[rgba(33,35,41,0.08)] transition-all duration-500 ease-out"
                style={{
                  opacity,
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  transformOrigin: "top center",
                  filter: isPast ? "saturate(0.8)" : "none",
                  boxShadow: isActive || (isNext && nextReveal > 0)
                    ? "0 22px 60px rgba(33, 35, 41, 0.08)"
                    : "0 10px 30px rgba(33, 35, 41, 0.04)",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block w-full"
                />
              </div>
              {isNext && nextReveal > 0 ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[88%] bg-gradient-to-b from-transparent to-[#fffdf8]" />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
