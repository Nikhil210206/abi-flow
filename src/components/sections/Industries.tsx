import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <Section tone="navy" className="overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="relative grid gap-x-10 gap-y-12 lg:grid-cols-12">
        {/* sticky heading */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Industries We Supply"
              title="Built for the most demanding sectors"
              description="Where reliability is non-negotiable, our components hold the line."
              light
            />
          </div>
        </div>

        {/* index list */}
        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="flex flex-col">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal
                  as="li"
                  key={ind.name}
                  delay={i * 0.06}
                  className="group flex items-center gap-5 border-t border-white/10 py-6 transition-colors first:border-t-0 hover:bg-white/[0.03] sm:gap-7"
                >
                  <span className="font-mono text-sm text-cyan-bright/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-bright ring-1 ring-white/10 transition-colors group-hover:bg-cyan/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {ind.name}
                    </h3>
                    <p className="mt-0.5 truncate text-sm text-mist/60">
                      {ind.blurb}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/20 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
