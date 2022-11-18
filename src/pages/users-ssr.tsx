import { NextPage, GetServerSidePropsContext } from 'next';

import { UsersList } from '../components/users-list';
import { UsersDocument } from '../graphql/queries/users.graphql.interface';
import { User } from '../graphql/__generated__/schema.graphql';
import { addApolloState, initializeApollo } from '../lib/apollo';

interface UsersSSRPageProps {
  users: User[];
}

// Data is already available in the UsersList components, because it's been rehydrated.
// But we still have an access to this data via props, if needed.
const UsersSSRPage: NextPage<UsersSSRPageProps> = () => {
  return (
    <section>
      <h1>Server-Side Rendering</h1>
      <UsersList />
    </section>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apolloClient = initializeApollo(null, ctx);

  const { data } = await apolloClient.query({ query: UsersDocument });

  return addApolloState(apolloClient, {
    props: {
      users: data.users,
    },
  });
}

export default UsersSSRPage;
