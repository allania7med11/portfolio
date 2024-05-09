export default {
    name: "Portfolio Project",
    technology: "Ansible/Docker",
    image: "portfolio/entry.png",
    technologies: ["Digital Ocean", "Ansible", "Docker", "Nuxt", "Vue", "Vuetify"],
    overview: `The Portfolio Project consists of two main apps: Automated Deployment and Portfolio Website. The main goal of this project is to enable the developer to showcase their skills in an easy and efficient way through its numerous features, such as:"`,
    features: [
        `automated deployment system powered by Ansible, designed to streamline the deployment process for various projects from initial setup to deployment on production servers`,
        `Display an overview of different building projects with the ability to add feature descriptions, screenshots, videos, and useful links for planning, design, GitHub code, and deployed websites.`,
        `Display various competencies earned through professional experience or by building personal projects to continuously enhance the developer's expertise.`,
        `Generate a resume showcasing their skills, work history, and education, with the ability to display it online or download it as a PDF`
    ],
    images: [
        {
            src: require("@/assets/images/portfolio/portfolio.png"),
        },
        {
            src: require("@/assets/images/portfolio/project.png"),
        },
        {
            src: require("@/assets/images/portfolio/skills.png"),
        },
        {
            src: require("@/assets/images/portfolio/resume.png"),
        },
    ],
    actions: [
        {
            text: "Visit Website",
            href: "https://about.effectivewebapp.com/"
        },
        {
            text: "View on Github",
            href: "https://github.com/allania7med11/portfolio"
        }
        ,
        {
            text: "Automated Deployment on Github",
            href: "https://github.com/allania7med11/deploy"
        }
    ]
};
