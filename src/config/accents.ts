import { activePalette } from './theme'

export interface Accent {
  readonly color: string
  /** This color's back portrait under public/ (see public/portraits/README.md). */
  readonly portrait: string
}

/** Accent colors the home's picker offers; the first is the theme's default. */
export const accents: readonly Accent[] = [
  { color: activePalette.accent, portrait: '/portraits/back-cyan.png' },
  { color: '#295FD7', portrait: '/portraits/back-blue.png' },
  { color: '#A621D9', portrait: '/portraits/back-violet.png' },
  { color: '#EE9837', portrait: '/portraits/back-orange.png' },
  { color: '#EC622E', portrait: '/portraits/back-red-orange.png' },
  { color: '#E83657', portrait: '/portraits/back-red.png' },
  { color: '#85BC7F', portrait: '/portraits/back-green.png' },
]
