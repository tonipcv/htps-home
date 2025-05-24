/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DBFF',
          300: '#8AC2FF',
          400: '#5CA8FF',
          500: '#2E8DFF', // Cor principal similar ao Conta Simples
          600: '#0070E0',
          700: '#0057B0',
          800: '#003D7A',
          900: '#002952',
        },
        navy: {
          50: '#F0F4F9',
          100: '#DCE3F1',
          200: '#B3C2DE',
          300: '#8A9FCB',
          400: '#5D7AB5',
          500: '#3D5A96', // Azul escuro do Conta Simples
          600: '#2E4372',
          700: '#1F2D4D',
          800: '#111A2F',
          900: '#080D18',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 