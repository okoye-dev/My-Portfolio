import type { Metadata } from "next";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const display = localFont({
  src: [
    {
      path: "./fonts/area/AreaNormal-Extralight.otf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/area/AreaNormal-ExtralightItalic.otf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const numerals = Hanken_Grotesk({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-num",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Okoye Divine - Product & Graphic Designer",
  description:
    "A product designer with 4 years of experience in crafting engaging user experiences across web and mobile platforms, alongside graphic and brand identity design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${numerals.variable} font-display antialiased`}>{children}</body>
    </html>
  );
}
