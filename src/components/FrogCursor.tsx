import { useEffect, useRef, useState } from 'react'
import { emitFrogFrame, pointer } from '../lib/pointer'

const LERP = 0.22
const FOCUSABLE = 'a, button, [role="button"], input, textarea, select, label'

const BASE = import.meta.env.BASE_URL

// Лягушка-курсор: только desktop с точным указателем.
// Позиция обновляется в rAF-цикле через transform, React-состояние не дёргается.
export default function FrogCursor() {
  const ref = useRef<HTMLImageElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduced.matches) return
    setEnabled(true)
    document.documentElement.classList.add('has-frog-cursor')
    return () => document.documentElement.classList.remove('has-frog-cursor')
  }, [])

  useEffect(() => {
    if (!enabled) return
    const img = ref.current
    if (!img) return

    let raf = 0
    let fx = pointer.x
    let fy = pointer.y
    let sx = 1
    let sy = 1
    let tsx = 1
    let tsy = 1
    let seen = false

    const move = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      if (!seen) {
        seen = true
        fx = e.clientX
        fy = e.clientY
        document.documentElement.classList.add('frog-active')
      }
      const el = e.target instanceof Element ? e.target : null
      const over = el && el.closest(FOCUSABLE)
      tsx = over ? 1.18 : 1
      tsy = over ? 1.18 : 1
    }
    const down = () => {
      // лёгкое сплющивание при нажатии
      tsx = 1.12
      tsy = 0.86
    }
    const up = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target : null
      const over = el && el.closest(FOCUSABLE)
      tsx = over ? 1.18 : 1
      tsy = over ? 1.18 : 1
    }
    const leave = () => {
      seen = false
      document.documentElement.classList.remove('frog-active')
    }

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', down, { passive: true })
    window.addEventListener('pointerup', up, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)

    const tick = () => {
      fx += (pointer.x - fx) * LERP
      fy += (pointer.y - fy) * LERP
      sx += (tsx - sx) * 0.18
      sy += (tsy - sy) * 0.18
      img.style.transform = `translate3d(${fx.toFixed(1)}px, ${fy.toFixed(1)}px, 0) translate(-50%, -50%) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`
      emitFrogFrame(fx, fy)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <img
      ref={ref}
      className="frog"
      src={`${BASE}images/frog-cursor.png`}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  )
}
