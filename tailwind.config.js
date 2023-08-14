/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Comforter", "cursive"],
      name: ["Rajdhani", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("./customPlugin.js")],
};
