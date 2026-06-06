import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  // Tint classes are referenced dynamically (bg-${service.tint}) — keep them.
  safelist: [
    "bg-tint-pink",
    "bg-tint-lavender",
    "bg-tint-mint",
    "bg-tint-sky",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        text: "var(--text)",
        heading: "var(--heading)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-2": "var(--accent-2)",
        "tint-pink": "var(--tint-pink)",
        "tint-lavender": "var(--tint-lavender)",
        "tint-mint": "var(--tint-mint)",
        "tint-sky": "var(--tint-sky)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5.5vw, 4.75rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        h1: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.6rem, 2.8vw, 2.5rem)", { lineHeight: "1.14", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14, 32, 74, 0.12)",
        card: "0 1px 2px rgba(14,32,74,0.04), 0 12px 32px -16px rgba(14,32,74,0.18)",
        glow: "0 0 0 1px rgba(72,104,209,0.22), 0 18px 48px -16px rgba(72,104,209,0.4)",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
