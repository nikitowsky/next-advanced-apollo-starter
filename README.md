<h1 align="center">
next-advanced-apollo-starter
</h1>

<h4 align="center">
  Advanced and minimalistic Next.js and Apollo starter
</h4>

<p align="center">
  <a href="#whats-included">What's included</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#apollo-usage">Apollo usage</a> •
  <a href="#tests">Tests</a> •
  <a href="#docker-usage">Docker usage</a>
</p>

## What's included

### Features

- Latest [Next.js](https://nextjs.org/) version.
- Latest packages updates.
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with built-in
  cookie-based [JWT](https://jwt.io/) token authentication.
- Works both via _Client-Side Rendering_ and _Server-Side Rendering_;
- [TypeScript](https://www.typescriptlang.org/) environment.
- [Normalize.css](https://necolas.github.io/normalize.css/) included.
- _No custom server_.

### Developer experience

- Testing environment via [Jest](https://jestjs.io/)
  and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro).
- Configured [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen). Simply run `yarn codegen`.
- [Prettier](https://prettier.io/) for code formatting.
- Debug configuration for [VSCode](https://code.visualstudio.com/).
- [Docker](https://www.docker.com/) configuration to serve **production-ready** build with Nginx.

## Getting started

No extra knowledge needed to get started, see [Next.js documentation](https://nextjs.org/docs).

## GraphQL Code Generation

Generated interfaces for co-located _.graphql_ files. See the [example](./src/graphql/queries).

```bash
yarn codegen
```

## Apollo usage

- [Client-Side Rendering (CSR) example](./src/pages/users-csr.tsx).
- [Server-Side Rendering (SSR) example](./src/pages/users-ssr.tsx).

## Tests

[Jest](https://jestjs.io/) is a great tool for testing. To run tests simply use `test` script from `package.json`:

```bash
yarn test
```

---

Pretty much everything you need to know about project structure, SSR, etc., you can find in
the [official Next.js documentation](https://nextjs.org/docs).

## Docker usage

To build and run Dockerized **production-ready** container, run:

```bash
docker-compose up --build
```
