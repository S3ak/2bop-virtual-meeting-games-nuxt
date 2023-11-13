// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    baseURL: "http://localhost:3000",
    // Keys within public are also exposed client-side
    public: {
      baseURL: "http://localhost:3000",
    },
  },
  modules: [
    // Simple usage
    "@nuxtjs/eslint-module",
    // With options
    [
      "@nuxtjs/eslint-module",
      {
        /* module options */
      },
    ],
  ],
});
