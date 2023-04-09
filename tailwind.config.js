/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00403D',
        'secondary-green': '#4B7E77',
        'tile-background-green': '#F6FFFE',
        'background-green': '#F3FFFD',
        'sidebar-org-background-green': '#004A47',
        'sidebar-category-background-green': '#005956',
        'sidebar-add-org-background-green': '#027D78'
      },
      boxShadow: {
        // x, y, blur, adding size, color
        'tile': '14px 14px 8px 0px rgb(0 0 0 / 0.2)',
        'org-sidebar': '2px 0px 2px 0px rgb(0 0 0 / 0.4)',
        'plus-org': '0px -3px 4px 0px rgb(0 0 0 / 0.3)',
        'category': '-1px 3px 4px 0px rgb(0 0 0 / 0.3)'
      },
      width: {
        '3px': '3px'
      }
    },
  },
  plugins: [],
};
