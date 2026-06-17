import type { Dictionary } from "./types";

const dict: Dictionary = {
  meta: {
    title: "Custom Software Development Studio in Bolivia | CORPSC",
    description:
      "Software development studio in Santa Cruz, Bolivia. We build custom web platforms, mobile apps and APIs for clients across LATAM and Europe. Let's talk.",
  },
  nav: {
    about: "About",
    services: "Services",
    projects: "Work",
    leadership: "Leadership",
    stack: "Stack",
    contact: "Contact",
    cta: "Let's talk",
    menu: "Menu",
    skip: "Skip to content",
    theme: { light: "Switch to light mode", dark: "Switch to dark mode" },
  },
  hero: {
    eyebrow: "Software development studio",
    title: "We build custom software",
    titleAccent: "end-to-end.",
    subtitle:
      "A software studio based in Santa Cruz de la Sierra, Bolivia, designing and building web platforms, mobile apps, APIs and multi-tenant SaaS for clients across Bolivia, Latin America and Europe. 20+ projects in production, full-stack engineering across multiple stacks, and E2E test coverage.",
    primaryCta: "Start a project",
    secondaryCta: "View work",
    stats: [
      { value: "9+", label: "years building software" },
      { value: "20+", label: "projects in production" },
      { value: "10+", label: "technologies & stacks" },
      { value: "3", label: "countries of operation" },
    ],
  },
  about: {
    eyebrow: "About CORPSC",
    title: "An end-to-end software engineering studio.",
    body: [
      "CORPSC is a software development studio based in Santa Cruz de la Sierra, Bolivia. We serve local companies and, fully remote, also clients across Latin America, Spain and the European Union.",
      "We design and build web, mobile and API applications end-to-end: architecture, frontend, backend, databases, E2E testing and deployment. We work across multiple stacks — React/Next and Vue on the frontend; Node, Django, Symfony, Laravel and Python on the backend — picking the right tool for what each product needs.",
      "Our priority is shipping production software that is maintainable and well-tested — not demos. We use generative AI (Claude, Cursor) to accelerate the process, never to replace the engineering.",
    ],
    pillars: [
      {
        title: "Software in production",
        body: "We operate 7 of our own products and 13 client platforms. We know what it costs to keep software alive.",
      },
      {
        title: "Full-stack engineering",
        body: "Frontend, backend, APIs and databases across several stacks: React, Vue, Node, Django, Symfony, Laravel and Python.",
      },
      {
        title: "Scalable architecture",
        body: "Headless, multi-tenant and API-first designs (REST / GraphQL) to grow without rewriting.",
      },
      {
        title: "Quality through E2E",
        body: "Automated pipelines with Playwright, Cypress and pytest to keep regressions out of production.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What we build for you.",
    subtitle:
      "From technical design to production deployment, with a single team owning the work end-to-end.",
    items: [
      {
        title: "Web platforms",
        body: "React.js and Next.js applications with TypeScript, SSR and production-grade performance.",
        bullets: ["React · Next.js · TypeScript", "SSR / ISR / Edge", "Tailwind · custom UI"],
      },
      {
        title: "Mobile apps",
        body: "Cross-platform apps with React Native and native Android, shipped to Google Play.",
        bullets: ["React Native", "Android (Java / Kotlin)", "Store publishing"],
      },
      {
        title: "Headless backends",
        body: "Strapi and Node.js as the backbone — versioned data, clean APIs and a panel for your team.",
        bullets: ["Strapi CMS", "Node.js · REST · GraphQL", "PostgreSQL · MySQL · MongoDB"],
      },
      {
        title: "Testing & QA",
        body: "Playwright and Cypress E2E suites so deploys stop hurting.",
        bullets: ["Playwright · Cypress · Jest", "CI/CD pipelines", "Measurable coverage"],
      },
      {
        title: "AI-powered development",
        body: "We embed Claude AI and Cursor IDE into the dev cycle to ship faster without sacrificing quality.",
        bullets: ["Claude AI · Cursor IDE", "Applied prompt engineering", "Assisted reviews"],
      },
      {
        title: "Bespoke product",
        body: "We walk you from discovery to launch — we think like owners, not like a freelance shop.",
        bullets: ["Technical discovery", "Incremental roadmap", "Post-launch support"],
      },
    ],
  },
  projects: {
    eyebrow: "Work",
    title: "What we have shipped to production.",
    subtitle:
      "We separate CORPSC's own products from work delivered for clients. Everything live, everything verifiable.",
    ownTab: "Own products",
    clientTab: "Clients",
    visit: "Visit",
    stackLabel: "Stack",
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Meet the founder.",
    name: "Alejandro Pérez",
    role: "Founder & CEO · Computer Engineer",
    photoAlt: "Alejandro Pérez, Founder & CEO of CORPSC",
    bio: [
      "Computer Engineer, graduate of the Technological University of Havana (CUJAE), with 9+ years building web, mobile and API applications for international clients.",
      "Full-stack developer fluent in React.js, TypeScript and Vue on the frontend, and Node.js, Django, Symfony, Laravel and Python on the backend, over headless and multi-tenant architectures.",
      "Beyond leading CORPSC, he personally operates several SaaS products in production and maintains React Native apps published on Google Play.",
    ],
    quote:
      "We don't sell demos. We sell live software, with tests and support. Solid engineering comes first; AI only makes us faster.",
    contactLabel: "Talk to Alejandro",
  },
  stack: {
    eyebrow: "Stack",
    title: "The tools we build with.",
    groups: [
      {
        label: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Vue.js", "Tailwind", "Vite", "Livewire", "HTML5 / CSS3"],
      },
      { label: "Mobile", items: ["React Native", "Android Studio", "Java", "Kotlin"] },
      { label: "Backend & CMS", items: ["Strapi (headless)", "Node.js", "Symfony + API Platform", "Laravel + Nova", "Ruby on Rails", "PHP / Yii"] },
      { label: "Python & automation", items: ["Django / DRF", "FastAPI", "Celery", "Pandas", "CCXT", "Streamlit", "PyQt5"] },
      { label: "APIs & messaging", items: ["GraphQL", "REST API", "WebSockets / Channels", "RabbitMQ"] },
      { label: "Testing & QA", items: ["Playwright", "Cypress", "Jest", "pytest", "E2E CI/CD"] },
      { label: "AI & Dev Tools", items: ["Claude AI", "Cursor IDE", "Prompt Engineering", "Git · GitHub"] },
      { label: "Databases & search", items: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Algolia", "SQLite"] },
      { label: "Cloud & integrations", items: ["AWS", "Firebase", "Telegram Bot", "TON", "WhatsApp Gateway"] },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us what you want to build.",
    subtitle:
      "We reply in under 24 business hours. You can also reach us directly by email or WhatsApp.",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      submit: "Send message",
    },
    whatsappCta: "Send via WhatsApp",
    success:
      "We opened your email app with the message ready — just hit send. If nothing opened, reach us on WhatsApp or by email.",
    emailSubject: "New inquiry from corpsc.com",
    direct: {
      emailLabel: "Email",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location",
      locationValue: "Santa Cruz de la Sierra, Bolivia · Remote LATAM / EU",
    },
  },
  footer: {
    tagline: "Software development studio · Web · Mobile · APIs · Full-stack.",
    rights: "All rights reserved.",
    sections: {
      product: "Company",
      links: "Links",
      contact: "Contact",
    },
  },
};

export default dict;
