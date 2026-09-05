import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <main id="main" tabIndex={-1} className="relative scroll-mt-0 outline-none">
        <Hero dict={dict} locale={locale} />
        <About dict={dict} />
        <Services dict={dict} />
        <Projects dict={dict} locale={locale} />
        <Leadership dict={dict} />
        <TechStack dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
