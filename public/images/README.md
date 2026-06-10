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
