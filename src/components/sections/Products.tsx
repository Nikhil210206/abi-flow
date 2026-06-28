import { ArrowUpRight, Boxes } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { productCategories, type ProductCategory } from "@/data/products";

// Asymmetric bento weighting — never a uniform grid.
const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-4",
  "lg:col-span-8",
];

function SpecList({ cat }: { cat: ProductCategory }) {
  return (
    <ul className="mt-5 space-y-1 border-t border-line pt-5">
      {cat.components.map((comp) => (
        <li
          key={comp.name}
          className="-mx-2 flex flex-col gap-0.5 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-light sm:flex-row sm:items-baseline sm:justify-between"
        >
          <span className="font-medium text-ink">{comp.name}</span>
          <span className="font-mono text-xs text-steel">
            {comp.size} · {comp.material}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CardHead({ cat, index }: { cat: ProductCategory; index: number }) {
  const renewable = cat.sector === "Renewable";
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-steel">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
            renewable ? "bg-lime/15 text-lime" : "bg-cyan/10 text-cyan-deep"
          }`}
        >
          {cat.sector}
        </span>
      </div>
      <ArrowUpRight className="h-5 w-5 text-line transition-colors group-hover:text-cyan" />
    </div>
  );
}

export function Products() {
  return (
    <Section id="products" tone="white">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="relative">
        <SectionHeading
          eyebrow="Our Products"
          title="Machined metal components, built to exact spec"
          description="From plug-valve internals to wind-turbine drive parts — supplied ½″ to 30″ across a range of certified materials and coatings."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {productCategories.map((cat, i) => {
            const wide = spans[i] === "lg:col-span-8";
            return (
              <Card
                key={cat.id}
                delay={(i % 2) * 0.06}
                tone={cat.sector === "Renewable" ? "dark" : "light"}
                className={`flex flex-col p-7 sm:p-8 ${spans[i]}`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    cat.sector === "Renewable"
                      ? "bg-gradient-to-r from-lime to-cyan"
                      : "bg-gradient-to-r from-cyan to-magenta"
                  }`}
                />
                <CardHead cat={cat} index={i} />

                {i === 0 && (
                  <Media
                    ratio="wide"
                    icon={Boxes}
                    label="Plug Valve Internals"
                    tone="steel"
                    alt="Machined plug valve internal components"
                    className="mt-5"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                )}

                <div className={wide ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""}>
                  <div className="mt-5">
                    <h3
                      className={`text-h3 ${
                        cat.sector === "Renewable" ? "text-white" : "text-ink"
                      }`}
                    >
                      {cat.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-eyebrow ${
                        cat.sector === "Renewable" ? "text-lime" : "text-magenta"
                      }`}
                    >
                      {cat.customer}
                    </p>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        cat.sector === "Renewable" ? "text-mist/70" : "text-ink-soft"
                      }`}
                    >
                      {cat.blurb}
                    </p>
                  </div>

                  {cat.sector === "Renewable" ? (
                    <div className="mt-6 flex flex-wrap content-start gap-2 lg:mt-5">
                      {cat.components.map((comp) => (
                        <span
                          key={comp.name}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-mist/85"
                        >
                          {comp.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <SpecList cat={cat} />
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
