/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        righteous:['Righteous', 'sans-serif'],
        saira:['Saira', 'sans-serif'],
        rowdies:['Rowdies', 'sans-serif'],
      },
      fontSize:{
        '80':'5rem',
        '191':'11.938rem',
      }
    },
  },
  plugins: [],
}

