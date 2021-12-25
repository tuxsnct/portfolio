/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix, unicorn/prefer-module */

const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  purge: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  darkMode: 'media',
  plugins: [
    require('tailwindcss-ripple')(),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    ripple: (theme) => ({
      colors: theme('colors')
    }),
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      alignSelf: {
        start: 'start'
      },
      gridTemplateColumns: {
        fit: 'repeat(auto-fit, minmax(0, 1fr))'
      },
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      }
    }
  },
  variants: {}
}

/* eslint-enable */
