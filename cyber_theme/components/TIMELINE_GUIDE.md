# Timeline Documentation

Chronological event display component for showing sequences, processes, and event histories.

---

## Overview

The `Timeline` component displays events in chronological order with vertical or horizontal layouts. Perfect for process flows, conversation histories, event timelines, or sequential operations.

**Use this component when:**
- Displaying event histories or logs
- Showing process pipelines or workflows
- Creating chronological timelines
- Visualizing conversation flows
- Displaying sequential operations

---

## Timeline Component

Flexible chronological event display with multiple layout options.

### Props

```typescript
interface TimelineEvent {
  id: string;                          // Unique event ID
  title: string;                       // Event title
  content?: string | ReactNode;        // Event details
  timestamp?: Date | string;           // When it happened
  icon?: string;                       // Custom icon/emoji
  color?: string;                      // Event color (overrides accentColor)
  metadata?: Record<string, string>;   // Additional data fields
}

interface TimelineProps {
  events: TimelineEvent[];
  direction?: 'vertical' | 'horizontal';  // Layout (default: 'vertical')
  accentColor?: string;                   // Default color (default: '#00ff41')
  showConnectors?: boolean;               // Show connecting lines (default: true)
  interactive?: boolean;                  // Enable hover effects (default: true)
  className?: string;
}
```

### Examples

#### Vertical Timeline (Default)
```tsx
import { Timeline } from '@/components/Timeline'

export function EventTimeline() {
  return (
    <Timeline
      events={[
        {
          id: '1',
          title: 'Session Started',
          content: 'Initialized autonomous dialogue system',
          timestamp: '09:00:00',
          icon: '▶',
          color: '#03A6A1',
        },
        {
          id: '2',
          title: 'Analysis Complete',
          content: 'Processed 5,000 dialogue exchanges',
          timestamp: '09:30:00',
          icon: '✓',
          color: '#00ff41',
        },
        {
          id: '3',
          title: 'Insights Generated',
          content: 'Identified 12 key patterns',
          timestamp: '09:45:00',
          icon: '💡',
          color: '#FF9D23',
        },
      ]}
    />
  )
}
```

#### Horizontal Timeline
```tsx
<Timeline
  events={[
    { id: '1', title: 'INPUT', icon: '📥', timestamp: '09:00' },
    { id: '2', title: 'PROCESS', icon: '⚙', timestamp: '09:05' },
    { id: '3', title: 'OUTPUT', icon: '📤', timestamp: '09:10' },
  ]}
  direction="horizontal"
  accentColor="#00ccff"
/>
```

#### Timeline with Full Details
```tsx
<Timeline
  events={[
    {
      id: '1',
      title: 'Memory Sync',
      content: 'Synchronized shared memory with both agents',
      timestamp: new Date(),
      icon: '💾',
      color: '#03A6A1',
      metadata: {
        'ITEMS': '1,247',
        'SIZE': '2.3MB',
        'TIME': '1.2s',
      },
    },
  ]}
/>
```

---

## Event Structure

### Required Fields

**id** — Unique identifier
```tsx
{ id: 'event_1', ... }
```

**title** — Event name
```tsx
{ title: 'Process Started', ... }
```

### Optional Fields

**content** — Detailed description
```tsx
{ content: 'Detailed explanation of the event', ... }
{ content: <div>Rich HTML content</div>, ... }
```

**timestamp** — When it happened
```tsx
{ timestamp: '09:00:00', ... }
{ timestamp: new Date(), ... }
```

**icon** — Emoji or symbol
```tsx
{ icon: '✓', ... }
{ icon: '⚙', ... }
{ icon: '💾', ... }
```

**color** — Event-specific color
```tsx
{ color: '#00ff41', ... }
```

**metadata** — Additional info
```tsx
{ metadata: { 'DURATION': '5.2s', 'STATUS': 'OK' }, ... }
```

---

## Layout Options

### Vertical Layout (Default)
```tsx
<Timeline direction="vertical" events={events} />
```
Events flow top-to-bottom with connecting lines and side content.

### Horizontal Layout
```tsx
<Timeline direction="horizontal" events={events} />
```
Events flow left-to-right in a scrollable container.

---

## Real-World Examples

### Conversation Flow
```tsx
import { Timeline } from '@/components/Timeline'

export function ConversationTimeline() {
  return (
    <Timeline
      events={[
        {
          id: '1',
          title: 'MAUK Speaks',
          content: 'Introduces philosophical framework based on surrealist literature',
          icon: '🧠',
          color: '#03A6A1',
          timestamp: '09:00:00',
        },
        {
          id: '2',
          title: 'ABACI Responds',
          content: 'Finds mathematical patterns in the same framework',
          icon: '✨',
          color: '#FF9D23',
          timestamp: '09:05:00',
        },
        {
          id: '3',
          title: 'Memory Update',
          content: 'Both perspectives indexed and cross-referenced',
          icon: '💾',
          color: '#00ff41',
          timestamp: '09:06:00',
          metadata: {
            'PATTERNS': '47',
            'CONFIDENCE': '0.91',
          },
        },
      ]}
      accentColor="#00ff41"
    />
  )
}
```

