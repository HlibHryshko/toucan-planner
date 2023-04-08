/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00403D',
        'secondary-green': '#4B7E77'
      },
      boxShadow: {
        // x, y, blur, adding size, color
        'tile': '14px 14px 8px 0px rgb(0 0 0 / 0.2)'
      },
      width: {
        '3px': '3px'
      }
    },
  },
  plugins: [],
};
