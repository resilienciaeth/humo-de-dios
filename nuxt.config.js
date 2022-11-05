require('dotenv').config()
export default {
  head: {
    title: 'HUMO DE DIOS',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'HUMO DE DIOS | Smokers Club',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.humodedios.com',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'HUMO DE DIOS',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'HUMO DE DIOS | Smokers Club',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.humodedios.com',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'HUMO DE DIOS',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Smokers Club',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },

  css: ['@/assets/css/main.css'],

  plugins: ['@/plugins/aos.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],

  modules: ['@nuxtjs/axios', '@nuxtjs/cloudinary', '@nuxtjs/dotenv'],

  axios: {
    baseURL: '/',
  },

  cloudinary: {
    cloudName: 'hoursofnft',
  },

  env: {
    NODE_ENV: process.env.NODE_ENV,
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    vendor: ['vue-vimeo-player'],
  },
}
