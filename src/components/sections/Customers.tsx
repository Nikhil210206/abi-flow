import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { customers } from "@/data/customers";

export function Customers() {
  return (
    <section
      id="customers"
      className="relative border-y border-line bg-cloud py-14 sm:py-16"
    >
      <div className="container-x">
        <Reveal className="flex flex-col items-center gap-2 text-center">
          <span className="text-eyebrow text-steel">
            Trusted by global flow-control &amp; energy leaders
          </span>
        </Reveal>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-cloud to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-cloud to-transparent" />

        <Marquee>
          {customers.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="group flex min-w-[230px] flex-col rounded-2xl border border-line bg-white/70 px-7 py-5 transition-colors hover:border-cyan/40"
            >
              <span className="font-display text-xl font-semibold tracking-tight text-ink-soft transition-colors group-hover:text-ink">
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
