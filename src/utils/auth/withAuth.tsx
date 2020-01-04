import React from 'react';

import { AuthProvider } from './AuthProvider';

const withAuth = (Component: React.FC) => () => {
  return (
    <AuthProvider>
      <Component />
    </AuthProvider>
  );
};

export default withAuth;
