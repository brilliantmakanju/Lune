/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loverBg':'url("/loverBg2.jpg")',
        'loverBgMd':'url("/loverBgMd.png")',
        'loverBgLg':'url("/loverBgLg.png")',
      }
    },
  },
  plugins: [],
}

