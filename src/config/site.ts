import type { SiteConfig } from '@/data'

export const site = {
  name: 'Cri Works',
  email: 'cri@cri.works',
  // www is the primary domain on Vercel; cri.works redirects to it.
  url: 'https://www.cri.works',
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
