/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFF4ED',
        secondary: '#DB5300',
      },
      keyframes: {
        fadeOut: {
          '0%': {
            opacity: '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
      },
      animation: {
        fadeOutAnimation: 'fadeOut 1s ease-in-out',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animated')],
};
