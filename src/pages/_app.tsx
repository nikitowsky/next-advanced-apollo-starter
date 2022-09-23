import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import 'normalize.css/normalize.css';
import { useApollo } from '../lib/apollo';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
