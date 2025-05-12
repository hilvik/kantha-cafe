/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Arimo"', 'sans-serif'],
      },
      colors: {
        primary: '#1C0F13', // dark text
        accent: 'white',    // Changed to white
      },
    },
  },
  plugins: [],
};