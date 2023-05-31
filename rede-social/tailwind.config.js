/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter_400Regular', 'Arial', 'sans-serif'],
        semibold: ['Inter_600SemiBold', 'Arial', 'sans-serif'],
        bold: ['Inter_700Bold', 'Arial', 'sans-serif'],
        black: ['Inter_900Black', 'Arial', 'sans-serif'],
      },
      colors:{
        black: {
          900:"#121214"
        },
      }
    },
  },
  plugins: [],
}

