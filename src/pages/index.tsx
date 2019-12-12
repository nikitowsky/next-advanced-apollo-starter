import React from 'react';
import { NextPage } from 'next';
import { useApolloClient } from '@apollo/react-hooks';

import { useTranslation } from '../lib/i18n';

const IndexPage: NextPage = () => {
  const [t] = useTranslation('common');
  const apolloClient = useApolloClient();

  return <div>{t('greeting', { version: apolloClient.version })}</div>;
};

IndexPage.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  };
};

export default IndexPage;
