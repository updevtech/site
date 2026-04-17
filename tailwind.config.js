/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#1b1013",
        "surface-low": "#24191b",
        "surface-highest": "#3e3134",
        "surface-dim": "#1b1013", // Customizing surface-dim for bento grid
        primary: {
          light: "#ffb1c5",
          dark: "#a62d5b",
          DEFAULT: "#ffb1c5",
        },
        "on-primary-container": "#ffd9e2",
        "primary-container": "#a62d5b",
        "outline-variant": "rgba(86, 65, 70, 0.15)",
      },
      fontFamily: {
        headline: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, #ffb1c5, #a62d5b)',
      },
      boxShadow: {
        'internal-glow': 'inset 0 0 20px rgba(255, 177, 197, 0.1)',
      }
    },
  },
  plugins: [],
}
