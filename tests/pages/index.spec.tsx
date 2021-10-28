import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider as ApolloMockedProvider } from '@apollo/client/testing';

import Index from '../../src/pages/index';
import { i18n, Language } from '../../src/lib/i18n';

const renderWithApollo = (element: React.ReactElement) => {
  render(element, { wrapper: ApolloMockedProvider });
};

describe('Index page correctly renders in different locales', () => {
  it('Initially renders in English language', () => {
    i18n.init({ lng: Language.EN });

    renderWithApollo(<Index />);

    expect(screen.getByText(/hi!/i)).toBeInTheDocument();
  });

  it('Initially renders in Russian language', () => {
    i18n.init({ lng: Language.RU });

    renderWithApollo(<Index />);

    expect(screen.getByText(/привет!/i)).toBeInTheDocument();
  });

  it('Language switcher is working', () => {
    i18n.init({ lng: Language.EN });

    renderWithApollo(<Index />);

    const languageSwitcherButton = screen.getByRole('button', {
      name: /change language/i,
    });

    expect(i18n.language).toBe(Language.EN);
    expect(languageSwitcherButton).toBeInTheDocument();

    fireEvent.click(languageSwitcherButton);

    expect(i18n.language).toBe(Language.RU);
  });
});
