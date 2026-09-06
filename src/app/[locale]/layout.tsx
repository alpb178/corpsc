import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ThemeProvider, themeBootstrapScript } from "@/components/ThemeProvider";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

// Display face. Archivo holds its shape at large sizes and tight tracking,
// which is what the hero headline leans on; Inter keeps the body text.
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-archivo",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL("https://www.corpsc.com"),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      url: `https://www.corpsc.com/${locale}`,
      locale: locale === "es" ? "es_BO" : "en_US",
      siteName: "CORPSC",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CORPSC",
    url: `https://www.corpsc.com/${locale}`,
    logo: "https://www.corpsc.com/images/logo-full.jpg",
    image: "https://www.corpsc.com/images/logo-full.jpg",
    description: dict.meta.description,
    email: "alpb17.08@gmail.com",
    telephone: "+59173655692",
    serviceType: "Custom software development",
    areaServed: ["BO", "Latin America", "Europe"],
    knowsLanguage: ["es", "en"],
    founder: {
      "@type": "Person",
      name: "Alejandro Pérez",
      jobTitle: "Founder & CEO",
      sameAs: "https://www.linkedin.com/in/alpb1708/",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santa Cruz de la Sierra",
      addressCountry: "BO",
    },
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${archivo.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-surface text-fg antialiased font-sans">
        {/* Runs before anything paints. It only ever needs to run on a fresh
            document, which is why the locale switch below is a full navigation
            rather than a client transition. */}
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <a href="#main" className="skip-link">
          {dict.nav.skip}
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
