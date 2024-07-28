import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import uk from './uk/translation.json';

export const resources = {
  uk: {
    trans: uk,
  },
  en: {
    trans: en,
  },
};
export const defaultNS = 'trans';

use(initReactI18next).init({
  returnNull: false,
  lng: 'uk',
  defaultNS: 'trans',
  fallbackLng: 'en',
  resources,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
