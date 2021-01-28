export default {
  name: "Natural Language Processing",
  technology: "Express/Webpack",
  image: "naturalLanguageProcessing/entry.png",
  technologies: ["Heroku", "Html", "Scss", "Express", "Webpack"],
  overview: `this is a website application for extract the meaning of all kinds of
    unstructured content: social conversation, articles, documents in
    beautiful intuitive and easy to use interface where you can get
    detailed results like:`,
  features: [
    `the polarity and subjectivity found in the text`,
    `the agreement between the sentiments detected in the text`,
    `the confidence associated with the sentiment analysis performed on the text.`
  ],
  images: [
    {
      src: require("@/assets/images/naturalLanguageProcessing/form.png")
    },
    {
      src: require("@/assets/images/naturalLanguageProcessing/show.png")
    }
  ],
  actions: [
    {
      text: "Visit Website",
      href: "https://naturalanguageprocessing.herokuapp.com/"
    },
    {
      text: "View on Github",
      href: "https://github.com/allania7med11/NaturalLanguageProcessing"
    }
  ]
};
