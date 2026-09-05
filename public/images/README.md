# Cómo cambiar las fotos del CEO

El componente `src/components/Leadership.tsx` apunta a:

- `/images/ceo-portrait.svg` — foto grande (formato vertical 4:5, ~800×1000 px)
- `/images/ceo-seated.svg` — foto secundaria (cuadrada o vertical, ~300×400 px)

Para usar las fotos reales:

1. Copia tus fotos (las del traje formal con pulgares arriba o sentado en silla) a esta carpeta como JPG:
   - `ceo-portrait.jpg`
   - `ceo-seated.jpg`
2. En `src/components/Leadership.tsx` cambia las dos referencias:
   - `/images/ceo-portrait.svg` → `/images/ceo-portrait.jpg`
   - `/images/ceo-seated.svg` → `/images/ceo-seated.jpg`
3. Quita el prop `unoptimized` en los dos `<Image>` para activar el pipeline de optimización de Next.js.

---

# Assets del logo

Todos se generan a partir del logo maestro (cuadrado, ~1254 px):

- `logo-full.jpg` — lockup completo (emblema + wordmark). Se usa en
  `structured data` (JSON-LD `logo`/`image`) y para compartir en redes.
- `logo-mark.jpg` — sólo el emblema, recorte cuadrado. Se usa en el badge de
  `src/components/Logo.tsx`, en la imagen Open Graph y como favicon
  (`src/app/icon.jpg`).
- `wordmark-light.png` / `wordmark-dark.png` — la palabra "CORPSC" recortada
  del logo maestro con transparencia y recoloreada por tema
  (`#0b2a6b` en claro, `#f5f6fa` en oscuro).

Para cambiar el logo: reemplaza el archivo maestro y regenera los cinco assets
manteniendo los mismos nombres y proporciones.
