"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { playButtonSound } from "@/components/ui/button-sounds";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  target,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onPointerEnter={() => playButtonSound("hover")}
      onClick={() => playButtonSound("click")}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-5 py-3 text-base font-normal leading-none transition-[background-color,box-shadow,color,transform] duration-200",
        variant === "primary" &&
          "bg-olive text-white shadow-button hover:translate-x-1 hover:translate-y-1 hover:bg-[#6aa931] hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none",
        variant === "secondary" &&
          "border-2 border-ink bg-transparent text-ink shadow-outlineButton hover:translate-x-1 hover:translate-y-1 hover:bg-ink hover:text-white hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none",
        className,
      )}
    >
      {children}
    </Link>
  );
}
