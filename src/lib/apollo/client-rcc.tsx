"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

type IApolloWrapperProps = {
  children: React.ReactNode;
};

export const ApolloWrapper = ({ children }: IApolloWrapperProps) => (
  <ApolloNextAppProvider makeClient={makeClient}>
    {children}
  </ApolloNextAppProvider>
);
