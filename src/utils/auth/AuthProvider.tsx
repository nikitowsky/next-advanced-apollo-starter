import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ErrorPage from '../../pages/_error';

// TODO: Set-up your real user query here
const GET_CURRENT_USER = gql`
  query getCurrentUser {
    me {
      id
    }
  }
`;

interface AuthContextParams {
  data: {
    [key: string]: any;
  };
}

const AuthContext = createContext<AuthContextParams>({ data: null });

const AuthProvider: React.FC = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);

  // Usually you don't see this, because we have no loading state on SSR
  if (loading) {
    return <div>Loading...</div>;
  }

  // API-level error handling, e.g. permission denied
  if (error) {
    console.error(error);

    return <ErrorPage statusCode={401} />;
  }

  return (
    <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
  );
};

// Returns authentication-related data and functions
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
