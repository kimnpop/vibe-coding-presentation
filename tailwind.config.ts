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
      boxShadow: {
        subtle: "0 4px 12px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
      },
    },
  },
  plugins: [],
};

export default config;
