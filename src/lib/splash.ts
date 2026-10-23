/** Event fired on `document` once the splash loader has left the screen. */
export const SPLASH_DONE_EVENT = 'splash:done'

export const SPLASH = {
  CIRCUMFERENCE: 50.2655, // 2πr of the progress arc (r = 8)
  MIN_MS: 300,            // never mark loaded sooner than this after start
  FAKE_MS: 700,           // 0 → 70% while the page loads
  CRAWL_MS: 4000,         // 70 → 90% if the load takes longer
  FINISH_MS: 350,         // 90 → 100% once loaded
} as const

/**
 * Progress shown by the splash, 0–100. Before load it fakes 0→70% and then
 * crawls toward 90%; once loaded it ramps the rest of the way to 100%.
 * `sinceLoad` is null until the page has loaded.
 */
export function splashProgress(elapsed: number, sinceLoad: number | null): number {
  const value =
    sinceLoad === null
      ? elapsed < SPLASH.FAKE_MS
        ? (elapsed / SPLASH.FAKE_MS) * 70
        : 70 + Math.min(20, ((elapsed - SPLASH.FAKE_MS) / SPLASH.CRAWL_MS) * 20)
      : 90 + Math.min(10, (sinceLoad / SPLASH.FINISH_MS) * 10)
  return Math.max(0, Math.min(100, value))
}

/**
 * Resolves once the splash is gone: right away when the page has none or CSS
 * hides it (reduced motion, intro already seen), else on SPLASH_DONE_EVENT.
 */
export function whenSplashDone(): Promise<void> {
  const splash = document.getElementById('splash-loader')
  if (!splash || getComputedStyle(splash).display === 'none') return Promise.resolve()
  return new Promise(resolve => document.addEventListener(SPLASH_DONE_EVENT, () => resolve(), { once: true }))
}
