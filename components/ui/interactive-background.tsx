"use client";

import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      backgroundRef.current?.style.setProperty("--pointer-x", `${event.clientX}px`);
      backgroundRef.current?.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-canvas [--pointer-x:50vw] [--pointer-y:30vh]"
    >
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(33,35,41,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(33,35,41,0.035)_1px,transparent_1px),radial-gradient(rgba(33,35,41,0.035)_1px,transparent_1px)] [background-position:0_0,0_0,0_0] [background-size:32px_32px,32px_32px,16px_16px]" />
      <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(90,143,34,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(90,143,34,0.16)_1px,transparent_1px),radial-gradient(rgba(90,143,34,0.18)_1px,transparent_1px)] [background-size:32px_32px,32px_32px,16px_16px] [mask-image:radial-gradient(260px_circle_at_var(--pointer-x)_var(--pointer-y),black,rgba(0,0,0,0.58)_38%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(360px_circle_at_var(--pointer-x)_var(--pointer-y),rgba(90,143,34,0.08),transparent_70%)]" />
    </div>
  );
}
