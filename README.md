# Next.js Apollo TypeScript Starter With Docker

## What you get

### Features

- Latest [Next.js](https://nextjs.org/) version.
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with built-in [JWT](https://jwt.io/) authentication.
- Localization via [i18next](https://github.com/isaachinman/next-i18next/).
- Configured [TypeScript](https://www.typescriptlang.org/) environment.
- Configured [Sass/SCSS](https://sass-lang.com/) via [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) for styling (plus [Normalize.css](https://necolas.github.io/normalize.css/) included).
- Built-in [helpers](#additional-helpers).

### Developer Experience

- Testing environment via [Jest](https://jestjs.io/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro).
- [Prettier](https://prettier.io/) for code formatting.
- Debug configuration for [VSCode](https://code.visualstudio.com/).
- [Docker](https://www.docker.com/) configuration to serve **production-ready** build with Nginx.

## Getting started

### Start development server

```bash
yarn
yarn start
```

### Run tests

Run tests located in `__tests__` directory:

```bash
yarn test
```

---

Pretty much everything you need to know you can find in [Next.js documentation](https://nextjs.org/docs).

## Additional Helpers

### `useAuth()` Hook

This hook helps you to implement authentication. Here is an example how to use it:

```tsx
import React from 'react';

import { useAuth } from './utils/auth';

const MyPage = () => {
  const [{ data }, logout] = useAuth();

  const handleLogout = () => {
    logout(); // Removes token from cookies
    document.location.reload();
  };

  return (
    <div>
      {data ? (
        <div>
          <div>Hello, {data.me.name}!</div>
          <button onClick={handleClick}>Log out</button>
        </div>
      ) : (
        <div>Please sign in</div>
      )}
    </div>
  );
};
```

## Docker

Build and run Dockerized **production-ready** build, run:

```bash
docker-compose up --build
```
