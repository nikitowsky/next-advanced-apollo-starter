import { useQuery } from '@apollo/client';

import { UsersList } from './users-list';
import USERS_QUERY from '../../graphql/queries/users.graphql';
import { UsersQuery } from '../../graphql/queries/users.graphql.types';

export const UsersListContainer = () => {
  const { data, loading } = useQuery<UsersQuery>(USERS_QUERY);

  if (loading) {
    return <div>Users loading...</div>;
  }

  return <UsersList users={data.users} />;
};
