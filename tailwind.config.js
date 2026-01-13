/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // enables toggling dark mode via 'dark' class
  theme: {
    extend: {
      colors: {
        brand: '#e82264',
        primary: '#e82264'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
