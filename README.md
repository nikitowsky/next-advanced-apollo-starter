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
- Localization via [react-i18next](https://react.i18next.com/).
- [TypeScript](https://www.typescriptlang.org/) environment.
- [Normalize.css](https://necolas.github.io/normalize.css/) included.
- _No custom server_.

### Developer experience

- Testing environment via [Jest](https://jestjs.io/)
  and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro).
- [Prettier](https://prettier.io/) for code formatting.
- Debug configuration for [VSCode](https://code.visualstudio.com/).
- [Docker](https://www.docker.com/) configuration to serve **production-ready** build with Nginx.

## Getting started

### Start development server

In order to start development, you should run _one of these commands_:

```bash
npm install
```

After installation is complete, simply start development server:

```bash
npm run dev
```

## Apollo usage

### Client-Side Rendering (CSR)

```jsx
import { gql, useQuery } from '@apollo/client';

const GET_CATS = gql`
  query GetCats {
    cats {
      id
      breed
    }
  }
`;

const MyPage = () => {
  const { loading, data } = useQuery(GET_CATS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default MyPage;
```

### Server-Side Rendering (SSR)

```jsx
import { gql } from '@apollo/client';
import { initializeApollo, addApolloState } from '../lib/apollo';

const GET_CATS = gql`
  query GetCats {
    cats {
      id
      breed
    }
  }
`;

const MyPage = (props) => {
  return <div>{JSON.stringify(props.data)}</div>;
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_CATS,
  });

  return addApolloState(apolloClient, {
    props: {
      data,
    },
  });
}

export default MyPage;
```

## Writing tests

[Jest](https://jestjs.io/) is a great tool for testing. To run tests simply use `test` script from `package.json`:

```bash
npm test
```

---

Pretty much everything you need to know about project structure, SSR, etc., you can find in
the [official Next.js documentation](https://nextjs.org/docs).

## Docker usage

To build and run Dockerized **production-ready** container, run:

```bash
docker-compose up --build
```
