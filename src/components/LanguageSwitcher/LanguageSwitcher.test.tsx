import { fireEvent, render, screen } from '@testing-library/react';

import { LanguageSwitcher, TEST_ID } from './LanguageSwitcher';
import { i18n, Language } from '../../../src/lib/i18n';

describe('LanguageSwitcher', () => {
  it('Language switcher is working', () => {
    i18n.init({ lng: Language.EN });
    render(<LanguageSwitcher />);

    const languageSwitcherButton = screen.getByTestId(TEST_ID);

    expect(languageSwitcherButton).toBeInTheDocument();
    expect(i18n.language).toBe(Language.EN);
    fireEvent.click(languageSwitcherButton);
    expect(i18n.language).toBe(Language.PL);
  });
});
