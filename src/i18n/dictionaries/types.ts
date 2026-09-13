export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    projects: string;
    leadership: string;
    stack: string;
    contact: string;
    cta: string;
    menu: string;
    skip: string;
    theme: { light: string; dark: string };
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    carousel: {
      label: string;
      prev: string;
      next: string;
      /** Uses {n} as a placeholder for the 1-based slide number. */
      goTo: string;
      visit: string;
    };
    stats: ReadonlyArray<{ value: string; label: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    body: ReadonlyArray<string>;
    pillars: ReadonlyArray<{ title: string; body: string }>;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ReadonlyArray<{
      title: string;
      body: string;
      bullets: ReadonlyArray<string>;
    }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ownTab: string;
    clientTab: string;
    visit: string;
    stackLabel: string;
    /** Status line over the card screenshot. */
    live: string;
    /** Badge on highlighted projects. */
    featured: string;
    /** Ownership label on a single card. */
    ownBadge: string;
    clientBadge: string;
  };
  leadership: {
    eyebrow: string;
    title: string;
    name: string;
    role: string;
    photoAlt: string;
    bio: ReadonlyArray<string>;
    quote: string;
    contactLabel: string;
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: ReadonlyArray<{ label: string; items: ReadonlyArray<string> }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
    whatsappCta: string;
    success: string;
    emailSubject: string;
    direct: {
      emailLabel: string;
      phoneLabel: string;
      locationLabel: string;
      locationValue: string;
    };
  };
  ticker: {
    /** Accessible name of the top strip of sibling sites. */
    label: string;
  };
  footer: {
    tagline: string;
    rights: string;
    sections: {
      product: string;
      links: string;
      contact: string;
    };
  };
}
