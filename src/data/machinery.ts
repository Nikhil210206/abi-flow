export type Machine = {
  make: string;
  machine: string;
  capacity: string;
  qty: string;
};

export const machinery: Machine[] = [
  { make: "BFW — PL 500", machine: "CNC Horizontal Turning Centre", capacity: "Max. Turning Dia 500mm × 600mm", qty: "2" },
  { make: "BFW — PL 500 EX", machine: "CNC Horizontal Turning Centre", capacity: "Max. Turning Dia 750mm × 600mm", qty: "1" },
  { make: "BFW — BVL 800H", machine: "CNC Vertical Turning Lathe", capacity: "Max. Turning Dia 800mm × 850mm", qty: "1" },
  { make: "LMW — JV Kraft", machine: "Vertical Machining Centre (4th Axis)", capacity: "X-800, Y-450, Z-600", qty: "3" },
  { make: "BFW — 65+", machine: "Vertical Machining Centre (4th Axis)", capacity: "X-1280, Y-700, Z-650", qty: "2" },
  { make: "Kent", machine: "Surface Grinding", capacity: "X-1700, Y-600, Z-500", qty: "1" },
  { make: "Wendt", machine: "Rotary Grinding", capacity: "X-1200, Y-600, Z-600", qty: "1" },
  { make: "WMW", machine: "Cylindrical Grinding", capacity: "Max Grinding Dia 350mm × 1000mm", qty: "1" },
  { make: "EIFCO", machine: "Pillar Drilling", capacity: '1½" Capacity', qty: "2" },
  { make: "Turner", machine: "Lathe", capacity: '7½ ft Lathe', qty: "1" },
];

export type Highlight = {
  name: string;
  model: string;
  specs: { label: string; value: string }[];
};

export const machineHighlights: Highlight[] = [
  {
    name: "MAZAK Integrex",
    model: "i-350H",
    specs: [
      { label: "Max. Machining Dia", value: "670 mm" },
      { label: "Max. Machining Length", value: "1011 mm" },
      { label: "Main Spindle", value: "4000 rpm" },
      { label: "Milling Spindle", value: "12000 rpm · B-Axis 240°" },
    ],
  },
  {
    name: "MAZAK HMC",
    model: "HCN 6800L",
    specs: [
      { label: "Spindle Speed", value: "35–10000 rpm" },
      { label: "Motor Output", value: "37 kW" },
      { label: "Travel (X/Y/Z)", value: "1050 / 900 / 980 mm" },
      { label: "Max. Workpiece", value: "Ø1050 × 1300 mm" },
    ],
  },
  {
    name: "CMM — Accurate",
    model: "Cordimesur CNC",
    specs: [
      { label: "Measuring Range", value: "1000 × 2000 × 800 mm" },
      { label: "Accuracy", value: "2.5 + L/350 µm" },
      { label: "Repeatability", value: "0.002 mm" },
      { label: "Mode", value: "Fully CNC controlled" },
    ],
  },
];
