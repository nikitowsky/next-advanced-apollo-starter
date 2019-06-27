import React from 'react';
import { useRouter } from 'next/router';

const UserInfo = () => {
  const router = useRouter();
  const { query } = router;

  return <div>Hello {query.user}!</div>;
};

export default UserInfo;
