# nova

> Design system and Next.js boilerplate derived from the [Imara](https://github.com/swiftkimani/imara) Fellowship site, generalized into brand-neutral tokens.

[![Build](https://github.com/swiftkimani/nova/actions/workflows/build-flow.yml/badge.svg)](https://github.com/swiftkimani/nova/actions/workflows/build-flow.yml)

A production-ready Next.js boilerplate: typography, colors, buttons, and cards in one design
system, dark/light mode wired up (not just CSS), API routes, optional Docker, and automated
dependency tracking so it doesn't quietly rot.

**[Live demo & full documentation → dev.benardkimani.co.ke/nova](https://dev.benardkimani.co.ke/nova/docs)**

## Features

- **Design tokens, done once** — colors, typography, and radii live in one `globals.css`; reskin by editing values, not components
- **Dark & light mode** — `next-themes` + a real toggle, not just unused CSS variables
- **Buttons, cards, badges, inputs** — a small, consistent component kit built on Radix + CVA
- **API routes included** — example Route Handlers (`/api/health`, `/api/echo`)
- **Docker is optional** — a production `Dockerfile` + `docker-compose.yml`, fully removable
- **Stays updated** — Dependabot opens weekly PRs for outdated dependencies

## Quick Start

```bash
npx github:swiftkimani/nova my-app
cd my-app && npm install
npm run dev
```

Skip the optional Docker files:

```bash
npx github:swiftkimani/nova my-app --no-docker
```

## Project Structure

```
src/
  app/
    page.tsx            # Homepage
    docs/               # Documentation + component gallery
    api/health/         # Example Route Handler
    api/echo/           # Example Route Handler
    globals.css         # The entire design system: colors, typography, dark mode
  components/
    ui/                 # Button, Card, Badge, Input
    shared/              # Navbar, Footer, ThemeToggle
    theme-provider.tsx
  lib/
    env.ts              # zod-validated environment variables
    utils.ts

cli/create-nova-app/    # The scaffolding CLI itself
Dockerfile               # Optional
docker-compose.yml        # Optional
.github/dependabot.yml    # Weekly dependency-update PRs
```

## Development

```bash
npm run dev      # start the dev server
npm run lint      # eslint
npm run test      # vitest
npm run build     # production build
npm run check-updates   # local summary of outdated dependencies
```

## Deployment

```bash
# Docker (optional)
docker compose up -d --build

# Path-prefixed deployment (e.g. dev.benardkimani.co.ke/nova)
NEXT_BASE_PATH=/nova npm run build
```

This site is itself deployed at [dev.benardkimani.co.ke/nova](https://dev.benardkimani.co.ke/nova),
sharing a VPS and Traefik instance with the companion
[Go backend boilerplate](https://github.com/swiftkimani/goolang-backend).

## Credits

Design system derived from the [Imara](https://github.com/swiftkimani/imara) Fellowship site.

Maintained by [Swift Kimani](https://github.com/swiftkimani).

## License

MIT
