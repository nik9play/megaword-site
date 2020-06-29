
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
    ['@nuxtjs/device'],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US'
          }, 
          {
            code: 'ru',
            iso: 'ru-RU'
          }
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true
        },
        strategy: "prefix",
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              cards: {
                tinyBrightness: {
                  title: "tinyBrightness",
                  desc: "Tiny utility to change monitor brightness via DDC/CI.",
                  repoLink: "View on GitHub",
                  imgSrc: "/tinybrightness-scr.svg",
                  link: "https://github.com/nik9play/tinyBrightness/releases",
                  repoHref: "https://github.com/nik9play/tinyBrightness"
                },
                tinyPaste: {
                  title: "tinyPaste",
                  desc: "Article publishing platform with encryption and markdown support.",
                  repoLink: "View on GitHub",
                  imgSrc: "/tinyPaste-scr.svg",
                  link: "https://tinypaste.megaworld.space",
                  repoHref: "https://github.com/nik9play/tinypaste"
                },
                vkBot: {
                  title: "Bot for «Saved Pictures»",
                  desc: "VK social network bot for saving any images to the «Saved Pictures» album.",
                  repoLink: "View on GitHub",
                  imgSrc: "/vkbot-scr.svg",
                  link: "https://vk.me/botsavepics",
                  repoHref: "https://github.com/nik9play/vk-bot-picture"
                },
                vkMusicBot: {
                  title: "VK Music Bot",
                  desc: "Discord bot for playing music from VK social network.",
                  repoLink: "View on GitHub",
                  imgSrc: "/vkmusicbot-scr.svg",
                  link: "https://vkmusicbot.megaworld.space",
                  repoHref: "https://github.com/nik9play/vk-music-bot"
                }
              }
            },
            ru: {
              cards: {
                tinyBrightness: {
                  title: "tinyBrightness",
                  desc: "Небольшая утилита для управления яркостью монитора через DDC/CI.",
                  repoLink: "Репозиторий GitHub",
                  imgSrc: "/tinybrightness-scr.svg",
                  link: "https://github.com/nik9play/tinyBrightness/releases",
                  repoHref: "https://github.com/nik9play/tinyBrightness"
                },
                tinyPaste: {
                  title: "tinyPaste",
                  desc: "Сервис для создания статей с поддержкой Markdown и шифрованием.",
                  repoLink: "Репозиторий GitHub",
                  imgSrc: "/tinyPaste-scr.svg",
                  link: "https://tinypaste.megaworld.space",
                  repoHref: "https://github.com/nik9play/tinypaste"
                },
                vkBot: {
                  title: "Бот для сохраненок",
                  desc: "Бот для ВК предназначенный для сохранения любых изображений в альбом «Сохраненные изображения».",
                  repoLink: "Репозиторий GitHub",
                  imgSrc: "/vkbot-scr.svg",
                  link: "https://vk.me/botsavepics",
                  repoHref: "https://github.com/nik9play/vk-bot-picture"
                },
                vkMusicBot: {
                  title: "VK Music Bot",
                  desc: "Бот для Дискорда, который проигрывает музыку из ВК.",
                  repoLink: "Репозиторий GitHub",
                  imgSrc: "/vkmusicbot-scr.svg",
                  link: "https://vkmusicbot.megaworld.space",
                  repoHref: "https://github.com/nik9play/vk-music-bot"
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
