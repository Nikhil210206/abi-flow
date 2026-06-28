"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Gauge } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { machineHighlights, machinery } from "@/data/machinery";
import { instruments } from "@/data/instruments";

const process = [
  { title: "Certified Stock", note: "Traceable raw material to ASTM / AISI grades." },
  { title: "Multi-Axis CNC", note: "Turning, milling & grinding to tight tolerances." },
  { title: "Inspection", note: "CMM-verified and checked at every stage." },
  { title: "100% Tested", note: "Validated to international standards before dispatch." },
];

function Collapsible({
  title,
  count,
  children,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className="font-display text-base font-semibold text-ink">
          {title}
          <span className="ml-2 font-sans text-sm font-normal text-steel">
            {count} entries
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Facility() {
  return (
    <Section id="facility" tone="light">
      <SectionHeading
        eyebrow="Facility & Infrastructure"
        title="A 24,000 sq.ft precision machining plant"
        description="Multi-axis CNC turning and machining centres, grinding, and full in-house metrology — engineered around a zero-defect quality flow."
      />

      {/* process timeline */}
      <div className="relative mt-14">
        <div
          className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-line lg:block"
          aria-hidden
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white font-mono text-sm font-medium text-cyan-deep">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {step.note}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* machine highlight bento */}
      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        {machineHighlights.map((m, i) => {
          const featured = i === 0;
          return (
            <Card
              key={m.model}
              delay={i * 0.07}
              className={`p-7 ${featured ? "lg:col-span-6" : "lg:col-span-3"}`}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cyan to-magenta transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex items-center gap-2 text-cyan-deep">
                <Gauge className="h-5 w-5" />
                <span className="text-eyebrow">{m.name}</span>
              </div>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">
                {m.model}
              </p>
              <dl
                className={`mt-5 gap-x-6 gap-y-2.5 border-t border-line pt-5 ${
                  featured ? "grid sm:grid-cols-2" : "grid"
                }`}
              >
                {m.specs.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <dt className="text-xs text-steel">{s.label}</dt>
                    <dd className="font-mono text-sm font-medium text-ink">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          );
        })}
      </div>

      {/* spec tables */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Collapsible title="List of Machinery" count={machinery.length}>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-eyebrow text-steel">
                    <th className="py-2 pr-3">Make</th>
                    <th className="py-2 pr-3">Machine</th>
                    <th className="py-2 pr-3">Capacity</th>
                    <th className="py-2">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {machinery.map((m, i) => (
                    <tr key={i} className="border-b border-line/60">
                      <td className="py-2.5 pr-3 font-medium text-ink">{m.make}</td>
                      <td className="py-2.5 pr-3 text-ink-soft">{m.machine}</td>
                      <td className="py-2.5 pr-3 font-mono text-xs text-steel">
                        {m.capacity}
                      </td>
                      <td className="py-2.5 text-ink">{m.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Collapsible>
        </Reveal>

        <Reveal>
          <Collapsible title="List of Instruments" count={instruments.length}>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-eyebrow text-steel">
                    <th className="py-2 pr-3">Description</th>
                    <th className="py-2 pr-3">Make</th>
                    <th className="py-2 pr-3">Range</th>
                    <th className="py-2">L.C.</th>
                  </tr>
                </thead>
                <tbody>
                  {instruments.map((ins, i) => (
                    <tr key={i} className="border-b border-line/60">
                      <td className="py-2.5 pr-3 font-medium text-ink">
                        {ins.description}
                      </td>
                      <td className="py-2.5 pr-3 text-ink-soft">{ins.make}</td>
                      <td className="py-2.5 pr-3 font-mono text-xs text-steel">
                        {ins.range}
                      </td>
                      <td className="py-2.5 font-mono text-xs text-ink">{ins.lc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Collapsible>
        </Reveal>
      </div>
    </Section>
  );
}
