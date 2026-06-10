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

## Flujo de trabajo y contribución

Este repo sigue el flujo unificado del equipo basado en dos ramas protegidas: **`develop`** (staging) y **`main`** (producción). No se hace push directo a ninguna de las dos — todo entra vía PR.

```
feature/mi-tarea  ──PR──▶  develop  ──PR──▶  main
```

El detalle completo (convención de commits, apertura de PRs, reviews) está en [`FLUJO-TRABAJO-DEVS.md`](./FLUJO-TRABAJO-DEVS.md).
