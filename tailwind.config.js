/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        blob:{
          '0%': {transform: 'scale(1)'},
          '33%': {transform: 'scale(1.2)'},
          '66%': {transform: 'scale(0.8)'},
          '100%': {transform: 'scale(1)'},
        },
          //  for experience and project box
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px #9333ea, 0 0 40px #ec4899, 0 0 60px #6366f1' },
          '50%': { boxShadow: '0 0 30px #ec4899, 0 0 50px #6366f1, 0 0 80px #9333ea' },
        },
        
      },

      animation: {
        blob: 'blob 10s infinite',
        glow: 'glow 3s linear ease-in-out infinite',
      },

       backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};