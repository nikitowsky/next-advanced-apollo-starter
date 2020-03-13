import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Language from './languages';
import NameSpace from './nameSpaces';
import importResources from './importResources';

const nameSpaces = [NameSpace.COMMON];
const resources = importResources([Language.EN, Language.RU], nameSpaces);

i18next.use(initReactI18next).init({
  resources,
  ns: nameSpaces,
  defaultNS: NameSpace.COMMON,
  lng: Language.RU,
  fallbackLng: Language.EN,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  editor: {
    onEditorSaved: async (lng, ns) => {
      await i18next.reloadResources(lng, ns);
      i18next.emit('editorSaved');
    },
  },
  react: {
    bindI18n: 'languageChanged editorSaved',
    useSuspense: false,
  },
});

export { Language, NameSpace };
export default i18next;
