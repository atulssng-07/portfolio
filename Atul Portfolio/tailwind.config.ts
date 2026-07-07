import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0d1726",
        mist: "#f6f9fc",
        cyan: {
          glow: "#22d3ee"
        },
        teal: {
          signal: "#14b8a6"
        },
        violet: {
          accent: "#8b5cf6"
        }
      },
      boxShadow: {
        premium: "0 24px 70px rgba(7, 17, 31, 0.18)",
        glow: "0 0 45px rgba(34, 211, 238, 0.18)"
      },
      backgroundImage: {
        "data-grid":
          "linear-gradient(rgba(34, 211, 238, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
