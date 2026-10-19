import type { Profile } from '@/data'

// Freelance: agencies looking for a design partner per project.
export default {
  slug: 'freelance/agency',
  audience: 'Agencies that need senior design capacity per project.',
  sections: ['hero', 'statement', 'services', 'work', 'contact'],
  content: {
    es: {
      hero: {
        title: 'Capacidad de diseño senior para los proyectos de tu agencia',
        subtitle: 'Me integro a tu equipo por proyecto, con tus procesos y tus herramientas.',
      },
      contact: { cta: 'Agenda una llamada' },
    },
    en: {
      hero: {
        title: "Senior design capacity for your agency's projects",
        subtitle: 'I join your team per project, with your processes and tools.',
      },
      contact: { cta: 'Book a call' },
    },
  },
  seo: {
    es: {
      title: 'Cri Works — Diseño para agencias',
      description: 'Diseño de producto y marca para agencias, por proyecto.',
    },
    en: {
      title: 'Cri Works — Design for agencies',
      description: 'Product and brand design for agencies, per project.',
    },
  },
  intro: 'full',
} satisfies Profile
