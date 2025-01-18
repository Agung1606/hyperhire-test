import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "serif"],
        notoJp: ["Noto Sans JP", "serif"],
        notoKr: ["Noto Sans KR", "serif"],
        poppins: ["Poppins", "serif"]
      }
    }
  },
  plugins: [],
} satisfies Config;
