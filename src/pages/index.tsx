import { NextPage } from 'next';
import { useApolloClient } from '@apollo/client';

import { UsersList } from '../components/users-list';

const IndexPage: NextPage = () => {
  const apolloClient = useApolloClient();

  return (
    <div>
      <p>Hello, you're using Apollo Client {apolloClient.version}</p>
      <UsersList />
    </div>
  );
};

export default IndexPage;
