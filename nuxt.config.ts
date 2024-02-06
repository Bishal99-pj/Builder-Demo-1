// guide : https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/data-model": { ssr: false },
  },
  css: ["~/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@builder.io/sdk-vue/nuxt", "@vueuse/nuxt"],
  runtimeConfig: {
    public: {
      builderApiKey: "",
    },
  },
});
