import type { Dictionary } from "./types";

// Brazilian Portuguese (pt-BR).
const dict: Dictionary = {
  meta: {
    title: "Desenvolvimento de software sob medida na Bolívia | CORPSC",
    description:
      "Estúdio de desenvolvimento de software em Santa Cruz, Bolívia. Criamos plataformas web, apps e APIs sob medida para clientes na América Latina e na Europa. Vamos conversar.",
  },
  nav: {
    about: "Quem somos",
    services: "Serviços",
    projects: "Projetos",
    leadership: "Liderança",
    stack: "Stack",
    contact: "Contato",
    cta: "Vamos conversar",
    menu: "Menu",
    skip: "Pular para o conteúdo",
    theme: { light: "Mudar para o modo claro", dark: "Mudar para o modo escuro" },
    language: "Idioma",
  },
  hero: {
    eyebrow: "Estúdio de desenvolvimento de software",
    title: "Transformamos ideias em produtos digitais",
    titleAccent: "que crescem.",
    subtitle:
      "Projetamos, desenvolvemos e evoluímos plataformas web, aplicativos e soluções SaaS para empresas que querem levar suas operações a outro patamar. São 14 projetos em produção e mais de 9 anos criando software para clientes na Bolívia, na América Latina e na Europa.",
    primaryCta: "Começar um projeto",
    secondaryCta: "Ver projetos",
    carousel: {
      label: "Projetos desenvolvidos pela CORPSC",
      prev: "Projeto anterior",
      next: "Próximo projeto",
      goTo: "Ir para o projeto {n}",
      visit: "Ver projeto",
    },
    stats: [
      { value: "9+", label: "anos desenvolvendo software" },
      { value: "14", label: "projetos em produção" },
      { value: "10+", label: "tecnologias e stacks" },
      { value: "3", label: "países de atuação" },
    ],
  },
  about: {
    eyebrow: "Sobre a CORPSC",
    title: "Um estúdio de engenharia de software de ponta a ponta.",
    body: [
      "A CORPSC é um estúdio de desenvolvimento de software sediado em Santa Cruz de la Sierra, na Bolívia. Atendemos empresas locais e, de forma 100% remota, clientes em toda a América Latina, na Espanha e na União Europeia.",
      "Projetamos e construímos aplicações web, mobile e APIs de ponta a ponta: arquitetura, frontend, backend, bancos de dados, testes E2E e deploy. Trabalhamos com vários stacks — React/Next e Vue no frontend; Node, Django, Symfony, Laravel e Python no backend — e escolhemos a ferramenta certa para o que cada produto precisa.",
      "Nossa prioridade é entregar software em produção, fácil de manter e bem testado — nada de demos. Usamos IA generativa (Claude, Cursor) para acelerar o processo, nunca para substituir a engenharia.",
    ],
    pillars: [
      {
        title: "Software em produção",
        body: "Operamos 7 produtos próprios e 7 plataformas de clientes. Sabemos quanto custa manter um software no ar.",
      },
      {
        title: "Engenharia full-stack",
        body: "Frontend, backend, APIs e bancos de dados em vários stacks: React, Vue, Node, Django, Symfony, Laravel e Python.",
      },
      {
        title: "Arquitetura escalável",
        body: "Arquiteturas headless, multi-tenant e API-first (REST / GraphQL) para crescer sem precisar reescrever tudo.",
      },
      {
        title: "Qualidade com testes E2E",
        body: "Pipelines automatizados com Playwright, Cypress e pytest para evitar que regressões cheguem à produção.",
      },
    ],
  },
  services: {
    eyebrow: "Serviços",
    title: "O que construímos para você.",
    subtitle:
      "Do desenho técnico ao deploy em produção, com uma única equipe responsável por todo o trabalho.",
    items: [
      {
        title: "Plataformas web",
        body: "Aplicações em React.js e Next.js com TypeScript, SSR e desempenho de produção.",
        bullets: ["React · Next.js · TypeScript", "SSR / ISR / Edge", "Tailwind · UI sob medida"],
      },
      {
        title: "Aplicativos mobile",
        body: "Apps multiplataforma com React Native e Android nativo, publicados no Google Play.",
        bullets: ["React Native", "Android (Java / Kotlin)", "Publicação na App Store e no Google Play"],
      },
      {
        title: "Backends headless",
        body: "Strapi e Node.js como base — dados versionados, APIs limpas e um painel para a sua equipe.",
        bullets: ["Strapi CMS", "Node.js · REST · GraphQL", "PostgreSQL · MySQL · MongoDB"],
      },
      {
        title: "Testes e QA",
        body: "Suítes E2E com Playwright e Cypress para que cada deploy deixe de ser um sufoco.",
        bullets: ["Playwright · Cypress · Jest", "Pipelines de CI/CD", "Cobertura mensurável"],
      },
      {
        title: "Desenvolvimento com IA",
        body: "Integramos o Claude AI e o Cursor IDE ao ciclo de desenvolvimento para entregar mais rápido sem abrir mão da qualidade.",
        bullets: ["Claude AI · Cursor IDE", "Prompt engineering aplicado", "Code review assistido"],
      },
      {
        title: "Produto sob medida",
        body: "Acompanhamos você da descoberta ao lançamento — pensamos como donos do produto, não como freelancers.",
        bullets: ["Descoberta técnica", "Roadmap incremental", "Suporte pós-lançamento"],
      },
    ],
  },
  projects: {
    eyebrow: "Projetos",
    title: "O que já colocamos em produção.",
    subtitle:
      "Separamos os produtos próprios da CORPSC dos trabalhos entregues para clientes. Tudo no ar, tudo verificável.",
    ownTab: "Produtos próprios",
    clientTab: "Clientes",
    visit: "Visitar site",
    live: "Em produção",
    featured: "Destaque",
    ownBadge: "Produto próprio",
    clientBadge: "Projeto de cliente",
    stackLabel: "Stack",
  },
  leadership: {
    eyebrow: "Liderança",
    title: "Conheça o fundador.",
    name: "Alejandro Pérez",
    role: "Fundador e CEO · Engenheiro de Computação",
    photoAlt: "Alejandro Pérez, fundador e CEO da CORPSC",
    bio: [
      "Engenheiro de Computação formado pela Universidade Tecnológica de Havana (CUJAE), com mais de 9 anos desenvolvendo aplicações web, mobile e APIs para clientes internacionais.",
      "Desenvolvedor full-stack com domínio de React.js, TypeScript e Vue no frontend, e de Node.js, Django, Symfony, Laravel e Python no backend, em arquiteturas headless e multi-tenant.",
      "Além de liderar a CORPSC, opera pessoalmente vários produtos SaaS em produção e mantém apps em React Native publicados no Google Play.",
    ],
    quote:
      "Não vendemos demos. Vendemos software no ar, com testes e suporte. Engenharia sólida vem primeiro; a IA só nos deixa mais rápidos.",
    contactLabel: "Falar com o Alejandro",
  },
  stack: {
    eyebrow: "Stack",
    title: "As ferramentas com que construímos.",
    groups: [
      {
        label: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Vue.js", "Tailwind", "Vite", "Livewire", "HTML5 / CSS3"],
      },
      { label: "Mobile", items: ["React Native", "Android Studio", "Java", "Kotlin"] },
      { label: "Backend & CMS", items: ["Strapi (headless)", "Node.js", "Symfony + API Platform", "Laravel + Nova", "Ruby on Rails", "PHP / Yii"] },
      { label: "Python & automação", items: ["Django / DRF", "FastAPI", "Celery", "Pandas", "CCXT", "Streamlit", "PyQt5"] },
      { label: "APIs & mensageria", items: ["GraphQL", "REST API", "WebSockets / Channels", "RabbitMQ"] },
      { label: "Testes & QA", items: ["Playwright", "Cypress", "Jest", "pytest", "CI/CD E2E"] },
      { label: "IA & Dev Tools", items: ["Claude AI", "Cursor IDE", "Prompt Engineering", "Git · GitHub"] },
      { label: "Bancos de dados & busca", items: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Algolia", "SQLite"] },
      { label: "Cloud & integrações", items: ["AWS", "Firebase", "Telegram Bot", "TON", "WhatsApp Gateway"] },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Conte pra gente o que você quer construir.",
    subtitle:
      "Respondemos em até 24 horas úteis. Se preferir, fale com a gente direto por e-mail ou WhatsApp.",
    fields: {
      name: "Nome",
      email: "E-mail",
      company: "Empresa",
      message: "Mensagem",
      submit: "Enviar mensagem",
    },
    whatsappCta: "Enviar pelo WhatsApp",
    success:
      "Abrimos seu app de e-mail com a mensagem pronta — é só clicar em enviar. Se nada abriu, fale com a gente pelo WhatsApp ou por e-mail.",
    emailSubject: "Novo contato pelo corpsc.com",
    direct: {
      emailLabel: "E-mail",
      phoneLabel: "Telefone / WhatsApp",
      locationLabel: "Localização",
      locationValue: "Santa Cruz de la Sierra, Bolívia · Remoto na América Latina / UE",
    },
  },
  ticker: {
    label: "Sites de interesse",
  },
  footer: {
    tagline: "Estúdio de desenvolvimento de software · Web · Mobile · APIs · Full-stack.",
    rights: "Todos os direitos reservados.",
    sections: {
      product: "Empresa",
      links: "Links",
      contact: "Contato",
    },
  },
};

export default dict;
