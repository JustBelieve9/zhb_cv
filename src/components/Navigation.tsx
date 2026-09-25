import { motion, useReducedMotion } from 'framer-motion'
import { identity, ui } from '../data/cv'
import { useT } from '../lib/lang'
import LanguageSwitch from './LanguageSwitch'

const BASE = import.meta.env.BASE_URL

export default function Navigation() {
  const t = useT()
  const reduce = useReducedMotion() ?? false

  return (
    <motion.header
      className="nav no-print"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <button
        type="button"
        className="nav__brand"
        onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
        aria-label={t(identity.name)}
      >
        <img className="nav__logo" src={`${BASE}images/frog-cursor.png`} alt="" aria-hidden="true" draggable={false} />
        <span className="nav__name">{t(identity.name)}</span>
      </button>
      <div className="nav__right">
        <LanguageSwitch />
        <button type="button" className="btn btn--accent nav__dl" onClick={() => window.print()}>
          {t(ui.download)}
        </button>
      </div>
    </motion.header>
  )
}
