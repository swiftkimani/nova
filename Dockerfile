# Optional — Docker is not required to run Nova. Delete this file (and
# docker-compose.yml) if you don't need it, or scaffold with --no-docker.
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN if [ -f pnpm-lock.yaml ]; then corepack enable && pnpm install --frozen-lockfile; \
    else npm ci; fi

FROM node:22-alpine AS builder
WORKDIR /app
# Optionally mount the build under a path prefix (e.g. /nova for a
# shared-domain deployment) — baked in at build time, read by next.config.ts.
ARG NEXT_BASE_PATH=""
ENV NEXT_BASE_PATH=$NEXT_BASE_PATH
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN if [ -f pnpm-lock.yaml ]; then corepack enable && pnpm run build; \
    else npm run build; fi

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
# Next.js standalone's server.js binds to $HOSTNAME if set, and Docker
# auto-sets HOSTNAME to the container ID — which resolves to the container's
# own network IP, not loopback. Force 0.0.0.0 so both the in-container
# healthcheck (127.0.0.1) and other containers (via the service name) can
# reach it.
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
