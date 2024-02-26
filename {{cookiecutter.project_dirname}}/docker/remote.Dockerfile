# syntax=docker/dockerfile:1

FROM node:18-alpine AS build
ENV PATH="$PATH:./node_modules/.bin"
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --ignore-optional --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi
COPY declarations ./declarations
COPY public ./public
COPY src ./src
COPY tsconfig.json next.config.js sentry.client.config.js sentry.server.config.js ./
ARG SENTRY_AUTH_TOKEN \
  SENTRY_ORG \
  SENTRY_PROJECT_NAME \
  SENTRY_URL
ENV NEXT_TELEMETRY_DISABLED=1 \
  NODE_ENV="production" \
  PORT=3000 \
  SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN \
  SENTRY_ORG=$SENTRY_ORG \
  SENTRY_PROJECT_NAME=$SENTRY_PROJECT_NAME \
  SENTRY_URL=$SENTRY_URL
RUN yarn build
LABEL company="20tab" project="{{ cookiecutter.project_slug }}" service="frontend" stage="build"

FROM node:18-alpine AS remote
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
ARG REACT_ENVIRONMENT
COPY ["next.config.js", "package.json", "sentry.client.config.js", "sentry.server.config.js", "yarn.lock", "./"]
COPY ["public/", "public/"]
COPY ./public/robots/${REACT_ENVIRONMENT}.txt ./public/robots.txt
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN rm -rf public/robots/
ARG SENTRY_AUTH_TOKEN \
  SENTRY_ORG \
  SENTRY_PROJECT_NAME \
  SENTRY_URL
ENV NEXT_TELEMETRY_DISABLED=1 \
  NODE_ENV="production" \
  PORT=3000 \
  SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN \
  SENTRY_ORG=$SENTRY_ORG \
  SENTRY_PROJECT_NAME=$SENTRY_PROJECT_NAME \
  SENTRY_URL=$SENTRY_URL
CMD yarn start
LABEL company="20tab" project="{{ cookiecutter.project_slug }}" service="frontend" stage="remote"
