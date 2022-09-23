<h1 align="center">
next-advanced-apollo-starter
</h1>

<h4 align="center">
  Advanced, but minimalistic Next.js and Apollo starter
</h4>

<p align="center">
  <a href="#whats-included">What's included</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#apollo-usage">Apollo usage</a> •
  <a href="#writing-tests">Writing tests</a> •
  <a href="#docker-usage">Docker usage</a>
</p>

## What's included

### Features

- Latest [Next.js](https://nextjs.org/) version.
- Latest packages updates.
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with built-in
  cookie-based [JWT](https://jwt.io/) token authentication.
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

### Start development server

In order to start development, you should run _one of these commands_:

```bash
yarn
```

After installation is complete, simply start development server:

```bash
yarn dev
```

## Apollo usage

### Client-Side Rendering (CSR)

```graphql
# ./src/graphql/queries/cats.graphql

query cats {
  cats {
    id
    breed
  }
}
```

```tsx
// ./src/pages/cats.tsx

import { NextPage } from 'next';
import { useQuery } from '@apollo/client';

import CATS_QUERY from '../graphql/queries/cats.graphql';
import { CatsQuery } from '../graphql/queries/cats.graphql.types';

const CatsPage: NextPage = () => {
  const { data, loading } = useQuery<CatsQuery>GET_CATS;

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default CatsPage;
```

### Server-Side Rendering (SSR)

```tsx
// ./src/pages/cats.tsx

import { NextPage } from 'next';

import { initializeApollo, addApolloState } from '../lib/apollo';
import CATS_QUERY from '../graphql/queries/cats.graphql';
import { CatsQuery } from '../graphql/queries/cats.graphql.types';
import { Cat } from '../__generated__/schema.graphql.types';

interface CatsPageProps {
  cats: Cat[];
}

const CatsPage: NextPage<CatsPageProps> = ({ cats }) => {
  return <div>{JSON.stringify(cats)}</div>;
};

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo(null, ctx);

  const { data } = await apolloClient.query<CatsQuery>({
    query: GET_CATS,
  });

  return addApolloState(apolloClient, {
    props: {
      cats: data.cats,
    },
  });
}

export default CatsPage;
```

## Writing tests

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
