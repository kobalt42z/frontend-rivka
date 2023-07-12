/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  plugins: [ require('flowbite/plugin'),require("daisyui")],
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
 
}
