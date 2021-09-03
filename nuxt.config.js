export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniel 💖',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: "description", content: "Daniel Raymond is a programmer/philosopher and current engineering undergraduate student at the University of Waterloo" },
			{ name: "keywords", content: "Daniel Raymond, University of Waterloo, Engineering, AI, Circuitry" },
			{ name: "theme-color", content: "#1A1A1A" },

			{ name: "og:type", content: "website" },
			{ name: "og:url", content: "https://danielraymond.me" },
			{ name: "og:title", content: "Daniel 💖" },
			{ name: "og:image", content: "https://danielraymond.me/chumpRender.png" },
			{ name: "og:description", content: "Daniel Raymond is a programmer/philosopher and current engineering undergraduate student at the University of Waterloo" },
		],
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/png', href: '/Favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: './plugins/gtag.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'autoprefixer': {},
        'postcss-preset-env': {}
        // https://www.npmjs.com/package/postcss-responsive-type
      },
    }
  },

  googleAnalytics: {
    id: 'UA-148416481-2'
  }
}
