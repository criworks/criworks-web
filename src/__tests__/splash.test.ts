import { describe, expect, it } from 'vitest'
import { SPLASH, splashProgress } from '@/lib/splash'

describe('splashProgress', () => {
  it('fakes 0 → 70% while loading', () => {
    expect(splashProgress(0, null)).toBe(0)
    expect(splashProgress(SPLASH.FAKE_MS / 2, null)).toBeCloseTo(35)
    expect(splashProgress(SPLASH.FAKE_MS, null)).toBe(70)
  })

  it('never passes 90% before the page loads', () => {
    expect(splashProgress(SPLASH.FAKE_MS + SPLASH.CRAWL_MS * 10, null)).toBe(90)
  })

  it('ramps 90 → 100% once loaded', () => {
    expect(splashProgress(500, 0)).toBe(90)
    expect(splashProgress(500, SPLASH.FINISH_MS / 2)).toBeCloseTo(95)
    expect(splashProgress(500, SPLASH.FINISH_MS * 3)).toBe(100)
  })
})
