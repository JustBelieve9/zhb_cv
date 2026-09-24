import { useLang } from '../lib/lang'
import { ui, type Locale } from '../data/cv'
import { useT } from '../lib/lang'

const OPTIONS: Array<{ id: Locale; label: string }> = [
  { id: 'ru', label: 'RU' },
  { id: 'en', label: 'EN' },
]

export default function LanguageSwitch() {
  const { lang, setLang } = useLang()
  const t = useT()
  return (
    <div className="lang" role="group" aria-label={t(ui.lang)}>
      {OPTIONS.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={lang === o.id}
          onClick={() => setLang(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
