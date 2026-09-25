// Общая шина позиции лягушки-курсора: FrogCursor пишет, Hero (reveal) читает.
// Курсор и подсветка живут в одном requestAnimationFrame-цикле.

export type FrameListener = (x: number, y: number, dtMs: number) => void

/** Целевая позиция указателя (viewport-координаты). */
export const pointer = { x: -400, y: -400 }

const listeners = new Set<FrameListener>()

export function onFrogFrame(fn: FrameListener): () => void {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

export function emitFrogFrame(x: number, y: number, dtMs: number): void {
  for (const fn of listeners) fn(x, y, dtMs)
}
