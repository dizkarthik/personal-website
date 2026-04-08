"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ContainerScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotateX = useTransform(scrollYProgress, [0, 1], [isMobile ? 5 : 8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [isMobile ? 0.94 : 1.04, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <div ref={containerRef} className="relative mt-8 flex min-h-[420px] items-start justify-center sm:min-h-[520px]">
      <div className="w-full [perspective:1200px]">
        <motion.div
          style={{
            rotateX,
            scale,
            translateY,
            boxShadow:
              "0 8px 18px rgba(33,35,41,0.08), 0 26px 48px rgba(33,35,41,0.08), 0 72px 90px rgba(33,35,41,0.05)",
          }}
          className="mx-auto w-full overflow-hidden rounded-[22px] border-[6px] border-ink bg-ink p-2 sm:rounded-[30px] sm:p-4"
        >
          <div className="h-[220px] w-full overflow-hidden rounded-[14px] bg-[#fffaf1] sm:h-[300px] sm:rounded-[20px]">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
