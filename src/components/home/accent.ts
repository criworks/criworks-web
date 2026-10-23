/** localStorage key of the picked accent. */
export const ACCENT_KEY = 'accent'

/** Distance between two swatches: a 17px dot plus 2px padding each side. */
const SWATCH_PX = 21

/** Whether each portrait URL loaded, so a swap never waits twice. */
const loaded = new Map<string, Promise<boolean>>()

/** Loads `url` once in the background; resolves false if it is missing. */
function preload(url: string): Promise<boolean> {
  let done = loaded.get(url)
  if (!done) {
    done = new Promise(resolve => {
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = url
    })
    loaded.set(url, done)
  }
  return done
}

/**
 * Shows the portrait for a color in every BackPortrait (the splash's and the
 * home's), or their original photo while that file doesn't exist.
 */
async function showPortrait(url: string | undefined): Promise<void> {
  const ok = url ? await preload(url) : false
  document.querySelectorAll<HTMLImageElement>('img[data-portrait]').forEach(img => {
    const src = ok && url ? url : (img.dataset.fallback ?? img.src)
    if (img.getAttribute('src') !== src) img.src = src
  })
}

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
 * swaps in that color's portrait, marks it checked, slides the indicator
 * under it and remembers it. A remembered color that is still in the picker
 * starts selected. Every portrait is preloaded once the page is idle, so
 * swaps are instant. Safe to call more than once.
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
    if (start > 0) void showPortrait(swatches[start]?.dataset.portrait)

    swatches.forEach((swatch, i) => {
      swatch.addEventListener('click', () => {
        const color = swatch.dataset.accent ?? ''
        document.documentElement.style.setProperty('--color-accent', color)
        void showPortrait(swatch.dataset.portrait)
        save(color)
        select(i)
      })
    })

    const warm = () => swatches.forEach(s => s.dataset.portrait && void preload(s.dataset.portrait))
    if ('requestIdleCallback' in window) requestIdleCallback(warm)
    else setTimeout(warm, 1500)
  })
}
