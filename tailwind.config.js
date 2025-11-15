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
        noto: ['"Noto Sans"', 'sans-serif'], // ✅ Added Noto Sans
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: "#00a117",
        secondary: "#f2f2f2",
        brand: {
          DEFAULT: "#00a216",
          light: "#33cc5c",
          dark: "#007a12",
        },
      },
      boxShadow: {
        subtle: "0px 4px 20px 0px #0000000D",
      },
      lineHeight: {
      '160': '160%',
      }
    },
  },
  plugins: [],
}

module.exports = config;
