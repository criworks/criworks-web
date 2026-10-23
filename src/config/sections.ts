// Every section the template ships. A profile can list any of them, in any order.
// The Hero (with the Header) always renders first, listed or not.
// To add one: create src/sections/{Name}/, add its copy to config/content.ts,
// then add its key here.
export const sectionNames = ['hero', 'statement', 'proof', 'services', 'work', 'about', 'contact'] as const

export type SectionName = (typeof sectionNames)[number]

// Sections the home counts as having, for links from the landings (the Proof
// button's #work). The home itself renders its own one-screen design
// (sections/Home); the full page it used to be lives on as freelance/founder.
export const homeSections = ['hero'] as const satisfies readonly SectionName[]
