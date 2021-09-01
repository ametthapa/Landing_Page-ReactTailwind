// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        github: "#24292e",
        google: "#cf4538",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
