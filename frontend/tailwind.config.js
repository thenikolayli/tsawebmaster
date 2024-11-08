/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
      "./src/**/*.tsx"
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      "egreen": "#4CAF50",
      "wolive": "#A0B076",
      "sbeige": "#F5F5DC",
      "bcitrus": "#FFA726",
      "dcharcoal": "#333333"
    },
    extend: {},
  },
  plugins: [],
}

