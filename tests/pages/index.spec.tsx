import { MockedProvider as ApolloMockedProvider } from '@apollo/react-testing';
import { render, cleanup, waitForElement } from '@testing-library/react';

import Index from '../../src/pages/index';
import i18next from '../../src/lib/i18n';

afterEach(cleanup);

i18next.changeLanguage('en');

it('Should render index page', async () => {
  const { getByText } = render(
    <ApolloMockedProvider>
      <Index />
    </ApolloMockedProvider>,
  );

  await waitForElement(() => getByText(/Hi!/i));
});
