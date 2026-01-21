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
</p>

## What's included

### Features

- Latest [Next.js](https://nextjs.org/) version with [App Router](https://nextjs.org/docs/app/guides/migrating/app-router-migration).
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client.
- Latest packages updates.
- Works with _React Server Components_ and _React Client Components_ (with or without SSR);
- [TypeScript](https://www.typescriptlang.org/) environment.
- [Normalize.css](https://necolas.github.io/normalize.css/) included.
- _No custom server_.

### Developer experience

- Testing environment via [Jest](https://jestjs.io/)
  and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro).
- Configured [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen). Simply run `npm run codegen`.
- [Prettier](https://prettier.io/) for code formatting.
- Debug configuration for [VSCode](https://code.visualstudio.com/).

## Getting started

No extra knowledge needed to get started, see [Next.js documentation](https://nextjs.org/docs).

## GraphQL Code Generation

Generated interfaces for co-located _.graphql_ files. See the [example](./src/components/users-list). For demonstration puproses, we use this `.env.local`:

```dotenv
NEXT_PUBLIC_GRAPHQL_URI=https://graphqlzero.almansi.me/api
```

To generate TypeScript interfaces based on GraphQL schema and used queries/mutations:

```bash
npm run codegen
```

## Apollo usage

- [React Server Components (RSC) example](./src/components/users-list/users-list-rcc.tsx).
- [React Client Components (RCC) example](./src/components/users-list/users-list-rsc.tsx).

## Tests

[Jest](https://jestjs.io/) is a great tool for testing. To run tests simply use `test` script from `package.json`:

```bash
yarn test
```

---

Pretty much everything you need to know about project structure, React Server Components (RSC), React Client Components (RCC), etc., you can find in
the [official Next.js documentation](https://nextjs.org/docs).
