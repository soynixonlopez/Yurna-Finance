import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3B',
          light: '#152d4d',
          dark: '#061528',
          soft: '#1e3a5f',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#dbb84a',
          dark: '#a68520',
          muted: 'rgba(201, 162, 39, 0.12)',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          dark: '#F5F0E8',
        },
        offwhite: '#F8FAFC',
        slate: {
          text: '#0F172A',
          muted: '#475569',
        },
        card: {
          bg: '#FFFFFF',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        cardHover: '0 12px 28px -8px rgb(11 31 59 / 0.12), 0 4px 12px -4px rgb(0 0 0 / 0.06)',
        gold: '0 4px 14px -2px rgba(201, 162, 39, 0.25)',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at 1px 1px, rgb(201 162 39 / 0.08) 1px, transparent 0)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 80% 50%, rgba(201, 162, 39, 0.08) 0%, transparent 50%)',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
      keyframes: {
        'hero-bg': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-8px) translateX(4px)' },
          '66%': { transform: 'translateY(-4px) translateX(-4px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '32px 32px' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'orb-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.98)' },
        },
        'orb-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-40px, -30px) scale(1.08)' },
        },
        'orb-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(25px, 25px) scale(1.03)' },
        },
      },
      animation: {
        'hero-bg': 'hero-bg 8s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'orb-1': 'orb-1 18s ease-in-out infinite',
        'orb-2': 'orb-2 22s ease-in-out infinite',
        'orb-3': 'orb-3 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
