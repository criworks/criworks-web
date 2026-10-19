import type { Profile } from '@/data'

// Contractor: recruiters and hiring managers screening candidates fast.
export default {
  slug: 'contractor/hiring-manager',
  audience: 'Recruiters and hiring managers screening candidates quickly.',
  sections: ['hero', 'proof', 'work', 'contact'],
  content: {
    es: {
      hero: {
        title: 'Product Designer senior, disponible para tu equipo',
        cta: 'Descargar CV',
        ctaHref: '/cv.pdf',
      },
    },
    en: {
      hero: {
        title: 'Senior Product Designer, available for your team',
        cta: 'Download CV',
        ctaHref: '/cv.pdf',
      },
    },
  },
  seo: {
    es: {
      title: 'Cri Works — Product Designer senior',
      description: 'Experiencia, disponibilidad y trabajo seleccionado en 10 segundos.',
    },
    en: {
      title: 'Cri Works — Senior Product Designer',
      description: 'Experience, availability, and selected work in 10 seconds.',
    },
  },
  intro: 'none',
} satisfies Profile
