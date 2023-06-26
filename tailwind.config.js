/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'game-cover': "url('/src/img/MassEffect.jpg')",
      }
    },
  },
  plugins: [],
}

