
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400&display=swap", rel: "stylesheet"}
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              cards: {
                tinyPaste: {
                  title: "tinyPaste",
                  desc: "Article publishing platform with encryption and markdown support.",
                  repoLink: "View on GitHub"
                },
                vkBot: {
                  title: "Bot for Saved photos",
                  desc: "VK (social network) bot for saving any images to the «Saved Pictures» album.",
                  repoLink: "View on GitHub"
                }
              }
            },
            ru: {
              cards: {
                tinyPaste: {
                  title: "tinyPaste",
                  desc: "Сервис для создания статей с поддержкой Markdown и шифрованием.",
                  repoLink: "Репозиторий GitHub"
                },
                vkBot: {
                  title: "Бот для сохраненок",
                  desc: "Бот для ВК предназначенный для сохранения любых изображений в альбом «Сохраненные изображения».",
                  repoLink: "Репозиторий GitHub"
                }
              }
            }
          }
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
