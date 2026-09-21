# CORPSC — Portfolio

Sitio web corporativo / portfolio de **CORPSC**, un software studio. Landing de una sola página, bilingüe (español / inglés), con modo claro y oscuro.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- i18n propio basado en rutas (`/es`, `/en`)
- Gestor de paquetes: [pnpm](https://pnpm.io/)

## Requisitos

- Node.js 20+
- pnpm 9+ (`npm install -g pnpm`)

## Desarrollo local

```bash
pnpm install
pnpm dev
```

La app queda disponible en [http://localhost:3000](http://localhost:3000). La raíz redirige a la locale por defecto.

## Scripts

| Comando      | Descripción                                  |
| ------------ | -------------------------------------------- |
| `pnpm dev`   | Servidor de desarrollo con hot reload        |
| `pnpm build` | Build de producción                          |
| `pnpm start` | Sirve el build de producción                 |
| `pnpm lint`  | Linter de Next.js                            |

## Estructura

```
src/
├── app/
│   ├── [locale]/        # layout, page y metadata por idioma
│   ├── globals.css      # tokens de tema (claro/oscuro) + estilos base
│   └── icon.jpg         # favicon del navegador
├── components/          # Navbar, Hero, About, Services, Projects,
│                        # Leadership, TechStack, Contact, Footer, ...
├── content/             # contenido de datos (proyectos, etc.)
└── i18n/                # config de locales y diccionarios
public/
└── images/              # logos y assets estáticos
```

## Internacionalización

El idioma se resuelve por la ruta (`/es`, `/en`). Los textos viven en los diccionarios bajo `src/i18n/`. Para añadir una cadena, actualízala en todas las locales.

## Temas (claro / oscuro)

El tema se controla con la clase `.dark` / `.light` sobre `<html>` (ver `ThemeProvider`). Las variantes `dark:` de Tailwind están habilitadas vía `@custom-variant` en `globals.css`.

## Analítica

El sitio cuenta lo suyo y lo manda al hub del grupo
([`corpsc-admin`](https://github.com/alpb178/corpsc-admin)): **visitas** y
**clics que se van a un sitio hermano**, que es para lo que existe el
portfolio.

No hay base de datos aquí: se manda el hecho suelto a
`POST /api/ingest/events` y el hub lo consolida cada noche. El contrato está en
`docs/envio-de-metricas/eventos.md` de ese repo.

```
src/components/Analytics.tsx   visita por ruta y clic saliente (cliente)
src/lib/outbound.ts            a qué proyecto apunta un enlace, leído de projects.ts
src/app/api/track/route.ts     recoge, filtra bots y reenvía al hub con la clave
```

Tres cosas que conviene no deshacer:

- **La clave del hub no baja al navegador.** La página escribe a su propio
  origen y es la ruta de servidor la que llama al hub. Ponerla en el cliente
  sería publicarla: quien la tenga puede escribir métricas de este proyecto.
- **Los clics se escuchan en el documento**, no en cada enlace. Así una tarjeta
  de proyecto, un botón de tienda o una sección nueva se cuentan sin que nadie
  se acuerde de añadir un handler, y el destino se resuelve contra
  `src/content/projects.ts`, que ya es el registro canónico.
- **La cookie de visita (`corpsc_v`) es un identificador aleatorio y nada más.**
  Es `httpOnly`, dura 30 minutos de inactividad y solo sirve para que cinco
  páginas no cuenten como cinco visitas. No se manda ni IP, ni agente de
  usuario, ni referer.

Sin `HUB_URL` y `HUB_API_KEY` la ruta no envía nada — que es lo que se quiere en
local y en las vistas previas. Ver [`.env.example`](./.env.example).

## Flujo de trabajo y contribución

Este repo sigue el flujo unificado del equipo basado en dos ramas protegidas: **`develop`** (staging) y **`main`** (producción). No se hace push directo a ninguna de las dos — todo entra vía PR.

```
feature/mi-tarea  ──PR──▶  develop  ──PR──▶  main
```

El detalle completo (convención de commits, apertura de PRs, reviews) está en [`FLUJO-TRABAJO-DEVS.md`](./FLUJO-TRABAJO-DEVS.md).
