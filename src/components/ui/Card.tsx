"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type CardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Card({ children, className, delay = 0 }: CardProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`reveal ${shown ? "reveal-in" : ""} group relative overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_2px_24px_-12px_rgba(10,26,47,0.25)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(10,26,47,0.35)] ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
