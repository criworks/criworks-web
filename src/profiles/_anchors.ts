import type { Content, DeepPartial, Locale } from '@/data'

// The default nav and hero CTA link to the founder landing, because the home is
// only the Hero. Landings that show Services and Contact spread this into their
// `content` so those links stay on the page.
export const anchors = {
  es: {
    nav: [
      { label: 'Servicios', href: '#services' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: { ctaHref: '#services' },
  },
  en: {
    nav: [
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: { ctaHref: '#services' },
  },
} as const satisfies { readonly [L in Locale]: DeepPartial<Content> }
