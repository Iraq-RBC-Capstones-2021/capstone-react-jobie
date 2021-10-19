module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#EC7063",
        dark: "#34495E",
        light: "#E7ECF2",
        primary: "#072451",
        secondary: "#154360",
        footer: "#546E7A",
        cyan_blue: "#64758D",
        body: "#F8F8F8",
        lightgrey: "#EBEDEF",
        darkgrey: "#929799",
        lightblue: "#D4E6F1",
        borderColor1: "#D4E6F1",
        borderColor2: "#A2D9CE",
        borderColor3: "#EBDEF0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
