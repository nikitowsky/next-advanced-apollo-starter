# Next.js advanced starter with Apollo, TypeScript, I18n, Docker and more...

- [What you get](#what-you-get)
  - [Features](#features)
  - [Developer experience](#developer-experience)
- [Getting started](#getting-started)
  - [Start development server](#start-development-server)
  - [Run tests](#run-tests)
- [Additional helpers](#additional-helpers)
  - [useAuth()](#useauth-hook)
- [Docker](#docker)

## What you get

### Features

- Latest [Next.js](https://nextjs.org/) version.
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with built-in [JWT](https://jwt.io/) authentication.
- Localization via [react-i18next](https://react.i18next.com/).
- Configured [TypeScript](https://www.typescriptlang.org/) environment.
- Configured [Sass/SCSS](https://sass-lang.com/) via [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) for styling (plus [Normalize.css](https://necolas.github.io/normalize.css/) included).
- Built-in [helpers](#additional-helpers).
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
# If you're using Yarn package mangaer:
yarn

# If you're using NPM package mangaer:
npm install
```

### Tests

We are using [Jest](https://jestjs.io/) for testing. To run tests located in `src/tests` directory use `test` script from `package.json`:

```bash
yarn test
```

---

Pretty much everything you need to know you can find in [Next.js documentation](https://nextjs.org/docs).

## Additional helpers

### `useAuth()` hook

This hook helps you to implement authentication. Here is an example how to use it:

```tsx
import React from 'react';

import { useAuth } from './utils/auth';

const MyPage = () => {
  const [{ data }, logout] = useAuth();

  return (
    <div>
      {data ? (
        <div>
          <div>Hello, {data.me.name}!</div>
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <div>Please sign in</div>
      )}
    </div>
  );
};
```

If you don't want to wrap whole application in authentication environment (for example, you may not want to do any authentication-based requests on `/login` page), you can use `withAuth` HOC on needed pages instead of using `AuthProvider` as global wrapper:

`_app.tsx`:

```diff
import React from 'react';
import App from 'next/app';

import { withApollo } from '../lib/apollo';
- import { AuthProvider } from '../utils/auth';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
-     <AuthProvider>
-       <Component {...pageProps} />
-     </AuthProvider>
+     <Component {...pageProps} />
    );
  }
}

export default withApollo(MyApp);
```

Any page that required authentication:

```diff
import React from 'react';
import { NextPage } from 'next';

- import { useAuth } from '../utils/auth';
+ import { useAuth, withAuth } from '../utils/auth';

const AuthenticationRequiredPage: NextPage = () => {
  const [{ data }] = useAuth();

  return <div>Hi, user with ID {data.me.id}!</div>;
};

- export default AuthenticationRequiredPage;
+ export default withAuth(AuthenticationRequiredPage);
```

## Docker

To build and run Dockerized **production-ready** container, run:

```bash
docker-compose up --build
```
