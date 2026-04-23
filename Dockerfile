FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

COPY next-block-src/package.json next-block-src/pnpm-lock.yaml next-block-src/pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY next-block-src/ ./
RUN pnpm build && pnpm prune --prod


FROM node:20-alpine AS runtime

RUN apk add --no-cache tini

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/server.mjs ./
COPY --from=builder /app/package.json ./

COPY docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod +x /usr/local/bin/docker_entrypoint.sh

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/docker_entrypoint.sh"]
