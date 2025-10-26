/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'], 
      },
      colors: {
        primary: "#00a117", 
        secondary: "#f2f2f2",
        brand: {
          DEFAULT: "#00a216",
          light: "#33cc5c",
          dark: "#007a12",
          fadeGreen: "#C7EBCF4D"
        },
      },
    },
  },
  plugins: [],
}

module.exports = config;