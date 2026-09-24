import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ui, type L, type Locale } from '../data/cv'

interface LangCtx {
  lang: Locale
  setLang: (l: Locale) => void
}

const Ctx = createContext<LangCtx>({ lang: 'ru', setLang: () => {} })

function initialLang(): Locale {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'ru' || saved === 'en') return saved
  } catch {
    // приватный режим — берём язык браузера
  }
  return (navigator.language || 'ru').slice(0, 2) === 'ru' ? 'ru' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = ui.titles[lang]
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // приватный режим — просто не сохраняем
    }
  }, [lang])

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

export function useLang(): LangCtx {
  return useContext(Ctx)
}

/** Переводчик: t(pair) возвращает строку на текущем языке. */
export function useT(): (v: L) => string {
  const { lang } = useLang()
  return (v: L) => v[lang]
}
