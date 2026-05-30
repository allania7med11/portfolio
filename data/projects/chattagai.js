export default {
    name: "ChatTag AI",
    technology: "Webpack / Django",
    image: "chattagai/entry.png",
    technologies: ["Webpack", "JavaScript", "Django", "OpenAI GPT-4", "LangChain", "Agentic AI / tool calling", "FAISS (RAG)", "Firecrawl", "Resend", "Docker", "PostgreSQL"],
    overview: `An AI assistant that turns website visitors into customers. It answers questions instantly in any language, captures interested visitors as leads, and works around the clock — so businesses stop losing sales to slow or missed replies. Powered by an agentic AI engine that knows each business and acts on its behalf. Business impact:`,
    features: [
        `Admin dashboard to set up a store in minutes: auto-collect its content with built-in AI tools, then switch the assistant on or off with one click`,
        `One-line integration — owners add the assistant to any website by pasting a single code snippet, no developer needed`,
        `Try-before-you-commit: owners can demo and test their assistant live on the ChatTag site just by entering their store ID`,
        `Works for different website types — whether it's your e-commerce store, your portfolio or personal site, and more — each answering in a style purpose-built for it (a store recommends products and handles orders; a portfolio speaks in your own first-person voice)`,
        `Instant, accurate answers drawn from the business's own products, policies, and content — available around the clock and in the customer's own language`,
        `Never miss a lead — when a visitor shows interest, the assistant proactively asks for their contact details and saves every one, even outside business hours, so no opportunity slips through`,
        `Surfaces what customers ask that the business can't yet answer, turning real visitor questions into a clear list of what to improve`
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
        {
            src: require("@/assets/images/chattagai/agentic_chat.png"),
        },
    ],
    actions: [
        {
            text: "View Demo",
            href: "https://chattagAi.effectivewebapp.com/"
        }
    ]
};