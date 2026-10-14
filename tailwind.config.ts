import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      colors: {
        bg: "#13121A",
        paper: "#EFE7D6",
        "paper-deep": "#E6DCC6",
        cream: "#F6F0E3",
        ink: "#2B2430",
        "ink-soft": "#6B6258",
        accent: "#5A4A68",
        orange: {
          DEFAULT: "#D9601E",
          deep: "#B8470F",
          light: "#F29A52",
        },
        gray: {
          white: "#F0F0F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Sentient", "Georgia", "serif"],
        num: ["var(--font-num)", "sans-serif"],
      },
      borderRadius: {
        card: "28px",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
