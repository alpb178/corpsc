export type ProjectKind = "own" | "client";

export interface Project {
  slug: string;
  name: string;
  url: string;
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
    slug: "pop",
    name: "POP",
    url: "https://pop.corpsc.com",
    kind: "own",
    category: { es: "Producto interno", en: "Internal product" },
    summary: {
      es: "Producto interno de CORPSC para flujos de operación.",
      en: "Internal CORPSC product for operations workflows.",
    },
    stack: ["React.js"],
  },

  // ── Client work ────────────────────────────────────────────────────
  {
    slug: "kods-ai",
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
    name: "Tikneo Golf (mobile)",
    url: "https://play.google.com/store/search?q=tikneo%20golf",
    kind: "client",
    category: { es: "App móvil · Google Play", en: "Mobile app · Google Play" },
    summary: {
      es: "App móvil publicada en Google Play para la gestión de rondas de golf.",
      en: "Mobile app published on Google Play for managing golf rounds.",
    },
    stack: ["React Native", "Android"],
  },
  {
    slug: "tikneo-social",
    name: "Tikneo Social (mobile)",
    url: "https://play.google.com/store/search?q=tikneo%20social",
    kind: "client",
    category: { es: "App móvil · Google Play", en: "Mobile app · Google Play" },
    summary: {
      es: "App social para comunidades deportivas, publicada en Google Play.",
      en: "Social app for sports communities, published on Google Play.",
    },
    stack: ["React Native", "Android"],
  },
  {
    slug: "zendinit",
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
    category: { es: "Gestión empresarial · ES / EN", en: "Business management · ES / EN" },
    summary: {
      es: "Plataforma multilingüe de gestión empresarial.",
      en: "Multilingual business-management platform.",
    },
    stack: ["React.js"],
  },
];
