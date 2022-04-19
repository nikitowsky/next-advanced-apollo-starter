import React from 'react';
import { useTranslation } from 'react-i18next';

import { i18n, Language } from '../../lib/i18n';

export const TEST_ID = 'language-switcher';

export const LanguageSwitcher: React.FC = () => {
  const [t] = useTranslation('common');

  const handleClick: React.MouseEventHandler = () => {
    const currentLanguage = i18n.language;

    i18n.changeLanguage(
      currentLanguage === Language.EN ? Language.PL : Language.EN,
    );
  };

  return (
    <button data-testid={TEST_ID} onClick={handleClick}>
      {t('controls.change-language')}
    </button>
  );
};
