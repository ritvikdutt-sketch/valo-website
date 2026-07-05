/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,mjs}'],
  theme: {
    extend: {
      colors: {
        valo: {
          green: '#54DB98', teal: '#029491', ink: '#051D1D',
          50: '#ECFBF3', 100: '#D2F4E1', 200: '#A6E9C6', 300: '#54DB98',
          400: '#2BC495', 500: '#12A98C', 600: '#029491', 700: '#07746F',
          800: '#0A4A45', 900: '#051D1D',
        },
        neutral: {
          50: '#F6F8F8', 100: '#EDF1F1', 200: '#DCE3E3', 300: '#C2CDCC',
          400: '#9BA8A7', 500: '#6E7C7B', 600: '#4C5958', 700: '#324140',
          800: '#1B2C2A', 900: '#051D1D',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
};
