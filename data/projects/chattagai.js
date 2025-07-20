export default {
    name: "ChatTag AI",
    technology: "Webpack / Django",
    image: "chattagai/entry.png",
    technologies: ["Webpack", "JavaScript", "Django", "OpenAI GPT-4", "FAISS", "Firecrawl", "Docker", "PostgreSQL"],
    overview: `AI-powered chat widget for e-commerce stores that provides intelligent customer support through natural language processing. Professional customer service tool designed for online retail with features including:`,
    features: [
        `Admin dashboard for store management to generate uuid provided collect data for store by ai tools like firecraw toggle chattag activation with simple button`,
        `Simple intuitive instructions for store owner to integration chat tag ai with his store by copiying one cod tag with his uuid`,
        `Enable store owner to demo and test their chat tag ai in chattagai website by just provide their store uuid`,
        `Optimized widget seamlessly integrates with any website providing multilingual AI chat with persistent dialogue for automated customer service`
    ],
    images: [
        {
            src: require("@/assets/images/chattagai/store_setup.png"),
        },
        {
            src: require("@/assets/images/chattagai/integration_instructions.png"),
        },
        {
            src: require("@/assets/images/chattagai/demo_and_testing.png"),
        },
        {
            src: require("@/assets/images/chattagai/store_integration.png"),
        },
    ],
    actions: [
        {
            text: "View Demo",
            href: "https://chattagAi.effectivewebapp.com/"
        }
    ]
};