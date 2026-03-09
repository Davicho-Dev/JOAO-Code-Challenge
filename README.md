# JOAO Code Challenge

Restaurant management frontend built with React + Vite, Redux Toolkit, TanStack Query, and Tailwind CSS.

**Live demo:** https://joao.davicho.dev

## Requirements

- Node.js >= 18
- Package manager: [Bun](https://bun.sh) (recommended), npm, yarn, or pnpm

## Environment variables

Rename `.env.template` to `.env` at the project root:

```bash
mv .env.template .env
```

The file already contains the API URL needed to run the project.

## Setup

```bash
bun install      # or: npm install / yarn install / pnpm install
```

## Running locally

```bash
bun dev          # or: npm run dev / yarn dev / pnpm dev
```

App runs at `http://localhost:3000`.

## Scripts

| Command       | Description                           |
| ------------- | ------------------------------------- |
| `bun dev`     | Start development server on port 3000 |
| `bun build`   | Type-check and build for production   |
| `bun preview` | Preview the production build locally  |
| `bun lint`    | Run ESLint                            |

## Architecture

Component hierarchy follows Atomic Design: **atoms → molecules → organisms → layouts/templates → pages**.

State management is split by concern:

- **Redux Toolkit** — UI state (theme, selected restaurant). Persisted to `localStorage` via `uiMiddleware`.
- **TanStack React Query** — all server/async state.

Path aliases are defined in `vite.config.ts`. The main ones: `@atoms`, `@molecules`, `@organisms`, `@layouts`, `@templates`, `@hooks`, `@interfaces`, `@services`, `@utils`, `@RTK/Store`, `@RTK/Slices`, `@RTK/Middlewares`.

## Features

- **Menu** (`/`) — displays the menu for the selected restaurant. Restaurant selection persists across navigation and page refresh.
- **Orders** (`/orders`) — order board with status filtering (Pending, Preparing, Served) and a detail panel.
- **Dark / Light mode** — toggled via the header button, persisted to `localStorage`.
