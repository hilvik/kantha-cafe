/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'], // Tropikal-like fallback
        body: ['"Arimo"', 'sans-serif'],
      },
      colors: {
        primary: '#1C0F13', // dark text
        accent: '#EEE9E5',  // background
      },
    },
  },
  plugins: [],
};
