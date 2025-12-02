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
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: "#00a117",
        secondary: "#f2f2f2",
        darkgrey: "#1A1A1A",
        lightgrey: "#646464",
        brand: {
          DEFAULT: "#00a216",
          light: "#33cc5c",
          dark: "#007a12",
        },
      },
    },
  },
  plugins: [],
}

module.exports = config;
