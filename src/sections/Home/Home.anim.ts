import type { gsap as GsapType } from 'gsap'
import { ANIMATION_DELAYS, ANIMATION_EASING, ANIMATION_TIMINGS, HERO_ENTRANCE } from '@/lib/constants'

type Timeline = ReturnType<typeof GsapType.timeline>

const ITEMS = '[data-animate="home-item"]'

/**
 * Entrance: lifts each block from the dimmed state in hero-initial.css, top
 * to bottom. Never starts from invisible and fits in HERO_ENTRANCE.MAX_DURATION.
 */
export function createHomeEntrance(gsap: typeof GsapType): Timeline {
  return gsap
    .timeline({ defaults: { ease: ANIMATION_EASING.EASE_OUT_STRONG } })
    .fromTo(
      ITEMS,
      { opacity: HERO_ENTRANCE.START_OPACITY, y: HERO_ENTRANCE.OFFSET_Y },
      { opacity: 1, y: 0, duration: ANIMATION_TIMINGS.FAST * 1.5, stagger: ANIMATION_DELAYS.STAGGER },
    )
}

/** Final state without animating ('none', or already seen). */
export function setHomeFinal(gsap: typeof GsapType): void {
  gsap.set(ITEMS, { opacity: 1, y: 0 })
}
