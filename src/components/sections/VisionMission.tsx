"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const vision = [
  "Delivering trend-setting innovations in process and technology",
  "High-performance products without quality compromise",
  "Outstanding service to our customers",
];

const mission = [
  "Deliver quality products at the right price",
  "Retain our customers",
  "Retain our employees",
  "Process innovation",
];

export function VisionMission() {
  return (
    <section className="bg-light py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-navy p-9 text-white"
          >
            <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/15 text-cyan-bright">
              <Lightbulb className="h-6 w-6" />
            </span>
            <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-bright">
              Perfection is our passion
            </p>
            <h3 className="relative mt-2 text-2xl font-bold sm:text-3xl">
              Our Vision
            </h3>
            <ul className="relative mt-6 space-y-3">
              {vision.map((v) => (
                <li key={v} className="flex gap-3 text-mist/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-9"
          >
            <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-magenta/10 blur-3xl" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-magenta/10 text-magenta">
              <Target className="h-6 w-6" />
            </span>
            <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-magenta">
              What drives us
            </p>
            <h3 className="relative mt-2 text-2xl font-bold text-navy sm:text-3xl">
              Our Mission
            </h3>
            <ul className="relative mt-6 space-y-3">
              {mission.map((m) => (
                <li key={m} className="flex gap-3 text-steel">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
