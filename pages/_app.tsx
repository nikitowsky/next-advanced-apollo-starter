import React from 'react';
import App from 'next/app';
import { ApolloProvider } from 'react-apollo';

import './_app.scss';
import { withApollo } from '../utils/apollo';
import { NextApolloAppProps } from '../utils/apollo/withApollo';
import { appWithTranslation } from '../utils/i18n';
import { AuthProvider } from '../utils/auth';

class MyApp extends App<NextApolloAppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    );
  }
}

export default appWithTranslation(withApollo(MyApp));
