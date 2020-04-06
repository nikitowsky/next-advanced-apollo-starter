import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider as ApolloMockedProvider } from '@apollo/react-testing';

import Index from '../../src/pages/index';
import i18next from '../../src/lib/i18n';

i18next.changeLanguage('en');

it('Render index page', async () => {
  render(
    <ApolloMockedProvider>
      <Index />
    </ApolloMockedProvider>
  );

  expect(screen.getByText(/Hi!/i)).toBeInTheDocument();
});
