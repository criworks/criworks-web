import type { ImageMetadata } from 'astro'
import type { locales } from '@/config/i18n'
import type { SectionName } from '@/config/sections'

export type Locale = (typeof locales)[number]
export type Localized<T> = { readonly [L in Locale]: T }

// Recursive optional for content overrides. Arrays are replaced as a whole.
export type DeepPartial<T> = T extends readonly unknown[]
  ? T
  : T extends object
    ? { readonly [K in keyof T]?: DeepPartial<T[K]> }
    : T

export interface NavItem { readonly label: string; readonly href: string }
export type SocialIcon = 'github' | 'linkedin' | 'instagram' | 'dribbble'
export interface SocialLink {
  readonly label: string
  readonly href: string
  /** Icon for icon-only buttons (the home). */
  readonly icon: SocialIcon
}

export interface SeoContent { readonly title: string; readonly description: string }
export interface HeroContent {
  readonly tagline: string
  readonly title: string
  readonly subtitle: string
  readonly cta: string
  /** Where the CTA goes: an anchor ('#work') or a URL ('/cv.pdf'). */
  readonly ctaHref: string
}
export interface StatementContent {
  /** First line, in the foreground color. */
  readonly lead: string
  /** Following lines, in the accent color. */
  readonly lines: readonly string[]
}
export interface SectionContent { readonly title: string; readonly subtitle?: string }
export interface AboutContent extends SectionContent {
  /** Paragraphs. */
  readonly bio: readonly string[]
  readonly skills: readonly string[]
  readonly portraitAlt: string
}
export interface ProofContent {
  readonly title: string
  readonly role: string
  readonly years: number
  readonly specialties: readonly string[]
  readonly availability: string
  readonly timezone: string
  readonly languages: readonly string[]
  readonly cvUrl?: string
  readonly labels: {
    readonly role: string
    readonly experience: string
    /** Unit after the number of years, e.g. 'años'. */
    readonly years: string
    readonly specialties: string
    readonly availability: string
    readonly timezone: string
    readonly languages: string
  }
}
export interface ServiceItem { readonly title: string; readonly description: string }
export interface ServicesContent extends SectionContent {
  readonly items: readonly ServiceItem[]
  readonly processTitle: string
  /** Steps of the process, in order. */
  readonly steps: readonly ServiceItem[]
}
/** The home: one screen over the back portrait. */
export interface HomeContent {
  readonly role: string
  /** Two lines, shown one under the other. */
  readonly tagline: readonly string[]
  readonly presentation: {
    readonly label: string
    /** Cards the presentation select shows when open. */
    readonly options: readonly { readonly title: string; readonly subtitle: string; readonly badge: string }[]
  }
  /** Accessible name of the availability dot; also its tooltip. */
  readonly availability: string
  readonly cta: {
    readonly title: string
    readonly subtitle: string
    /** Small label at the corner, notification style. */
    readonly badge: string
  }
  readonly footer: string
  readonly socialLabel: string
}
export interface ContactContent { readonly title: string; readonly tagline: string; readonly cta: string }
export interface UIStrings {
  readonly emailCopied: string
  readonly openMenu: string
  readonly closeMenu: string
  readonly viewProject: string
  readonly viewWork: string
  readonly backToHome: string
  readonly downloadCv: string
  /** This language's own name, shown in language switches (e.g. 'Español'). */
  readonly languageName: string
  readonly mainNavigation: string
  /** Label of the header email button before JS shows the address. */
  readonly email: string
  readonly copyEmail: string
  readonly visitProject: string
  readonly allWork: string
  readonly year: string
  readonly tags: string
  /** Splash loader label, followed by the percentage. */
  readonly loading: string
}

export interface Content {
  readonly seo: SeoContent
  readonly nav: readonly NavItem[]
  readonly hero: HeroContent
  readonly statement: StatementContent
  readonly proof: ProofContent
  readonly services: ServicesContent
  readonly work: SectionContent
  readonly about: AboutContent
  readonly contact: ContactContent
  readonly home: HomeContent
  readonly ui: UIStrings
}

export interface ProjectItem {
  readonly slug: string
  readonly title: Localized<string>
  readonly description: Localized<string>
  /** Optional longer text for the project page, as paragraphs. */
  readonly body?: Localized<readonly string[]>
  /** Imported image (src/assets/...), optimized at build time. 4:3 works best. */
  readonly thumbnail: ImageMetadata
  readonly tags: readonly string[]
  /** Live site or case study, shown on the project page. */
  readonly url?: string
  readonly year: number
}

export interface Palette {
  readonly bg: string
  readonly fg: string
  readonly accent: string
  readonly accentDark: string
  readonly muted: string
  readonly border: string
}

export interface Typography {
  readonly sans: string
  readonly display: string
}

export type IntroMode = 'none' | 'subtle' | 'full'

export interface SiteConfig {
  readonly name: string
  readonly email: string
  readonly url: string
  readonly ogImage: string
  readonly social: readonly SocialLink[]
  readonly defaultIntro: IntroMode
  /**
   * Horizontal point of the hero image (0 = left edge, 1 = right edge) kept
   * centered on phones, where only a slice of the wide image fits.
   * Desktop always shows it from the left. Default 0.5.
   */
  readonly heroFocusX?: number
}

export interface Profile {
  /** URL path without slashes at the ends, e.g. 'contractor/cto'. */
  readonly slug: string
  /** Internal note about who this landing is for. Not rendered. */
  readonly audience: string
  /** Sections on the page, in order. */
  readonly sections: readonly SectionName[]
  /** Only the copy that differs from config/content.ts, per locale. */
  readonly content?: { readonly [L in Locale]?: DeepPartial<Content> }
  /** Slugs from data/projects.ts to feature, in order. All projects when omitted. */
  readonly projects?: readonly string[]
  /** Every landing needs its own title and description. */
  readonly seo: Localized<SeoContent>
  readonly intro: IntroMode
}
