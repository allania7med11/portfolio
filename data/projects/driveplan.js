export default {
    name: "DrivePlan",
    technology: "Next.js / Django",
    image: "driveplan/entry.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Leaflet", "Konva", "Django Rest Framework", "OpenRouteService", "Docker"],
    overview: `Full-stack truck driver trip planning and compliance application that automates FMCSA-compliant daily log sheet generation. Professional tool designed for the transportation industry with features including:`,
    features: [
        `Intuitive trip planning interface for entering current location, pickup, dropoff destinations, and current cycle hours`,
        `Responsive map overview with detailed route information and important stop locations including fuel stations, rest areas, and duty transition points`,
        `Daily log sheets to keep track of different status changes while ensuring full FMCSA-compliant agreement and regulatory documentation`,
        `Multi-day trip support with automated fuel stops every 1,000 miles, duty limit monitoring (11h driving/14h duty), and comprehensive tracking in both map and sheets`,
        `Automated log sheet generation making compliance documentation much easier for drivers with pre-filled status transitions and calculated rest periods`,
        `Early validation of future trip plans to ensure drivers never exceed the 70-hour/8-day cycle limit with proactive warnings`
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