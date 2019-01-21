import axios from 'axios'
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hp.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', id: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.6/jquery.fancybox.min.js', body: true },
      { src: '/js/app.js', body: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css'},
      { rel:' stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.6/jquery.fancybox.min.css' },
      { rel: 'stylesheet', href: '/css/app.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    {src:'~plugins/vue-swiper', ssr: false},
    {src:'~plugins/vue-accordion', ssr: false},
    {src:'~plugins/vue-maps', ssr: false},
    {src:'~plugins/vue-lazy', ssr: false}
  ],
  generate: {
    routes: function () {
      return axios.get('http://5.23.53.82/api/catalog/?count=700')
      .then((res) => {
        return res.data.ELEMENTS.map((el) => {
          return `/${el.SECTION[0].CODE}/${el.CODE}`
        })
      })
    }
  },
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'vue-awesome-swiper', 'vue-badger-accordion', 'js-cookie', 'vue-yandex-maps', '@kevindesousa/vue-image-loader'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}

