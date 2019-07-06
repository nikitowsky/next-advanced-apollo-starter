import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import './_app.scss';
import { withApollo } from '../utils/apollo';
import { NextApolloAppProps } from '../utils/apollo/withApollo';
import { appWithTranslation } from '../utils/i18n';

class MyApp extends App<NextApolloAppProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        namespacesRequired: [],
        ...pageProps,
      },
    };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default appWithTranslation(withApollo(MyApp));
