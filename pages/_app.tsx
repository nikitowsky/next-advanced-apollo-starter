import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import './_app.scss';
import { withApollo } from '../utils/apollo';
import { NextApolloContext } from '../utils/apollo/withApollo';

class MyApp extends App<NextApolloContext> {
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

export default withApollo(MyApp);
