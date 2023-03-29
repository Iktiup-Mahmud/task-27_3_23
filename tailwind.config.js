/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lamee': '#a3e635',
        'orange_1': '#f97316'
      }
    },
  },
  plugins: [require("daisyui")],
}
