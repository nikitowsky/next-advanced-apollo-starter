import React from 'react';
import { AppProps } from 'next/app';

import './_app.scss';
import { withApollo } from '../lib/apollo';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withApollo()(MyApp);
