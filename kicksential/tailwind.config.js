/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jordan1': "url('/src/imgs/Jordan1poster.webp')"
      }
    },
  },
  plugins: [],
}

