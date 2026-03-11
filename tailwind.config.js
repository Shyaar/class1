
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#E2E205",
          200: "#888883"
        }
      },
      fontFamily: {
        body: ['nunito'],
        heading: ['unifrakturmaguntia']
      }
    }
  },
  plugins: []
}