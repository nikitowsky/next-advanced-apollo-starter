import React, { Component } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import { HttpLink } from 'apollo-link-http';
import { IncomingMessage } from 'http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import cookie from 'cookie';
import fetch from 'isomorphic-unfetch';
import { AppContext } from 'next/app';

const isBrowser = typeof window !== 'undefined';

/**
 * Get the user token from cookie
 */
const getToken = (req?: IncomingMessage, options = {}) => {
  const cookies = cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
    options,
  );

  return cookies.token;
};

export const withApollo = (App: any) => {
  return class WithApollo extends Component {
    apolloClient: ApolloClient<NormalizedCacheObject>;

    constructor(props) {
      super(props);

      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApolloClient(props.apolloState, { getToken });
    }

    static displayName = `WithApollo(${App.displayName})`;

    static async getInitialProps(ctx: AppContext) {
      const {
        Component,
        router,
        ctx: { req, res },
      } = ctx;

      // @ts-ignore
      const apolloClient = (ctx.ctx.apolloClient = initApolloClient(
        {},
        {
          getToken: () => getToken(req),
        },
      ));

      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      if (!isBrowser) {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={apolloClient}>
              <App {...appProps} Component={Component} router={router} />
            </ApolloProvider>,
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo's store
      const apolloState = apolloClient.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <App {...this.props} />
        </ApolloProvider>
      );
    }
  };
};

type InitApolloClientOptions = [{}, { getToken: typeof getToken }];

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
const initApolloClient = (...args: InitApolloClientOptions) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    // @ts-ignore
    return createApolloClient(...args);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(...args);
  }

  return apolloClient;
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
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
};
