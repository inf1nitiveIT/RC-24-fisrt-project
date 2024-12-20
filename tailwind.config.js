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
      'background-pattern': "url('/public/img/main-background.png')",
      'hero-pattern': "url('/public/img/main-hero.png')",
      'about-background-pattern': "url('/public/img/about-background.png')"
     })},
  },
  plugins: [],
}

