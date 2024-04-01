/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#88D2F7",
        "secondary" : "#C193B8",
        "tertiary" : "#FFA894",
      }
    },
    screens: {
      'lg': {'max': '2023px'},

      'sm': {'max': '1000px'},
    },
  },
  plugins: [],
}
