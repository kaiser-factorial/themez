# BotNameCard & BotNameCardGrid Documentation

Elegant bot/agent profile cards with customizable colors, glowing effects, and hover animations.

---

## Overview

The `BotNameCard` and `BotNameCardGrid` components display AI bot or agent profiles with names, descriptions, and visual styling. Perfect for about pages, team displays, or system diagrams showing different agents.

**Use these components when:**
- Displaying bot or agent profiles
- Creating "about" pages with team/model information
- Showing system components with personality
- Building credential or credential-like displays
- Creating product showcase pages

---

## BotNameCard Component

Individual bot profile card with customizable colors and animations.

### Props

```typescript
interface BotNameCardProps {
  // Required
  botName: string;                // Bot name (e.g., "MAUK_v2.1")
  description: string;            // Bot description

  // Optional appearance
  accentColor?: string;           // Primary color (default: '#03A6A1')
  glowColor?: string;             // Glow color (default: same as accentColor)
  version?: string;               // Version suffix (default: none)

  // Optional styling
  className?: string;             // Additional CSS classes
  size?: 'sm' | 'md' | 'lg';     // Card size (default: 'md')
  showGlow?: boolean;             // Background glow effect (default: true)
  interactive?: boolean;          // Hover effects (default: true)
}
```

### Examples

#### Basic Bot Card (Brain.vat MAUK)
```tsx
import { BotNameCard } from '@/components/BotNameCard'

export function MaukCard() {
  return (
    <BotNameCard
      botName="MAUK_v2.1"
      description="Trained on surrealist philosophy and injected with math. Optimized on 2010 twitter data."
      accentColor="#03A6A1"
    />
  )
}
```

#### Bot Card with Custom Version
```tsx
<BotNameCard
  botName="ASSISTANT"
  description="A helpful AI assistant for answering questions and providing support."
  accentColor="#00ccff"
  version="2.0"
  size="md"
/>
```

#### Non-Interactive Card
```tsx
<BotNameCard
  botName="SYSTEM"
  description="Core system component for managing infrastructure."
  accentColor="#FF9D23"
  interactive={false}
  showGlow={false}
/>
```

#### Small Compact Card
```tsx
<BotNameCard
  botName="BOT"
  description="Compact profile"
  accentColor="#00ff41"
  size="sm"
/>
```

#### Large Featured Card
```tsx
<BotNameCard
  botName="HERO_BOT"
  description="A featured bot with a larger, more prominent card design for hero sections."
  accentColor="#ff1493"
  size="lg"
/>
```

---

## BotNameCardGrid Component

Container for displaying multiple bot cards in a responsive grid.

### Props

```typescript
interface BotNameCardGridProps {
  // Required
  bots: Array<{
    name: string;              // Bot name
    description: string;       // Bot description
    accentColor?: string;      // Color per bot (optional)
  }>

  // Optional layout
  columns?: 1 | 2 | 3 | 4;    // Grid columns (default: 2)
  className?: string;          // Additional CSS classes
}
```

### Examples

#### Two-Column Grid (Brain.vat Bots)
```tsx
import { BotNameCardGrid } from '@/components/BotNameCard'

export function BrainVatBots() {
  const bots = [
    {
      name: 'MAUK_v2.1',
      description: 'Trained on surrealist philosophy and injected with math. Optimized on 2010 twitter data.',
      accentColor: '#03A6A1',
    },
    {
      name: 'ABACI_v2.1',
      description: 'Trained on math and injected with surrealist poetry. Optimized on 2010 twitter data.',
      accentColor: '#FF9D23',
    },
  ]

  return (
    <BotNameCardGrid
      bots={bots}
      columns={2}
    />
  )
}
```

#### Four-Column Grid (Team Display)
```tsx
const team = [
  {
    name: 'ALPHA',
    description: 'Data analysis and insights',
    accentColor: '#00ccff',
  },
  {
    name: 'BETA',
    description: 'Content generation',
    accentColor: '#00ff41',
  },
  {
    name: 'GAMMA',
    description: 'Creative synthesis',
    accentColor: '#FF9D23',
  },
  {
    name: 'DELTA',
    description: 'Strategic planning',
    accentColor: '#ff1493',
  },
]

return (
  <BotNameCardGrid
    bots={team}
    columns={4}
  />
)
```

#### Single Column (Vertical Stack)
```tsx
<BotNameCardGrid
  bots={bots}
  columns={1}
/>
```

---

## Size Options

### Small (`size="sm"`)
- Smaller font and padding
- Ideal for grid displays with many items
- Compact information display

### Medium (`size="md"`)
- Balanced sizing
- Default and recommended for most uses
- Works well in 2-4 column grids

### Large (`size="lg"`)
- Prominent display
- Best for featured/hero sections
- Stands alone or in 1-2 column layouts

---

## Styling & Customization

### Background Glow
```tsx
// Enable/disable the background blur effect
<BotNameCard
  botName="BOT"
  description="..."
  showGlow={true}    // Default
  glowColor="#FF1493" // Custom glow color
/>
```

