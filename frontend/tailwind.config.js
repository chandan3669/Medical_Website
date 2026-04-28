/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#031b4e',
        textSecondary: '#86898c',
        textTertiary: '#fffefe',
        textInverse: '#ffffff',
        surfaceBase: '#000000',
        surfaceRaised: '#3ca2c2',
        surfaceStrong: '#52b0cd',
        lightBlue: '#eef6f9',
        accent: '#f7fbfc'
      },
      fontFamily: {
        sans: ['"Golos Text"', 'sans-serif'],
      },
      borderRadius: {
        'xs': '30px',
        'xl': '1.5rem',
        '2xl': '2rem'
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(3,27,78,0.08)',
        'float': '0 20px 40px -10px rgba(60,162,194,0.15)'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
