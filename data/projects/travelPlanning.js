export default {
  name: "Travel Planner",
  technology: "Express/Webpack",
  image: "travelPlanning/entry.png",
  technologies: ["Heroku", "Html", "Scss", "Express", "Webpack", "PWA"],
  overview: `this website application will make trip planning more fun and easy with many feature such as:`,
  features: [
    `getting images to your distinations in any place in the world`,
    `getting day to day infos about temperatue, precipitation ,wind speed during your trip`,
    `reminding yourself how many days to start the trip , how many days you already spent on it and even how many days since you finish your adventure`,
    `saving your trips to get all the infos you need later even when you are offline`
  ],
  images: [
    {
      src: require("@/assets/images/travelPlanning/form.png")
    },
    {
      src: require("@/assets/images/travelPlanning/img.png")
    },
    {
      src: require("@/assets/images/travelPlanning/tmp.png")
    },
    {
      src: require("@/assets/images/travelPlanning/prep.png")
    },
    {
      src: require("@/assets/images/travelPlanning/history.png")
    }
  ],
  actions: [
    {
      text: "Visit Website",
      href: "https://travelplanner.effectivewebapp.com/"
    },
    {
      text: "View on Github",
      href: "https://github.com/allania7med11/TravelPlanner"
    }
  ]
};
