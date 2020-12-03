import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import './_app.scss';

import i18n, { initialI18nSettings, Language } from '../lib/i18n';
import { useApollo } from '../lib/apollo';

i18n.init({
  ...initialI18nSettings,
  lng: Language.EN,
});

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
