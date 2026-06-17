"use client";

import { useState } from "react";
import type { Dict } from "@/i18n/get-dictionary";

const EMAIL = "alpb17.08@gmail.com";
const WHATSAPP = "59173655692";

export default function Contact({ dict }: { dict: Dict }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // Build a labelled, localized message body reused by both email and WhatsApp.
  const body = [
    `${dict.contact.fields.name}: ${form.name}`,
    `${dict.contact.fields.email}: ${form.email}`,
    `${dict.contact.fields.company}: ${form.company}`,
    "",
    form.message,
  ].join("\n");

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    dict.contact.emailSubject
  )}&body=${encodeURIComponent(body)}`;
  const whatsappHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `${dict.contact.emailSubject}\n\n${body}`
  )}`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Native `required` validation runs before this fires.
    e.preventDefault();
    window.location.href = mailtoHref;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="surface-card overflow-hidden rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-12">
            {/* Left: text + direct contact */}
            <div className="relative p-8 sm:p-12 lg:col-span-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl"
                style={{ background: "var(--hero-glow-1)" }}
              />
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-6 bg-accent/60" />
                {dict.contact.eyebrow}
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
                {dict.contact.title}
              </h2>
              <p className="mt-3 text-fg-muted">{dict.contact.subtitle}</p>

              <dl className="mt-10 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-inset ring-line">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="m3 8 9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-fg-faint">
                      {dict.contact.direct.emailLabel}
                    </dt>
                    <dd>
                      <a className="text-fg hover:text-accent" href={`mailto:${EMAIL}`}>
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-inset ring-line">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-fg-faint">
                      {dict.contact.direct.phoneLabel}
                    </dt>
                    <dd>
                      <a
                        className="text-fg hover:text-accent"
                        href={`https://wa.me/${WHATSAPP}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        +591 736 556 92
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-inset ring-line">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-fg-faint">
                      {dict.contact.direct.locationLabel}
                    </dt>
                    <dd className="text-fg">{dict.contact.direct.locationValue}</dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Right: form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 border-t border-line bg-elevated p-8 sm:p-12 lg:col-span-7 lg:border-l lg:border-t-0"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  name="name"
                  label={dict.contact.fields.name}
                  value={form.name}
                  onChange={set("name")}
                  required
                />
                <Field
                  name="email"
                  label={dict.contact.fields.email}
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  required
                />
              </div>
              <Field
                name="company"
                label={dict.contact.fields.company}
                value={form.company}
                onChange={set("company")}
              />
              <Field
                name="message"
                label={dict.contact.fields.message}
                multiline
                value={form.message}
                onChange={set("message")}
                required
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-surface transition hover:opacity-90 sm:w-auto"
                >
                  {dict.contact.fields.submit}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-fg transition hover:border-line-strong sm:w-auto"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.08-8.09 8.08a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.05 8.05 0 0 1-1.24-4.31c0-4.46 3.63-8.09 8.09-8.09zm4.65 9.79c-.25-.13-1.5-.74-1.73-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.13-1.07-.39-2.04-1.26-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.88-.21-.5-.42-.43-.57-.44l-.49-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.29z" />
                  </svg>
                  {dict.contact.whatsappCta}
                </a>
              </div>

              <p
                aria-live="polite"
                className={
                  "text-sm text-fg-muted transition " + (sent ? "opacity-100" : "h-0 overflow-hidden opacity-0")
                }
              >
                {sent ? dict.contact.success : ""}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  multiline,
  value,
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  const base =
    "block w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-fg-faint">
        {label}
        {required ? (
          <span className="ml-0.5 text-accent" aria-hidden="true">
            *
          </span>
        ) : null}
      </span>
      {multiline ? (
        <textarea
          name={name}
          rows={5}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </label>
  );
}
