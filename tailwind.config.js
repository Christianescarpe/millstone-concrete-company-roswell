/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5400',
          hover: '#FF6B1A',
          dark: '#E04700',
          light: '#FF7A33',
        },
        dark: {
          bg: '#0C0D0F',
          surface: '#121418',
          card: '#181B22',
          cardHover: '#1F232C',
          border: '#242833',
          borderLight: '#323746',
          muted: '#8E95A5',
          text: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Barlow Condensed', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
