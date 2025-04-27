export default {
  name: "Shoppingify Website",
  technology: "Next.js / Django",
  image: "shoppingify/entry.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "React.js",
    "Redux",
    "Material UI",
    "Figma",
    "Django",
    "Django REST Framework",
    "Django Channels",
    "Celery",
    "Redis",
    "WebSockets",
    "Docker",
    "DigitalOcean",
    "Stripe Integration",
    "OpenAI GPT-4 Turbo",
    "FAISS",
    "LangChain",
    "Pytest",
    "Playwright",
    "Sentry"
  ],
  overview: `Shoppingify is a modern eCommerce platform offering a seamless shopping experience for customers and robust management tools for shop owners, enhanced with AI-powered assistance, real-time communication, and automated product index management.`,
  features: [
    // 🍭 Product & Catalog Management
    "Product Management: Easily add and manage products with images, discounts, and categories.",
    "WYSIWYG Product Descriptions: Create detailed product descriptions with a rich text editor.",
    "Category Navigation: Organize and browse products via categories.",
    "Product Filtering: Filter products by price, discount, or keywords.",
    "Product Ordering: Sort products by name or price.",
    "Detailed Product Information: Showcase multiple images and in-depth descriptions.",
    "Celery-Based Product Index Management: Keep product data and prices up-to-date using asynchronous tasks, ensuring AI recommendations and search results are always accurate.",

    // 🍒 Order & Checkout Management
    "Shopping Cart: Add, adjust, and review selections without logging in.",
    "Customer Authentication: Minimal login during order validation, with recovery options.",
    "Order Validation: Securely collect shipping information at checkout.",
    "Flexible Payment Options: Accept credit cards or cash on delivery.",
    "Order Completion Animation: Celebrate successful orders with animations.",
    "Order Processing: Allow admins to modify and update orders before shipping.",
    "Order Management: Track and manage orders through Processing, Shipped, Delivered, and Canceled statuses.",

    // 💬 Customer Communication & AI Integration
    "Instant Messaging: Customers can chat with admins instantly via a site-wide button without login.",
    "Admin Chat Panel: Manage customer chats with previews, timestamps, and activity sorting.",
    "Real-Time Messaging: Enable live chat communication using WebSockets for instant updates.",
    "AI Shopping Assistant: Provide smart product recommendations and answers using OpenAI GPT-4 Turbo with real-time vector search (FAISS) and conversation memory.",
    "Admin Chatbot Control: Admins can enable or disable the AI chatbot as needed to maintain quality service.",
    "AI Product Awareness: AI stays updated with real-time product info and prices via asynchronous index rebuilding (Celery), ensuring accurate responses to customer questions.",
    "Conversational Memory: AI personalizes the experience by remembering previous conversations for better follow-ups."
  ],
  images: [
    { src: require("@/assets/images/shoppingify/product_management.png") },
    { src: require("@/assets/images/shoppingify/wysiwyg_product_descriptions.png") },
    { src: require("@/assets/images/shoppingify/category_navigation.png") },
    { src: require("@/assets/images/shoppingify/product_filtering.png") },
    { src: require("@/assets/images/shoppingify/product_ordering.png") },
    { src: require("@/assets/images/shoppingify/detailed_product_information.png") },
    { src: require("@/assets/images/shoppingify/cart_adding.png") },
    { src: require("@/assets/images/shoppingify/cart_display.png") },
    { src: require("@/assets/images/shoppingify/authentication.png") },
    { src: require("@/assets/images/shoppingify/order_validation.png") },
    { src: require("@/assets/images/shoppingify/order_complete.gif") },
    { src: require("@/assets/images/shoppingify/order_processing.png") },
    { src: require("@/assets/images/shoppingify/order_management.png") },
    { src: require("@/assets/images/shoppingify/chat_functionality.png") },
    { src: require("@/assets/images/shoppingify/admin_chat_panel.png") },
    { src: require("@/assets/images/shoppingify/real_time_messaging.gif") },
    { src: require("@/assets/images/shoppingify/ai_shopping_assistant.gif") }
  ],
  actions: [
    {
      text: "Visit Website",
      href: "https://shop.effectivewebapp.com/"
    },
    {
      text: "View UI in Figma",
      href: "https://www.figma.com/proto/ms4Wby1CMworyF357cq83L/Shop-project?node-id=9107-73853&scaling=scale-down"
    },
    {
      text: "View on Github",
      href: "https://github.com/allania7med11/shop/"
    }
  ]
};
