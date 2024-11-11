/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
      "./src/**/*.tsx",
      "./index.html",
      "./src/components/**/*.tsx",
      "./src/pages/**/*.tsx",
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
    variants: {
      backgroundColor: ['hover', 'focus'],
      borderColor: ['focus', 'hover'],
    },
    extend: {
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
        "playfair": ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
}

