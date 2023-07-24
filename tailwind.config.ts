import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cstm-bg": "#060D17",
        "cstm-bg-2": "#10171C",
        "cstm-bg-3": "#1C252F",
      },
      maxWidth: {
        "8xl": "1750px",
      },
    },
  },
  plugins: [],
} satisfies Config;
