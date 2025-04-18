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
      borderRadius: {
        'custom-1': '25px',
        'custom-2': '50px',
        'custom-3': '35px',
      },
      width: {
        'card-1': '280px',
        'card-2': '300px',
        'card-3': '260px',
      },
      height: {
        'card-1': '340px',
        'card-2': '360px',
        'card-3': '320px',
      },
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
        "playfair": ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
}

