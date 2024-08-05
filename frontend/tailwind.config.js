/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    colors: {
      black: "#000000",
      darkgrey: "#404040",
      lightgrey: "#CDCCCC",
      white: "#FFFFFF",
      skyblue: "DCF0EE",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4169E1",
        secondary: "#ED6D00",
        accent: "#3E9F7A",
      },
      fontFamily: {
        custom: ['"Urbanist"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
