// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  devtools: { enabled: true },
  imports: {
    dirs: ['stores']
  },

  // 🚀 GitHub Pages 根網域部署設定 (https://han45678.github.io/)
  ssr: false, // 關掉 SSR，只輸出靜態檔案
  nitro: {
    preset: 'github-pages' // GitHub Pages 專用
  },
  app: {
    baseURL: '/', // 部署在 han45678.github.io 根目錄
    head: {
      meta: [{ name: 'google-adsense-account', content: 'ca-pub-9815906908978353' }],
      script: [
        {
          // Google AdSense
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9815906908978353',
          async: true,
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
