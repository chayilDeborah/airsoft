import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'background-flow': {
          '0%': { backgroundPosition: '0 100%' },
          '100%': { backgroundPosition: '0 0' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'background-flow': 'background-flow 1s forwards',
        fadeInOut: 'fadeInOut 6s infinite',
      },
    },
  },
  plugins: [],
}
export default config