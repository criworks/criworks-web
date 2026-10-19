import type { Profile } from '@/data'

// Contractor: CTOs and engineering leads who need design that ships.
export default {
  slug: 'contractor/cto',
  audience: 'CTOs and engineering leads who need a designer who works close to code.',
  sections: ['hero', 'statement', 'proof', 'services', 'work', 'contact'],
  content: {
    es: {
      hero: {
        title: 'Diseño que tu equipo de ingeniería puede construir',
        subtitle: 'Design systems, flujos y front-end pensados para entregarse sin fricción.',
      },
    },
    en: {
      hero: {
        title: 'Design your engineering team can build',
        subtitle: 'Design systems, flows, and front-end made to ship without friction.',
      },
    },
  },
  seo: {
    es: {
      title: 'Cri Works — Diseño de producto para CTOs',
      description: 'Diseño de producto y design systems que tu equipo puede construir.',
    },
    en: {
      title: 'Cri Works — Product design for CTOs',
      description: 'Product design and design systems your team can build.',
    },
  },
  intro: 'subtle',
} satisfies Profile
