/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#19c1d8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We'll need to import Inter later or rely on system fonts for now
      }
    },
  },
  plugins: [],
}
