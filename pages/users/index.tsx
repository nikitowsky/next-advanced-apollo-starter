import React from 'react';
import Link from 'next/link';

const Users = () => (
  <div>
    Dynamic routes included! Example:{' '}
    <Link href="/users/[user]" as="/users/nikita">
      <a>Nikita</a>
    </Link>
  </div>
);

export default Users;
