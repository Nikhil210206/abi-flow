"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = true }: CardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      whileHover={
        interactive && !reduce ? { y: -6, transition: { duration: 0.25 } } : undefined
      }
      className={`group relative overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_2px_24px_-12px_rgba(10,26,47,0.25)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-20px_rgba(10,26,47,0.35)] ${
        className ?? ""
      }`}
    >
      {children}
    </motion.div>
  );
}
