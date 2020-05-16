import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ゆるふわてとらん！',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'keywords', content: '学生 技術 エンジニア 雑談 ツイキャス ゆるふわてとらん！'},
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'ゆるふわてとらん！'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://yurufuwaan.github.io'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'ゆるふわてとらん！は、毎週日曜午後4時からやっている、学生技術雑談ツイキャスです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://github.com/yurufuwaan/yurufuwaan.github.io/blob/develop/static/logo.jpg?raw=true'
      }
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
  css: ['@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['plugins/contentful'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-166620379-1'
      }
    ],
    '@nuxtjs/fontawesome',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          background: colors.red.darken4,
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true, // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    use: []
  },
  debug: {
    enabled: true,
    sendHitTask: true
  },
  // router: {
  //   base: '/yurufuwaan.github.io/'
  // }
  fontawesome: {
    icons: {
      brands: ['faTwitter', 'faSoundcloud', 'faSpotify']
    }
  },
}
