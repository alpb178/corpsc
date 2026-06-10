import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

export default function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}`}
      className="group inline-flex items-center"
      aria-label="CORPSC"
    >
      {/* light theme */}
      <Image
        src="/images/logo.png"
        alt="CORPSC"
        width={820}
        height={288}
        priority
        className="h-9 w-auto dark:hidden"
      />
      {/* dark theme */}
      <Image
        src="/images/logo-dark.png"
        alt="CORPSC"
        width={820}
        height={288}
        priority
        className="hidden h-9 w-auto dark:block"
      />
    </Link>
  );
}
