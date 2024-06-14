/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#E3FDFD',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            transform: 'translateY(20px)',
          },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animated')],
};
