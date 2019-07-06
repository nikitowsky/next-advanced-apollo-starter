import React, { createContext, useContext } from 'react';

import { logout, useCurrentUserQuery } from './auth-helpers';

interface TAuthContext {
  data: any;
  isLoggedIn: boolean;
  logout(): void;
}

const AuthContext = createContext(null);

const AuthProvider = (props: any) => {
  const { data, loading } = useCurrentUserQuery();
  let isLoggedIn = false;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data) {
    isLoggedIn = true;
  }

  return (
    <AuthContext.Provider value={{ data, isLoggedIn, logout }} {...props} />
  );
};

const useAuth = () => useContext<TAuthContext>(AuthContext);

export { AuthProvider, useAuth };
