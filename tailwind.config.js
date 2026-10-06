/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          bg: '#E9E8D2',
          surface: '#F0EEDD',
          card: '#F4F0DF',
          cardMuted: '#E6E3CC',
          dark: '#292D21',
          primary: '#4D5A38',
          accent: '#82965B',
          sage: '#BAC68B',
          olive: '#66764B',
          moss: '#3B492D',
          cream: '#FBF8EC',
          border: 'rgba(255, 255, 255, 0.65)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'clay-card': '12px 16px 36px rgba(35, 52, 28, 0.10), -8px -8px 24px rgba(255, 255, 255, 0.85), inset 1px 1px 2px rgba(255, 255, 255, 0.8)',
        'clay-card-lg': '18px 24px 48px rgba(35, 52, 28, 0.12), -12px -12px 32px rgba(255, 255, 255, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.7)',
        'clay-pill': '6px 8px 20px rgba(35, 52, 28, 0.08), -5px -5px 15px rgba(255, 255, 255, 0.9)',
        'clay-inset': 'inset 4px 4px 10px rgba(35, 52, 28, 0.10), inset -4px -4px 10px rgba(255, 255, 255, 0.85)',
        'clay-button': '0 8px 20px rgba(30, 48, 25, 0.22), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
        'clay-button-hover': '0 12px 28px rgba(30, 48, 25, 0.32), inset 0 2px 2px rgba(255, 255, 255, 0.45)',
        'clay-float': '0 20px 40px -10px rgba(25, 40, 20, 0.18)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
