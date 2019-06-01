import { render, cleanup, waitForElement } from '@testing-library/react';
import { createRouter } from 'next/router';
import { RouterContext } from 'next-server/dist/lib/router-context';

const router = createRouter('', { user: 'nikita' }, '', {
  initialProps: {},
  pageLoader: jest.fn(),
  App: jest.fn(),
  Component: jest.fn(),
});

import UserInfo from '../../../pages/users/$user';

afterEach(cleanup);

it('Should render correctly on route: /users/nikita', async () => {
  const { getByText } = render(
    <RouterContext.Provider value={router}>
      <UserInfo />
    </RouterContext.Provider>,
  );

  await waitForElement(() => getByText(/Hello nikita!/i));
});
