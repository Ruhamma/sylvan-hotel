import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
      },

      colors: {
        primary: "#fafaf2",
        text: "#B3BCA9",
        secondary: "#50643C",
        text2: "#535550",
        tertiary: "#0C0F0A",
      },
    },
  },
  plugins: [],
};
export default config;
