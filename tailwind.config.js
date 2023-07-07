/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'game-cover': "url('/src/img/MassEffect.jpg')",
        'mass-cover': "url('/src/img/andromeda-cover.jpg')",
        'sims-cover': "url('/src/img/sims4.jpg')",
      }
    },
  },
  plugins: [],
}

