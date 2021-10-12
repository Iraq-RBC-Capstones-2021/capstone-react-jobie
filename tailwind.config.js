module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#EC7063",
        dark: "#34495E",
        light: "#E7ECF2",
        primary: "#72451",
        secondary: "#154360",
        footer: "#546E7A"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
