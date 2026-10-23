import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ACCENT_KEY } from '@/components/home/accent'

// accent.ts caches which portraits loaded, so each test gets a fresh copy.
let bindAccentPickers: () => void

// jsdom doesn't load images: this one "exists" only for URLs in `available`.
const available = new Set<string>()
class FakeImage {
  onload: (() => void) | null = null
  onerror: (() => void) | null = null
  set src(url: string) {
    queueMicrotask(() => (available.has(url) ? this.onload?.() : this.onerror?.()))
  }
}

function render(): void {
  document.body.innerHTML = `
    <img data-portrait data-fallback="/original.webp" src="/original.webp" />
    <div data-accent-picker>
      <button data-accent="#23c0cf" data-portrait="/portraits/back-cyan.png" aria-checked="true"></button>
      <button data-accent="#EE9837" data-portrait="/portraits/back-orange.png" aria-checked="false"></button>
      <button data-accent="#85BC7F" data-portrait="/portraits/back-green.png" aria-checked="false"></button>
      <span data-accent-indicator></span>
    </div>`
  bindAccentPickers()
}

const swatch = (color: string) => document.querySelector<HTMLElement>(`[data-accent="${color}"]`) as HTMLElement
const portrait = () => document.querySelector('img[data-portrait]')?.getAttribute('src')
const flush = () => new Promise(resolve => setTimeout(resolve, 0))

describe('bindAccentPickers', () => {
  beforeEach(async () => {
    vi.resetModules()
    ;({ bindAccentPickers } = await import('@/components/home/accent'))
    vi.stubGlobal('Image', FakeImage)
    available.clear()
    localStorage.clear()
    document.documentElement.style.removeProperty('--color-accent')
  })
  afterEach(() => vi.unstubAllGlobals())

  it('sets the accent, checks the swatch, moves the indicator and remembers it', () => {
    render()
    swatch('#EE9837').click()
    expect(document.documentElement.style.getPropertyValue('--color-accent')).toBe('#EE9837')
    expect(swatch('#EE9837').getAttribute('aria-checked')).toBe('true')
    expect(swatch('#23c0cf').getAttribute('aria-checked')).toBe('false')
    expect(document.querySelector<HTMLElement>('[data-accent-indicator]')?.style.transform).toBe('translateX(21px)')
    expect(localStorage.getItem(ACCENT_KEY)).toBe('#EE9837')
  })

  it("swaps in the color's portrait when the file exists", async () => {
    available.add('/portraits/back-orange.png')
    render()
    swatch('#EE9837').click()
    await flush()
    expect(portrait()).toBe('/portraits/back-orange.png')
  })

  it('keeps the original portrait while the file is missing', async () => {
    available.add('/portraits/back-orange.png')
    render()
    swatch('#EE9837').click()
    await flush()
    swatch('#85BC7F').click()
    await flush()
    expect(portrait()).toBe('/original.webp')
  })

  it('starts on a remembered color, with its portrait', async () => {
    available.add('/portraits/back-green.png')
    localStorage.setItem(ACCENT_KEY, '#85bc7f')
    render()
    await flush()
    expect(swatch('#85BC7F').getAttribute('aria-checked')).toBe('true')
    expect(document.querySelector<HTMLElement>('[data-accent-indicator]')?.style.transform).toBe('translateX(42px)')
    expect(portrait()).toBe('/portraits/back-green.png')
  })

  it('ignores a remembered color that is no longer offered', () => {
    localStorage.setItem(ACCENT_KEY, '#000000')
    render()
    expect(swatch('#23c0cf').getAttribute('aria-checked')).toBe('true')
  })
})
