import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium tracking-[-0.01em] transition-colors duration-200",
        variant === "primary" &&
          "bg-olive text-white shadow-button hover:bg-[#4a8f27]",
        variant === "secondary" &&
          "border-2 border-black bg-transparent text-ink shadow-outlineButton hover:bg-black hover:text-canvas",
        className,
      )}
    >
      {children}
    </Link>
  );
}
