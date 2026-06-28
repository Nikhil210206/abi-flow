import { Cog } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productCategories } from "@/data/products";

export function Products() {
  return (
    <section id="products" className="relative bg-white py-24 sm:py-32">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Products"
          title="Machined metal components, built to spec"
          description="From plug valve internals to wind turbine drive parts — supplied in sizes ½″ to 30″ across a range of certified materials."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat, i) => (
            <Card key={cat.id} delay={(i % 3) * 0.08} className="flex flex-col p-7">
              {/* accent + sector badge */}
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-cyan transition-colors group-hover:bg-cyan group-hover:text-navy">
                  <Cog className="h-5 w-5" />
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    cat.sector === "Renewable"
                      ? "bg-lime/15 text-lime"
                      : "bg-cyan/10 text-cyan"
                  }`}
                >
                  {cat.sector}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-navy">{cat.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-magenta">
                {cat.customer}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {cat.blurb}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-navy/10 pt-5">
                {cat.components.map((comp) => (
                  <li
                    key={comp.name}
                    className="flex flex-col gap-0.5 text-sm sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="font-medium text-navy">{comp.name}</span>
                    <span className="text-xs text-steel">
                      {comp.size} · {comp.material}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
