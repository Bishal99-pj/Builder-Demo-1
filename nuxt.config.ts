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
    'nuxt-builderio',
  ],
  builderIO: {
    apiKey : '2055e4c0d31442a89632d2cd2ef89618',
    autoImports: [
      'fetchEntries',
      'fetchOneEntry',
      'fetchBuilderProps',
      'isEditing',
      'isPreviewing',
      'setEditorSettings',
      'getBuilderSearchParams',
      'createRegisterComponentMessage'
    ],
    defaultModel: 'page',
    components: {
      enabled: true,
      dir: 'components/Builder',
      prefix: 'BuilderCustom'
    }
  }
})
