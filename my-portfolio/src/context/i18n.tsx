'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'

export type Lang = 'en' | 'pt'

const dictionaries = { en, pt }

interface I18nContextProps {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => any
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem('lang')) as Lang | null
    if (stored === 'en' || stored === 'pt') {
      setLangState(stored)
    } else if (typeof navigator !== 'undefined') {
      setLangState(navigator.language.startsWith('pt') ? 'pt' : 'en')
    }
  }, [])

  const setLang = (lng: Lang) => {
    localStorage.setItem('lang', lng)
    setLangState(lng)
  }

  const t = (key: string): any => {
    const keys = key.split('.')
    let result: any = dictionaries[lang]
    for (const k of keys) {
      result = result?.[k]
      if (result === undefined) return key
    }
    return result === undefined ? key : result
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useTranslation must be used within I18nProvider')
  return { t: context.t, lang: context.lang, setLang: context.setLang }
}
