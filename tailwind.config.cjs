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
    extend: {
      colors: {
        mainGreen: '#959c73'
      },
    },

    fontFamily: {
      'body': ["Assistant"],
    },
    
  },
  plugins: [],
}
