/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-blue': {
          50: '#e6f8ff',
          100: '#b3e7ff',
          200: '#80d5ff',
          300: '#4dc3ff',
          400: '#1ab2ff',
          500: '#00a0ff',
          600: '#007ecc',
          700: '#005c99',
          800: '#003a66',
          900: '#001833',
        },
        'neon-green': {
          50: '#e6fff2',
          100: '#b3ffdc',
          200: '#80ffc5',
          300: '#4dffae',
          400: '#1aff97',
          500: '#00e680',
          600: '#00b366',
          700: '#00804d',
          800: '#004d33',
          900: '#00261a',
        },
      },
      animation: {
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'border-glow': 'border-glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
        'border-glow': {
          '0%, 100%': {
            borderColor: 'rgba(56, 189, 248, 0.5)',
          },
          '50%': {
            borderColor: 'rgba(6, 182, 212, 0.75)',
          },
        },
      },
      boxShadow: {
        'neon-glow': '0 0 5px rgba(56, 189, 248, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
        'neon-focus': '0 0 0 3px rgba(56, 189, 248, 0.5)',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};