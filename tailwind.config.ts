import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        afh: {
          primary: "#1e3a5f",
          secondary: "#2d5a87",
          accent: "#4a90a4",
          light: "#e8f4f8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
