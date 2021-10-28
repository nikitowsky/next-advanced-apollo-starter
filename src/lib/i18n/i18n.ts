import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

import { Language } from './languages';

// Initialize i18n
i18n
  .use(
    resourcesToBackend((language, namespace, callback) => {
      return callback(
        null,
        require(`../../locales/${language}/${namespace}.json`),
      );
    }),
  )
  .use(initReactI18next)
  .init({
    ns: ['common'],
    initImmediate: false,
    fallbackLng: Language.EN,
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
  });

export { i18n };
