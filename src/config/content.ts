import type { Content, Localized } from '@/data'

// Default copy for every language. The home page uses it as is; each profile
// in src/profiles/ overrides only what it needs.
// About (bio) and Work (projects) stay hidden until there is real copy for them:
// add 'about' back to homeSections, and fill data/projects.ts.
export const content = {
  es: {
    seo: {
      title: 'Cri Works — Diseño de producto',
      description: 'Diseño productos que dan claridad a startups tecnológicas: web, apps, marca e IA.',
    },
    nav: [
      { label: 'Servicios', href: '#services' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: {
      tagline: 'Product Designer en Santiago, Chile.',
      title: 'Cri Works',
      subtitle: 'Diseño productos que dan claridad a startups tecnológicas.',
      cta: 'Cómo te ayudo',
      ctaHref: '#services',
    },
    statement: {
      lead: 'Sientes que todo está difuso.',
      lines: [
        'Estás construyendo rápido, pero no se ve claro.',
        'El producto funciona, pero aún no se siente bien.',
        'La visión está ahí, pero no todos parecen entenderla.',
      ],
    },
    proof: {
      title: 'En 10 segundos',
      role: 'Product Designer',
      years: 12,
      specialties: ['Diseño de producto', 'Design systems', 'Front-end'],
      availability: 'Iniciando el próximo mes',
      timezone: 'Santiago, Chile (UTC−3)',
      languages: ['Español', 'Inglés'],
      labels: {
        role: 'Rol',
        experience: 'Experiencia',
        years: 'años',
        specialties: 'Especialidades',
        availability: 'Disponibilidad',
        timezone: 'Zona horaria',
        languages: 'Idiomas',
      },
    },
    services: {
      title: 'Cómo te ayudo',
      subtitle: 'Del primer boceto al producto en producción.',
      items: [
        { title: 'Diseño de producto', description: 'Investigación, flujos e interfaces que tu equipo puede construir sin adivinar.' },
        { title: 'Design systems', description: 'Componentes y tokens compartidos entre diseño y código.' },
        { title: 'Desarrollo front-end', description: 'Sitios y apps rápidos, accesibles y fáciles de mantener.' },
        { title: 'IA aplicada', description: 'Flujos con IA que resuelven un problema real de tu negocio.' },
      ],
      processTitle: 'Proceso',
      steps: [
        { title: 'Entender', description: 'Una llamada para conocer el problema, el equipo y las restricciones.' },
        { title: 'Proponer', description: 'Alcance, entregables y calendario por escrito.' },
        { title: 'Construir', description: 'Entregas semanales que puedes revisar y usar.' },
        { title: 'Traspasar', description: 'Documentación y acompañamiento para que tu equipo siga solo.' },
      ],
    },
    work: { title: 'Trabajo seleccionado', subtitle: 'Algunos proyectos recientes.' },
    about: {
      title: 'Sobre mí',
      // Hidden for now (not in homeSections); placeholder until the bio is ready.
      bio: [
        'Texto de ejemplo: cuenta en dos o tres frases quién eres y cómo trabajas.',
        'Un segundo párrafo para tu enfoque, tus clientes o lo que te diferencia.',
      ],
      skills: ['Estrategia', 'UX/UI', 'Prototipado', 'Desarrollo web'],
      portraitAlt: 'Retrato de Cri',
    },
    contact: {
      title: 'Hablemos',
      tagline: 'Cuéntame qué estás construyendo.',
      cta: 'Escríbeme',
    },
    ui: {
      emailCopied: 'Email copiado',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      viewProject: 'Ver proyecto',
      viewWork: 'Ver trabajo',
      backToHome: 'Volver al inicio',
      downloadCv: 'Descargar CV',
      languageName: 'Español',
      mainNavigation: 'Navegación principal',
      email: 'Email',
      copyEmail: 'Copiar email',
      visitProject: 'Visitar proyecto',
      allWork: 'Todo el trabajo',
      year: 'Año',
      tags: 'Áreas',
    },
  },
  en: {
    seo: {
      title: 'Cri Works — Product design',
      description: 'I design products that bring clarity to tech startups: web, apps, brand, and AI.',
    },
    nav: [
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      tagline: 'Product Designer in Santiago, Chile.',
      title: 'Cri Works',
      subtitle: 'I design products that bring clarity to tech startups.',
      cta: 'How I help',
      ctaHref: '#services',
    },
    statement: {
      lead: 'Everything feels blurry.',
      lines: [
        "You're building fast, but it doesn't look clear.",
        "The product works, but it doesn't feel right yet.",
        "The vision is there, but not everyone seems to get it.",
      ],
    },
    proof: {
      title: 'In 10 seconds',
      role: 'Product Designer',
      years: 12,
      specialties: ['Product design', 'Design systems', 'Front-end'],
      availability: 'Starting next month',
      timezone: 'Santiago, Chile (UTC−3)',
      languages: ['Spanish', 'English'],
      labels: {
        role: 'Role',
        experience: 'Experience',
        years: 'years',
        specialties: 'Specialties',
        availability: 'Availability',
        timezone: 'Time zone',
        languages: 'Languages',
      },
    },
    services: {
      title: 'How I help',
      subtitle: 'From the first sketch to the product in production.',
      items: [
        { title: 'Product design', description: 'Research, flows, and interfaces your team can build without guessing.' },
        { title: 'Design systems', description: 'Components and tokens shared between design and code.' },
        { title: 'Front-end development', description: 'Fast, accessible sites and apps that are easy to maintain.' },
        { title: 'Applied AI', description: 'AI flows that solve a real problem for your business.' },
      ],
      processTitle: 'Process',
      steps: [
        { title: 'Understand', description: 'A call to learn the problem, the team, and the constraints.' },
        { title: 'Propose', description: 'Scope, deliverables, and timeline in writing.' },
        { title: 'Build', description: 'Weekly deliveries you can review and use.' },
        { title: 'Hand over', description: 'Documentation and support so your team can carry on.' },
      ],
    },
    work: { title: 'Selected work', subtitle: 'A few recent projects.' },
    about: {
      title: 'About me',
      // Hidden for now (not in homeSections); placeholder until the bio is ready.
      bio: [
        'Sample text: say in two or three sentences who you are and how you work.',
        'A second paragraph for your approach, your clients, or what sets you apart.',
      ],
      skills: ['Strategy', 'UX/UI', 'Prototyping', 'Web development'],
      portraitAlt: 'Portrait of Cri',
    },
    contact: {
      title: "Let's talk",
      tagline: 'Tell me what you are building.',
      cta: 'Write to me',
    },
    ui: {
      emailCopied: 'Email copied',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      viewProject: 'View project',
      viewWork: 'See work',
      backToHome: 'Back to home',
      downloadCv: 'Download CV',
      languageName: 'English',
      mainNavigation: 'Main navigation',
      email: 'Email',
      copyEmail: 'Copy email',
      visitProject: 'Visit project',
      allWork: 'All work',
      year: 'Year',
      tags: 'Areas',
    },
  },
} as const satisfies Localized<Content>
