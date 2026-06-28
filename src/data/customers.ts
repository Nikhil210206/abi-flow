export type Customer = {
  name: string;
  detail: string;
};

// Customer names rendered as styled text badges (not copied logos) to avoid
// trademark image use. TODO: swap in official logos (with permission) later.
export const customers: Customer[] = [
  { name: "Flowserve", detail: "India Controls Pvt. Ltd." },
  { name: "Flowserve Gulf", detail: "FZE, Dubai — UAE" },
  { name: "Flender", detail: "Drivers Pvt. Ltd." },
  { name: "MOGAS", detail: "Industries India Ltd." },
  { name: "Emerson", detail: "Process Management" },
];
