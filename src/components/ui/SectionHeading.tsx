import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <Reveal
      className={`flex max-w-2xl flex-col ${alignment} ${
        align === "center" ? "" : ""
      }`}
    >
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan">
        <span className="h-px w-8 bg-magenta" />
        {eyebrow}
      </span>
      <h2
        className={`text-3xl font-bold sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-mist/80" : "text-steel"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