### Data Pipeline
```tsx
const pipeline = [
  {
    id: 'ingest',
    title: 'Data Ingestion',
    content: 'Raw data collection from sources',
    icon: '📥',
    color: '#00ccff',
    metadata: { 'RECORDS': '1,000,000' },
  },
  {
    id: 'transform',
    title: 'Transformation',
    content: 'Clean and normalize data',
    icon: '⚙',
    color: '#FF9D23',
    metadata: { 'RULES': '42' },
  },
  {
    id: 'load',
    title: 'Load to Warehouse',
    content: 'Store processed data',
    icon: '💾',
    color: '#00ff41',
    metadata: { 'DURATION': '12.4s' },
  },
]

return <Timeline events={pipeline} direction="vertical" />
```

### Process Workflow
```tsx
const workflow = [
  { id: '1', title: 'START', icon: '▶', color: '#00ff41' },
  { id: '2', title: 'VALIDATE', icon: '✓', color: '#00ccff' },
  { id: '3', title: 'PROCESS', icon: '⚙', color: '#FF9D23' },
  { id: '4', title: 'DEPLOY', icon: '🚀', color: '#E63946' },
  { id: '5', title: 'COMPLETE', icon: '✓', color: '#00ff41' },
]

return (
  <Timeline
    events={workflow}
    direction="horizontal"
    showConnectors={true}
  />
)
```

---

## Styling & Customization

### Custom Colors Per Event
```tsx
{
  events: [
    { id: '1', title: 'Success', color: '#00ff41', ... },
    { id: '2', title: 'Warning', color: '#FF9D23', ... },
    { id: '3', title: 'Error', color: '#ff4444', ... },
  ]
}
```

### Default Color
```tsx
<Timeline events={events} accentColor="#00ccff" />
```

### Without Connectors
```tsx
<Timeline events={events} showConnectors={false} />
```

### Without Interactivity
```tsx
<Timeline events={events} interactive={false} />
```

---

## Common Patterns

### Dynamic Events from API
```tsx
const [timeline, setTimeline] = useState([])

useEffect(() => {
  const fetchEvents = async () => {
    const data = await getTimeline()
    setTimeline(data)
  }
  fetchEvents()
}, [])

return <Timeline events={timeline} />
```

### Status-Colored Events
```tsx
const events = results.map(result => ({
  id: result.id,
  title: result.name,
  icon: result.status === 'success' ? '✓' : '✕',
  color: result.status === 'success' ? '#00ff41' : '#ff4444',
  metadata: { 'STATUS': result.status },
}))

return <Timeline events={events} />
```

### Live Timeline Updates
```tsx
const [events, setEvents] = useState(initialEvents)

useEffect(() => {
  const interval = setInterval(() => {
    // Fetch new events
    const newEvent = { id: Date.now(), title: 'New Event', ... }
    setEvents(prev => [...prev, newEvent])
  }, 5000)

  return () => clearInterval(interval)
}, [])

return <Timeline events={events} />
```

---

## Accessibility

- Semantic HTML structure
- Clear event titles and descriptions
- Color contrast meets standards
- Readable monospace font
- Hover states indicate interactivity

---

## Troubleshooting

**Q: Connectors aren't showing**
A: Set `showConnectors={true}` (the default). Check that events array has multiple items.

**Q: Timeline is too wide/narrow**
A: Adjust parent container width or use horizontal layout with scrolling.

**Q: Custom icons aren't displaying**
A: Use emoji or unicode characters in `icon` field (e.g., '✓', '⚙', '💾').

**Q: Colors aren't visible**
A: Set `color` per event or use `accentColor` prop for default. Ensure hex/rgb values are valid.

**Q: Horizontal layout is cut off**
A: Horizontal timeline is meant to scroll. Wrap in container with `overflow-x-auto`.

---

## Integration with Theme

Works with the cyberpunk theme:

```tsx
<Timeline
  events={events}
  accentColor="var(--mauk)"  // Use CSS variables
/>

// Or hardcode theme colors
<Timeline
  events={events}
  accentColor="#03A6A1"  // MAUK cyan
/>
```

---

## Files

- **components/Timeline.tsx** — Component implementation
- **TIMELINE_GUIDE.md** — This file

See also:
- **THEME_GUIDE.md** — Color palette
- **COMPONENT_STRATEGY.md** — Component selection
- **EXAMPLE_USAGE.tsx** — Working examples
