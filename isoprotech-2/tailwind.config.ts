// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        teal: {
          50: "#eef6f8",
          100: "#d5e8ed",
          200: "#a8d0db",
          300: "#7ab8c9",
          400: "#4d9fb7",
          500: "#2d7a8e",
          600: "#1E4C59",  // brand primary
          700: "#1a4250",
          800: "#163844",
          900: "#15353e",  // brand dark
          950: "#0d2229",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffeed4",
          200: "#fdd9a8",
          300: "#fbbf71",
          400: "#F79448", // brand accent
          500: "#f57a1f",
          600: "#e66315",
          700: "#be4c13",
          800: "#973d17",
          900: "#7a3416",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
