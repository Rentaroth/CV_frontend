/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: '100%',
      sm: '120%',
      md: '130%',
      lg: '140%',
      xl: '150%',
      xxl: '160%',
    },
    screens: {
      xs: '320px',
      sm: '425px',
      md: '720px',
      lg: '1000px',
      '2k': '1400px',
      '4k': '2500px'
    },
    extend: {},
  },
  plugins: [],
}
