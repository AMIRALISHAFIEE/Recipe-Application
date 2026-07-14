# Recipe Application

A responsive recipe browsing app built with Nuxt 4 and Vue 3. Fetches recipes from the [DummyJSON](https://dummyjson.com) API and displays them with ingredient checklists, step-by-step instructions, and nutritional details.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Nuxt 4 + Vue 3 |
| HTTP Client | Axios |
| Icons | `@nuxt/icon` (Material Design Icons) |
| Images | `@nuxt/image` |
| Styling | Scoped CSS with CSS custom properties |
| Font | Montserrat (Google Fonts) |
| Testing | Vitest + `@vue/test-utils` + happy-dom |
| Container | Docker (Node 20 Alpine, multi-stage build) |


## Getting Started

### Prerequisites

- Node.js >= 20
- npm, pnpm, yarn, or bun

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Production build

```bash
npm run build
npm run preview
```

### Docker

```bash
docker compose up --build
```

The container exposes port 3000.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run generate` | Generate static site |
| `npm run postinstall` | Prepare Nuxt types |

## API

All recipe data comes from `https://dummyjson.com/recipes`. No authentication required.

- `GET /recipes/` — list all recipes
- `GET /recipes/:id` — single recipe by ID
