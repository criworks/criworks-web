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
        cta: 'Hablemos',
        ctaHref: '#contact',
      },
      nav: [
        { label: 'Perfil', href: '#proof' },
        { label: 'Contacto', href: '#contact' },
      ],
    },
    en: {
      hero: {
        title: 'Senior Product Designer, available for your team',
        cta: "Let's talk",
        ctaHref: '#contact',
      },
      nav: [
        { label: 'Profile', href: '#proof' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  },
  seo: {
    es: {
      title: 'Cri Works — Product Designer senior',
      description: 'Experiencia y disponibilidad en 10 segundos.',
    },
    en: {
      title: 'Cri Works — Senior Product Designer',
      description: 'Experience and availability in 10 seconds.',
    },
  },
  intro: 'none',
} satisfies Profile
