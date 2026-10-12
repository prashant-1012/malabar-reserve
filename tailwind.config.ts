import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1C2417",
        gold: "#9B7733",
        "gold-dark": "#7C5F29",
        cream: "#F6EDE3",
        brown: "#3D2B1F",
        // Label colour for gold surfaces. `brown` on gold is only 3.25:1.
        ink: "#0D1006",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Metallic gold. Flat #9B7733 reads as "a muddy brown button" — and at
        // 3.25:1 against the old brown label it also failed WCAG AA.
        //
        // Brand gold is the *darkest* stop rather than the whole fill, so the
        // brand colour is preserved while the button gains real highlight. With
        // the near-black `ink` label every stop clears 4.5:1 (4.64 → 7.73).
        "gold-sheen":
          "linear-gradient(135deg, #C2A055 0%, #A98238 52%, #9B7733 100%)",
      },
      // Brand-tinted elevation. Neutral grey shadows go muddy on a warm cream page.
      boxShadow: {
        "lift-1":
          "0 1px 2px rgba(61,43,31,0.04), 0 2px 8px rgba(61,43,31,0.04)",
        "lift-2":
          "0 2px 4px rgba(61,43,31,0.05), 0 8px 24px rgba(61,43,31,0.07)",
        "lift-3":
          "0 4px 8px rgba(61,43,31,0.06), 0 20px 48px rgba(61,43,31,0.10)",
        "glow-gold": "0 8px 32px rgba(155,119,51,0.18)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
        "brand-in": "cubic-bezier(0.64, 0, 0.78, 0)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
        600: "600ms",
      },
      // Dropdown panel enter/exit. Exit runs at ~60% of enter — matching
      // durations makes a menu feel sluggish to dismiss.
      keyframes: {
        "select-in": {
          from: { opacity: "0", transform: "translateY(-4px) scale(0.97)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "select-out": {
          from: { opacity: "1", transform: "translateY(0) scale(1)" },
          to: { opacity: "0", transform: "translateY(-4px) scale(0.97)" },
        },
      },
      animation: {
        "select-in": "select-in 180ms cubic-bezier(0.22, 1, 0.36, 1)",
        "select-out": "select-out 110ms cubic-bezier(0.64, 0, 0.78, 0)",
      },
      // Negative tracking at display sizes — Playfair at 72px with default tracking reads loose.
      letterSpacing: {
        display: "-0.02em",
        "display-sm": "-0.015em",
        "display-xs": "-0.01em",
      },
    },
  },
  plugins: [],
};
export default config;
