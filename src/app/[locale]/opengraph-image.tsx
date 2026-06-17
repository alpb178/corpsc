import { ImageResponse } from "next/og";
import { locales } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CORPSC — Software Development Studio";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const en = locale === "en";
  const title = en
    ? "We build custom software, end-to-end."
    : "Desarrollamos software a medida, de extremo a extremo.";
  const tagline = en
    ? "Web · Mobile · APIs · Full-stack engineering"
    : "Web · Móvil · APIs · Ingeniería full-stack";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          padding: "80px",
          color: "#f5f6fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              display: "flex",
              background: "linear-gradient(135deg, #6f9aff, #c9f364)",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>CORPSC</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, maxWidth: 940 }}>
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#97a0b3" }}>{tagline}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#6b7589",
          }}
        >
          <div style={{ display: "flex" }}>corpsc.com</div>
          <div style={{ display: "flex" }}>Santa Cruz de la Sierra, Bolivia</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
