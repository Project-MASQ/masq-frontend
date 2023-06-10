/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#B76E79",
        cloudDark: "#BAC7D5",
        mainDark: "#2B3847",
      }
    },
  },
  plugins: [],
}