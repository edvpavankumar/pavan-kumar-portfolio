import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050505",
        card: "#111111",
        card2: "#161616",
        gold: {
          DEFAULT: "#C9A227",
          soft: "#E4C76A",
          dim: "#8A712B",
        },
        ivory: "#FFFFFF",
        muted: "#A1A1AA",
        line: "rgba(255,255,255,0.08)",
        lineGold: "rgba(201,162,39,0.35)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A227 0%, #E4C76A 45%, #A3821E 100%)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(201,162,39,0.08), transparent 60%)",
        "noise": "url('/noise.png')",
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(201,162,39,0.35)",
        card: "0 8px 40px -12px rgba(0,0,0,0.6)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
