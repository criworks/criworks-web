/** Shows `panel` and hides its sibling panels; with null, shows the default one. */
function showPanel(container: Element, panel: HTMLElement | null): void {
  container.querySelectorAll<HTMLElement>(':scope > [data-actions-panel]').forEach(p => {
    p.hidden = panel ? p !== panel : p.dataset.actionsPanel !== 'default'
  })
}

/**
 * Wires every ToolbarSelect: toggling it swaps its ActionsPanel in and out of
 * the ActionsContainer. Escape closes it. Safe to call more than once.
 */
export function bindToolbarSelects(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-toolbar-select]:not([data-bound])').forEach(btn => {
    btn.dataset.bound = ''
    const panel = document.getElementById(btn.getAttribute('aria-controls') ?? '')
    const container = panel?.parentElement
    if (!panel || !container) return

    const set = (open: boolean) => {
      btn.setAttribute('aria-expanded', String(open))
      showPanel(container, open ? panel : null)
    }

    btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'))
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') set(false)
    })
  })
}
