import { render, cleanup } from '@testing-library/react';
import { RouterContext } from 'next-server/dist/lib/router-context';

import UserInfo from '../../../pages/users/[user]';

const router = {
  query: { user: 'nikita' },
};

afterEach(cleanup);

it('Should render correctly on route: /users/nikita', () => {
  const { getByText } = render(
    <RouterContext.Provider value={router}>
      <UserInfo />
    </RouterContext.Provider>,
  );

  expect(getByText(/Hello nikita!/i)).toBeTruthy();
});
