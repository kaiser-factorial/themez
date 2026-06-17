import { useState, type ReactNode, type CSSProperties } from 'react'

/**
 * React counterparts for the Primary (Bauhaus) theme components.
 * These render the same markup/classes as the hand-written HTML in
 * SHOWCASE.html, driven by `primary-theme.css` (loaded by the page), so the
 * HTML | React tabs are visually identical builds of the same component.
 */

const P = {
  red: 'var(--p-red)',
  blue: 'var(--p-blue)',
  yellow: 'var(--p-yellow)',
  yellowText: '#b89600',
  green: 'var(--p-green)',
  black: 'var(--p-black)',
} as const

/* ============================ Button ============================ */
export type ButtonVariant =
  | 'default' | 'red' | 'blue' | 'yellow' | 'green' | 'black'
  | 'outline' | 'outline-red' | 'outline-green'

export function Button({
  children, variant = 'default', disabled, onClick,
}: { children: ReactNode; variant?: ButtonVariant; disabled?: boolean; onClick?: () => void }) {
  const cls = ['btn', variant !== 'default' && `btn-${variant}`].filter(Boolean).join(' ')
  return (
    <button className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

/* ============================ Badge ============================ */
export type BadgeColor = 'default' | 'red' | 'blue' | 'yellow' | 'green'

export function Badge({
  children, color = 'default', solid = false,
}: { children: ReactNode; color?: BadgeColor | 'black'; solid?: boolean }) {
  const cls = ['badge']
  if (solid) cls.push(`badge-solid-${color === 'default' ? 'black' : color}`)
  else if (color !== 'default') cls.push(`badge-${color}`)
  return <span className={cls.join(' ')}>{children}</span>
}

/* ============================ Alert ============================ */
export type Severity = 'info' | 'success' | 'warning' | 'error' | 'system'
const ALERT_ICON: Record<Severity, string> = {
  info: 'ℹ', success: '✓', warning: '⚠', error: '✕', system: '◆',
}

export function Alert({
  severity = 'info', title, message, actionLabel, actionHref = '#',
  dismissible = true, variant = 'default',
}: {
  severity?: Severity; title?: ReactNode; message?: ReactNode
  actionLabel?: string; actionHref?: string; dismissible?: boolean
  variant?: 'default' | 'compact' | 'inline'
}) {
  const [open, setOpen] = useState(true)
  if (!open) return null
  const sevColor = { info: P.blue, success: P.green, warning: P.yellowText, error: P.red, system: P.black }[severity]

  if (variant === 'compact') {
    return (
      <div className={`alert alert-compact alert-${severity}`} style={{ borderColor: sevColor }}>
        <span className="alert-icon">{ALERT_ICON[severity]}</span>
        <span style={{ flex: 1 }}>
          <strong style={{ color: sevColor }}>{title}:</strong> {message}
        </span>
        {actionLabel && <a href={actionHref} style={{ color: sevColor, fontSize: '0.7rem', textTransform: 'uppercase' }}>{actionLabel}</a>}
        {dismissible && <button className="alert-dismiss" aria-label="Dismiss" onClick={() => setOpen(false)}>✕</button>}
      </div>
    )
  }
  if (variant === 'inline') {
    return (
      <div className={`alert alert-inline alert-${severity}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>{ALERT_ICON[severity]}</span>
          <span className="alert-title" style={{ fontSize: '0.75rem' }}>{title}</span>
        </div>
        <div className="alert-message" style={{ paddingLeft: '1.25rem', fontSize: '0.75rem' }}>{message}</div>
      </div>
    )
  }
  return (
    <div className={`alert alert-${severity}`}>
      <div className="alert-header">
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <span className="alert-icon">{ALERT_ICON[severity]}</span>
          <div>
            <div className="alert-title">{title}</div>
            <div className="alert-message">{message}</div>
          </div>
        </div>
        {dismissible && <button className="alert-dismiss" aria-label="Dismiss" onClick={() => setOpen(false)}>✕</button>}
      </div>
      {actionLabel && <div className="alert-action"><a href={actionHref}>{actionLabel}</a></div>}
    </div>
  )
}

/* ============================ Spinner ============================ */
export function Spinner({
  variant = 'ring', size = 'md', label, labelColor,
}: { variant?: 'ring' | 'dots'; size?: 'sm' | 'md' | 'lg'; label?: string; labelColor?: string }) {
  return (
    <div className={`spinner spinner-${size}`}>
      {variant === 'ring'
        ? <div className="spinner-ring" />
        : <div className="spinner-dots"><div className="dot" /><div className="dot" /><div className="dot" /></div>}
      {label && <span className="spinner-label" style={labelColor ? { color: labelColor } : undefined}>{label}</span>}
    </div>
  )
}

/* ============================ Progress ============================ */
export function Progress({
  value, label, color = P.blue, size = 'md', striped = false, showValue = true,
}: { value: number; label?: string; color?: string; size?: 'sm' | 'md' | 'lg'; striped?: boolean; showValue?: boolean }) {
  const cls = ['progress', `progress-${size}`, striped && 'progress-striped'].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      {label && (
        <div className="progress-label-row">
          <span className="progress-label" style={{ color }}>{label}</span>
          {showValue && <span className="progress-value">{value}%</span>}
        </div>
      )}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  )
}

/* ============================ Stats ============================ */
export interface Stat {
  icon?: string; label: string; value: ReactNode; valueColor?: string
  change?: string; changeType?: 'positive' | 'neutral' | 'negative'
}
export function StatsDisplay({ stats, columns = 4 }: { stats: Stat[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={`grid-${columns}`}>
      {stats.map((s, i) => (
        <div className="stat-card" key={i}>
          <div className="stat-header">
            {s.icon && <span className="stat-icon">{s.icon}</span>}
            <span className="stat-label">{s.label}</span>
          </div>
          <div className="stat-value" style={s.valueColor ? { color: s.valueColor } : undefined}>{s.value}</div>
          {s.change && <div className={`stat-change ${s.changeType ?? 'neutral'}`}>{s.change}</div>}
        </div>
      ))}
    </div>
  )
}

/* ============================ Breadcrumb ============================ */
export interface Crumb { label: string; href?: string }
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => (
          <li key={i}>
            {i === items.length - 1 || !it.href
              ? <span aria-current="page">{it.label}</span>
              : <a href={it.href}>{it.label}</a>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ============================ Timeline ============================ */
export interface TimelineEvent { dot?: ReactNode; color?: string; title: string; text?: string; time?: string }
export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="timeline" style={{ maxWidth: 600 }}>
      <div className="timeline-line" />
      {events.map((e, i) => (
        <div className="timeline-event" key={i}>
          <div className="timeline-dot" style={{ borderColor: e.color }}>{e.dot ?? i + 1}</div>
          <div className="timeline-content">
            <div className="timeline-title" style={{ color: e.color }}>{e.title}</div>
            {e.text && <div className="timeline-text">{e.text}</div>}
            {e.time && <div className="timeline-time">{e.time}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ============================ Dialogue ============================ */
export interface Message { speaker: string; color?: string; content: ReactNode; time?: string; align?: 'left' | 'right'; italic?: boolean }
export function DialogueMessage({ speaker, color, content, time, align = 'left', italic }: Message) {
  return (
    <div className={`dialogue-message${align === 'right' ? ' dialogue-message-right' : ''}`}>
      <div className="dialogue-speaker" style={{ color }}>{speaker}</div>
      <div className="dialogue-bubble" style={italic ? { fontStyle: 'italic' } : undefined}>
        {content}
        {time && <div className="dialogue-time">{time}</div>}
      </div>
    </div>
  )
}
export function ConversationThread({ messages }: { messages: Message[] }) {
  return <div style={{ maxWidth: 700 }}>{messages.map((m, i) => <DialogueMessage key={i} {...m} />)}</div>
}

/* ============================ Mission ============================ */
export function MissionStatement({
  title, color = P.red, paragraphs, version, actionLabel, actionColor = P.blue,
}: { title: string; color?: string; paragraphs: ReactNode[]; version?: string; actionLabel?: string; actionColor?: string }) {
  return (
    <div className="mission" style={{ maxWidth: 600 }}>
      <div className="mission-title" style={{ color }}>{title}</div>
      <div className="mission-content">
        {paragraphs.map((p, i) => <p key={i} style={i > 0 ? { marginTop: '0.75rem' } : undefined}>{p}</p>)}
      </div>
      {(version || actionLabel) && (
        <div className="mission-footer">
          {version && <span className="mission-version">{version}</span>}
          {actionLabel && <button className="mission-action" style={{ color: actionColor }}>{actionLabel}</button>}
        </div>
      )}
    </div>
  )
}

/* ============================ Schematic ============================ */
export interface SchematicItem { component: string; location: string; locationColor?: string; role: string }
export function TechnicalSchematic({
  title, color = P.black, items, columns = 4,
}: { title: string; color?: string; items: SchematicItem[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className="schematic">
      <div className="schematic-title" style={{ color }}>{title}</div>
      <div className={`schematic-grid schematic-grid-${columns}`}>
        {items.map((it, i) => (
          <div className="schematic-item" key={i}>
            <div className="schematic-component">{it.component}</div>
            <div className="schematic-location" style={{ color: it.locationColor }}>{it.location}</div>
            <div className="schematic-role">{it.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ============================ Memory ============================ */
export interface MemoryColumnData { title: string; color: string; dotColor?: string; items: string[] }
export function MemoryColumn({ title, color, dotColor, items }: MemoryColumnData) {
  const dc = dotColor ?? color
  return (
    <div className="memory-column">
      <div className="memory-column-header" style={{ color }}>
        <span className="memory-dot" style={{ background: dc }} />
        {title}
      </div>
      <div className="memory-column-items">
        {items.map((it, i) => (
          <div className="memory-card" key={i}>
            <span className="memory-dot" style={{ background: dc }} />
            <span className="memory-concept">{it}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
export function MemoryGrid({ columns }: { columns: MemoryColumnData[] }) {
  return <div className="grid-3">{columns.map((c, i) => <MemoryColumn key={i} {...c} />)}</div>
}

/* ============================ Bot Card ============================ */
export interface Bot { name: string; description: string; color: string }
export function BotNameCard({ name, description, color }: Bot) {
  return (
    <div className="bot-card">
      <div className="bot-card-glow" style={{ background: color }} />
      <div className="bot-name" style={{ color }}>{name}</div>
      <div className="bot-desc">{description}</div>
    </div>
  )
}
export function BotNameCardGrid({ bots, columns = 2 }: { bots: Bot[]; columns?: 2 | 3 }) {
  return <div className={`grid-${columns}`}>{bots.map((b, i) => <BotNameCard key={i} {...b} />)}</div>
}

/* ============================ Parameter Panel ============================ */
export interface Param {
  key: string; label: string; type: 'range' | 'number' | 'textarea'
  min?: number; max?: number; step?: number; rows?: number; group?: string
}
export function ParameterPanel({
  name, color = P.blue, status = 'ACTIVE', parameters, values: initial,
}: { name: string; color?: string; status?: string; parameters: Param[]; values: Record<string, string | number> }) {
  const [open, setOpen] = useState(true)
  const [values, setValues] = useState(initial)
  const groups: string[] = []
  parameters.forEach(p => { const g = p.group ?? 'Settings'; if (!groups.includes(g)) groups.push(g) })
  const set = (k: string, v: string | number) => setValues(prev => ({ ...prev, [k]: v }))

  return (
    <div className="param-panel" style={{ maxWidth: 500 }}>
      <div className="param-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="param-dot" style={{ background: color }} />
          <span className="param-name" style={{ color }}>{name}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="param-status param-status-active">{status}</span>
          <span style={{ fontSize: '0.7rem', cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>{open ? '▼' : '▶'}</span>
        </div>
      </div>
      {open && (
        <div className="param-sections">
          {groups.map(group => (
            <div key={group}>
              <div className="param-group-title">{group}</div>
              {parameters.filter(p => (p.group ?? 'Settings') === group).map(p => (
                <div className="param-field" key={p.key}>
                  {p.type === 'textarea' ? (
                    <>
                      <span className="param-label">{p.label}</span>
                      <textarea className="param-textarea" rows={p.rows ?? 3}
                        value={String(values[p.key] ?? '')}
                        onChange={e => set(p.key, e.target.value)} />
                    </>
                  ) : (
                    <>
                      <div className="param-label-row">
                        <span className="param-label">{p.label}</span>
                        <span className="param-value" style={{ color }}>{String(values[p.key])}</span>
                      </div>
                      {p.type === 'range' ? (
                        <>
                          <input type="range" className="param-range" min={p.min} max={p.max} step={p.step}
                            value={Number(values[p.key])} onChange={e => set(p.key, Number(e.target.value))} />
                          <div className="param-range-labels"><span>{p.min}</span><span>{p.max}</span></div>
                        </>
                      ) : (
                        <input type="number" className="param-input-number" min={p.min} max={p.max}
                          value={Number(values[p.key])} onChange={e => set(p.key, Number(e.target.value))} />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
          <button className="param-save-btn mt-2">APPLY_CHANGES</button>
        </div>
      )}
    </div>
  )
}

/* ============================ Audit Log Card ============================ */
export type AuditSection =
  | { title: string; type: 'text'; color?: string; content: string }
  | { title: string; type: 'grid'; content: { key: string; value: string; color?: string }[] }
  | { title: string; type: 'tags'; content: { label: string; color?: string }[] }
  | { title: string; type: 'stats'; content: { label: string; value: string; color?: string }[] }

export function AuditLogCard({
  title, color = P.blue, badge, time, sections,
}: { title: string; color?: string; badge?: string; time?: string; sections: AuditSection[] }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="audit-card" style={{ maxWidth: 600 }}>
      <div className="audit-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="audit-dot" style={{ background: color }} />
          <span className="audit-title" style={{ color }}>{title}</span>
          {badge && <span className="audit-badge" style={{ borderColor: color, color }}>{badge}</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {time && <span className="audit-time">{time}</span>}
          <span style={{ fontSize: '0.7rem', cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>{open ? '▼' : '▶'}</span>
        </div>
      </div>
      {open && (
        <div className="audit-sections">
          {sections.map((s, i) => (
            <div className="audit-section" key={i}>
              <div className="audit-section-title">{s.title}</div>
              <div className={`audit-section-content${s.type === 'text' ? ' text-block' : ''}`}
                style={s.type === 'text' ? { borderColor: s.color, color: s.color } as CSSProperties : undefined}>
                {s.type === 'text' && s.content}
                {s.type === 'grid' && (
                  <div className="audit-grid">
                    {s.content.map((g, j) => (
                      <div className="audit-grid-item" key={j}>
                        <div className="audit-grid-key">{g.key}</div>
                        <div className="audit-grid-value" style={{ color: g.color }}>{g.value}</div>
                      </div>
                    ))}
                  </div>
                )}
                {s.type === 'tags' && (
                  <div className="audit-tags">
                    {s.content.map((t, j) => <span className="audit-tag" key={j} style={{ borderColor: t.color, color: t.color }}>{t.label}</span>)}
                  </div>
                )}
                {s.type === 'stats' && (
                  <div className="audit-stats">
                    {s.content.map((st, j) => (
                      <span key={j}><span className="audit-stat-label">{st.label}:</span> <span style={{ color: st.color }}>{st.value}</span></span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ============================ Loading Bar ============================ */
export function LoadingBar({ color = P.blue }: { color?: string }) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(false)
  const run = () => {
    if (active) return
    setActive(true); setProgress(0)
    let p = 0
    const id = setInterval(() => {
      p = Math.min(100, p + 8 + Math.random() * 12)
      setProgress(p)
      if (p >= 100) { clearInterval(id); setTimeout(() => { setActive(false); setProgress(0) }, 400) }
    }, 150)
  }
  return (
    <div>
      <button className="btn" style={{ marginTop: '0.5rem' }} onClick={run}>Simulate Page Load</button>
      <div className="loading-bar loading-bar-top" style={{ opacity: active ? 1 : 0 }}>
        <div className="loading-bar-fill" style={{ width: `${progress}%`, background: color }} />
      </div>
    </div>
  )
}
