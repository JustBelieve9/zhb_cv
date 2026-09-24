import { useEffect, useRef } from 'react'
import { onFrogFrame } from '../lib/pointer'

const LERP_FINE = 0.16
const LERP_TOUCH = 0.14

const BASE = import.meta.env.BASE_URL

/**
 * Два идеально совмещённых слоя: room-day всегда виден, room-night
 * открывается мягкой круглой маской. Центр маски — центр лягушки.
 * Всё через CSS-переменные и mask-image, без canvas.
 */
export default function ImageReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches

    let raf = 0
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let rect = el.getBoundingClientRect()

    const apply = () => {
      el.style.setProperty('--reveal-x', `${(x - rect.left).toFixed(1)}px`)
      el.style.setProperty('--reveal-y', `${(y - rect.top).toFixed(1)}px`)
    }

    if (fine) {
      if (reduced) {
        rect = el.getBoundingClientRect()
        x = rect.left + rect.width / 2
        y = rect.top + rect.height / 2
        apply()
        return
      }
      // Центр следует за лягушкой в её rAF-цикле (см. FrogCursor).
      let started = false
      const off = onFrogFrame((fx, fy) => {
        if (!started) {
          started = true
          x = fx
          y = fy
        }
        rect = el.getBoundingClientRect()
        tx = fx
        ty = fy
        x += (tx - x) * LERP_FINE
        y += (ty - y) * LERP_FINE
        apply()
      })
      return off
    }

    // Тач: до первого касания — медленный дрейф, чтобы эффект нашли,
    // после — следует за последней позицией пальца.
    let touched = false
    const onTouch = (e: TouchEvent) => {
      const t0 = e.touches[0]
      if (!t0) return
      touched = true
      tx = t0.clientX
      ty = t0.clientY
    }
    el.addEventListener('touchstart', onTouch, { passive: true })
    el.addEventListener('touchmove', onTouch, { passive: true })

    const tick = (now: number) => {
      rect = el.getBoundingClientRect()
      if (!touched) {
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        if (reduced) {
          tx = cx
          ty = cy
        } else {
          tx = cx + Math.sin(now / 2400) * rect.width * 0.1
          ty = cy + Math.cos(now / 3100) * rect.height * 0.12
        }
      }
      x += (tx - x) * LERP_TOUCH
      y += (ty - y) * LERP_TOUCH
      apply()
      raf = requestAnimationFrame(tick)
    }
    x = tx = rect.left + rect.width / 2
    y = ty = rect.top + rect.height / 2
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('touchstart', onTouch)
      el.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <div ref={ref} className="reveal" aria-hidden="true">
      <img
        className="reveal__img"
        src={`${BASE}images/room-day.webp`}
        alt=""
        width={1672}
        height={470}
        decoding="async"
        draggable={false}
      />
      <img
        className="reveal__img reveal__img--night"
        src={`${BASE}images/room-night.webp`}
        alt=""
        width={1672}
        height={470}
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
