const { default: NextI18Next } = require('next-i18next');
const { initReactI18next } = require('react-i18next');

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['en'],
  localeSubpaths: 'none',
});

NextI18NextInstance.i18n.use(initReactI18next).init({
  lng: 'en',
});

module.exports = NextI18NextInstance;
