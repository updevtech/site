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
          light: "#dc2430",
          dark: "#7b4397",
          DEFAULT: "#dc2430",
        },
        "on-primary-container": "#ffffff",
        "primary-container": "#7b4397",
        "outline-variant": "rgba(86, 65, 70, 0.15)",
      },
      fontFamily: {
        headline: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, #7b4397, #dc2430)',
      },
      boxShadow: {
        'internal-glow': 'inset 0 0 20px rgba(220, 36, 48, 0.12)',
      }
    },
  },
  plugins: [],
}
