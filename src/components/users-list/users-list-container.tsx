import { useQuery } from '@apollo/client';

import { UsersList } from './users-list';
import { UsersDocument } from '../../graphql/queries/users.graphql.interface';

export const UsersListContainer = () => {
  const { data, loading } = useQuery(UsersDocument);

  if (loading) {
    return <div>Users loading...</div>;
  }

  return <UsersList users={data.users} />;
};
