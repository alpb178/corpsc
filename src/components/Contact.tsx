import type { Dict } from "@/i18n/get-dictionary";

export default function Contact({ dict }: { dict: Dict }) {
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
                      <a
                        className="text-fg hover:text-accent"
                        href="mailto:alpb17.08@gmail.com"
                      >
                        alpb17.08@gmail.com
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
                        href="https://wa.me/59173655692"
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
              action="mailto:alpb17.08@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4 border-t border-line bg-elevated p-8 sm:p-12 lg:col-span-7 lg:border-l lg:border-t-0"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label={dict.contact.fields.name} required />
                <Field name="email" label={dict.contact.fields.email} type="email" required />
              </div>
              <Field name="company" label={dict.contact.fields.company} />
              <Field
                name="message"
                label={dict.contact.fields.message}
                multiline
                required
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-surface transition hover:opacity-90 sm:w-auto"
              >
                {dict.contact.fields.submit}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
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
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  const base =
    "block w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-fg-faint">
        {label}
        {required ? <span className="ml-0.5 text-accent">*</span> : null}
      </span>
      {multiline ? (
        <textarea name={name} rows={5} required={required} className={base} />
      ) : (
        <input type={type} name={name} required={required} className={base} />
      )}
    </label>
  );
}
