/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFF4ED',
        secondary: '#DB5300',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animated')],
};
