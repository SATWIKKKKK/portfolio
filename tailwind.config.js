/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'bdo': ['BDO Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'sans': ['BDO Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}