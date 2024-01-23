This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting started

## The Kubernetes resource limits

The limits for the Kubernetes deployment service should be adjusted to account for the expected load of other services and the available nodes size.

## Git

To get the existing project, change directory, clone the project repository and enter the newly created **{{ cookiecutter.project_slug }}** directory.

## Run local service

First, run the development server:

```bash
npm run dev
```
or
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Linting

To check all file linting, execute:

```bash
npm run lint
```
or
```bash
yarn lint
```

# Update package

To update packages, execute:

```bash
yarn upgrade --latest
```

To check audit, execute:

```bash
npm run audit:fix
```
or
```bash
yarn audit:fix
```

# Testing

## Unit test

To run the unit test suite, execute:

```bash
npm run test
```
or
```bash
yarn test
```

## Contract tests

To run the pact test suite, execute:

```bash
npm run pact
```
or
```bash
yarn pact
```

# Pact stub server
Pact contracts are easily turned into locally running API stubs.

## Using full docker-compose implementation

```bash
npm run pact && \
docker-compose up
```
or
```bash
yarn pact && \
docker-compose up
```

## Using custom docker-compose implementation

:warning: All the following environment variables must be set in a local `.env` or throught your system configs

```bash
  COMPOSE_FILE=docker-compose.yaml:docker-compose/local.yaml
  COMPOSE_PROFILES=pact
  CYPRESS_BASE_URL=https://proxy:8443
  INTERNAL_BACKEND_URL=http://provider:8000
  NEXT_PUBLIC_PROJECT_URL=https://localhost:8443
  REACT_ENVIRONMENT=development
  SERVICE_DOCKER_FILE=docker/local.Dockerfile
```

After env check you can run the following commands:

```bash
npm run pact && \
docker-compose up provider && \
npm run dev
```
or
```bash
yarn pact && \
docker-compose up provider && \
yarn dev
```

# GitLab pipeline - CI/CD

:warning: **develop, main and tags**: should be protected!

## E2E Integration
To skip the E2E integration, the following env should be set in the GitLab repository:
```git
  SKIP_E2E = true
```

## Pact broker Integration
To enable the Pact broker integration, the following envs should be set in the GitLab respository:
```git
  PACT_ENABLED = true
  PACT_BROKER_BASE_URL (protected and masked)
  PACT_BROKER_PASSWORD (protected)
  PACT_BROKER_USERNAME (protected)
```

## Monitoring
### Sentry integration

To enable the Sentry integration, the following variables should be set in the GitLab respository:
```git
  SENTRY_AUTH_TOKEN (protected and masked) from Sentry
  SENTRY_DSN (protected and masked) from Sentry
  SENTRY_ORG (protected) e.g.: 20tab
  SENTRY_URL (protected) e.g.: https://sentry.io/
```

