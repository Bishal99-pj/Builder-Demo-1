// guide : https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css : ['~/global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@builder.io/sdk-vue/nuxt'
  ],
  runtimeConfig : {
    public : {
      builderApiKey : ''
    }
  }
})
