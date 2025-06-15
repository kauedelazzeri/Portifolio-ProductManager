'use client'
import { useTranslation } from '@/context/i18n'

export function LanguageSwitch() {
  const { lang, setLang } = useTranslation()
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
      className="rounded-lg p-2 hover:bg-secondary/80 transition-colors"
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'PT' : 'EN'}
    </button>
  )
}
