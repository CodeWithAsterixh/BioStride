/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#56bbe3",
        "primary-dark": "#00b2cb",
        darkComponentsBg: "var(--darkComponentsBg)",
      }
    },
  },
  plugins: [],
}