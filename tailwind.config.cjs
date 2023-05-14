/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'body':["Assistant"],
    },
    extend: {},
  },
  plugins: [],
}
