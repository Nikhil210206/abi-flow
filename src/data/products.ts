export type Component = {
  name: string;
  size: string;
  material: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  customer: string;
  sector: "Oil & Gas" | "Renewable";
  blurb: string;
  components: Component[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "plug-valve",
    title: "Plug Valve (Nordstrom)",
    customer: "Flowserve",
    sector: "Oil & Gas",
    blurb:
      "Precision-machined plug valve internals for severe-service Nordstrom valves.",
    components: [
      { name: "Plug Stem", size: '2" to 30"', material: "ASTM A322 Gr.4140" },
      { name: "Plug", size: '½" to 30"', material: "ASTM A322 Gr.4140" },
      { name: "Equalizer Ring", size: '2" to 30"', material: "ASTM A668 Gr.4140" },
      { name: "Cover", size: '2" to 30"', material: "ASTM A516 Gr.70" },
      { name: "Junk Ring", size: '2" to 30"', material: "ASTM A322 Gr.4140" },
    ],
  },
  {
    id: "slab-gate",
    title: "Slab Gate Valve",
    customer: "Flowserve",
    sector: "Oil & Gas",
    blurb:
      "Slab gate valve components finished to tight tolerances with ENP coating.",
    components: [
      { name: "Slab Gate", size: '2" to 30"', material: "ASTM A516 Gr.70 + 0.003” ENP" },
      { name: "Seat Ring", size: '2" to 30"', material: "ASTM A105N + 0.003” ENP" },
      { name: "Bearing", size: '2" to 30"', material: "AISI SS316 + 0.003” ENP" },
      { name: "Bonnet", size: '2" to 30"', material: "ASTM A516 Gr.70" },
      { name: "Assy. Wedge", size: '2" to 30"', material: "ASTM A516 Gr.70 + 0.001” ENP" },
    ],
  },
  {
    id: "butterfly-valve",
    title: "Butterfly Valve",
    customer: "Emerson",
    sector: "Oil & Gas",
    blurb:
      "High-performance butterfly valve components in stainless and precipitation-hardened steels.",
    components: [
      { name: "Upper & Lower Stem", size: '2" to 24"', material: "ASTM A564 (17-4PH) Cond. H1075" },
      { name: "Backup Ring", size: '2" to 24"', material: "ASTM A276 — UNS S30400" },
      { name: "Gland", size: '2" to 24"', material: "AISI SS316" },
      { name: "Bearing", size: '2" to 24"', material: "AISI SS316 + Nitriding" },
    ],
  },
  {
    id: "gate-globe-check",
    title: "Gate, Globe & Check Valve",
    customer: "Flowserve",
    sector: "Oil & Gas",
    blurb:
      "Trim and body components for gate, globe and check valves.",
    components: [
      { name: "Disc", size: '2" to 30"', material: "As per drawing" },
      { name: "Disc Nut", size: '2" to 30"', material: "As per drawing" },
      { name: "Gland", size: '2" to 30"', material: "As per drawing" },
      { name: "Back Seat", size: '2" to 30"', material: "As per drawing" },
    ],
  },
  {
    id: "ball-valve",
    title: "Ball Valve",
    customer: "Flowserve",
    sector: "Oil & Gas",
    blurb: "Trunnion-mounted ball valve structural components.",
    components: [
      { name: "Top Flange", size: '2" to 30"', material: "As per drawing" },
      { name: "Trunnion", size: '2" to 30"', material: "As per drawing" },
      { name: "Trunnion Plates", size: '2" to 30"', material: "As per drawing" },
      { name: "Cover Flange", size: '2" to 30"', material: "As per drawing" },
    ],
  },
  {
    id: "wind-generation",
    title: "Wind Generation",
    customer: "Flender",
    sector: "Renewable",
    blurb:
      "Gearbox and drive components for wind turbine power generation.",
    components: [
      { name: "Bearing Cover", size: "Custom", material: "As per drawing" },
      { name: "Adapter & End Flange", size: "Custom", material: "As per drawing" },
      { name: "Two-Piece Locking Ring", size: "Custom", material: "As per drawing" },
      { name: "Oil Guide & Centring Ring", size: "Custom", material: "As per drawing" },
    ],
  },
];
