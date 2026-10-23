/** localStorage key of the picked accent. */
export const ACCENT_KEY = 'accent'

/** Distance between two swatches: a 17px dot plus 2px padding each side. */
const SWATCH_PX = 21

function read(): string | null {
  try {
    return localStorage.getItem(ACCENT_KEY)
  } catch {
    return null
  }
}

function save(color: string): void {
  try {
    localStorage.setItem(ACCENT_KEY, color)
  } catch {
    // Storage blocked (private mode): the pick lasts until reload.
  }
}

/**
 * Wires every AccentPicker: clicking a swatch sets --color-accent on <html>,
 * marks it checked, slides the indicator under it and remembers it. A
 * remembered color that is still in the picker starts selected. Safe to
 * call more than once.
 */
export function bindAccentPickers(): void {
  document.querySelectorAll<HTMLElement>('[data-accent-picker]:not([data-bound])').forEach(picker => {
    picker.dataset.bound = ''
    const swatches = [...picker.querySelectorAll<HTMLButtonElement>('[data-accent]')]
    const indicator = picker.querySelector<HTMLElement>('[data-accent-indicator]')

    const select = (index: number) => {
      swatches.forEach((s, i) => s.setAttribute('aria-checked', String(i === index)))
      if (indicator) indicator.style.transform = `translateX(${index * SWATCH_PX}px)`
    }

    const stored = read()?.toLowerCase()
    const start = swatches.findIndex(s => s.dataset.accent?.toLowerCase() === stored)
    select(start === -1 ? 0 : start)

    swatches.forEach((swatch, i) => {
      swatch.addEventListener('click', () => {
        const color = swatch.dataset.accent ?? ''
        document.documentElement.style.setProperty('--color-accent', color)
        save(color)
        select(i)
      })
    })
  })
}
