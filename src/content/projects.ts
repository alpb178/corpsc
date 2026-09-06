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
  /** Desktop screenshot under /public/images/projects. Required to appear in the hero carousel. */
  image?: string;
  /** Matching mobile screenshot, shown in the phone beside the laptop. */
  imageMobile?: string;
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
    imageMobile: "/images/projects/mobile/take.jpg",
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
    image: "/images/projects/invoices.jpg",
    imageMobile: "/images/projects/mobile/invoices.jpg",
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
    imageMobile: "/images/projects/mobile/iris-natural.jpg",
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
    image: "/images/projects/humancore.jpg",
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
    image: "/images/projects/histolword.jpg",
    imageMobile: "/images/projects/mobile/histolword.jpg",
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
    slug: "tu-chamba",
    name: "Tu Chamba",
    url: "https://tu-chamba.corpsc.com",
    image: "/images/projects/tu-chamba.jpg",
    imageMobile: "/images/projects/mobile/tu-chamba.jpg",
    kind: "own",
    highlight: true,
    category: { es: "Bolsa de empleo", en: "Job marketplace" },
    summary: {
      es: "Bolsa de empleo para Bolivia: ofertas por día, media jornada o tiempo completo, con contacto directo por WhatsApp y sin CV.",
      en: "Job marketplace for Bolivia — daily, part-time and full-time listings, with direct WhatsApp contact and no CV required.",
    },
    stack: ["Next.js", "React.js", "Vercel"],
  },
  {
    slug: "dandomuela",
    image: "/images/projects/dandomuela.jpg",
    imageMobile: "/images/projects/mobile/dandomuela.jpg",
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
    slug: "popyplan",
    image: "/images/projects/popyplan.jpg",
    name: "Popyplan",
    url: "https://popyplan.com/?mode=circle",
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
    image: "/images/projects/orlegitech.jpg",
    name: "Orlegitech",
    url: "https://orlegitech.com",
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
    slug: "tikneo",
    image: "/images/projects/tikneo.jpg",
    name: "Tikneo",
    url: "https://tikneo.com",
    kind: "client",
    highlight: true,
    category: { es: "SaaS multi-tenant · Alta disponibilidad", en: "Multi-tenant SaaS · High availability" },
    summary: {
      es: "API multi-tenant con procesamiento asíncrono de tareas y comunicación en tiempo real, con suite de pruebas E2E automatizadas.",
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
];

/**
 * Slides for the hero carousel, in display order: the products CORPSC owns
 * and runs itself.
 * Every slug here must point to a project that has an `image`.
 */
export const heroSlides: readonly string[] = [
  "iris-natural",
  "invoices",
  "tu-chamba",
  "dandomuela",
  "take",
  "histolword",
];

export const heroProjects: readonly Project[] = heroSlides.map((slug) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project?.image || !project.imageMobile) {
    throw new Error(
      `heroSlides: "${slug}" is missing from projects, or has no image / imageMobile`,
    );
  }
  return project;
});
