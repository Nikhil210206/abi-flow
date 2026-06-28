import {
  Factory,
  Wind,
  Droplets,
  Flame,
  FlaskConical,
  Fan,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
  blurb: string;
};

export const industries: Industry[] = [
  { name: "Oil & Gas", icon: Flame, blurb: "Severe-service valve internals & flow-control components." },
  { name: "Power Plant", icon: Factory, blurb: "Critical machined parts for power generation." },
  { name: "Wind Mill", icon: Wind, blurb: "Drive & gearbox components for wind turbines." },
  { name: "Water Treatment", icon: Droplets, blurb: "Corrosion-resistant components for water systems." },
  { name: "Chemical", icon: FlaskConical, blurb: "Components engineered for aggressive media." },
  { name: "HVAC", icon: Fan, blurb: "Precision parts for heating & cooling systems." },
];
