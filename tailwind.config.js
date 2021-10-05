const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#EC7063",
        light: "#E7ECF2",
        primary: "#72451",
        secondary: "#154360",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
