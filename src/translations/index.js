/**
 * This module contains translations object.
 *
 * @format
 */

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './english';
import ru from './russian';
import ua from './ukrainian';

export const languages = { en: 'English', ru: 'Русский', ua: 'Українська' };

/* i18n.init({
  fallbackLng: 'en',
  defaultLocale: 'en-US',
  locale: 'en',
  resources: { en, ru, ua }
}); */

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {}
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: { translation: { ...en } },
      ru: { translation: { ...ru } },
      ua: { translation: { ...ua } }
    }
  });

export default i18next;
/*
export default {
  en: english,
  ru: russian,
  ua: ukrainian
}; */
