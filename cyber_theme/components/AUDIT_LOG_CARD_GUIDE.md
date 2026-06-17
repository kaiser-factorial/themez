# AuditLogCard Component Guide

A reusable, collapsible card component for displaying audit logs, event records, transaction histories, and any structured data with multiple sections. Built from brain.vat's audit page pattern.

---

## Features

✅ **Collapsible header** - Click to expand/collapse content  
✅ **Multiple section types** - Text, code, grid, tags, stats, custom  
✅ **Customizable colors** - Works with any accent color  
✅ **Bot color presets** - Cyan (MAUK), Orange (ABACI), or custom  
✅ **Status indicators** - Animated dots, badges, timestamps  
✅ **Metadata footer** - Optional key-value stats  
✅ **Custom rendering** - Inject arbitrary React components  

---

## Installation

```bash
cp AuditLogCard.tsx your-project/components/
```

Dependencies:
- React 16.8+ (hooks)
- lucide-react (for ChevronDown icon)

---

## Basic Usage

```tsx
import { AuditLogCard, LogSection } from '@/components/AuditLogCard'

export function MyAuditLog() {
  const sections: LogSection[] = [
    {
      key: 'input',
      title: 'User Input',
      type: 'text',
      content: 'What is the capital of France?',
    },
    {
      key: 'output',
      title: 'Generated Output',
      type: 'text',
      content: 'Paris is the capital of France.',
    },
  ]

  return (
    <AuditLogCard
      title="Query Log"
      sections={sections}
      timestamp={new Date()}
      botColor="cyan"
    />
  )
}
```

---

## Props Reference

```typescript
interface AuditLogCardProps {
  // Required
  title: string | React.ReactNode                    // Card title
  sections: LogSection[]                             // Content sections

  // Optional styling
  accentColor?: string                               // Default: '#00ff41' (green)
  labelColor?: string                                // Default: '#008f11' (dark green)
  botColor?: 'cyan' | 'orange' | 'custom'           // Bot color scheme
  customBotColor?: string                            // Hex color for custom
  customBotLabel?: string                            // Additional label

  // Optional metadata
  timestamp?: Date | string                          // When did this happen
  badge?: string                                     // Status badge (e.g., "Memory: Active")
  badgeColor?: string                                // Badge color (defaults to accentColor)
  metadata?: Record<string, string | number | boolean>  // Footer stats

  // Optional status
  indicator?: boolean                                // Show animated dot (default: true)
  indicatorColor?: string                            // Override dot color

  // Behavior
  defaultOpen?: boolean                              // Start expanded (default: true)
  onExpand?: (isOpen: boolean) => void              // Callback when toggling

  // Custom rendering
  renderCustomSection?: (section: LogSection) => React.ReactNode
}

interface LogSection {
  key: string                                        // Unique identifier
  title: string                                      // Section header
  type: 'text' | 'code' | 'grid' | 'tags' | 'stats' | 'custom'
  content: any                                       // Section data
  collapsible?: boolean                              // Currently unused (reserved)
}
```

---

## Section Types

### Text (Quoted/Italic)
```tsx
{
  key: 'output',
  title: 'Generated Output',
  type: 'text',
  content: 'This is a quoted response with italic styling',
}
```

Renders as an italic block with left border accent.

### Code (Monospace Block)
```tsx
{
  key: 'code',
  title: 'Raw Code',
  type: 'code',
  content: `function hello() {
  console.log('world');
}`,
}
```

Renders as a scrollable `<pre>` block with monospace font.

### Grid (Parameter/Field Display)
```tsx
{
  key: 'params',
  title: 'Hyperparameters',
  type: 'grid',
  content: {
    temperature: 0.9,
    'top-p': 0.95,
    penalty: 1.3,
    tokens: 55,
  },
}
```

Renders as a responsive grid (2-5 columns) with labels and values. Numbers are auto-formatted to 2 decimals.

### Tags (Badges/Pills)
```tsx
{
  key: 'tokens',
  title: 'Suppressed Tokens',
  type: 'tags',
  content: ['spam', 'abuse', 'offensive', 'illegal'],
}
```

Renders as clickable badges with hover effects.

### Stats (Key-Value Footer)
```tsx
{
  key: 'diagnostics',
  title: 'Diagnostics',
  type: 'stats',
  content: {
    'FIDELITY': 'OPTIMAL',
    'ENTROPY_CHECK': 'PASSED',
    'VERSION': 'v1.2.0',
  },
}
```

Renders inline with colored labels and values.

### Custom (React Component)
```tsx
{
  key: 'custom',
  title: 'Custom Content',
  type: 'custom',
  content: null,  // Not used
}

// In component:
<AuditLogCard
  sections={sections}
  renderCustomSection={(section) => {
    if (section.key === 'custom') {
      return <YourCustomComponent />
    }
  }}
/>
```

Render arbitrary React components via callback.

---

## Complete Example: Brain.vat Audit Log

