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
        sans: ["var(--font-kakao-big)", "system-ui", "sans-serif"],
        "kakao-small": ["var(--font-kakao-small)", "system-ui", "sans-serif"],
        "kakao-big": ["var(--font-kakao-big)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
