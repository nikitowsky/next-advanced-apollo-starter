import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useApolloClient } from '@apollo/client';

const IndexPage: NextPage = () => {
  const [t] = useTranslation('common');
  const apolloClient = useApolloClient();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: t('greetings', { version: apolloClient.version }),
      }}
    />
  );
};

export default IndexPage;
