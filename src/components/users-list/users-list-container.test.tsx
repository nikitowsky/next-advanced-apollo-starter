import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { UsersListContainer } from './users-list-container';
import { UsersDocument } from '../../graphql/queries/users.graphql.interface';

const MOCKS = [
  {
    request: {
      query: UsersDocument,
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
