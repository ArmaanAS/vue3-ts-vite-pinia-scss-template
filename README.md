# Vue 3 Template Project
This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Included Libraries

- Vue 3
- TypeScript
- Vite
- Pinia
- SCSS
- Router
- Axios

## Project Setup

- `.env` file example. (name variable with format VITE_*)
- Scss styling with `global.scss` for universal variables and styles.
- Vue router. (config and pages `/src/router.ts`)
- Pinia stores. (`/src/stores` directory with 2 examples).
- Axios APIs. (`/src/api/` with base api file `api.ts` and one example `randomWord.ts`)
- `views` directory for page root components.
- `<Suspense>` tag surrounds `RouterView` so view components can be async components.

## Getting Started

```bash
npm i
npm run dev
```