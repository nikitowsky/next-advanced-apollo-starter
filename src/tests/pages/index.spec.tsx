import { MockedProvider } from '@apollo/react-testing';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import Index from '../../pages/index';
import I18Next from '../mocks/i18n';

afterEach(cleanup);

it('Should render index page without crash', async () => {
  const { getByText } = render(
    <MockedProvider>
      <I18nextProvider i18n={I18Next}>
        <Index />
      </I18nextProvider>
    </MockedProvider>,
  );

  await waitForElement(() => getByText(/greeting/i));
});
