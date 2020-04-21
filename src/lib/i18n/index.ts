import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Language from './languages';
import importResources from './importResources';

const nameSpaces = ['common'];
const resources = importResources([Language.EN, Language.RU], nameSpaces);

const initialI18nSettings = {
  resources,
  ns: nameSpaces,
  defaultNS: 'common',
  lng: Language.EN,
  fallbackLng: Language.RU,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  editor: {
    onEditorSaved: async (lng, ns) => {
      await i18n.reloadResources(lng, ns);
      i18n.emit('editorSaved');
    },
  },
  react: {
    bindI18n: 'languageChanged editorSaved',
    useSuspense: false,
  },
};

i18n.use(initReactI18next);

export { initialI18nSettings, Language };
export default i18n;
