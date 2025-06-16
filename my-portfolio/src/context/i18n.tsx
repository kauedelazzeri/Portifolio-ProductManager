'use client'
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export type Lang = 'en' | 'pt'

type I18nContextType = {
  t: (key: string) => string | string[]
  lang: Lang
  locale: Lang
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = { en, pt }

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')
  const router = useRouter()

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem('lang')) as Lang | null
    if (stored === 'en' || stored === 'pt') {
      setLangState(stored)
      Cookies.set('NEXT_LOCALE', stored)
    } else if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en'
      setLangState(browserLang)
      Cookies.set('NEXT_LOCALE', browserLang)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
    Cookies.set('NEXT_LOCALE', newLang)
    router.refresh() // Refresh the page to update server components
  }

  const t = (key: string): string | string[] => {
    const keys = key.split('.')
    let value: any = translations[lang]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // If the value is an object (and not null), and it's an array, return it as is
    if (Array.isArray(value)) {
      return value
    }

    // If the value is an object, return the key as fallback
    if (typeof value === 'object' && value !== null) {
      console.warn(`Translation key "${key}" returned an object instead of a string or array`)
      return key
    }
    
    // If the value is undefined or null, return the key as fallback
    return value?.toString() || key
  }

  return (
    <I18nContext.Provider value={{ t, lang, locale: lang, setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return context
}
