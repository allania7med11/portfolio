export default {
  name: "Structure Analysis Software",
  technology: "Django/Vue",
  image: "structure/entry.png",
  technologies: ["Digital Ocean", "Django Rest Framework", "Nuxt", "Vuetify", "PWA"],
  overview: `Structure Analysis in an online software created by engineer for engineers with many
  features to make their work more effective such as:`,
  features: [
    `Design truss and frame 2D structure  with unlimited supports, sections,beams and loads to define`,
    `Calculate and get all diagrams and equations of efforts,stress and displacements for each beam in the structure and a lot more...`,
    `Save all their work online to their account so no download required and they can access to all their projects anytime from any devices`,
    `Finding all the documentation needed from blogs to videos to use the software in the best way possible in all use cases`,
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
  video: "https://www.youtube.com/embed/videoseries?list=PLDFGldFvahMtwgBPyknkKHGuu0pB1VMD4&amp;index=0",
  actions: [
    {
      text: "Visit Website",
      href: "https://structure.effectivewebapp.com/"
    },
    {
      text: "View on Github",
      href: "https://github.com/allania7med11/structure_back/"
    }
  ]
};
