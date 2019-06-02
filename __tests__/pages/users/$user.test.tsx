import { render, cleanup } from '@testing-library/react';
import { RouterContext } from 'next-server/dist/lib/router-context';

const router = {
  pathname: '/users/$user',
  route: '/users/$user',
  query: { user: 'nikita' },
  asPath: '/users/nikita',
};

import UserInfo from '../../../pages/users/$user';

afterEach(cleanup);

it('Should render correctly on route: /users/nikita', async () => {
  const { getByText } = render(
    <RouterContext.Provider value={router}>
      <UserInfo />
    </RouterContext.Provider>,
  );

  expect(getByText(/Hello nikita!/i)).toBeTruthy();
});
