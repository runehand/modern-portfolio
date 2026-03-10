export const projects = [
  {
    slug: "alpinresorts",
    title: "ALPINRESORTS",
    category: "Travel Booking",
    thumbnail: "/projects/alpinresorts.png",
    created: "4 Sep 2020",
    role: "Web Developer",
    liveUrl: "https://www.alpinresorts.com/",
    intro:
      "Reworked a resort booking platform to improve trip planning, filtering clarity, and checkout usability for international travelers.",
    overview:
      "ALPINRESORTS focused on a smoother reservation journey, clearer search and date-selection behavior, and a booking flow that could stay performant during high-season traffic. The project combined frontend UX improvements with structured API boundaries and scalable web application architecture.",
    techStack: ["Angular", "ASP.NET"],
    features: [
      "Improved reservation filtering and date selection to reduce friction in the booking flow.",
      "Built scalable application structure with clean frontend and API separation.",
      "Optimized data loading behavior for heavy seasonal traffic and large booking catalogs.",
    ],
    screenshots: [
      {
        src: "/projects/alpinresorts.png",
        alt: "ALPINRESORTS booking platform",
        caption: "Booking interface and resort discovery flow",
      },
    ],
  },
  {
    slug: "loko",
    title: "LOKO",
    category: "Food Delivery",
    thumbnail: "/projects/loki-mobile.png",
    created: "4 Sep 2020",
    role: "Full Stack Developer",
    liveUrl: "https://loko.delivery/",
    intro:
      "Delivered a real-time food delivery experience with order tracking, courier updates, and reliable payment flows.",
    overview:
      "LOKO combined mobile product UX with backend integrations for ordering, messaging, and payment reliability. The platform used real-time infrastructure for status visibility, Firebase-backed services for authentication and messaging, and Stripe to support checkout across the delivery lifecycle.",
    techStack: [
      "React Native",
      "Next.js",
      "Django",
      "Firebase",
      "Socket.IO",
      "Stripe",
    ],
    features: [
      "Live order tracking and courier location updates for end-to-end delivery visibility.",
      "Firebase Authentication, Firestore, and push notifications for real-time messaging.",
      "Payment flow integration with Stripe and streamlined checkout UX across devices.",
    ],
    screenshots: [
      {
        src: "/projects/loki-mobile.png",
        alt: "LOKO food delivery platform",
        caption: "Real-time delivery product and mobile ordering flow",
      },
    ],
  },
  {
    slug: "oyegift",
    title: "OyeGift",
    category: "E-commerce",
    thumbnail: "/projects/oyegifts.png",
    created: "4 May 2020",
    role: "Frontend Developer",
    liveUrl: "https://www.oyegifts.com/",
    intro:
      "Built a responsive gifting platform centered on stronger product discovery, cleaner checkout, and higher conversion.",
    overview:
      "OyeGift focused on online shopping UX with better browsing, faster decision-making, and a more polished purchase flow. The product also supported customer chat and internal CRM-oriented admin workflows so operations and support could keep pace with user demand.",
    techStack: ["React", "Headless UI", "Tailwind CSS"],
    features: [
      "Responsive storefront design with cleaner purchase hierarchy and faster browsing.",
      "Integrated payment gateway flows and real-time customer chat support.",
      "Admin-facing CRM workflow support for smoother order handling and retention.",
    ],
    screenshots: [
      {
        src: "/projects/oyegifts.png",
        alt: "OyeGift ecommerce platform",
        caption: "Product discovery and gifting storefront experience",
      },
    ],
  },
  {
    slug: "lift-with-liv",
    title: "Lift with Liv",
    category: "Fitness App",
    thumbnail: "/projects/lift-with-liv.png",
    created: "14 Aug 2020",
    role: "Mobile App Developer",
    liveUrl:
      "https://apps.apple.com/us/app/lift-with-liv/id1535814290?platform=iphone",
    intro:
      "Developed cross-platform fitness app features with smoother workout navigation and stronger onboarding UX.",
    overview:
      "Lift with Liv focused on reliable mobile fitness experiences for iOS and Android users. The work improved first-session onboarding, daily plan navigation, and the flow between signup, guided programs, and progress-oriented interactions.",
    techStack: ["React Native"],
    features: [
      "Cross-platform workout experience designed for iOS and Android delivery.",
      "Improved onboarding and plan navigation for faster time to first session.",
      "Built mobile flows focused on reliability, clarity, and recurring engagement.",
    ],
    screenshots: [
      {
        src: "/projects/lift-with-liv.png",
        alt: "Lift with Liv fitness app",
        caption: "Mobile fitness UX for training plans and progress tracking",
      },
    ],
  },
  {
    slug: "cryptogpt",
    title: "CryptoGPT",
    category: "AI Trading Platform",
    thumbnail: "/projects/cryptogpt.png",
    created: "15 Jan 2024",
    role: "Frontend, Backend, and DevOps Engineer",
    liveUrl: null,
    intro:
      "Designed core architecture for an AI trading product with real-time dashboards, payments, and CEX or DEX connectivity.",
    overview:
      "CryptoGPT combined modern product UI with backend systems, AI workflows, and multi-environment deployment requirements. The platform needed high-throughput data handling, payment support, DEX and CEX integrations, and interface patterns that kept strategy execution and portfolio monitoring clear under real-time conditions.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "MUI",
      "Supabase",
      "Convex",
      "Django",
      "Rust",
    ],
    features: [
      "Built modular platform architecture for AI analytics and live trading workflows.",
      "Integrated real-time dashboards, payment flows, and CEX or DEX connectivity.",
      "Handled deployment and backend coordination across multiple environments and services.",
    ],
    screenshots: [
      {
        src: "/projects/cryptogpt.png",
        alt: "CryptoGPT AI trading platform",
        caption: "AI-assisted trading dashboard and strategy interface",
      },
    ],
  },
  {
    slug: "coffee-book",
    title: "Coffee Book",
    category: "iOS Social App",
    thumbnail: "/projects/coffee-book-ios.png",
    created: "4 Dec 2020",
    role: "Mobile App Developer",
    liveUrl: "https://apps.apple.com/ua/app/coffee-book/id1512681263?l=uk",
    intro:
      "Built an iOS community app for coffee and book lovers with discovery, recommendations, and Firebase-backed social features.",
    overview:
      "Coffee Book centered on community-driven content, personalized recommendations, and lightweight social interaction patterns. The app used Firebase-backed infrastructure to support sharing, user data, and ongoing engagement while keeping the iOS experience approachable and content-led.",
    techStack: ["Swift", "Firebase"],
    features: [
      "Personalized recommendation and discovery flow for books and coffee content.",
      "Firebase-backed user data, sharing, and community engagement features.",
      "iOS-focused navigation and interaction patterns for a content-heavy social app.",
    ],
    screenshots: [
      {
        src: "/projects/coffee-book-ios.png",
        alt: "Coffee Book iOS application",
        caption: "Community-driven iOS experience for discovery and sharing",
      },
    ],
  },
  {
    slug: "starswap",
    title: "Starswap",
    category: "DeFi / DEX",
    thumbnail: "/projects/starswap.png",
    created: "4 June 2021",
    role: "Web3 and Smart Contract Developer",
    liveUrl: "https://starswap.net/",
    intro:
      "Implemented a user-focused DEX experience on Astar with wallet connection, token swaps, and better transaction clarity.",
    overview:
      "Starswap required a cleaner decentralized trading UX with strong support for approvals, slippage settings, and on-chain status feedback. The project combined smart contract work with frontend wallet interactions to make token swaps feel more transparent and easier to complete.",
    techStack: ["Vue.js", "Web3.js", "Solidity"],
    features: [
      "Wallet-based token swap flow with transaction feedback and gas-aware UX.",
      "Smart contract integration for DEX interactions on an EVM-compatible network.",
      "Improved slippage, approval, and status visibility for DeFi users.",
    ],
    screenshots: [
      {
        src: "/projects/starswap.png",
        alt: "Starswap decentralized exchange",
        caption: "Token swap interface with wallet and transaction UX",
      },
    ],
  },
  {
    slug: "car-leasing",
    title: "Car Leasing",
    category: "Mobile Commerce",
    thumbnail: "/projects/car-leasing-ios.png",
    created: "4 Apr 2021",
    role: "Mobile App Developer",
    liveUrl:
      "https://apps.apple.com/us/app/carblip-your-car-delivered/id1362042544",
    intro:
      "Built a mobile-first car leasing flow that let users configure vehicles, compare plans, and submit applications remotely.",
    overview:
      "Car Leasing focused on a faster, more transparent financing and application experience for mobile users. The product tied together API-driven pricing, socket-based updates, and quote flows so customers could move through the leasing process without needing a dealership visit.",
    techStack: ["Flutter", "GraphQL", "Socket"],
    features: [
      "Vehicle configuration and quote comparison flow designed for mobile-first usage.",
      "Responsive pricing and status updates with API and socket-based integrations.",
      "Simplified remote application experience without dealership dependency.",
    ],
    screenshots: [
      {
        src: "/projects/car-leasing-ios.png",
        alt: "Car Leasing mobile app",
        caption: "Mobile leasing flow for configuration, quotes, and applications",
      },
    ],
  },
  {
    slug: "kinghills",
    title: "KINGHILLS",
    category: "Travel Platform",
    thumbnail: "/projects/kinghill.png",
    created: "4 Sep 2020",
    role: "Web and Mobile Developer",
    liveUrl: "https://www.kinghillstravels.com/",
    intro:
      "Delivered a travel booking ecosystem across web, mobile, and admin portals with booking, payment, and CRM workflows.",
    overview:
      "KINGHILLS connected traveler-facing products with internal operational tools. The project needed coordinated booking experiences, payment handling, live tracking, and cross-platform architecture that kept traveler and staff workflows aligned across web and mobile surfaces.",
    techStack: ["Bootstrap 4", "Web", "Mobile"],
    features: [
      "Coordinated traveler, staff, and admin workflows across web and mobile products.",
      "Integrated booking, payment, CRM, and live-tracking functionality in one platform.",
      "Improved trip planning UX with cross-platform consistency and operational visibility.",
    ],
    screenshots: [
      {
        src: "/projects/kinghill.png",
        alt: "KINGHILLS travel platform",
        caption: "Travel booking product across web and mobile surfaces",
      },
    ],
  },
  {
    slug: "nexus-fintrade",
    title: "Nexus FinTrade",
    category: "Trading App",
    thumbnail: "/projects/nexus-mobile.png",
    created: "4 Feb 2022",
    role: "Mobile App Developer",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.nexusft.fintrade",
    intro:
      "Built a mobile trading experience for CFD users with stronger chart navigation, faster order placement, and clearer account management.",
    overview:
      "Nexus FinTrade focused on usability under live market conditions. The app needed quick order execution, practical chart interaction, and account-management flows that traders could rely on day to day without sacrificing clarity or stability.",
    techStack: ["Flutter"],
    features: [
      "Mobile trading flows optimized for chart access and fast order execution.",
      "Account-management screens designed for live-market reliability.",
      "UX tuned for everyday CFD workflows under time-sensitive conditions.",
    ],
    screenshots: [
      {
        src: "/projects/nexus-mobile.png",
        alt: "Nexus FinTrade mobile trading app",
        caption: "Trading app interface for live market workflows",
      },
    ],
  },
  {
    slug: "misfitsnft",
    title: "Misfitsnft",
    category: "NFT Platform",
    thumbnail: "/projects/misfitsnft.png",
    created: "4 Sep 2020",
    role: "Web, Web3, and Smart Contract Developer",
    liveUrl: "https://www.misfitsnft.co/",
    intro:
      "Built a responsive NFT platform covering wallet onboarding, mint flows, and collection browsing with clearer Web3 interactions.",
    overview:
      "Misfitsnft brought together a consumer-facing minting experience and blockchain-backed collection logic. The focus was on reducing friction for first-time Web3 users through better transaction feedback, error handling, and cleaner wallet connection flows.",
    techStack: ["React", "ethers.js", "Node.js", "Solidity"],
    features: [
      "Wallet onboarding and mint flows designed for first-time NFT users.",
      "Smart contract integration with improved transaction clarity and feedback states.",
      "Responsive collection browsing with cleaner Web3 error handling.",
    ],
    screenshots: [
      {
        src: "/projects/misfitsnft.png",
        alt: "Misfitsnft platform",
        caption: "NFT minting flow and collection browsing interface",
      },
    ],
  },
  {
    slug: "manufacturer",
    title: "Manufacturer",
    category: "Subscription Commerce",
    thumbnail: "/projects/manufacturee-mobile.png",
    created: "4 Sep 2020",
    role: "Frontend Developer",
    liveUrl:
      "https://apps.apple.com/us/app/protein-%D8%A8%D8%B1%D9%88%D8%AA%D9%8A%D9%86/id1620156748",
    intro:
      "Built a cross-platform subscription app for healthy meal plans with better purchase flow, personalization, and repeat-order support.",
    overview:
      "Manufacturer centered on recurring commerce for meal-plan subscriptions. The project combined mobile UX, backend integrations, and scalable catalog and fulfillment support so customers could browse plans, subscribe, and reorder with minimal friction.",
    techStack: [
      "React Native",
      "Django",
      "PostgreSQL",
      "AWS",
      "Cross-platform",
    ],
    features: [
      "Cross-platform subscription flow for meal-plan browsing and repeat purchases.",
      "Backend integrations for catalog, order, and fulfillment operations.",
      "Personalized mobile UX focused on retention and repeat-order support.",
    ],
    screenshots: [
      {
        src: "/projects/manufacturee-mobile.png",
        alt: "Manufacturer subscription commerce app",
        caption: "Cross-platform subscription experience for meal plans",
      },
    ],
  },
];

const PROJECTS_PER_SLIDE = 4;

export const workSlides = Array.from(
  { length: Math.ceil(projects.length / PROJECTS_PER_SLIDE) },
  (_, index) =>
    projects.slice(
      index * PROJECTS_PER_SLIDE,
      index * PROJECTS_PER_SLIDE + PROJECTS_PER_SLIDE
    )
);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