### Interactive Hover Effects
```tsx
// Enable hover border brightening and glow intensification
<BotNameCard
  botName="BOT"
  description="..."
  interactive={true}  // Default - enables hover effects
/>
```

### Color Customization
```tsx
// All color values: hex, rgb, oklch, or CSS color names
<BotNameCard
  botName="BOT"
  description="..."
  accentColor="#03A6A1"  // Hex
  glowColor="oklch(0.6 0.15 200)"  // OKLCH
/>
```

### Custom CSS Classes
```tsx
<BotNameCard
  botName="BOT"
  description="..."
  className="shadow-lg"
  size="lg"
/>
```

---

## Real-World Examples

### Brain.vat About Page
```tsx
import { BotNameCardGrid } from '@/components/BotNameCard'

export function AboutPage() {
  const bots = [
    {
      name: 'MAUK_v2.1',
      description: 'Trained on surrealist philosophy and injected with math. Optimized on 2010 twitter data.',
      accentColor: '#03A6A1',
    },
    {
      name: 'ABACI_v2.1',
      description: 'Trained on math and injected with surrealist poetry. Optimized on 2010 twitter data.',
      accentColor: '#FF9D23',
    },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">About Our System</h1>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Autonomous Agents</h2>
        <BotNameCardGrid bots={bots} columns={2} />
      </div>
    </div>
  )
}
```

### Multi-Agent Team Display
```tsx
const agents = [
  { name: 'RESEARCHER', description: 'Analyzes data and finds patterns', accentColor: '#00ccff' },
  { name: 'WRITER', description: 'Generates and refines content', accentColor: '#00ff41' },
  { name: 'DESIGNER', description: 'Creates visual concepts', accentColor: '#FF9D23' },
  { name: 'CRITIC', description: 'Reviews and provides feedback', accentColor: '#ff1493' },
]

export function TeamPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold">Our AI Team</h1>
      <BotNameCardGrid bots={agents} columns={4} />
    </div>
  )
}
```

### Minimal Profile Section
```tsx
export function AgentProfile() {
  return (
    <div className="max-w-md mx-auto">
      <BotNameCard
        botName="ASSISTANT_v1"
        description="Your personal AI assistant, trained to help with a variety of tasks."
        accentColor="#00ff41"
        size="lg"
      />
    </div>
  )
}
```

---

## Accessibility

- Semantic HTML structure
- Color contrast meets accessibility standards
- Text descriptions provide context
- Hover states indicate interactivity
- Font sizes scale appropriately

---

## Common Patterns

### Sync Colors with Brand
```tsx
const brandColors = {
  primary: '#E63946',
  secondary: '#03A6A1',
  tertiary: '#FF9D23',
}

const bots = [
  { name: 'BOT_A', description: '...', accentColor: brandColors.secondary },
  { name: 'BOT_B', description: '...', accentColor: brandColors.tertiary },
]
```

### Dynamic Bot List
```tsx
const [bots, setBots] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchBots = async () => {
    const data = await getBots()
    setBots(data)
    setLoading(false)
  }
  fetchBots()
}, [])

return loading ? <p>Loading...</p> : <BotNameCardGrid bots={bots} columns={2} />
```

### Clickable Cards
```tsx
<BotNameCard
  botName="CLICKABLE_BOT"
  description="Click to learn more"
  accentColor="#00ccff"
  className="cursor-pointer"
  onClick={() => navigate(`/bots/clickable-bot`)}
/>
```

---

## Troubleshooting

**Q: Colors aren't showing**
A: Ensure `accentColor` is a valid hex, rgb, oklch, or CSS color value. Check browser devtools for style errors.

**Q: Glow effect isn't visible**
A: Set `showGlow={true}` explicitly. Adjust `glowColor` if it's not contrasting with background.

**Q: Hover effects aren't working**
A: Set `interactive={true}` (the default). Ensure parent has correct z-index and no overflow hidden.

**Q: Text is cut off**
A: Adjust `size` prop or use custom `className` to increase padding. For long descriptions, consider using smaller size.

**Q: Grid isn't responsive**
A: BotNameCardGrid uses Tailwind's responsive classes. Ensure Tailwind CSS is properly configured. Adjust `columns` for mobile if needed.

---

## Integration with Theme

These components work seamlessly with the brain.vat cyberpunk theme:

```tsx
import { BotNameCard } from '@/components/BotNameCard'

// Use theme color variables
<BotNameCard
  botName="MAUK"
  description="..."
  accentColor="var(--mauk)"  // Uses CSS variable
/>

// Or hardcode theme colors
<BotNameCard
  botName="MAUK"
  description="..."
  accentColor="#03A6A1"  // MAUK cyan
/>
```

---

## Files

- **components/BotNameCard.tsx** — Component implementation
- **BOT_NAME_CARD_GUIDE.md** — This file

See also:
- **THEME_GUIDE.md** — Color palette and design tokens
- **COMPONENT_STRATEGY.md** — Component selection guide
- **EXAMPLE_USAGE.tsx** — Complete working examples
