/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        monsieur: ['var(--font-monsieur)', ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E609",
      },
      animation: {
        'text': 'text 2s ease infinite',
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.5) 2px ,#f5f5f5 5px,#f5f5f5 100px )',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px ,#1b1b1b 8px,#1b1b1b 100px )',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.5) 2px ,#f5f5f5 5px,#f5f5f5 80px )',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px ,#1b1b1b 8px,#1b1b1b 80px )',
        circularLightMd: 'repeating-radial-gradient(rgba(0,0,0,0.5) 2px ,#f5f5f5 5px,#f5f5f5 60px )',
        circularDarkMd: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px ,#1b1b1b 8px,#1b1b1b 60px )',
        circularLightSm: 'repeating-radial-gradient(rgba(0,0,0,0.5) 2px ,#f5f5f5 5px,#f5f5f5 40px )',
        circularDarkSm: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px ,#1b1b1b 8px,#1b1b1b 40px )',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      "xl": { max: "1279px" },
      "lg": { max: "1023px" },
      "md": { max: "767px" },
      "sm": { max: "639px" },
      "xs": { max: "479px" },
    }
  },
  plugins: [],
}
