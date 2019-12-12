import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// TODO: Set-up your real user query here
const GET_CURRENT_USER = gql`
  query getCurrentUser {
    me {
      id
    }
  }
`;

import ErrorPage from '../../pages/_error';
import { logout } from './auth-helpers';

const AuthContext = createContext(null);

const AuthProvider = (props: any) => {
  const { loading, data, error } = useQuery(GET_CURRENT_USER);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorPage statusCode={401} />;
  }

  return <AuthContext.Provider value={[{ data }, logout]} {...props} />;
};

const useAuth = (): [{ data: string }, typeof logout] =>
  useContext(AuthContext);

export { AuthProvider, useAuth };
