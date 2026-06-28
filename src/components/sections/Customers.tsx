"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { customers } from "@/data/customers";

export function Customers() {
  return (
    <section id="customers" className="border-y border-navy/10 bg-light py-20">
      <div className="container-x">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">
            Our Valuable Customers
          </span>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-steel">
            Trusted as a manufacturing partner by global flow-control and energy
            leaders.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-light to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-light to-transparent" />

        <Marquee>
          {customers.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex min-w-[240px] flex-col rounded-2xl border border-navy/10 bg-white px-7 py-5 shadow-sm"
            >
              <span className="font-display text-xl font-bold text-navy">
                {c.name}
              </span>
              <span className="mt-1 text-sm text-steel">{c.detail}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
