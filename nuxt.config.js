
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'megaworld',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'megaworld official web-site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400&display=swap", rel: "stylesheet"},
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"},
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}
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
  plugins: ['~plugins/vue-tilt'],
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
          detectBrowserLanguage: {
            // Set to always redirect to value stored in the cookie, not just once
            alwaysRedirect: true
          },
          messages: {
            en: {
              cards: {
                tinyBrightness: {
                  title: "tinyBrightness",
                  desc: "Tiny utility to change monitor brightness via DDC/CI.",
                  repoLink: "View on GitHub"
                },
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
                tinyBrightness: {
                  title: "tinyBrightness",
                  desc: "Небольшая утилита для управления яркостью монитора через DDC/CI.",
                  repoLink: "Репозиторий GitHub"
                },
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
