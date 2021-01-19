module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        teko: ['Teko'],
        arimo: ['Arimo'],
        comfortaa: ['Comfortaa'],
        arvo: ['Arvo'],
        montserrat: ['Montserrat']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
