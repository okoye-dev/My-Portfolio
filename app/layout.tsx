import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/config/site";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const display = localFont({
  src: [
    {
      path: "./fonts/area/AreaNormal-Hairline.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/area/AreaNormal-Extralight.otf",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "./fonts/area/AreaNormal-ExtralightItalic.otf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const numerals = Hanken_Grotesk({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-num",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Sentient (Fontshare, free for commercial use): the italic display serif, in its thinnest weight (Extra Light) */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=sentient@200,201&display=swap"
        />
      </head>
      <body className={`${display.variable} ${numerals.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
