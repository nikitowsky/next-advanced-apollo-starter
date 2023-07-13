import { NextPage } from 'next';

import { UsersList } from '../components/users-list';

const UsersCSRPage: NextPage = () => {
  return (
    <section>
      <h1>Client-Side Rendering</h1>
      <UsersList />
    </section>
  );
};

export default UsersCSRPage;
