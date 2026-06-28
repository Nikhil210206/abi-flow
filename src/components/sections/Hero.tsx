"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";
import { FlowBackground } from "@/components/visuals/FlowBackground";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy text-white"
    >
      <FlowBackground />

      <div className="container-x relative z-10 py-28">
        <div className="max-w-3xl">
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
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
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
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to Us
            </a>
          </Reveal>

          <Reveal
            delay={0.32}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-mist/70"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-cyan" />
              ISO 9001:2015 Certified
            </span>
            <span className="inline-flex items-center gap-2">
              <Award className="h-5 w-5 text-cyan" />
              15 Years of Partnership with Flowserve
            </span>
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
