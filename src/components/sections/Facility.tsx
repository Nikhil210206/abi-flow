"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Gauge, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { machineHighlights, machinery } from "@/data/machinery";
import { instruments } from "@/data/instruments";

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
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className="font-display text-base font-bold text-navy">
          {title}
          <span className="ml-2 text-sm font-normal text-steel">
            ({count} entries)
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
    <section id="facility" className="bg-light py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Facility & Infrastructure"
          title="A 24,000 sq.ft precision machining plant"
          description="Equipped with multi-axis CNC turning and machining centres, grinding, and full in-house metrology — every component is inspected at every stage and tested 100% to international standards before dispatch."
        />

        {/* highlight machines */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {machineHighlights.map((m, i) => (
            <Reveal
              key={m.model}
              delay={i * 0.08}
              className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-7"
            >
              <span className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-cyan/10 blur-2xl" />
              <Gauge className="h-6 w-6 text-cyan" />
              <h3 className="mt-4 text-lg font-bold text-navy">{m.name}</h3>
              <p className="font-display text-2xl font-bold text-magenta">
                {m.model}
              </p>
              <dl className="mt-5 space-y-2 border-t border-navy/10 pt-4">
                {m.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between gap-3 text-sm"
                  >
                    <dt className="text-steel">{s.label}</dt>
                    <dd className="text-right font-medium text-navy">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        {/* inspection note */}
        <Reveal className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-navy/10 bg-white px-7 py-5">
          {[
            "Inspected at every stage",
            "100% tested before dispatch",
            "CMM-verified to drawing",
          ].map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy"
            >
              <CheckCircle2 className="h-5 w-5 text-lime" />
              {t}
            </span>
          ))}
        </Reveal>

        {/* full lists */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Collapsible title="List of Machinery" count={machinery.length}>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-navy/10 text-xs uppercase tracking-wide text-steel">
                      <th className="py-2 pr-3 font-semibold">Make</th>
                      <th className="py-2 pr-3 font-semibold">Machine</th>
                      <th className="py-2 pr-3 font-semibold">Capacity</th>
                      <th className="py-2 font-semibold">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {machinery.map((m, i) => (
                      <tr key={i} className="border-b border-navy/5">
                        <td className="py-2.5 pr-3 font-medium text-navy">
                          {m.make}
                        </td>
                        <td className="py-2.5 pr-3 text-steel">{m.machine}</td>
                        <td className="py-2.5 pr-3 text-steel">{m.capacity}</td>
                        <td className="py-2.5 text-navy">{m.qty}</td>
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
                    <tr className="border-b border-navy/10 text-xs uppercase tracking-wide text-steel">
                      <th className="py-2 pr-3 font-semibold">Description</th>
                      <th className="py-2 pr-3 font-semibold">Make</th>
                      <th className="py-2 pr-3 font-semibold">Range</th>
                      <th className="py-2 font-semibold">L.C.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {instruments.map((ins, i) => (
                      <tr key={i} className="border-b border-navy/5">
                        <td className="py-2.5 pr-3 font-medium text-navy">
                          {ins.description}
                        </td>
                        <td className="py-2.5 pr-3 text-steel">{ins.make}</td>
                        <td className="py-2.5 pr-3 text-steel">{ins.range}</td>
                        <td className="py-2.5 text-navy">{ins.lc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Collapsible>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
