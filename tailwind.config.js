/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Montserrat'],
    },
    backgroundImage: theme => ({
      'hero-pattern': "url('/public/img/background.png')",
     })},
  },
  plugins: [],
}

