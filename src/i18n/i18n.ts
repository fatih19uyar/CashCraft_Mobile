import i18n from 'i18next';
import translationEN from './en.json';
import translationTR from './tr.json';
import {initReactI18next} from 'react-i18next';

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
  lng: 'tr', // Varsayılan dil
  fallbackLng: 'tr', // Fallback dil
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
