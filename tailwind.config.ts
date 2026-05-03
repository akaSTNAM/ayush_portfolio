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
        'bg-base': '#050510',
        'accent-violet': '#7C3AED',
        'accent-cyan': '#06B6D4',
        'text-primary': '#F1F5F9',
        'text-muted': '#94A3B8',
        'glass-border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'violet-cyan': 'linear-gradient(135deg, #7C3AED, #06B6D4)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
