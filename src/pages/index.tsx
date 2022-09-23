import type { NextPage } from 'next';
import { useApolloClient } from '@apollo/client';

const IndexPage: NextPage = () => {
  const apolloClient = useApolloClient();

  return (
    <div>
      <p>Hello, you're using Apollo Client {apolloClient.version}</p>
    </div>
  );
};

export default IndexPage;
