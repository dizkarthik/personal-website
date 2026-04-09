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

  const rotateX = useTransform(scrollYProgress, [0, 1], [isMobile ? 8 : 16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [isMobile ? 0.92 : 1.05, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [32, 0]);

  return (
    <div ref={containerRef} className="relative mt-8 flex min-h-[260px] items-start justify-center sm:min-h-[600px]">
      <div className="w-full [perspective:1200px]">
        <motion.div
          style={{
            rotateX,
            scale,
            translateY,
          }}
          className="mx-auto w-full overflow-hidden rounded-[22px] sm:rounded-[30px]"
        >
          <div className="h-[260px] w-full overflow-hidden rounded-[14px] bg-[#fffaf1] sm:h-[600px] sm:rounded-[20px]">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
