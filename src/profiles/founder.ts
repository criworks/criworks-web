import type { Profile } from '@/data'
import { anchors } from './_anchors'

// Freelance: founders. The full page that used to be the home, with the default copy.
export default {
  slug: 'freelance/founder',
  audience: 'Founders of tech startups who need product clarity.',
  sections: ['hero', 'statement', 'proof', 'services', 'work', 'contact'],
  content: anchors,
  seo: {
    es: {
      title: 'Cri Works — Diseño de producto',
      description: 'Diseño productos que dan claridad a startups tecnológicas: web, apps, marca e IA.',
    },
    en: {
      title: 'Cri Works — Product design',
      description: 'I design products that bring clarity to tech startups: web, apps, brand, and AI.',
    },
  },
  intro: 'subtle',
} satisfies Profile
