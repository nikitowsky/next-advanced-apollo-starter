import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const UserInfo: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  return <div>Hello {query.user}!</div>;
};

export default UserInfo;
