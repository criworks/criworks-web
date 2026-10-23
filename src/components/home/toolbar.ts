/** Shows `panel` and hides its sibling panels; with null, shows the default one. */
function showPanel(container: Element, panel: HTMLElement | null): void {
  container.querySelectorAll<HTMLElement>(':scope > [data-actions-panel]').forEach(p => {
    p.hidden = panel ? p !== panel : p.dataset.actionsPanel !== 'default'
  })
}

/** The ActionsPanel a toggle opens, and the ActionsContainer it lives in. */
function target(btn: HTMLElement): { panel: HTMLElement; container: HTMLElement } | null {
  const panel = document.getElementById(btn.getAttribute('aria-controls') ?? '')
  const container = panel?.parentElement
  return panel && container ? { panel, container } : null
}

/**
 * Wires every toolbar toggle (ToolbarSelect, ToolbarIconButton with
 * `controls`): opening one swaps its ActionsPanel into the ActionsContainer
 * and closes the other toggles of that container; closing it brings back the
 * default panel. Escape closes it. Safe to call more than once.
 */
export function bindToolbarToggles(): void {
  const toggles = [...document.querySelectorAll<HTMLElement>('[data-toolbar-toggle]')]

  toggles
    .filter(btn => btn.dataset.bound === undefined)
    .forEach(btn => {
      btn.dataset.bound = ''
      const own = target(btn)
      if (!own) return

      const set = (open: boolean) => {
        toggles.forEach(other => {
          if (target(other)?.container === own.container) other.setAttribute('aria-expanded', String(open && other === btn))
        })
        showPanel(own.container, open ? own.panel : null)
      }

      btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'))
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') set(false)
      })
    })
}
