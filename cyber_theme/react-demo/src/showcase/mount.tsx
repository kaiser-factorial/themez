import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// `?inline` gives us the post-Tailwind CSS as a string so the bundle can be a
// single self-contained .js file (no separate stylesheet to link).
import css from '../index.css?inline'
import { demos } from './registry'

const STYLE_ID = 'cyber-demo-styles'

function injectStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = css
  document.head.appendChild(style)
}

/**
 * Find every `[data-demo]` panel in the page and render the matching React
 * component into it. Idempotent — already-mounted panels are skipped, so it's
 * safe to call on each tab switch.
 */
export function mountAll(root: ParentNode = document) {
  injectStyles()
  const panels = root.querySelectorAll<HTMLElement>('[data-demo]')
  panels.forEach((panel) => {
    if (panel.dataset.mounted === '1') return
    const key = panel.dataset.demo
    const Demo = key ? demos[key] : undefined
    if (!Demo) {
      if (key) console.warn(`[cyber-demo] no React demo registered for "${key}"`)
      return
    }
    panel.dataset.mounted = '1'
    const host = document.createElement('div')
    host.className = 'cyber-react-root'
    panel.appendChild(host)
    createRoot(host).render(
      <StrictMode>
        <Demo />
      </StrictMode>
    )
  })
}

export const availableDemos = Object.keys(demos)
