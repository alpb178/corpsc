import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

export default function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}`}
      className="group inline-flex items-center gap-2.5"
      aria-label="CORPSC"
    >
      <Image
        src="/images/logo-mark.jpg"
        alt=""
        aria-hidden
        width={512}
        height={512}
        priority
        className="h-9 w-9 rounded-xl object-cover ring-1 ring-line-strong transition group-hover:opacity-90"
      />

      {/* light theme */}
      <Image
        src="/images/wordmark-light.png"
        alt="CORPSC"
        width={863}
        height={145}
        priority
        className="h-[15px] w-auto dark:hidden"
      />
      {/* dark theme */}
      <Image
        src="/images/wordmark-dark.png"
        alt="CORPSC"
        width={863}
        height={145}
        priority
        className="hidden h-[15px] w-auto dark:block"
      />
    </Link>
  );
}
