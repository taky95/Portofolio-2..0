import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Tak\'s website',
    // title: '',
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'takumi\'s Portfolio' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Tak\'s Portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://takumiminohara.site' },
      { hid: 'og:title', property: 'og:title', content: 'Tak\'s Portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'I\'m currently open to any project. Please get in touch from the contact page.' },
      { hid: 'og:image', property: 'og:image', content: '~/assets/img/thumb.png' },
      { name: 'twitter:card', content: 'summary' },　//twitter
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {/*
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?' +
          'family=Quicksand:wght@400;600&' +
          'family=Shippori+Mincho:wght@500&' +
          'family=Source+Code+Pro:wght@300&display=swap'*/
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/variables.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/webFontLoader.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-gsap-module'
  ],

  env: {
    WP_REST_API_BASE_URL: process.env.WP_REST_API_BASE_URL
  },

  axios: {
    baseURL: process.env.WP_REST_API_BASE_URL // baseURLの設定
  },

  gsap: {
    extraPlugins: {
      draggable: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  styleResources: {
    scss: ['./assets/*.scss']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Quicksand'
      },
      icons: 'mdi'
    },
    icons: {
      iconfont: 'mdi'
    },
    theme: {
      // dark: false,
      themes: {
        light: {
          primary: '#5C5C5C',
          accent: '#81cdde',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: '#DDDDDD',
          accent: '#8083FF',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
