import React from 'react';

import { useTranslation } from '../utils/i18n';

const Index = () => {
  const [t] = useTranslation('common');

  return <div>{t('greeting')}</div>;
};

Index.getInitialProps = () => ({
  namespacesRequired: ['common'],
});

export default Index;
