import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#023C63",
      },
      borderRadius: {
        custom: "0px 33.42px 0px 0px",
        small: "0px 0px 35.18px 35.18px",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        medium:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        large: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        xlarge: "0px 30px 100px 0px #02507C26",
      },
    },
  },
  plugins: [],
};
export default config;
