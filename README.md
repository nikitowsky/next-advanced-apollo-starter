# Advanced, but minimalistic Next.js + GraphQL starter

> Simple and clean

- [What you get](#what-you-get)
  - [Features](#features)
  - [Developer experience](#developer-experience)
- [Getting started](#getting-started)
  - [Start development server](#start-development-server)
  - [Run tests](#run-tests)
- [Docker](#docker)

## What you get

### Features

- Latest [Next.js](https://nextjs.org/) version.
- Latest packages updates.
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with built-in cookie-based [JWT](https://jwt.io/) token authentication.
- Localization via [react-i18next](https://react.i18next.com/).
- Configured [TypeScript](https://www.typescriptlang.org/) environment.
- Configured [Sass/SCSS](https://sass-lang.com/) via [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) for styling (plus [Normalize.css](https://necolas.github.io/normalize.css/) included).
- _No custom server_.

### Developer experience

- Testing environment via [Jest](https://jestjs.io/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro).
- [Prettier](https://prettier.io/) for code formatting.
- Debug configuration for [VSCode](https://code.visualstudio.com/).
- [Docker](https://www.docker.com/) configuration to serve **production-ready** build with Nginx.

## Getting started

### Start development server

In order to start development, you should run _one of these commands_:

```bash
yarn # If you use Yarn package manager
npm install # Or if you use NPM package manager
```

After installation is complete, simply start development server:

```bash
yarn dev # Yarn
npm run dev # NPM
```

### Tests

[Jest](https://jestjs.io/) is a great tool for testing. To run tests located in `/tests` directory, use `test` script from `package.json`:

```bash
yarn test # Yarn
npm test # NPM
```

---

Pretty much everything you need to know about project structure, SSR, etc., you can find in the [official Next.js documentation](https://nextjs.org/docs).

## Docker

To build and run Dockerized **production-ready** container, run:

```bash
docker-compose up --build
```
