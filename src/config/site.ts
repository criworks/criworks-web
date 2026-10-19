import type { SiteConfig } from '@/data'

export const site = {
  name: 'Cri Works',
  email: 'cri@cri.works',
  // TODO(crim): confirm the final domain.
  url: 'https://cri.works',
  ogImage: '/og-image.png',
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/criworks' },
    { label: 'GitHub', href: 'https://github.com/criworks' },
    { label: 'Instagram', href: 'https://instagram.com/cri.works' },
  ],
  defaultIntro: 'subtle',
  // The portrait sits at 42% of hero-bg.webp.
  heroFocusX: 0.42,
} as const satisfies SiteConfig
