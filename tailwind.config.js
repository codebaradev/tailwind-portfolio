/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "17px",
        sm: "1rem",
        md: "5rem"
      }
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#0f172a"
      },
      screens: {
        'xl' : '1250px'
      }
    },
  },
  plugins: [],
}

