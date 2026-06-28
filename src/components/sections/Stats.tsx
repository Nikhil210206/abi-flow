"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const stats = [
  { value: 44, suffix: "", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Components Inspected & Tested" },
  { value: 24, suffix: "K", label: "Sq.ft Manufacturing Facility" },
  { value: 5, suffix: "+", label: "Global OEM Customers" },
];

export function Stats() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Us"
          title="Four decades of machining precision"
          description="We are an ISO 9001:2015 company catering to both domestic and international business — delivering high-quality machined metal components at a competitive price, inspected at every stage and tested 100% to international standards before dispatch."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="relative rounded-2xl border border-navy/10 bg-light p-7"
            >
              <span className="absolute left-7 top-0 h-1 w-12 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan to-magenta" />
              <div className="font-display text-4xl font-bold text-navy sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-steel">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-10 rounded-2xl border border-navy/10 bg-navy p-8 text-mist/85 sm:p-10">
          <p className="text-lg leading-relaxed sm:text-xl">
            <span className="font-semibold text-white">
              Equipped with the latest machinery
            </span>{" "}
            and metrology instruments for manufacturing critical machined
            components — our quality system ensures every part meets the exacting
            demands of severe-service flow control.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
