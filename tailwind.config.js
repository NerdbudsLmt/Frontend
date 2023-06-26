/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'app-porange': '#E9B11C', // primary
        'app-pblue': '#132E40', // secondary
        'app-sblue': '#3F9BD5', // secondary
        'yellow': '#FFE393',
        
      },
      screens: {
        mobile: "360px",
        tablet: "580px",
        tablet_l: "650px",
        laptop: "780px",
        laptop_l: "1000px",
        desktop: "1020px",
        xl: "1400px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
