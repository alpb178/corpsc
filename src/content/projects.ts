export type ProjectKind = "own" | "client";

export type ProjectLinkKind = "web" | "android" | "ios";

export interface ProjectLink {
  kind: ProjectLinkKind;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  /** Primary public URL (web). Omit for apps that live only in app stores. */
  url?: string;
  /** Extra platform/store links (Google Play, App Store) shown as buttons. */
  links?: ProjectLink[];
  /** Screenshot under /public/images/projects. Required to appear in the hero carousel. */
  image?: string;
  kind: ProjectKind;
  category: { es: string; en: string };
  summary: { es: string; en: string };
  stack: string[];
  highlight?: boolean;
}

export const projects: Project[] = [
  // ── Own products (CORPSC SaaS portfolio) ──────────────────────────
  {
    slug: "take",
    image: "/images/projects/take.jpg",
    name: "Take",
    url: "https://take.corpsc.com",
    kind: "own",
    highlight: true,
    category: { es: "E-commerce / Marketplace", en: "E-commerce / Marketplace" },
    summary: {
      es: "Plataforma de e-commerce y marketplace en producción, diseñada y operada por CORPSC end-to-end.",
      en: "E-commerce and marketplace platform in production, designed and operated by CORPSC end-to-end.",
    },
    stack: ["React.js", "Strapi", "REST API"],
  },
  {
    slug: "invoices",
    name: "Invoices",
    url: "https://invoices.corpsc.com",
    kind: "own",
    highlight: true,
    category: { es: "Facturación PDF", en: "PDF invoicing" },
    summary: {
      es: "Aplicación web para generar y gestionar facturas en PDF, en producción para clientes reales.",
      en: "Web app to generate and manage PDF invoices, live in production for real customers.",
    },
    stack: ["React.js", "Strapi", "REST API"],
  },
  {
    slug: "iris-natural",
    image: "/images/projects/iris-natural.jpg",
    name: "Iris Natural",
    url: "https://irisnatural.corpsc.com",
    kind: "own",
    category: { es: "Tienda online", en: "Online store" },
    summary: {
      es: "Tienda online de productos naturales — catálogo, carrito y pasarela operados por CORPSC.",
      en: "Online store for natural products — catalog, cart and gateway operated by CORPSC.",
    },
    stack: ["React.js", "Strapi", "REST API"],
  },
  {
    slug: "humancore",
    name: "HumanCore",
    url: "https://humancore.corpsc.com",
    kind: "own",
    category: { es: "HR & Dashboards", en: "HR & Dashboards" },
    summary: {
      es: "Sistema corporativo de recursos humanos con dashboards operativos.",
      en: "Corporate HR system with operational dashboards.",
    },
    stack: ["React.js"],
  },
  {
    slug: "histolword",
    name: "HistolWord",
    url: "https://histolword.corpsc.com",
    kind: "own",
    category: { es: "Plataforma educativa", en: "Educational platform" },
    summary: {
      es: "Plataforma de histología y aprendizaje, hermana de la versión desplegada para la Universidad de Málaga.",
      en: "Histology and learning platform, sibling to the version deployed for the University of Málaga.",
    },
    stack: ["React.js"],
  },
  {
    slug: "tikneo-corpsc",
    name: "Tikneo Suite",
    url: "https://tikneo.corpsc.com",
    kind: "own",
    category: { es: "Gestión de torneos", en: "Tournament management" },
    summary: {
      es: "Suite de gestión de eventos y torneos de golf, base del producto Tikneo.",
      en: "Event and golf-tournament management suite, the base of the Tikneo product.",
    },
    stack: ["React.js"],
  },
  {
    slug: "dandomuela",
    name: "Dando Muela",
    url: "https://dandomuela.com",
    kind: "own",
    category: { es: "Citas & conectividad", en: "Dating & connectivity" },
    summary: {
      es: "Ecosistema multiplataforma web y móvil con API de autenticación segura y bot de Telegram con pasarela de pagos integrada en la red TON.",
      en: "Cross-platform web and mobile ecosystem with a secure auth API and a Telegram bot with TON-network payments built in.",
    },
    stack: ["Laravel", "Sanctum", "Socialite", "FastAPI", "Python", "Telegram Bot", "TON"],
  },

  // ── Client work ────────────────────────────────────────────────────
  {
    slug: "kods-ai",
    image: "/images/projects/kods-ai.jpg",
    name: "Kods AI",
    url: "https://kods.ai",
    kind: "client",
    highlight: true,
    category: { es: "Plataforma con IA", en: "AI-integrated platform" },
    summary: {
      es: "Plataforma web con integraciones de IA para clientes en España y la UE.",
      en: "Web platform with AI integrations for clients in Spain and the EU.",
    },
    stack: ["React.js", "Strapi", "Claude AI", "TypeScript"],
  },
  {
    slug: "histolword-uma",
    name: "HistolWord — Universidad de Málaga",
    url: "https://histolword.uma.es",
    kind: "client",
    highlight: true,
    category: { es: "Universidad · España", en: "University · Spain" },
    summary: {
      es: "Plataforma educativa de histología desplegada para la Universidad de Málaga.",
      en: "Histology educational platform deployed for the University of Málaga.",
    },
    stack: ["React.js"],
  },
  {
    slug: "tikneo-web",
    name: "Tikneo Web App",
    url: "https://app.tikneo.com",
    kind: "client",
    category: { es: "Eventos de golf", en: "Golf events" },
    summary: {
      es: "Plataforma de gestión de eventos y torneos de golf.",
      en: "Golf event and tournament management platform.",
    },
    stack: ["React.js", "Strapi", "REST API"],
  },
  {
    slug: "tikneo-golf",
    name: "Tikneo Golf",
    kind: "client",
    category: { es: "App móvil · Android", en: "Mobile app · Android" },
    summary: {
      es: "App móvil para la gestión de rondas de golf, publicada en Google Play.",
      en: "Mobile app for managing golf rounds, published on Google Play.",
    },
    links: [
      { kind: "android", url: "https://play.google.com/store/apps/details?id=com.tikneo.golf" },
    ],
    stack: ["React Native", "Android"],
  },
  {
    slug: "tikneo-social",
    name: "Tikneo (mobile)",
    kind: "client",
    category: { es: "App móvil · iOS & Android", en: "Mobile app · iOS & Android" },
    summary: {
      es: "App social para comunidades deportivas, publicada en App Store y Google Play.",
      en: "Social app for sports communities, published on the App Store and Google Play.",
    },
    links: [
      { kind: "ios", url: "https://apps.apple.com/us/app/tikneo/id6651859831" },
      { kind: "android", url: "https://play.google.com/store/apps/details?id=com.tikneoapp.tikneoapp" },
    ],
    stack: ["React Native", "iOS", "Android"],
  },
  {
    slug: "polypop",
    image: "/images/projects/polypop.jpg",
    name: "PolyPop",
    url: "https://polypop.corpsc.com",
    kind: "client",
    category: { es: "App web & móvil", en: "Web & mobile app" },
    summary: {
      es: "Aplicación disponible en web y como app móvil en iOS y Android.",
      en: "Available on the web and as a mobile app on iOS and Android.",
    },
    links: [
      { kind: "ios", url: "https://apps.apple.com/us/app/polypop/id6755899118" },
      { kind: "android", url: "https://play.google.com/store/apps/details?id=com.tikneo.popmobile" },
    ],
    stack: ["React.js", "React Native", "iOS", "Android"],
  },
  {
    slug: "zendinit",
    image: "/images/projects/zendinit.jpg",
    name: "Zendinit",
    url: "https://zendinit.com",
    kind: "client",
    category: { es: "Servicios · Headless CMS", en: "Services · Headless CMS" },
    summary: {
      es: "Plataforma de servicios con backend headless y panel para el equipo de contenido.",
      en: "Services platform with a headless backend and a content team panel.",
    },
    stack: ["React.js", "Strapi"],
  },
  {
    slug: "orlegitech",
    name: "Orlegitech",
    url: "https://app.orlegitech.com",
    kind: "client",
    category: { es: "Gestión empresarial · Web & iOS", en: "Business management · Web & iOS" },
    summary: {
      es: "Plataforma multilingüe de gestión empresarial, disponible en web y como app iOS.",
      en: "Multilingual business-management platform, available on the web and as an iOS app.",
    },
    links: [
      { kind: "ios", url: "https://apps.apple.com/us/app/orlegitech/id6755734300" },
    ],
    stack: ["React.js", "React Native", "iOS"],
  },
  {
    slug: "tikneo-saas",
    image: "/images/projects/tikneo-saas.jpg",
    name: "Tikneo SaaS Platform",
    url: "https://tikneo.com",
    kind: "client",
    highlight: true,
    category: { es: "SaaS multi-tenant · Alta disponibilidad", en: "Multi-tenant SaaS · High availability" },
    summary: {
      es: "API multi-inquilino con procesamiento asíncrono de tareas y comunicación en tiempo real, con suite de pruebas E2E automatizadas.",
      en: "Multi-tenant API with asynchronous task processing and real-time communication, backed by an automated E2E test suite.",
    },
    stack: ["Django/DRF", "Celery", "MySQL", "Channels", "Firebase", "AWS", "Playwright", "pytest"],
  },
  {
    slug: "calculum",
    image: "/images/projects/calculum.jpg",
    name: "Calculum",
    url: "https://www.calculum.ai",
    kind: "client",
    highlight: true,
    category: { es: "API Core · Datos corporativos", en: "Core API · Corporate data" },
    summary: {
      es: "Solución corporativa orientada al rendimiento: consultas complejas vía GraphQL, indexación avanzada de datos y mensajería desacoplada para alta carga.",
      en: "Performance-oriented corporate solution: complex GraphQL queries, advanced data indexing and decoupled messaging for high load.",
    },
    stack: ["Symfony", "API Platform", "GraphQL", "PostgreSQL", "MongoDB", "Elasticsearch", "RabbitMQ", "Vue 3", "Vite"],
  },
  {
    slug: "emasex",
    name: "Emasex",
    url: "https://emasex.com",
    kind: "client",
    category: { es: "E-commerce & CMS avanzado", en: "E-commerce & advanced CMS" },
    summary: {
      es: "Tienda online a medida optimizada para SEO y conversión, con CMS avanzado y motor de búsqueda inteligente ultrarrápido.",
      en: "Custom online store optimized for SEO and conversion, with an advanced CMS and an ultra-fast smart search engine.",
    },
    stack: ["Laravel", "Nova", "Livewire", "Algolia", "Tailwind CSS"],
  },
  {
    slug: "quant-trading-bots",
    name: "Quant Trading Bots",
    kind: "client",
    category: { es: "Trading cuantitativo · Escritorio", en: "Quant trading · Desktop" },
    summary: {
      es: "Herramientas automatizadas de análisis de mercados en tiempo real, ejecución de órdenes de baja latencia y gestión de riesgo, con bot multiextensión (Bitunix) e interfaz gráfica y estrategias Grid Trading.",
      en: "Automated tools for real-time market analysis, low-latency order execution and risk management — a multi-exchange bot (Bitunix) with a GUI plus advanced Grid Trading strategies.",
    },
    stack: ["Python", "CCXT", "Pandas", "PyQt5"],
  },
  {
    slug: "marketing-app",
    name: "Marketing Automation",
    kind: "client",
    category: { es: "Growth Hacking · Automatización", en: "Growth hacking · Automation" },
    summary: {
      es: "Dashboard interactivo para la gestión de campañas automatizadas y el envío de notificaciones masivas a través de canales de mensajería instantánea.",
      en: "Interactive dashboard to manage automated campaigns and send bulk notifications through instant-messaging channels.",
    },
    stack: ["Streamlit", "Python", "WhatsApp Gateway"],
  },
];

/**
 * Slides for the hero carousel, in display order. Client work leads — it is the
 * strongest proof for a prospect — then our own products.
 * Every slug here must point to a project that has an `image`.
 */
export const heroSlides: readonly string[] = [
  "kods-ai",
  "tikneo-saas",
  "calculum",
  "polypop",
  "zendinit",
  "take",
  "iris-natural",
];

export const heroProjects: readonly Project[] = heroSlides.map((slug) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project?.image) {
    throw new Error(`heroSlides: "${slug}" is missing from projects or has no image`);
  }
  return project;
});
