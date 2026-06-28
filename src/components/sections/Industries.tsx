"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries We Supply"
          title="Engineered for demanding environments"
          description="Our components serve the most critical sectors — where reliability is non-negotiable."
          light
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3"
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.08]"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/15 text-cyan-bright">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold">{ind.name}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-mist/70">
                  {ind.blurb}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
