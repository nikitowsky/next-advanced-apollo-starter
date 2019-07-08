import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

import isBrowser from './isBrowser';
import { ApolloClientType } from './interfaces';

let apolloClient: ApolloClientType;

interface Options {
  getToken(): string;
}

const create = (initialState = {}, { getToken }: Options) => {
  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_URL,
    credentials: 'include',
    fetch: !isBrowser && fetch, // Polyfill fetch() on the server (used by apollo-client)
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
  });
};

const initApollo = (initialState = {}, options: Options) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
};

export default initApollo;
