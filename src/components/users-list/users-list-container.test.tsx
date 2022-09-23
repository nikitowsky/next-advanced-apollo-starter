import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { UsersListContainer } from './users-list-container';
import USERS_QUERY from '../../graphql/queries/users.graphql';

const MOCKS = [
  {
    request: {
      query: USERS_QUERY,
    },
    result: {
      data: {
        users: [
          {
            id: '1',
            email: 'user@example.com',
          },
        ],
      },
    },
  },
];

describe('UsersList', () => {
  it('Renders without error', async () => {
    render(
      <MockedProvider mocks={MOCKS} addTypename={false}>
        <UsersListContainer />
      </MockedProvider>,
    );

    expect(await screen.findByText('Users loading...')).toBeInTheDocument();
    expect(await screen.findByText('user@example.com')).toBeInTheDocument();
  });
});
