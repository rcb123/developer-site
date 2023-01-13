/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#323437',
        border: '#3c3c3c',
        highlight: '#c2c9d6',
      }
    },
  },
  plugins: [require("daisyui")],
}
