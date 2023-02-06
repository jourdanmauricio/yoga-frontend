/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--raleway-font)', ...fontFamily.sans],
        quicksand: ['var(--quicksand-font)', ...fontFamily.sans],
      },
      colors: {
        completed: '#83B919',
        success: '#587e0e',
        titleColor: 'var(--title-color)',
        paragraphColor: 'var(--paragraph-color)',
        buttonColor: 'var(--button-color)',
        divisorColor: 'var(--divisor-color)',
        effectColor: 'var(--effect-color)',
        errorColor: 'var(--error-color)',
        h1Color: 'var(--h1-color)',
        paragraphHeaderColor: 'var(--paragraph-header-color)',
        backgroundColor: 'var(--background-color)',
        backgroundFooterColor: 'var(--background-footer-color)',
        tableHeaderColor: 'var(--table-header-color)',
        tableHeaderTextColor: 'var(--table-header-text-color)',
        tableBodyColor: 'var(--table-body-color)',
        tableBorderColor: 'var(--table-border-color)',
        tableBodyTextColor: 'var(--table-body-text-color)',
      },
    },
  },
  plugins: [],
};
