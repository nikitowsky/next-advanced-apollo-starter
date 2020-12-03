# Next.js Advanced Apollo Starter w/ Apollo Client 3, TypeScript, I18n, Docker and more...

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
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with built-in [JWT](https://jwt.io/) authentication.
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

Before start using project you have to unstall dependencies by running _one of these commands_:

```bash
# If you're using Yarn package manager:
yarn

# If you're using NPM package manager:
npm install
```

### Tests

We are using [Jest](https://jestjs.io/) for testing. To run tests located in `/tests` directory use `test` script from `package.json`:

```bash
yarn test
```

---

Pretty much everything you need to know you can find in [Next.js documentation](https://nextjs.org/docs).

## Docker

To build and run Dockerized **production-ready** container, run:

```bash
docker-compose up --build
```
