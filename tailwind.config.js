/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f", // Very dark grey/black for 'Suit' feel
        accent: "#d4af37", // Gold accent
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'], // Modern Korean font recommendation
      }
    },
  },
  plugins: [],
}


