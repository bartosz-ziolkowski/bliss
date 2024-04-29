import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "remi-blue": "#0000b0",
        orange: "#ff3b00",
      },
    },
  },
  plugins: [],
};
export default config;
