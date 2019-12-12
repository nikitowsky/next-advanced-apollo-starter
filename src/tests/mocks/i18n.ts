import i18n from 'i18next';
import NextI18Next from 'next-i18next';
import { initReactI18next } from 'react-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['en'],
});

NextI18NextInstance.i18n.use(initReactI18next).init();

i18n.init({
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
