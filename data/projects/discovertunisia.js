export default {
    name: "Discover Tunisia",
    technology: "Html/Css",
    image: "discovertunisia/entry.png",
    technologies: ["Netlify", "Html", "Css"],
    overview: `This website is for  promoting tourism in Tunisia and show the beauty of this country where you can find:`,
    features: [
        `An overview of this country with different destination you can visit`,
        `Detailed description for each destination where you can find informations and images of sights you can visit`,
        `Ability to share any blog  you like with your friends in social media like Facebook Twitter and Linkedin`,
    ],
    images: [
        {
          src: require("@/assets/images/discovertunisia/home.png"),
        },
        {
          src: require("@/assets/images/discovertunisia/tabarka.png"),
        },
        {
          src: require("@/assets/images/discovertunisia/djerba.png"),
        },
        {
          src: require("@/assets/images/discovertunisia/south.png"),
        }
      ],
    actions: [
      {
        text: "Visit Website",
        href: "https://discovertunisia.netlify.app/"
      },
      {
        text: "View on Github",
        href: "https://github.com/allania7med11/DiscoverTunisia"
      }
    ]
  };
  