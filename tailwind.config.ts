import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        pearl: {
          50: '#fafaf8',
          100: '#f4f3ef',
          200: '#eae8e1',
          300: '#d8d4ca',
        },
        sky: {
          soft: '#dde9f4',
          mist: '#c8ddef',
          haze: '#b4d0ea',
        },
        lavender: {
          soft: '#e8e4f3',
          mist: '#d8d2ec',
          deep: '#b8aed8',
        },
        mint: {
          soft: '#d8ede8',
          mist: '#c2e2db',
          leaf: '#9dcfc4',
        },
        slate: {
          ink: '#1a2333',
          mid: '#334155',
          dim: '#64748b',
        },
        gold: {
          soft: '#f0e6c8',
          warm: '#d4a853',
          bright: '#c49a3c',
        },
      },
      backgroundImage: {
        'mesh-pearl': 'radial-gradient(ellipse at 20% 20%, #dde9f4 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #e8e4f3 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, #d8ede8 0%, transparent 80%)',
        'mesh-aurora': 'radial-gradient(ellipse at 0% 0%, #c8ddef 0%, transparent 50%), radial-gradient(ellipse at 100% 0%, #d8d2ec 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, #c2e2db 0%, transparent 50%)',
        'mesh-hero': 'radial-gradient(ellipse at 30% 20%, rgba(193,218,240,0.6) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(216,210,236,0.5) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(193,226,219,0.4) 0%, transparent 50%)',
        'gradient-cta': 'linear-gradient(135deg, #dde9f4 0%, #e8e4f3 50%, #d8ede8 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,247,244,0.7) 100%)',
        'gradient-divider': 'linear-gradient(90deg, transparent, rgba(100,116,139,0.15), transparent)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(26,35,51,0.06), 0 2px 8px rgba(26,35,51,0.04)',
        'glass-lg': '0 20px 60px rgba(26,35,51,0.08), 0 4px 16px rgba(26,35,51,0.05)',
        'glass-xl': '0 32px 80px rgba(26,35,51,0.10), 0 8px 24px rgba(26,35,51,0.06)',
        'glow-blue': '0 0 40px rgba(180,208,234,0.4)',
        'glow-lavender': '0 0 40px rgba(184,174,216,0.35)',
        'glow-mint': '0 0 40px rgba(157,207,196,0.35)',
        'inner-glass': 'inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(26,35,51,0.04)',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '40px',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'mesh-shift': 'meshShift 12s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'border-flow': 'borderFlow 4s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        meshShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        textShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'cinematic': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config