// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'shadcn-nuxt'],

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
})