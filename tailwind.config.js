/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "17px",
      maxWidth: "1230px",
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#64748b",
        dark: "#0f172a"
      },
      screens: {
        'xl' : '1230px',
        '2xl' : '1230px'
      }
    },
  },
  plugins: [],
}

