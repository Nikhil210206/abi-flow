import { BadgeCheck, RefreshCcw, Users, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const cycle = [
  { label: "Customer Satisfaction", icon: HeartHandshake },
  { label: "Continuous Improvement", icon: RefreshCcw },
  { label: "Total Participation", icon: Users },
];

export function Quality() {
  return (
    <section id="quality" className="bg-white py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Quality & Certifications"
            title="Quality is built into every cut"
            description="ABI Flow Products operates a management system certified to ISO 9001:2015 by TÜV NORD — covering the manufacture and supply of machined metal components."
          />

          <Reveal className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-navy/10 bg-light px-6 py-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-cyan">
              <BadgeCheck className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-navy">
                ISO 9001:2015
              </p>
              <p className="text-sm text-steel">Certified by TÜV NORD</p>
            </div>
          </Reveal>

          <Reveal className="mt-6 max-w-lg rounded-2xl bg-navy p-7 text-mist/85">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              Quality Policy
            </p>
            <p className="mt-3 leading-relaxed">
              Committed to satisfy our customers through effective implementation
              of the Quality Management System, a continual-improvement approach,
              resource management, and compliance with statutory and regulatory
              requirements.
            </p>
          </Reveal>
        </div>

        {/* quality cycle */}
        <div className="relative mx-auto flex max-w-md flex-col gap-4">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-cyan via-magenta to-lime" />
          {cycle.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal
                key={c.label}
                delay={i * 0.1}
                className="relative flex items-center gap-5 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-cyan">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-bold text-navy">
                  {c.label}
                </span>
              </Reveal>
            );
          })}
          <Reveal
            delay={0.3}
            className="mt-2 text-center text-sm font-medium text-steel"
          >
            A self-reinforcing cycle at the core of our Quality Policy.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
