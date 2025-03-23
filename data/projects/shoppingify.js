export default {
  name: "Shoppingify Webite",
  technology: "Django/React",
  image: "shoppingify/entry.png",
  technologies: ["Figma", "Digital Ocean", "Docker", "DRF", "Nextjs", "Redux", "MUI", "Typescript", "Stripe", "Sentry", "Pytest", "Playwright", "Django Channels", "Redis", "WebSockets"],
  overview: `Shoppingify is an eCommerce website that offers a delightful experience for both shop owners and customers, thanks to its numerous features such as`,
  features: [
    "Product Management: Shop owners can easily add products with images, discounts, and categories to keep their store up-to-date and well-organized.",
    "WYSIWYG Product Descriptions: Shop owners can add detailed product descriptions using a WYSIWYG editor, providing customers with the necessary information to make informed purchase decisions.",
    "Category Navigation: Customers can navigate between different categories of products, making it easier to find what they're looking for.",
    "Product Filtering: Customers can filter products by price, discount, or search text in the product name or description, allowing them to narrow down their options and find the best product for them.",
    "Product Ordering: Customers can order products by name or price, making it easier to compare and select the products they want to purchase.",
    "Detailed Product Information: Customers can review detailed product descriptions and multiple images before making a purchase, ensuring they have all the information they need to make an informed decision.",
    "Shopping Cart: Customers can add products to their shopping cart, adjust quantities, and review their selections, with the number of items and total price displayed on a dedicated page, effortlessly without the need to log in.",
    "Customer Authentication: Customers will only be required to log in to validate their order, enabling them to track its status easily later. The interface includes a simple option to recover their account if they forget their password.",
    "Order Validation: Customers are prompted to enter their shipping details to ensures accurate order fulfillment and delivery",
    "Flexible Payment Options: Provide customers with the convenience of choosing between credit card payments or cash upon delivery, enhancing their shopping experience with versatile payment methods.",
    "Order Complete: An animated congratulatory message will be displayed to the customers to inform them that their order was placed successfully.",
    "Order Processing: Shop owners have the option to process completed orders, modify some details if needed, before moving the order to the shipped state.",
    "Order Management: Shop owners are able to easily manage the state of different orders, including Processing, Shipped, Delivered, and Canceled.",
    "Chat Functionality: A site-wide chat button enables instant communication between customers and admins—no login required for users.",
    "Admin Chat Panel: A dedicated panel lists ongoing chats, sorted by recent activity, with previews, timestamps, and user info.",
    "Real-Time Messaging: Upgraded the chat system for instant communication between users and admins, replacing polling with live message delivery and dynamic updates."
  ],
  images: [
    {
      src: require("@/assets/images/shoppingify/product_management.png"),
    },
    {
      src: require("@/assets/images/shoppingify/wysiwyg_product_descriptions.png"),
    },
    {
      src: require("@/assets/images/shoppingify/category_navigation.png"),
    },
    {
      src: require("@/assets/images/shoppingify/product_filtering.png"),
    },
    {
      src: require("@/assets/images/shoppingify/product_ordering.png"),
    },
    {
      src: require("@/assets/images/shoppingify/detailed _product_information.png"),
    },
    {
      src: require("@/assets/images/shoppingify/cart_adding.png"),
    },
    {
      src: require("@/assets/images/shoppingify/cart_display.png"),
    },
    {
      src: require("@/assets/images/shoppingify/authentication.png"),
    },
    {
      src: require("@/assets/images/shoppingify/order_validation.png"),
    },
    {
      src: require("@/assets/images/shoppingify/order_complete.gif"),
    },
    {
      src: require("@/assets/images/shoppingify/order_processing.png"),
    },
    {
      src: require("@/assets/images/shoppingify/order_management.png"),
    },
    {
      src: require("@/assets/images/shoppingify/chat_functionality.png"),
    },
    {
      src: require("@/assets/images/shoppingify/admin_chat_panel.png"),
    },
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
