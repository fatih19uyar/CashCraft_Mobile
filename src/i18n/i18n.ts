import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEN from './en.json';
import translationTR from './tr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    tr: {
      translation: translationTR,
    },
  },
  compatibilityJSON: 'v3',
  lng: 'en', // Varsayılan dil
  fallbackLng: 'en', // Fallback dil
  interpolation: {
    escapeValue: false, // HTML öğelerini escape etme
  },
});

export default i18n;