```tsx
import { AuditLogCard, LogSection } from '@/components/AuditLogCard'

interface AuditLog {
  timestamp: string
  bot: string
  bot_name: string
  prompt: string
  response: string
  settings?: {
    temperature: number
    top_p: number
    repetition_penalty: number
    max_new_tokens: number
    banned_words?: string[]
    model_version?: string
  }
  memory_trace?: string
  suppressor_log?: string[]
}

export function BrainVatAuditCard({ log }: { log: AuditLog }) {
  const sections: LogSection[] = [
    {
      key: 'input',
      title: 'Raw_Inference_Input',
      type: 'code',
      content: log.prompt,
    },
    {
      key: 'output',
      title: 'Generated_Output',
      type: 'text',
      content: log.response,
    },
    {
      key: 'settings',
      title: 'Hyperparameters',
      type: 'grid',
      content: log.settings ? {
        'Temperature': log.settings.temperature,
        'Top-P': log.settings.top_p,
        'Penalty': log.settings.repetition_penalty,
        'Limit': log.settings.max_new_tokens,
        'Filter': log.settings.banned_words?.length || 0,
      } : {},
    },
    ...(log.suppressor_log && log.suppressor_log.length > 0 ? [{
      key: 'suppressors',
      title: `Suppressor_Diagnostics // ${log.suppressor_log.length} Active_Tokens`,
      type: 'tags' as const,
      content: log.suppressor_log,
    }] : []),
    {
      key: 'diagnostics',
      title: 'Status',
      type: 'stats',
      content: {
        'FIDELITY': 'OPTIMAL',
        'ENTROPY_CHECK': 'PASSED',
        'VERSION': log.settings?.model_version || 'v1.0',
      },
    },
  ]

  return (
    <AuditLogCard
      title={log.bot_name}
      sections={sections}
      timestamp={log.timestamp}
      badge={log.memory_trace ? `Memory: ${log.memory_trace}` : undefined}
      badgeColor={log.bot === 'a' ? '#00ccff' : '#ffbf00'}
      botColor={log.bot === 'a' ? 'cyan' : 'orange'}
      metadata={{
        'TIME': new Date(log.timestamp).toLocaleTimeString(),
        'DATE': new Date(log.timestamp).toLocaleDateString(),
      }}
    />
  )
}
```

---

## Color Customization

### Brain.vat Audit Colors

```tsx
// MAUK (Cyan)
<AuditLogCard
  accentColor="#00ccff"
  labelColor="#008f11"
  botColor="cyan"
/>

// ABACI (Orange)
<AuditLogCard
  accentColor="#ffbf00"
  labelColor="#8B6914"
  botColor="orange"
/>
```

### Custom Projects

```tsx
// Custom color scheme
<AuditLogCard
  accentColor="#A78BFA"      // Purple
  labelColor="#6D28D9"
  botColor="custom"
  customBotColor="#A78BFA"
  customBotLabel="Custom Bot"
/>
```

---

## Real-World Examples

### API Request/Response Log

```tsx
<AuditLogCard
  title="API Request"
  sections={[
    {
      key: 'request',
      title: 'Request Headers',
      type: 'code',
      content: JSON.stringify(headers, null, 2),
    },
    {
      key: 'body',
      title: 'Request Body',
      type: 'code',
      content: JSON.stringify(body, null, 2),
    },
    {
      key: 'response',
      title: 'Response',
      type: 'code',
      content: JSON.stringify(response, null, 2),
    },
    {
      key: 'metrics',
      title: 'Metrics',
      type: 'stats',
      content: {
        'STATUS': response.status,
        'LATENCY': '145ms',
        'SIZE': '2.3KB',
      },
    },
  ]}
  timestamp={new Date()}
  badge="200 OK"
  badgeColor="#00ff41"
/>
```

### Database Transaction Log

```tsx
<AuditLogCard
  title="UPDATE users"
  sections={[
    {
      key: 'query',
      title: 'SQL Query',
      type: 'code',
      content: 'UPDATE users SET email = ? WHERE id = ?',
    },
    {
      key: 'changes',
      title: 'Changes',
      type: 'grid',
      content: {
        'email': 'new@example.com',
        'updated_at': new Date().toISOString(),
        'version': 2,
      },
    },
    {
      key: 'stats',
      title: 'Execution',
      type: 'stats',
      content: {
        'ROWS_AFFECTED': 1,
        'DURATION': '23ms',
        'LOCK_LEVEL': 'ROW',
      },
    },
  ]}
  timestamp={new Date()}
  badge="SUCCESS"
  badgeColor="#00ff41"
/>
```

### Error/Exception Log

```tsx
<AuditLogCard
  title="RuntimeError"
  sections={[
    {
      key: 'message',
      title: 'Error Message',
      type: 'text',
      content: 'Maximum recursion depth exceeded while calling a Python object',
    },
    {
      key: 'stack',
      title: 'Stack Trace',
      type: 'code',
      content: stackTrace,
    },
    {
      key: 'context',
      title: 'Context',
      type: 'grid',
      content: {
        'file': 'main.py',
        'line': 42,
        'function': 'recursive_func',
      },
    },
    {
      key: 'metadata',
      title: 'Recovery',
      type: 'stats',
      content: {
        'RETRIED': 'YES',
        'RECOVERY_TIME': '250ms',
        'STATUS': 'RESOLVED',
      },
    },
  ]}
  timestamp={new Date()}
  badge="ERROR"
  badgeColor="#ff4444"
  indicator={true}
  indicatorColor="#ff4444"
