import type { Dictionary } from "./types";

const dict: Dictionary = {
  meta: {
    title: "Desarrollo de software a medida en Bolivia | CORPSC",
    description:
      "Estudio de desarrollo de software en Santa Cruz, Bolivia. Construimos plataformas web, apps y APIs a medida para clientes en LATAM y Europa. Hablemos.",
  },
  nav: {
    about: "Nosotros",
    services: "Servicios",
    projects: "Proyectos",
    leadership: "Liderazgo",
    stack: "Stack",
    contact: "Contacto",
    cta: "Hablemos",
    menu: "Menú",
    skip: "Saltar al contenido",
    theme: { light: "Cambiar a modo claro", dark: "Cambiar a modo oscuro" },
  },
  hero: {
    eyebrow: "Estudio de desarrollo de software",
    title: "Desarrollamos software a medida",
    titleAccent: "de extremo a extremo.",
    subtitle:
      "Estudio con base en Santa Cruz de la Sierra, Bolivia, diseñando y construyendo plataformas web, aplicaciones móviles, APIs y SaaS multi-inquilino para clientes en Bolivia, Latinoamérica y Europa. Más de 20 proyectos en producción, ingeniería full-stack en múltiples stacks y cobertura de pruebas E2E.",
    primaryCta: "Iniciar un proyecto",
    secondaryCta: "Ver proyectos",
    carousel: {
      label: "Proyectos desarrollados por CORPSC",
      prev: "Proyecto anterior",
      next: "Proyecto siguiente",
      goTo: "Ir al proyecto {n}",
      visit: "Ver proyecto",
    },
    stats: [
      { value: "9+", label: "años desarrollando software" },
      { value: "20+", label: "proyectos en producción" },
      { value: "10+", label: "tecnologías y stacks" },
      { value: "3", label: "países de operación" },
    ],
  },
  about: {
    eyebrow: "Sobre CORPSC",
    title: "Un estudio de ingeniería de software de extremo a extremo.",
    body: [
      "CORPSC es un estudio de desarrollo de software con base en Santa Cruz de la Sierra, Bolivia. Operamos para empresas locales y, de forma 100% remota, también para clientes en Latinoamérica, España y la Unión Europea.",
      "Diseñamos y construimos aplicaciones web, móviles y APIs de extremo a extremo: arquitectura, frontend, backend, bases de datos, testing E2E y despliegue. Trabajamos con múltiples stacks — React/Next y Vue en el frontend; Node, Django, Symfony, Laravel y Python en el backend — eligiendo la herramienta según lo que cada producto necesita.",
      "Nuestra prioridad es entregar software en producción, mantenible y con cobertura de pruebas — no demos. Usamos IA generativa (Claude, Cursor) como acelerador del proceso, sin que sustituya la ingeniería.",
    ],
    pillars: [
      {
        title: "Software en producción",
        body: "Operamos 7 productos propios y 13 plataformas para clientes. Sabemos lo que cuesta mantener software vivo.",
      },
      {
        title: "Ingeniería full-stack",
        body: "Frontend, backend, APIs y bases de datos en varios stacks: React, Vue, Node, Django, Symfony, Laravel y Python.",
      },
      {
        title: "Arquitectura escalable",
        body: "Diseños headless, multi-inquilino y orientados a APIs (REST / GraphQL) para crecer sin reescribir.",
      },
      {
        title: "Calidad con E2E",
        body: "Pipelines automatizados con Playwright, Cypress y pytest para reducir regresiones después del despliegue.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Lo que construimos para ti.",
    subtitle:
      "Desde el diseño técnico hasta el despliegue en producción, con un único equipo responsable de extremo a extremo.",
    items: [
      {
        title: "Plataformas web",
        body: "Aplicaciones React.js y Next.js con TypeScript, SSR y rendimiento de producción.",
        bullets: ["React · Next.js · TypeScript", "SSR / ISR / Edge", "Tailwind · UI a medida"],
      },
      {
        title: "Aplicaciones móviles",
        body: "Apps multiplataforma con React Native y nativo Android publicadas en Google Play.",
        bullets: ["React Native", "Android (Java / Kotlin)", "Publicación en stores"],
      },
      {
        title: "Backends headless",
        body: "Strapi y Node.js como backbone — datos versionados, APIs limpias y panel para tu equipo.",
        bullets: ["Strapi CMS", "Node.js · REST · GraphQL", "PostgreSQL · MySQL · MongoDB"],
      },
      {
        title: "Testing y QA",
        body: "Suites E2E con Playwright y Cypress para que el despliegue deje de doler.",
        bullets: ["Playwright · Cypress · Jest", "Pipelines CI/CD", "Cobertura medible"],
      },
      {
        title: "Desarrollo con IA",
        body: "Integramos Claude AI y Cursor IDE en el ciclo de desarrollo para acelerar entregas sin sacrificar calidad.",
        bullets: ["Claude AI · Cursor IDE", "Prompt engineering aplicado", "Reviews asistidos"],
      },
      {
        title: "Producto a medida",
        body: "Acompañamos desde el descubrimiento hasta el lanzamiento — pensamos como dueños, no como freelance.",
        bullets: ["Discovery técnico", "Roadmap incremental", "Soporte post-lanzamiento"],
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Lo que hemos puesto en producción.",
    subtitle:
      "Separamos los productos propios de CORPSC del trabajo entregado para clientes. Todo en producción, todo verificable.",
    ownTab: "Productos propios",
    clientTab: "Clientes",
    visit: "Visitar",
    stackLabel: "Stack",
  },
  leadership: {
    eyebrow: "Liderazgo",
    title: "Conoce al fundador.",
    name: "Alejandro Pérez",
    role: "Fundador y CEO · Ingeniero Informático",
    photoAlt: "Alejandro Pérez, Fundador y CEO de CORPSC",
    bio: [
      "Ingeniero Informático graduado de la Universidad Tecnológica de La Habana (CUJAE) con más de 9 años desarrollando aplicaciones web, móviles y APIs para clientes internacionales.",
      "Desarrollador full-stack con dominio de React.js, TypeScript y Vue en el frontend, y de Node.js, Django, Symfony, Laravel y Python en el backend, sobre arquitecturas headless y multi-inquilino.",
      "Además de liderar CORPSC, opera personalmente varios productos SaaS en producción y mantiene aplicaciones React Native publicadas en Google Play.",
    ],
    quote:
      "No vendemos demos. Vendemos software vivo, con pruebas y soporte. La ingeniería sólida es lo primero; la IA solo nos hace más rápidos.",
    contactLabel: "Hablar con Alejandro",
  },
  stack: {
    eyebrow: "Stack",
    title: "Las herramientas con las que construimos.",
    groups: [
      {
        label: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Vue.js", "Tailwind", "Vite", "Livewire", "HTML5 / CSS3"],
      },
      { label: "Móvil", items: ["React Native", "Android Studio", "Java", "Kotlin"] },
      { label: "Backend & CMS", items: ["Strapi (headless)", "Node.js", "Symfony + API Platform", "Laravel + Nova", "Ruby on Rails", "PHP / Yii"] },
      { label: "Python & automatización", items: ["Django / DRF", "FastAPI", "Celery", "Pandas", "CCXT", "Streamlit", "PyQt5"] },
      { label: "APIs & mensajería", items: ["GraphQL", "REST API", "WebSockets / Channels", "RabbitMQ"] },
      { label: "Testing & QA", items: ["Playwright", "Cypress", "Jest", "pytest", "CI/CD E2E"] },
      { label: "IA & Dev Tools", items: ["Claude AI", "Cursor IDE", "Prompt Engineering", "Git · GitHub"] },
      { label: "Bases de datos & búsqueda", items: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Algolia", "SQLite"] },
      { label: "Cloud & integraciones", items: ["AWS", "Firebase", "Telegram Bot", "TON", "WhatsApp Gateway"] },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Cuéntanos qué quieres construir.",
    subtitle:
      "Respondemos en menos de 24 horas hábiles. Si prefieres, escríbenos directamente por email o WhatsApp.",
    fields: {
      name: "Nombre",
      email: "Email",
      company: "Empresa",
      message: "Mensaje",
      submit: "Enviar mensaje",
    },
    whatsappCta: "Enviar por WhatsApp",
    success:
      "Abrimos tu app de correo con el mensaje listo — solo pulsa enviar. Si no se abrió, escríbenos por WhatsApp o a nuestro email.",
    emailSubject: "Nuevo contacto desde corpsc.com",
    direct: {
      emailLabel: "Email",
      phoneLabel: "Teléfono / WhatsApp",
      locationLabel: "Ubicación",
      locationValue: "Santa Cruz de la Sierra, Bolivia · Remoto LATAM / EU",
    },
  },
  footer: {
    tagline: "Estudio de desarrollo de software · Web · Móvil · APIs · Full-stack.",
    rights: "Todos los derechos reservados.",
    sections: {
      product: "Compañía",
      links: "Enlaces",
      contact: "Contacto",
    },
  },
};

export default dict;
