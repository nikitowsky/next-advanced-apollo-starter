import { IncomingMessage } from 'http';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import cookie from 'cookie';

import { NextPage, NextComponentType } from 'next';
import App from 'next/app';
import Head from 'next/head';
import {
  AppContextType,
  AppInitialProps,
} from 'next/dist/next-server/lib/utils';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

let globalApolloClient = null;

/**
 * Get the user token from cookie
 */
const getToken = (req?: IncomingMessage) => {
  const cookies = cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
  );

  return cookies.token;
};

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 */
export const withApollo = ({ ssr = true } = {}) => (
  PageComponent: NextComponentType<AppContextType, AppInitialProps> | NextPage,
) => {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState, { getToken });

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: any) => {
      const { AppTree } = ctx;
      const inAppContext = Boolean(ctx.ctx);

      if (process.env.NODE_ENV === 'development') {
        if (inAppContext) {
          console.warn(
            'Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n' +
              'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n',
          );
        }
      }

      if (ctx.apolloClient) {
        throw new Error('Multiple instances of withApollo found.');
      }

      // Initialize ApolloClient
      const apolloClient = initApolloClient(
        {},
        {
          getToken: () => getToken(inAppContext ? ctx.ctx.req : ctx.req),
        },
      );

      // Add apolloClient to NextPageContext & NextAppContext
      // This allows us to consume the apolloClient inside our
      // custom `getInitialProps({ apolloClient })`.
      ctx.apolloClient = apolloClient;

      if (inAppContext) {
        ctx.ctx.apolloClient = apolloClient;
      }

      // Run wrapped getInitialProps methods
      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (inAppContext) {
        pageProps = await App.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr');

            // Since AppComponents and PageComponents have different context types
            // we need to modify their props a little.
            let props = {};

            if (inAppContext) {
              props = { ...pageProps, apolloClient };
            } else {
              props = { pageProps: { ...pageProps, apolloClient } };
            }

            // Takes React AppTree, determine which queries are needed to render,
            // then fetche them all.
            await getDataFromTree(<AppTree {...props} />);
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
};

type InitApolloClientOptions = [{}, { getToken: typeof getToken }];

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
const initApolloClient = (...args: InitApolloClientOptions) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(...args);
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(...args);
  }

  return globalApolloClient;
};

/**
 * Creates and configures the ApolloClient
 */
const createApolloClient = (initialState = {}, { getToken }) => {
  const fetchOptions = {
    agent: null,
  };

  // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
  // 'https-proxy-agent' is required here because it's a sever-side only module
  if (typeof window === 'undefined') {
    if (process.env.https_proxy) {
      fetchOptions.agent = new (require('https-proxy-agent'))(
        process.env.https_proxy,
      );
    }
  }

  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_URL, // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch,
    fetchOptions,
  });

  const authLink = setContext((_request, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: typeof window !== 'undefined', // Connect to DevTools only on client
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
};
