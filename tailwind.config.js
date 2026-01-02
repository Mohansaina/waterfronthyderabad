/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0a192f',
        'teal': '#00adb5',
        'beige': '#e6d5b8',
        'amber': '#f8b500',
        'gold': '#ffd700',
      }
    },
  },
  plugins: [],
}