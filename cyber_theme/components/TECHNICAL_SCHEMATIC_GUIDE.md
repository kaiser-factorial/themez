# TechnicalSchematic Documentation

System architecture and component display cards for visualizing technical infrastructure.

---

## Overview

The `TechnicalSchematic` component displays system architecture in a grid or row layout, showing how different components interact. Ideal for about pages, technical documentation, or system diagrams.

**Use this component when:**
- Displaying system architecture
- Showing infrastructure components
- Creating technical documentation
- Building about pages with system diagrams
- Visualizing service landscapes

---

## TechnicalSchematic Component

Grid-based system architecture display.

### Props

```typescript
interface SchematicItem {
  component: string    // Component name (e.g., "BRAIN")
  role: string        // Component role/description
  location: string    // Implementation location/tech stack
  icon?: string       // Optional icon or emoji
}

interface TechnicalSchematicProps {
  // Required
  items: SchematicItem[];

  // Optional appearance
  accentColor?: string;       // Primary color (default: '#00FF00')
  title?: string;             // Section title (default: '[TECHNICAL_SCHEMATIC]')
  columns?: 2 | 3 | 4;       // Grid columns (default: 4)
  layout?: 'grid' | 'row';   // Layout style (default: 'grid')

  // Optional styling
  className?: string;
  itemClassName?: string;
  showBorder?: boolean;       // Show border (default: true)
  interactive?: boolean;      // Enable hover effects (default: true)
}
```

### Examples

#### Brain.vat System Architecture
```tsx
import { BrainVatSystemArchitecture } from '@/components/TechnicalSchematic'

export function ArchitectureDiagram() {
  return <BrainVatSystemArchitecture />
}
```

#### Custom Architecture with 4 Components
```tsx
import { TechnicalSchematic } from '@/components/TechnicalSchematic'

export function CustomArchitecture() {
  const items = [
    { component: 'API', role: 'Request Handler', location: 'FastAPI', icon: '🔌' },
    { component: 'CACHE', role: 'Data Caching', location: 'Redis', icon: '⚡' },
    { component: 'DATABASE', role: 'Persistent Storage', location: 'PostgreSQL', icon: '💾' },
    { component: 'QUEUE', role: 'Task Processing', location: 'Celery', icon: '📋' },
  ]

  return (
    <TechnicalSchematic
      items={items}
      title="[SYSTEM_ARCHITECTURE]"
      accentColor="#00ccff"
      columns={4}
    />
  )
}
```

#### Vertical Row Layout
```tsx
<TechnicalSchematic
  items={items}
  title="[COMPONENT_PIPELINE]"
  layout="row"
  accentColor="#FF9D23"
/>
```

#### Three-Column Layout
```tsx
<TechnicalSchematic
  items={items}
  title="[INFRASTRUCTURE]"
  columns={3}
  accentColor="#00ff41"
/>
```

#### Minimal Schema (No Border)
```tsx
<TechnicalSchematic
  items={items}
  title=""
  showBorder={false}
  interactive={false}
  accentColor="#808080"
/>
```

---

## SchematicItem Structure

### Required Fields

**component** — Component name
```tsx
{ component: 'BRAIN', ... }
{ component: 'API_GATEWAY', ... }
```

**role** — What the component does
```tsx
{ role: 'Inference Engine', ... }
{ role: 'Request Routing', ... }
```

**location** — Technology/implementation
```tsx
{ location: 'Hugging Face', ... }
{ location: 'Python/Flask', ... }
{ location: 'AWS Lambda', ... }
```

### Optional Fields

**icon** — Emoji or character for visual accent
```tsx
{ icon: '🧠', ... }        // Brain emoji
{ icon: '🔗', ... }        // Link emoji
{ icon: '⚡', ... }        // Lightning emoji
```

---

## Layout Options

### Grid Layout (Default)
```tsx
// 2-column grid
<TechnicalSchematic items={items} columns={2} />

// 3-column grid
<TechnicalSchematic items={items} columns={3} />

// 4-column grid
<TechnicalSchematic items={items} columns={4} />
```

### Row Layout
```tsx
<TechnicalSchematic items={items} layout="row" />
```

---

## Color Customization

### Terminal Green (Brain.vat Default)
```tsx
<BrainVatSystemArchitecture />
// Uses #00FF00 (terminal green)
```

### Custom Colors
```tsx
<TechnicalSchematic
  items={items}
  accentColor="#00ccff"  // Cyan
/>

<TechnicalSchematic
  items={items}
  accentColor="#FF9D23"  // Orange
/>

<TechnicalSchematic
  items={items}
  accentColor="#00ff41"  // Bright green
/>
```

---

## Real-World Examples

### Brain.vat About Page
```tsx
import { BrainVatSystemArchitecture } from '@/components/TechnicalSchematic'

export function AboutPage() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-primary mb-8">System Architecture</h2>
      <BrainVatSystemArchitecture />
    </section>
  )
}
```

### Microservices Architecture
```tsx
import { TechnicalSchematic } from '@/components/TechnicalSchematic'

export function MicroservicesOverview() {
  const services = [
    { component: 'AUTH_SERVICE', role: 'Authentication', location: 'Node.js', icon: '🔐' },
    { component: 'USER_SERVICE', role: 'User Management', location: 'Python', icon: '👤' },
    { component: 'PRODUCT_SERVICE', role: 'Product Catalog', location: 'Go', icon: '📦' },
    { component: 'ORDER_SERVICE', role: 'Order Processing', location: 'Java', icon: '🛒' },
    { component: 'PAYMENT_SERVICE', role: 'Payment Processing', location: 'C#', icon: '💳' },
    { component: 'NOTIFICATION_SERVICE', role: 'Send Messages', location: 'Node.js', icon: '📨' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Microservices Architecture</h1>
      <TechnicalSchematic
        items={services}
        title="[SERVICES]"
        columns={3}
        accentColor="#00ccff"
      />
    </div>
  )
}
```

