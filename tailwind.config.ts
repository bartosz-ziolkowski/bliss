import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "remi-blue": "#0000b0",
        beige: "#F4F0E6",
        green: "#00A878",
      },
      lineHeight: {
        tight: "1.28",
      },
      fontSize: {
        "12xl": "12rem",
      },
      fontFamily: {
        "museo-moderno": "var(--font-museo-moderno)",
        "basker-ville": "var(--font-basker-ville)",
      },
      backgroundSize: {
        "gradient-400": "400%",
      },
      animation: {
        "text-slide-3":
          "text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        "text-slide-3": {
          "0%, 26.66%": {
            transform: "translateY(0%)",
          },
          "33.33%, 60%": {
            transform: "translateY(-25%)",
          },
          "66.66%, 93.33%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
