import { beforeEach, describe, expect, it } from 'vitest'
import { bindToolbarToggles } from '@/components/home/toolbar'

// Two toggles over one ActionsContainer: a default panel and one per toggle.
function render(): void {
  document.body.innerHTML = `
    <button data-toolbar-toggle aria-controls="a" aria-expanded="false">A</button>
    <button data-toolbar-toggle aria-controls="b" aria-expanded="false">B</button>
    <div id="container">
      <div data-actions-panel="default"><span>default</span></div>
      <div id="a" data-actions-panel="" hidden><span id="a-item">a</span></div>
      <div id="b" data-actions-panel="" hidden><span>b</span></div>
    </div>
    <p id="outside">outside</p>`
  bindToolbarToggles()
}

const el = (id: string) => document.getElementById(id) as HTMLElement
const toggle = (id: string) => document.querySelector<HTMLElement>(`[aria-controls="${id}"]`) as HTMLElement
const visible = () => [...document.querySelectorAll<HTMLElement>('[data-actions-panel]')].filter(p => !p.hidden).map(p => p.id || 'default')

describe('bindToolbarToggles', () => {
  beforeEach(render)

  it('opens its panel in place of the default one', () => {
    toggle('a').click()
    expect(toggle('a').getAttribute('aria-expanded')).toBe('true')
    expect(visible()).toEqual(['a'])
  })

  it('closes on a second click and brings back the default panel', () => {
    toggle('a').click()
    toggle('a').click()
    expect(toggle('a').getAttribute('aria-expanded')).toBe('false')
    expect(visible()).toEqual(['default'])
  })

  it('keeps one toggle open at a time', () => {
    toggle('a').click()
    toggle('b').click()
    expect(toggle('a').getAttribute('aria-expanded')).toBe('false')
    expect(toggle('b').getAttribute('aria-expanded')).toBe('true')
    expect(visible()).toEqual(['b'])
  })

  it('closes on a click outside, but not on its panel items', () => {
    toggle('a').click()
    el('a-item').click()
    expect(visible()).toEqual(['a'])
    el('outside').click()
    expect(visible()).toEqual(['default'])
  })

  it('treats the space around the items as outside', () => {
    toggle('a').click()
    el('a').click()
    expect(visible()).toEqual(['default'])
  })

  it('closes on Escape', () => {
    toggle('a').click()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(toggle('a').getAttribute('aria-expanded')).toBe('false')
    expect(visible()).toEqual(['default'])
  })
})
