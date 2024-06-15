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
        customPing: {
          '0%': {
            opacity: '0',
            width: '100%',
          },
          '50%': {
            opacity: '1',
            width: '50%',
          },
          '100%': { opacity: '0', width: '100%' },
        },
      },
      animation: {
        likeAnimation: 'customPing 1s ease-in-out',
        likeAnimationTwo: 'animate-ping animate-once animate-duration-1000 animate-ease-in',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animated')],
};
