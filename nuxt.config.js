const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: true }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    base: process.env.DEPLOY_ENV == 'GH_PAGES' ? '/nantai/' : '/'
  },
  generate: {
    routes: function() {
      return ['/quiz/pref/14', '/quiz/pref/22', '/quiz/pref/0',
      '/collection/1', '/collection/2', '/collection/3', '/collection/4', '/collection/5', '/collection/6', '/collection/7', '/collection/8', '/collection/9', '/collection/10',
      '/collection/11', '/collection/12', '/collection/13', '/collection/14', '/collection/15', '/collection/16', '/collection/17', '/collection/18', '/collection/19', '/collection/20',
      '/collection/21', '/collection/22', '/collection/23', '/collection/24', '/collection/25', '/collection/26', '/collection/27', '/collection/28', '/collection/29', '/collection/30',
      '/collection/31', '/collection/32', '/collection/33', '/collection/34', '/collection/35', '/collection/36', '/collection/37', '/collection/38', '/collection/39', '/collection/40',
      '/collection/41', '/collection/42', '/collection/43', '/collection/44', '/collection/45', '/collection/46', '/collection/47', '/collection/48', '/collection/49', '/collection/50',
      '/collection/51', '/collection/52', '/collection/53', '/collection/54', '/collection/55', '/collection/56'
      ]
    }
  }
}
