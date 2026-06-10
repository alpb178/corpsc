import type { Dictionary } from "./types";

const dict: Dictionary = {
  meta: {
    title: "CORPSC — Software Development Studio",
    description:
      "CORPSC is a software development studio based in Santa Cruz de la Sierra, Bolivia. We build web and mobile platforms for clients in Bolivia, Latin America and Europe with React, TypeScript, Strapi and AI-powered development.",
  },
  nav: {
    about: "About",
    services: "Services",
    projects: "Work",
    leadership: "Leadership",
    stack: "Stack",
    contact: "Contact",
    cta: "Let's talk",
    theme: { light: "Switch to light mode", dark: "Switch to dark mode" },
  },
  hero: {
    eyebrow: "Software development studio",
    title: "We ship digital product",
    titleAccent: "with AI in the workflow.",
    subtitle:
      "A software studio based in Santa Cruz de la Sierra, Bolivia, shipping custom web and mobile platforms for clients across Bolivia, Latin America and Europe. 15+ projects in production, headless architecture, and a team native to AI tools.",
    primaryCta: "Start a project",
    secondaryCta: "View work",
    stats: [
      { value: "9+", label: "years shipping product" },
      { value: "15+", label: "projects in production" },
      { value: "~60%", label: "faster delivery with AI" },
      { value: "3", label: "countries of operation" },
    ],
  },
  about: {
    eyebrow: "About CORPSC",
    title: "A studio focused on product engineering.",
    body: [
      "CORPSC is a software studio based in Santa Cruz de la Sierra, Bolivia. We serve local companies and, fully remote, also clients across Latin America, Spain and the European Union.",
      "We design and build web and mobile applications end-to-end: architecture, frontend, headless backend, E2E testing and deployment. We adopt generative AI tools (Claude, Cursor) as part of the process — not as an experiment.",
      "Our priority is shipping production software that is maintainable and well-tested — not demos.",
    ],
    pillars: [
      {
        title: "Production product",
        body: "We operate 3 of our own SaaS products and 12+ client platforms. We know what it costs to keep something alive.",
      },
      {
        title: "Headless architecture",
        body: "React and Next.js on Strapi CMS to decouple content from presentation and scale without rewriting.",
      },
      {
        title: "Quality through E2E",
        body: "Automated pipelines with Playwright and Cypress to keep regressions out of production.",
      },
      {
        title: "AI in the daily flow",
        body: "Claude AI + Cursor IDE integrated into our workflow to cut delivery time by ~60% while keeping code quality.",
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
    bio: [
      "Computer Engineer, graduate of the Technological University of Havana (CUJAE), with 9+ years shipping web and mobile applications for international clients.",
      "Specialist in React.js, TypeScript and headless architectures on Strapi. Early adopter of generative AI in the development flow, cutting estimated delivery time by ~60% without compromising quality.",
      "Beyond leading CORPSC, he personally operates three SaaS products in production and maintains two React Native apps published on Google Play.",
    ],
    quote:
      "We don't sell demos. We sell live product, with tests and support. AI helps us ship faster — but accountability for the code stays human.",
    contactLabel: "Talk to Alejandro",
  },
  stack: {
    eyebrow: "Stack",
    title: "The tools we build with.",
    groups: [
      {
        label: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Vue.js", "Tailwind", "HTML5 / CSS3"],
      },
      { label: "Mobile", items: ["React Native", "Android Studio", "Java", "Kotlin"] },
      { label: "Backend & CMS", items: ["Strapi (headless)", "Node.js", "Symfony", "Ruby on Rails", "PHP / Yii"] },
      { label: "Testing & QA", items: ["Playwright", "Cypress", "Jest", "E2E CI/CD"] },
      { label: "AI & Dev Tools", items: ["Claude AI", "Cursor IDE", "Prompt Engineering", "Git · GitHub"] },
      { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
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
    direct: {
      emailLabel: "Email",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location",
      locationValue: "Santa Cruz de la Sierra, Bolivia · Remote LATAM / EU",
    },
  },
  footer: {
    tagline: "Software studio · React · TypeScript · applied AI.",
    rights: "All rights reserved.",
    sections: {
      product: "Company",
      links: "Links",
      contact: "Contact",
    },
  },
};

export default dict;
