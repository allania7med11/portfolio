export default {
  name: "Structure Analysis Software",
  technology: "Django/Vue",
  image: "structure/entry.png",
  technologies: ["Digital Ocean","Django Rest Framework", "Nuxt", "Vuetify", "PWA"],
  overview: `Structure Analysis is an improved version from Legacy Structure
    Analysis where I add many features to improve user experience such as:`,
  features: [
    `social login like facebook twitter and google for fast registration
                and avoid password fatigue`,
    `offline support to check your project even when you are offline and go through calculated results`,
    `adding stress section to detailed analysis  to help engineers having deeper understanding for the behave of the structure`
  ],
  images: [
    {
      src: require("@/assets/images/structure/home.png"),
    },
    {
      src: require("@/assets/images/structure/login.png"),
    },
    {
      src: require("@/assets/images/structure/section.png"),
    },
    {
      src: require("@/assets/images/structure/detail.png"),
    },
    {
      src: require("@/assets/images/structure/offline.png"),
    },
  ],
  actions: [
    {
      text: "Visit Website",
      href: "https://structure.effectivewebapp.com/"
    }
  ]
};
