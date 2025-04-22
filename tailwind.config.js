/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textDecorationColor: {
        'orange-500': 'theme("colors.orange.500")', // Your custom color here
      },
    },
  },
  plugins: [require('tailwindcss-motion'), require('tailwind-scrollbar-hide')],
}
