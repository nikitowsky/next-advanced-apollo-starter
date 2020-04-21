import React from 'react';
import { AppProps } from 'next/app';

import './_app.scss';

import i18n, { initialI18nSettings, Language } from '../lib/i18n';
import { withApollo } from '../lib/apollo';

i18n.init({
  ...initialI18nSettings,
  /**
   * Current language
   */
  lng: Language.EN,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withApollo({ ssr: true })(MyApp);
