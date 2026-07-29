import type { Config } from "tailwindcss";

// Design tokens for this portfolio — a "drafting table" identity:
// technical/schematic surfaces, editorial serif body copy, mono annotations.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F1", // drafting paper background
        ink: "#1B1F23", // primary text, near-black
        graphite: "#565F66", // secondary text
        blueprint: "#1E4C8A", // primary technical accent
        "blueprint-dark": "#12335E",
        redline: "#B23A2E", // annotation / callout accent, used sparingly
        line: "#D9D4C8", // hairline / dimension-line color on paper
        "line-dark": "#2E343A", // hairline color on ink surfaces
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        wideish: "0.04em",
        label: "0.14em",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        draw: {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
