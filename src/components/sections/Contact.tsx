"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const contactItems = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [
      "ABI Flow Products Pvt. Ltd.",
      "NP-64/2, 9th Street, Sidco, Ambattur Industrial Estate",
      "Chennai – 600098, Tamil Nadu, India",
    ],
    href: "https://maps.google.com/?q=Ambattur+Industrial+Estate+Chennai+600098",
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["afppur@gmail.com"],
    href: "mailto:afppur@gmail.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91-98409 99101"],
    href: "tel:+919840999101",
  },
];

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-white">
      {/* top accent flow line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan via-magenta to-lime" />

      <div className="container-x py-24 sm:py-28">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-bright">
            Get in touch
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Let&apos;s machine your next critical component
          </h2>
          <p className="mt-4 max-w-xl text-lg text-mist/75">
            Send us your drawings and requirements — our team will respond with a
            quote and lead time.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan-bright">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-mist/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-cyan">
                  {item.label}
                </p>
                <div className="mt-2 space-y-0.5">
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-mist/85">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <Logo light />
          <p className="text-sm text-mist/60">
            © {new Date().getFullYear()} ABI Flow Products Pvt. Ltd. · ISO
            9001:2015 Certified · Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
