const { default: NextI18Next } = require('next-i18next');

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['en'],
  localeSubpaths: 'none',
});

module.exports = NextI18NextInstance;
