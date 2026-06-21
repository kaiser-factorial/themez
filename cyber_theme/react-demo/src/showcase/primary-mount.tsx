import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { demos } from './primary-registry'
import { sources } from './primary-sources-data'

/**
 * Mounts the Primary React demos into every [data-demo] panel. The Primary
 * components render plain `primary-theme.css` classes, which the showcase page
 * already loads — so, unlike the cyber bundle, no CSS injection is needed.
 * Idempotent: safe to call on each tab switch.
 */
export function mountAll(root: ParentNode = document) {
  const panels = root.querySelectorAll<HTMLElement>('[data-demo]')
  panels.forEach((panel) => {
    if (panel.dataset.mounted === '1') return
    const key = panel.dataset.demo
    const Demo = key ? demos[key] : undefined
    if (!Demo) {
      if (key) console.warn(`[primary-demo] no React demo registered for "${key}"`)
      return
    }
    panel.dataset.mounted = '1'
    const host = document.createElement('div')
    host.className = 'primary-react-root'
    panel.appendChild(host)
    createRoot(host).render(
      <StrictMode>
        <Demo />
      </StrictMode>
    )
  })
}

export { sources }
export const availableDemos = Object.keys(demos)
