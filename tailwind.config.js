/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0A0E12',
          light: '#F5F7F6',
        },
        surface: {
          DEFAULT: '#12171D',
          light: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#E8ECEF',
          light: '#10151A',
        },
        muted: {
          DEFAULT: '#8B96A0',
          light: '#5C6670',
        },
        line: {
          DEFAULT: '#212932',
          light: '#DCE2E2',
        },
        teal: '#2DD4BF',
        amber: '#FFA630',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}
