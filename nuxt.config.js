// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '@/assets/scss/app.scss' // use our build, as entered via app.scss
  ],
  modules: [
    ['bootstrap-vue/nuxt', { css: false }], // don't include a default build, use ours
    '@nuxtjs/axios',
  ],
  /*
  * Plugins
  */
  plugins: [
    { src: '~/plugins/axios' },
  ],
  /*
  * Axios / API
  */
  axios: {
    //baseURL: 'https://public-api.wordpress.com/wp/v2/sites/diepbeauty.wordpress.com/',
    baseURL: 'https://public-api.wordpress.com/wp/v2/sites/nhipvang.com/',
    https: true,
  },
  ...routerBase,
}

