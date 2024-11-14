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
<<<<<<< HEAD
      }, 
      // screens: {
      //   'min-300': '300px',  // Point de départ à 300px
      //   'max-600': {'max': '600px'}, // Maximum à 600px
=======
      },
    },
    screens: {
      // Points de rupture par défaut de Tailwind
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      // Vos media queries personnalisées
>>>>>>> 01e24ef776cfa5aa7bd7601bd3cb10b1ded1685c
    },
  },
  plugins: [],
};
