/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "gray-1": "#F9F9F9",
      "gray-2": "#F3F3F3",
      "gray-3": "#D3D6DA",
      "gray-4": "#DADCE0",
      "gray-5": "#939B9F",
      "gray-6": "#56575E",
      "gray-7": "#818181",
      "ligh-blue": "#565F7E",
      "dark-blue": "#262B3C",
      "light-green": "#6AAA64",
      "dark-green": "#66A060",
      "dark-yellow": "#CEB02C",
    },
    extend: {},
  },
  plugins: [],
};
