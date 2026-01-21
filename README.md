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
  <a href="#testing">Testing</a>
</p>

## What's included

### Features

- Latest [Next.js](https://nextjs.org/) version with [App Router](https://nextjs.org/docs/app/guides/migrating/app-router-migration).
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with [@apollo/client-integration-nextjs](https://www.npmjs.com/package/@apollo/client-integration-nextjs).
- Works with _React Server Components_ and _React Client Components_ (with or without SSR).
- [TypeScript](https://www.typescriptlang.org/) environment.
- [Normalize.css](https://necolas.github.io/normalize.css/) included.
- _No custom server_.

### Developer experience

- Testing environment via [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro).
- Configured [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen).
- [Prettier](https://prettier.io/) for code formatting.
- [ESLint](https://eslint.org/) for linting.

## Getting started

### Prerequisites

- Node.js 18.x or later
- npm (or yarn/pnpm)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/next-advanced-apollo-starter.git
cd next-advanced-apollo-starter
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file with your GraphQL endpoint:

```dotenv
# Example URI, use link to your GraphQL API
NEXT_PUBLIC_GRAPHQL_URI=https://graphqlzero.almansi.me/api
```

4. Start the development server:

```bash
npm run dev
```

For more information, see [Next.js documentation](https://nextjs.org/docs).

## GraphQL Code Generation

Generated interfaces for co-located `.graphql` files. See the [example](./src/components/users-list).

To generate TypeScript interfaces based on GraphQL schema and used queries/mutations:

```bash
npm run codegen
```

## Apollo usage

- [React Server Components (RSC) example](./src/components/users-list/users-list-rsc.tsx)
- [React Client Components (RCC) example](./src/components/users-list/users-list-rcc.tsx)

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. To run tests:

```bash
npm run test
```

---

For more about project structure, React Server Components (RSC), React Client Components (RCC), etc., see the [official Next.js documentation](https://nextjs.org/docs).
