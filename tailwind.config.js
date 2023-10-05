/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
        blob: 'blob 5s infinite alternate'
      },
      keyframes:{
        blob:{
          '0%':{transform: 'translate(0px, 0px) scale(1)'},
          '33%':{transform: 'translate(20px, -50px) scale(1.2)'},
          '66%':{transform: 'translate(-20px, 50px) scale(0.9)'},
          '100%':{transform: 'translate(0px, 0px) scale(1)'},
        }
      },
      colors: {
        main: '#017EB6',
        secondary: '#F8C107',
      }
    },
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      '2md': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
