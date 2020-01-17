import { MockedProvider as ApolloMockedProvider } from '@apollo/react-testing';
import { render, cleanup, waitForElement } from '@testing-library/react';

import Index from '../../pages/index';
import { MockedProvider as I18NMockedProvider } from '../mocks/i18n';

afterEach(cleanup);

it('Should render index page without crash', async () => {
  const { getByText } = render(
    <ApolloMockedProvider>
      <I18NMockedProvider>
        <Index />
      </I18NMockedProvider>
    </ApolloMockedProvider>,
  );

  await waitForElement(() => getByText(/greeting/i));
});
