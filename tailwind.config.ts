import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#10233E',
          50: '#EEF1F6',
          900: '#0a172b',
        },
        gold: {
          DEFAULT: '#D4A64A',
          warm: '#D4A64A',
          antique: '#C8A45D',
          soft: '#E8C783',
        },
        ivory: {
          DEFAULT: '#F7F4EE',
          cream: '#FFF8EF',
        },
        burgundy: '#8E1F1F',
        charcoal: '#1F1F1F',
        sun: '#F4C542',
        nature: '#7BAE7F',
        sky: '#A8D5E5',
        peach: '#F7C8A3',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        blob: '60% 40% 55% 45% / 50% 60% 40% 50%',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(16, 35, 62, 0.15)',
        glow: '0 30px 80px -20px rgba(212, 166, 74, 0.35)',
        card: '0 20px 60px -25px rgba(16, 35, 62, 0.25)',
        pillow: '0 1px 2px rgba(16,35,62,.06), 0 12px 30px -8px rgba(16,35,62,.12)',
      },
      backgroundImage: {
        'gradient-warm':
          'linear-gradient(135deg, #FFF8EF 0%, #F7C8A3 100%)',
        'gradient-sky':
          'linear-gradient(135deg, #A8D5E5 0%, #FFF8EF 100%)',
        'gradient-gold':
          'linear-gradient(135deg, #D4A64A 0%, #F4C542 100%)',
        'gradient-nature':
          'linear-gradient(135deg, #7BAE7F 0%, #A8D5E5 100%)',
        'gradient-hero':
          'radial-gradient(1200px 600px at 10% 10%, #FFF8EF 0%, transparent 60%), radial-gradient(900px 500px at 90% 20%, #F7C8A3 0%, transparent 60%), radial-gradient(800px 600px at 50% 100%, #A8D5E5 0%, transparent 60%), #FFFDF8',
        noise:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-26px) rotate(2deg)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%,100%': { borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' },
          '50%': { borderRadius: '40% 60% 45% 55% / 60% 40% 60% 40%' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        blob: 'blob 12s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
