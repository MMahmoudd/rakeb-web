
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rakeb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Hello From Rakeb Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css'},
      { href: 'https://fonts.googleapis.com/css?family=Tajawal:400,500,700&display=swap&subset=arabic', rel:'stylesheet'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/main.scss',
    '@/assets/style/grid-bootstrap/bootstrap-grid.min.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/telInput', ssr: false },
    {src: '~/plugins/scroll', ssr: false}
    
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    // 'nuxt-buefy'
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
