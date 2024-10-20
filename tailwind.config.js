const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};