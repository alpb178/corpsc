import type { Dictionary } from "./types";

const dict: Dictionary = {
  meta: {
    title: "CORPSC — Software Development Studio",
    description:
      "CORPSC es un estudio de desarrollo de software con base en Santa Cruz de la Sierra, Bolivia. Construimos plataformas web y móviles para clientes en Bolivia, Latinoamérica y Europa con React, TypeScript, Strapi y desarrollo asistido por IA.",
  },
  nav: {
    about: "Nosotros",
    services: "Servicios",
    projects: "Proyectos",
    leadership: "Liderazgo",
    stack: "Stack",
    contact: "Contacto",
    cta: "Hablemos",
    theme: { light: "Cambiar a modo claro", dark: "Cambiar a modo oscuro" },
  },
  hero: {
    eyebrow: "Estudio de desarrollo de software",
    title: "Construimos producto digital",
    titleAccent: "con IA en el flujo de trabajo.",
    subtitle:
      "Estudio con base en Santa Cruz de la Sierra, Bolivia, entregando plataformas web y móviles a medida para clientes en Bolivia, Latinoamérica y Europa. Más de 15 proyectos en producción, arquitectura headless y un equipo nativo en herramientas de IA.",
    primaryCta: "Iniciar un proyecto",
    secondaryCta: "Ver proyectos",
    stats: [
      { value: "9+", label: "años entregando producto" },
      { value: "15+", label: "proyectos en producción" },
      { value: "~60%", label: "menos tiempo de entrega con IA" },
      { value: "3", label: "países de operación" },
    ],
  },
  about: {
    eyebrow: "Sobre CORPSC",
    title: "Un estudio enfocado en ingeniería de producto.",
    body: [
      "CORPSC es un estudio de desarrollo con base en Santa Cruz de la Sierra, Bolivia. Operamos para empresas locales y, de forma 100% remota, también para clientes en Latinoamérica, España y la Unión Europea.",
      "Diseñamos y construimos aplicaciones web y móviles de extremo a extremo: arquitectura, frontend, backend headless, testing E2E y despliegue. Adoptamos herramientas de IA generativa (Claude, Cursor) como parte del proceso, no como un experimento.",
      "Nuestra prioridad es entregar producto en producción, mantenible y con cobertura de pruebas — no demos.",
    ],
    pillars: [
      {
        title: "Producto en producción",
        body: "Operamos 3 SaaS propios y más de 12 plataformas para clientes. Sabemos lo que cuesta mantener algo vivo.",
      },
      {
        title: "Arquitectura headless",
        body: "React y Next.js sobre Strapi CMS para separar contenido de presentación y escalar sin reescribir.",
      },
      {
        title: "Calidad con E2E",
        body: "Pipelines automatizados con Playwright y Cypress para reducir regresiones después del despliegue.",
      },
      {
        title: "IA en el flujo diario",
        body: "Claude AI + Cursor IDE integrados para reducir tiempos de entrega ~60% manteniendo calidad de código.",
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
    bio: [
      "Ingeniero Informático graduado de la Universidad Tecnológica de La Habana (CUJAE) con más de 9 años entregando aplicaciones web y móviles a clientes internacionales.",
      "Especialista en React.js, TypeScript y arquitecturas headless con Strapi. Adoptante temprano de IA generativa en el flujo de desarrollo, reduciendo tiempos de entrega estimados en ~60% sin comprometer calidad.",
      "Además de liderar CORPSC, opera personalmente tres productos SaaS en producción y mantiene dos aplicaciones React Native publicadas en Google Play.",
    ],
    quote:
      "No vendemos demos. Vendemos producto vivo, con tests y soporte. La IA hace que entreguemos más rápido — pero la responsabilidad por el código sigue siendo humana.",
    contactLabel: "Hablar con Alejandro",
  },
  stack: {
    eyebrow: "Stack",
    title: "Las herramientas con las que construimos.",
    groups: [
      {
        label: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Vue.js", "Tailwind", "HTML5 / CSS3"],
      },
      { label: "Móvil", items: ["React Native", "Android Studio", "Java", "Kotlin"] },
      { label: "Backend & CMS", items: ["Strapi (headless)", "Node.js", "Symfony", "Ruby on Rails", "PHP / Yii"] },
      { label: "Testing & QA", items: ["Playwright", "Cypress", "Jest", "CI/CD E2E"] },
      { label: "IA & Dev Tools", items: ["Claude AI", "Cursor IDE", "Prompt Engineering", "Git · GitHub"] },
      { label: "Bases de datos", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
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
    direct: {
      emailLabel: "Email",
      phoneLabel: "Teléfono / WhatsApp",
      locationLabel: "Ubicación",
      locationValue: "Santa Cruz de la Sierra, Bolivia · Remoto LATAM / EU",
    },
  },
  footer: {
    tagline: "Estudio de software · React · TypeScript · IA aplicada.",
    rights: "Todos los derechos reservados.",
    sections: {
      product: "Compañía",
      links: "Enlaces",
      contact: "Contacto",
    },
  },
};

export default dict;
