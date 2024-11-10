/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import tailwindcss_animated from "tailwindcss-animated";

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
    variants: {
      backgroundColor: ['hover', 'focus'],
      borderColor: ['focus', 'hover'],
    },
    extend: {},
  },
  plugins: [
    tailwindcss_animated
  ],
}

