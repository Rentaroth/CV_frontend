/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: '100%',
      sm: '120%',
      md: '130%',
      lg: '150%',
      xl: '180%',
      xxl: '240%',
      masive: '520%',
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
