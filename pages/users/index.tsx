import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Users: NextPage = () => (
  <div>
    Dynamic routes included! Example:{' '}
    <Link href="/users/$user" as="/users/nikita">
      <a>Nikita</a>
    </Link>
  </div>
);

export default Users;
