import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(0.3)',
          },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319',
        },
      },
    },
  },
}
export default config
