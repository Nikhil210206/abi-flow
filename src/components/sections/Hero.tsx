"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Gauge } from "lucide-react";
import { FlowBackground } from "@/components/visuals/FlowBackground";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

function SpecStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-display text-lg font-bold text-white sm:text-xl">
        {value}
      </span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-mist/50">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy text-white"
    >
      <FlowBackground />

      <div className="container-x relative z-10 py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — message */}
          <div className="lg:col-span-7">
            <Reveal
              as="span"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-bright backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              44 Years of Manufacturing Excellence
            </Reveal>

            <Reveal
              delay={0.08}
              className="mt-6 text-4xl font-bold leading-[1.04] sm:text-6xl lg:text-[4.25rem]"
            >
              <h1>
                Precision components for{" "}
                <span className="text-gradient">Oil &amp; Gas</span> and{" "}
                <span className="text-gradient">Renewable Energy</span>
              </h1>
            </Reveal>

            <Reveal
              delay={0.16}
              className="mt-6 max-w-xl text-lg leading-relaxed text-mist/80"
            >
              ABI Flow Products manufactures critical machined components — valve
              trims, stems, gates and flow-control parts — trusted by global
              leaders like Flowserve, Emerson and Flender.
            </Reveal>

            <Reveal delay={0.24} className="mt-9 flex flex-wrap gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-105"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Talk to Us
              </a>
            </Reveal>
          </div>

          {/* RIGHT — glassmorphic spec panel */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl">
              {/* card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />

              <div className="relative z-10">
                {/* headline stat */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/15 text-cyan-bright ring-1 ring-white/15">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold tracking-tight text-white">
                      <CountUp to={44} suffix="+" />
                    </div>
                    <div className="text-sm text-mist/60">
                      Years of precision manufacturing
                    </div>
                  </div>
                </div>

                {/* progress: tested */}
                <div className="mt-8 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-mist/60">Inspected &amp; tested</span>
                    <span className="font-medium text-white">100%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan to-magenta" />
                  </div>
                </div>

                <div className="my-7 h-px w-full bg-white/10" />

                {/* mini grid */}
                <div className="grid grid-cols-3 gap-2">
                  <SpecStat value="24K" label="Sq.ft Plant" />
                  <SpecStat value="5+" label="OEM Clients" />
                  <SpecStat value="ISO" label="9001:2015" />
                </div>

                {/* status pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist/80">
                    <ShieldCheck className="h-3 w-3 text-cyan" />
                    ISO Certified
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist/80">
                    <Award className="h-3 w-3 text-lime" />
                    15 Yrs · Flowserve
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* scroll cue (decorative only) */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <span className="h-2 w-1 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
