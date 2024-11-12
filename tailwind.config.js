/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 
      // screens: {
      //   'min-300': '300px',  // Point de départ à 300px
      //   'max-600': {'max': '600px'}, // Maximum à 600px
    },
  },
  plugins: [],
};
