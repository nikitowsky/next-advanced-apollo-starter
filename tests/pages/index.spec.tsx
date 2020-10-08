import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider as ApolloMockedProvider } from '@apollo/client/testing';

import Index from '../../src/pages/index';
import i18n, { initialI18nSettings, Language } from '../../src/lib/i18n';

beforeAll(() => {
  i18n.init({
    ...initialI18nSettings,
    lng: Language.EN,
  });
});

it('Render index page', async () => {
  render(
    <ApolloMockedProvider>
      <Index />
    </ApolloMockedProvider>,
  );

  expect(screen.getByText(/Hi!/i)).toBeInTheDocument();
});
