'use client'
import { useTranslation } from '@/context/i18n'
import posthog from 'posthog-js'

export function LanguageSwitch() {
  const { lang, setLang } = useTranslation()
  
  const handleLanguageChange = () => {
    const newLang = lang === 'en' ? 'pt' : 'en'
    
    posthog.capture('language_change', {
      from_language: lang,
      to_language: newLang,
      projeto: 'portifolio',
    })
    
    setLang(newLang)
  }
  
  return (
    <button
      onClick={handleLanguageChange}
      className="rounded-lg p-2 hover:bg-secondary/80 transition-colors"
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'PT' : 'EN'}
    </button>
  )
}