### Data Pipeline
```tsx
export function DataPipeline() {
  const pipeline = [
    { component: 'DATA_INGESTION', role: 'Source Collection', location: 'Apache Kafka' },
    { component: 'DATA_PROCESSING', role: 'Transform/Clean', location: 'Apache Spark' },
    { component: 'DATA_STORAGE', role: 'Persistent Store', location: 'Data Lake' },
    { component: 'ANALYTICS', role: 'Analysis & BI', location: 'Tableau/PowerBI' },
  ]

  return (
    <TechnicalSchematic
      items={pipeline}
      title="[DATA_PIPELINE]"
      columns={4}
      accentColor="#FF9D23"
      layout="grid"
    />
  )
}
```

### Cloud Infrastructure
```tsx
export function CloudInfrastructure() {
  const infrastructure = [
    { component: 'FRONTEND', role: 'Web UI', location: 'AWS CloudFront', icon: '🌐' },
    { component: 'COMPUTE', role: 'Application', location: 'AWS EC2', icon: '⚙️' },
    { component: 'DATABASE', role: 'Data Layer', location: 'AWS RDS', icon: '🗄️' },
    { component: 'STORAGE', role: 'File Storage', location: 'AWS S3', icon: '📁' },
    { component: 'QUEUE', role: 'Message Queue', location: 'AWS SQS', icon: '📬' },
    { component: 'MONITORING', role: 'System Health', location: 'CloudWatch', icon: '📊' },
  ]

  return (
    <TechnicalSchematic
      items={infrastructure}
      title="[CLOUD_INFRASTRUCTURE]"
      columns={3}
      accentColor="#FF9D23"
    />
  )
}
```

---

## Styling & Customization

### Custom Item Styling
```tsx
<TechnicalSchematic
  items={items}
  itemClassName="rounded-xl"
/>
```

### Custom Container Styling
```tsx
<TechnicalSchematic
  items={items}
  className="shadow-2xl"
/>
```

### Without Border
```tsx
<TechnicalSchematic
  items={items}
  showBorder={false}
/>
```

### Without Interactive Hover
```tsx
<TechnicalSchematic
  items={items}
  interactive={false}
/>
```

---

## Presets

### Brain.vat System (Included)
```tsx
import { BrainVatSystemArchitecture } from '@/components/TechnicalSchematic'

<BrainVatSystemArchitecture />
```

Displays:
- BRAIN (Hugging Face, Inference Engine)
- SPINE (Python/Flask, Protocol API)
- MEMORY (Supabase, Persistence)
- INTERFACE (Next.js, Control Panel)

### Custom Preset
```tsx
import { CustomSystemArchitecture } from '@/components/TechnicalSchematic'

const items = [...]
<CustomSystemArchitecture items={items} />
```

---

## Accessibility

- Semantic HTML structure
- Clear text hierarchy
- Color contrast meets standards
- Hover states indicate interactivity
- Icon and text combined for clarity

---

## Common Patterns

### Add Icons to Components
```tsx
const items = [
  { component: 'API', role: 'Server', location: 'Node.js', icon: '🔌' },
  { component: 'DB', role: 'Storage', location: 'PostgreSQL', icon: '🗄️' },
  { component: 'CACHE', role: 'Speed', location: 'Redis', icon: '⚡' },
]
```

### Dynamic Items from API
```tsx
const [architecture, setArchitecture] = useState([])

useEffect(() => {
  const fetchArchitecture = async () => {
    const data = await getSystemArchitecture()
    setArchitecture(data)
  }
  fetchArchitecture()
}, [])

return (
  <TechnicalSchematic
    items={architecture}
    title="[LIVE_ARCHITECTURE]"
  />
)
```

### Responsive Columns
```tsx
// Desktop: 4 columns, Mobile: 2 columns
// Handled automatically by Tailwind grid classes
<TechnicalSchematic
  items={items}
  columns={4}
/>
```

---

## Troubleshooting

**Q: Colors aren't showing**
A: Ensure `accentColor` is a valid hex, rgb, or CSS color. Check that theme CSS variables are loaded.

**Q: Items aren't centered**
A: The grid automatically centers items. Adjust `itemClassName` if needed for custom alignment.

**Q: Hover effects not working**
A: Set `interactive={true}` (default). Ensure parent elements don't have `overflow: hidden`.

**Q: Text is overlapping or cut off**
A: Adjust grid `columns` prop. For small items, use `columns={2}` or `columns={3}` instead of `4`.

**Q: Border color not visible**
A: Set `accentColor` to a brighter value. Increase border opacity by customizing the component.

---

## Integration with Theme

Works seamlessly with the brain.vat cyberpunk theme:

```tsx
// Use CSS variables
<TechnicalSchematic
  items={items}
  accentColor="var(--terminal-green)"
/>

// Or use hardcoded theme colors
<BrainVatSystemArchitecture />  // Uses #00FF00
```

---

## Files

- **components/TechnicalSchematic.tsx** — Component implementation
- **TECHNICAL_SCHEMATIC_GUIDE.md** — This file

See also:
- **THEME_GUIDE.md** — Color palette
- **COMPONENT_STRATEGY.md** — Component selection
- **EXAMPLE_USAGE.tsx** — Working examples
