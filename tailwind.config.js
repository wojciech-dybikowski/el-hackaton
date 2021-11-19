// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './modules/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './shared/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
      },
      colors: {
        primary: {
          blue: '#1300e8',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
