/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: 
    { keyframes: {
      'gradient-reveal': {
        '0%': {
          'background-position': '0% 100%',
          '-webkit-text-fill-color': 'transparent',
        },
        '100%': {
          'background-position': '0% 0%',
          '-webkit-text-fill-color': 'white',
        },
      },
    },
    animation: {
      'gradient-reveal': 'gradient-reveal 3s ease forwards',
    },
  },
  plugins: [],
}
}
