import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

/**
 * `tone="onDark"` pins the light wordmark, for the navy header and the deep
 * bands where the surrounding theme tokens do not apply.
 */
export default function Logo({
  locale,
  tone = "auto",
}: {
  locale: Locale;
  tone?: "auto" | "onDark";
}) {
  const onDark = tone === "onDark";

  return (
    <Link
      href={`/${locale}`}
      className="inline-flex items-center gap-2.5"
      aria-label="CORPSC"
    >
      <Image
        src="/images/logo-mark.jpg"
        alt=""
        aria-hidden
        width={512}
        height={512}
        priority
        className="h-9 w-9 rounded-md object-cover"
      />

      {onDark ? (
        <Image
          src="/images/wordmark-dark.png"
          alt="CORPSC"
          width={863}
          height={145}
          priority
          className="h-[15px] w-auto"
        />
      ) : (
        <>
          <Image
            src="/images/wordmark-light.png"
            alt="CORPSC"
            width={863}
            height={145}
            priority
            className="h-[15px] w-auto dark:hidden"
          />
          <Image
            src="/images/wordmark-dark.png"
            alt="CORPSC"
            width={863}
            height={145}
            priority
            className="hidden h-[15px] w-auto dark:block"
          />
        </>
      )}
    </Link>
  );
}
