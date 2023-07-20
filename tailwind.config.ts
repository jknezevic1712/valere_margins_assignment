import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2560px",
      },
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
