import React, { createContext, useContext } from 'react';

import { logout, useCurrentUserQuery } from './auth-helpers';

const AuthContext = createContext(null);

const AuthProvider = (props: any) => {
  const { loading, data, error } = useCurrentUserQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>This is error page.</div>;
  }

  return <AuthContext.Provider value={[{ data }, logout]} {...props} />;
};

const useAuth = (): [{ data: string }, typeof logout] =>
  useContext(AuthContext);

export { AuthProvider, useAuth };
