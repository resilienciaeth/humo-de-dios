module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        nude: '#EFD7C4',
      },
      fontFamily: {
        Cinzel: ['Cinzel Decorative'],
        Rumble: ['Rumble Brave Rough'],
        Louisa: ['LouisaCP'],
        Calisto: ['Calisto MT'],
      },
    },
  },
  plugins: [],
}
