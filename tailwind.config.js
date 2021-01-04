module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        colfax: ['Colfax'],
        avenir: ['Avenir'],
        montserrat: ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
