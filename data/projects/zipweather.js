export default {
  name: "Zip Weather",
  technology: "Node/Express",
  image: "zipweather/entry.png",
  technologies: ["Heroku", "Html/Css", "Express", "Javascript"],
  overview: `this is a weather application using OpenWeatherMap API  allow you to:`,
  features: [
    `Get the current weather for any place using zip code and save it with your current feeling`,
    `Display all your history of search with  the results you got and the feeling you had at that time`
  ],
  images: [
    {
      src: require("@/assets/zipweather/get.png"),
    },
    {
      src: require("@/assets/zipweather/show.png"),
    }
  ],
  actions: [
    {
      text: "Visit Website",
      href: "https://zipweather.herokuapp.com/"
    },
    {
      text: "View on Github",
      href: "https://github.com/allania7med11/weather"
    }
  ]
};
