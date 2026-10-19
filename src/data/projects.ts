import type { ProjectItem } from './types'

// No projects yet, so the Work section and the "View work" button stay hidden.
// To add one: put its thumbnail in src/assets/images/work/, import it above, and
// add an entry here. Each project gets a page at /work/{slug} (and /en/work/{slug}).
export const projects: readonly ProjectItem[] = []
