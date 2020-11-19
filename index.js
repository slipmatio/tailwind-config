const defaultTheme = require('tailwindcss/defaultTheme')

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.ts',
      './src/**/*.js',
    ],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        slipmat: {
          100: '#FCE6E6',
          200: '#F7BFBF',
          300: '#F29999',
          400: '#E94D4D',
          500: '#DF0000',
          600: '#C90000',
          700: '#860000',
          800: '#640000',
          900: '#430000',
        },
      },
      fontFamily: {
        sans: ['Play', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
