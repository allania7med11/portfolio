export default {
    name: "DrivePlan",
    technology: "Django/Next.js",
    image: "driveplan/plan_trip_one_day.png",
    technologies: ["Digital Ocean", "Django Rest Framework", "Next.js", "TypeScript", "Leaflet", "Konva", "Docker", "Ansible"],
    overview: `Full-stack truck driver trip planning and compliance application that automates FMCSA-compliant daily log sheet generation. Professional tool designed for the transportation industry with features including:`,
    features: [
        `Intuitive trip planning interface for entering current location, pickup, dropoff destinations, and current cycle hours with real-time input validation`,
        `Automated daily log sheet generation with precise canvas rendering meeting all FMCSA requirements including 15-minute interval tracking and duty status transitions`,
        `Interactive route visualization using Leaflet mapping with multi-point routing, automatic fuel stops every 1,000 miles, and OpenRouteService API integration`,
        `Multi-day trip support with sequential daily log sheets maintaining continuity across extended journeys and cumulative cycle hour tracking`,
        `Real-time compliance monitoring with intelligent Hours of Service enforcement (11-hour driving, 14-hour duty, 70-hour/8-day cycle) and proactive violation prevention`,
        `Enterprise-grade deployment with Docker containerization, Ansible orchestration, and automated CI/CD pipeline from Vagrant staging to Digital Ocean production`,
        `Transportation domain expertise implementation including property-carrying driver regulations, mandatory rest period calculations, and ELD-compatible formatting`
    ],
    images: [
        {
            src: require("@/assets/images/driveplan/plan_trip_one_day.png"),
        },
        {
            src: require("@/assets/images/driveplan/daily_log_sheet_one_day.png"),
        },
        {
            src: require("@/assets/images/driveplan/map_overview_multi_days.png"),
        },
        {
            src: require("@/assets/images/driveplan/daily_log_sheet__multi_days.png"),
        },
        {
            src: require("@/assets/images/driveplan/exceed_cycle_hours_limit.png"),
        },
    ],
    actions: [
        {
            text: "Visit Website",
            href: "https://driveplan.effectivewebapp.com/"
        },
        {
            text: "View on Github",
            href: "https://github.com/allania7med11/DrivePlan"
        }
    ]
};