import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "ABI Flow Products (P) Ltd — Precision Components for Oil & Gas and Renewable Energy",
  description:
    "ABI Flow Products is an ISO 9001:2015 certified precision component manufacturer with 44 years of experience, supplying machined valve and flow-control components to Flowserve, Emerson, Flender, MOGAS and more.",
  keywords: [
    "ABI Flow",
    "precision machining",
    "valve components",
    "oil and gas components",
    "Flowserve supplier",
    "CNC machining Chennai",
    "ISO 9001:2015",
  ],
  openGraph: {
    title: "ABI Flow Products (P) Ltd",
    description:
      "Precision machined components for Oil & Gas and Renewable Energy. 44 years of manufacturing excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
