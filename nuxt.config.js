import colors from "vuetify/es5/util/colors";
import { Production, urls } from "./env"
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
   generate: {
    dir: "portfolio"
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "0.0.0.0", // default: 0.0.0.0
  },
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto|Grenze Gotisch|Sansita Swashed' },
      { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" },
      { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["aos/dist/aos.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/global",{ src: "@/plugins/aos.js", mode: "client" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: urls.backendUrl,
    https: Production
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: {
      font: true,
      icons: "md"
    },
    icons: {
      iconfont: "md"
    },
    treeShake: false,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      light: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons", // Solid icons
        icons: [
          "faHome",
          "faEnvelope",
          "faUser",
          "faSignInAlt",
          "faPaperPlane",
          "faCheck",
          "faTimes",
          "faCaretDown",
          "faCaretRight",
          "faFolderOpen",
          "faEdit",
          "faTrashAlt",
          "faPlus",
          "faCopy",
          "faSave",
          "faBook",
          "faList",
          "faPlusCircle",
          "faMinusCircle",
          "faSearch",
          "faEye",
          "faBars"
        ]
      }
    ]
  }
};
