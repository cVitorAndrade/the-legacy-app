FROM mcr.microsoft.com/devcontainers/javascript-node:22

RUN su node -c "npm install -g pnpm"
RUN mkdir -p /tmp/pnpm-store && chown -R node:node /tmp/pnpm-store
RUN su node -c "pnpm config set store-dir /tmp/pnpm-store"

WORKDIR /app