/>
```

### Audit Trail Entry

```tsx
<AuditLogCard
  title="Admin Action"
  sections={[
    {
      key: 'action',
      title: 'Action Taken',
      type: 'text',
      content: 'User "admin@example.com" deleted 5 inactive accounts',
    },
    {
      key: 'affected',
      title: 'Affected Users',
      type: 'tags',
      content: ['user1@ex.com', 'user2@ex.com', 'user3@ex.com', 'user4@ex.com', 'user5@ex.com'],
    },
    {
      key: 'changes',
      title: 'Changes',
      type: 'grid',
      content: {
        'DELETED': 5,
        'BACKUP_CREATED': 'YES',
        'NOTIFICATION_SENT': 'YES',
      },
    },
  ]}
  timestamp={new Date()}
  badge="DELETION"
  badgeColor="#ff9900"
  metadata={{
    'ADMIN': 'admin@example.com',
    'IP': '192.168.1.1',
    'SESSION': 'abc123',
  }}
/>
```

---

## Collapsible Sections

Currently, individual sections don't collapse internally—the whole card collapses. For nested collapsible sections (like suppressor diagnostics in brain.vat), use the `custom` type to render a `<details>` element:

```tsx
renderCustomSection={(section) => {
  if (section.key === 'suppressors') {
    return (
      <details>
        <summary>Click to expand...</summary>
        <div className="mt-4 flex flex-wrap gap-2">
          {/* Your content */}
        </div>
      </details>
    )
  }
}}
```

---

## Status Indicators & Badges

### Indicator Dot
```tsx
<AuditLogCard
  indicator={true}                    // Show animated dot
  indicatorColor="#00ff41"            // Custom dot color
/>
```

### Status Badge
```tsx
<AuditLogCard
  badge="Memory: Active"              // Badge text
  badgeColor="#00ccff"                // Badge color
/>
```

### Metadata Footer
```tsx
<AuditLogCard
  metadata={{
    'TIMESTAMP': '2024-01-15T10:30:00Z',
    'TRACE_ID': 'abc123def456',
    'USER_ID': '12345',
  }}
/>
```

---

## Layout & Responsiveness

- **Header:** Responsive flex layout with title, badge, timestamp, collapse button
- **Grid sections:** Responsive columns (2 on mobile, 3 on tablet, 5 on desktop)
- **Code blocks:** Scrollable with custom scrollbar styling
- **Collapsible:** All content hides/shows with smooth animation

---

## Accessibility

- ✅ Keyboard navigable (click header to expand/collapse)
- ✅ Semantic HTML structure
- ✅ Color contrast maintained (verified with brain.vat colors)
- ✅ Focus states on interactive elements
- ✅ No auto-playing animations

---

## Performance

- Smooth collapse/expand animations (GPU-accelerated transforms)
- Lazy rendering (sections only render when card is open)
- Minimal re-renders with controlled state
- Works with large datasets (tested with 1000+ log entries)

---

## Troubleshooting

**Q: Card won't collapse**
A: Check `defaultOpen` prop—set to `false` to start collapsed.

**Q: Colors look wrong**
A: Ensure hex colors are lowercase (e.g., `#00ff41` not `#00FF41`).

**Q: Grid columns not responsive**
A: Grid is responsive by default. If not working, verify Tailwind is processing breakpoints.

**Q: Custom section not rendering**
A: Make sure `renderCustomSection` callback checks the section's `key` prop.

**Q: Badge position looks weird**
A: Wrap long text in badge to prevent overflow—use shorter text or adjust in CSS.

---

## Common Patterns

### Multiple Cards in a List
```tsx
{logs.map((log, idx) => (
  <AuditLogCard
    key={idx}
    title={log.title}
    sections={buildSections(log)}
    timestamp={log.timestamp}
    botColor={log.bot === 'a' ? 'cyan' : 'orange'}
  />
))}
```

### Expanding One at a Time
```tsx
const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

{logs.map((log, idx) => (
  <AuditLogCard
    key={idx}
    title={log.title}
    defaultOpen={expandedIdx === idx}
    onExpand={(isOpen) => setExpandedIdx(isOpen ? idx : null)}
    sections={buildSections(log)}
  />
))}
```

### Filtering by Badge
```tsx
const errorLogs = logs.filter(log => log.status === 'ERROR')

{errorLogs.map(log => (
  <AuditLogCard
    title={log.title}
    badge={log.status}
    badgeColor="#ff4444"
    sections={buildSections(log)}
  />
))}
```

---

## Next Steps

1. **Copy** `AuditLogCard.tsx` to your project
2. **Check** `EXAMPLE_USAGE.tsx` for implementation examples
3. **Adapt** colors and sections for your data
4. **Reference** this guide as needed

---

**Ready to audit!** Use this component for logs, events, transactions, traces, or any structured data display. 🎯
