import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import cs from './cs'
import en from './en'

const savedLang = localStorage.getItem('lang') ?? 'cs'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      cs: { translation: cs },
      en: { translation: en },
    },
    lng: savedLang,
    fallbackLng: 'cs',
    interpolation: { escapeValue: false },
  })

export default i18n
