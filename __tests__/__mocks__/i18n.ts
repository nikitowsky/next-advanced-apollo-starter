import i18n from 'i18next';

i18n.init({
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
