import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { contacts, identity, ui } from '../data/cv'
import { useT } from '../lib/lang'
import ImageReveal from './ImageReveal'

const EASE: [number, number, number, number] = [0.2, 0.7, 0.3, 1]
const EASE_TILES: [number, number, number, number] = [0.76, 0, 0.24, 1]

// Интро играется один раз: возврат к странице не проигрывает его заново.
let introPlayed = false

export default function Hero() {
  const t = useT()
  const reduce = useReducedMotion() ?? false
  const [intro] = useState(() => !introPlayed && !reduce)

  useEffect(() => {
    if (!intro) {
      document.documentElement.classList.add('intro-done')
      introPlayed = true
      return
    }
    const id = window.setTimeout(() => {
      document.documentElement.classList.add('intro-done')
      introPlayed = true
    }, 1400)
    return () => window.clearTimeout(id)
  }, [intro])

  const telegram = contacts.find((c) => c.kind === 'telegram')

  return (
    <section className="hero">
      <motion.div
        className="hero__stage"
        initial={intro ? { opacity: 0, scale: 1.06 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
      >
        <ImageReveal />
        <motion.div
          className="hero__head"
          initial={intro ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.55, ease: EASE }}
        >
          <p className="hero__over">{t(ui.heroOver)}</p>
          <h1 className="hero__name">{t(identity.name)}</h1>
          <p className="hero__role">
            {t(identity.role)} <span className="hero__roletag">· {t(identity.roleTag)}</span>
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--accent" onClick={() => window.print()}>
              {t(ui.download)}
            </button>
            {telegram && (
              <a className="btn" href={telegram.href} target="_blank" rel="noopener">
                {t(ui.telegram)} ↗
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>

      {intro && (
        <div className="hero__tiles" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="hero__tile"
              initial={{ y: 0 }}
              animate={{ y: '-102%' }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.08, ease: EASE_TILES }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
