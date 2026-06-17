# MemoryCard & MemoryColumn Documentation

Components for displaying archival memory concepts with customizable alignment, animations, and visual indicators.

---

## Overview

The `MemoryCard` and `MemoryColumn` components are designed for displaying individual memory concepts or collections of memories in a flexible, themeable way. They support left/center/right alignment, optional animations, pulsing indicator dots, and tooltips for source attribution.

**Use these components when:**
- Displaying memory archives or concept lists
- Creating multi-column memory layouts (left/center/right aligned)
- Building searchable memory banks or knowledge bases
- Showing recalled concepts with optional source information

---

## MemoryCard Component

Individual memory concept card with optional animations, indicator dots, and source tooltips.

### Props

```typescript
interface MemoryCardProps {
  // Required
  concept: string;                    // The memory/concept text to display

  // Optional appearance
  accentColor?: string;               // Color for text and dots (default: '#00ff41')
  align?: 'left' | 'center' | 'right'; // Text alignment (default: 'left')
  opacity?: number;                   // Text opacity 0-1 (default: 0.7)
  className?: string;                 // Additional CSS classes

  // Optional animation
  animationType?: 'pulse' | 'ping' | 'none'; // Container animation (default: 'none')
  showDot?: boolean;                  // Show indicator dots (default: true)
  dotAnimation?: 'pulse' | 'ping' | 'none'; // Dot animation (default: 'pulse')

  // Optional source/tooltip
  sourceText?: string;                // Text shown in tooltip
  sourceLabel?: string;               // Tooltip header label (default: '[RECALLING FRAGMENT]')

  // Optional interaction
  isHovering?: boolean;               // Control tooltip visibility from parent
  onMouseEnter?: () => void;          // Parent notification of hover
  onMouseLeave?: () => void;          // Parent notification of unhover
  hoverScale?: boolean;               // Scale on hover (default: true)
}
```

### Examples

#### Basic Left-Aligned Card
```tsx
import { MemoryCard } from '@/components/MemoryCard'

export function SimpleMemoryCard() {
  return (
    <MemoryCard
      concept="linguistic_patterns"
      accentColor="#03A6A1"
      align="left"
    />
  )
}
```

#### Center-Aligned with Animation and Source
```tsx
<MemoryCard
  concept="shared_memory_fragment"
  accentColor="#00ff41"
  align="center"
  animationType="pulse"
  dotAnimation="ping"
  sourceText="Synthesized from MAUK and ABACI interaction logs, timestamp 2026-06-16T12:34:00Z"
  sourceLabel="[SHARED CONTEXT]"
/>
```

#### Right-Aligned with Custom Colors
```tsx
<MemoryCard
  concept="behavioral_markers"
  accentColor="#FF9D23"
  align="right"
  showDot={true}
  dotAnimation="pulse"
  opacity={0.8}
  hoverScale={true}
/>
```

#### Controlled Tooltip from Parent
```tsx
import { MemoryCard } from '@/components/MemoryCard'
import { useState } from 'react'

export function ControlledMemoryCard() {
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null)

  return (
    <MemoryCard
      concept="decision_logic"
      accentColor="#03A6A1"
      sourceText="From MAUK's parameter tuning session"
      isHovering={hoveredConcept === 'decision_logic'}
      onMouseEnter={() => setHoveredConcept('decision_logic')}
      onMouseLeave={() => setHoveredConcept(null)}
    />
  )
}
```

---

## MemoryColumn Component

Container component for displaying multiple memory cards in a column layout with a header and scrollable content.

### Props

```typescript
interface MemoryColumnProps {
  // Required
  title: string;                      // Column header text
  items: string[];                    // Array of memory concepts to display

  // Optional appearance
  accentColor?: string;               // Color for title, dots, and cards (default: '#00ff41')
  align?: 'left' | 'center' | 'right'; // Alignment for cards (default: 'left')

  // Optional animation
  animationType?: 'pulse' | 'ping' | 'none'; // Header indicator animation (default: 'none')
  dotAnimation?: 'pulse' | 'ping' | 'none'; // Card dot animation (default: 'pulse')

  // Optional indicator dot in header
  showIndicator?: boolean;            // Show dots in header (default: true)
  indicatorText?: string;             // Custom header text (overrides title if provided)

  // Optional interaction
  onItemHover?: (item: string) => void; // Called when hovering a card
  hoveredItem?: string;               // Currently hovered item (controls tooltip)

  // Optional tooltip
  sourceText?: string;                // Source text for tooltips (shown when item is hovered)
}
```

### Examples

#### Basic Three-Column Archive Layout
```tsx
import { MemoryColumn } from '@/components/MemoryCard'

export function MemoryArchive() {
  const maukMemories = ['decision_logic', 'parameter_optimization', 'dialogue_patterns']
  const sharedMemories = ['linguistic_patterns', 'shared_context', 'mutual_understanding']
  const abaciMemories = ['creative_synthesis', 'pattern_recognition', 'response_generation']

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <MemoryColumn
        title="MAUK EXCLUSIVE"
        items={maukMemories}
        accentColor="#03A6A1"
        align="left"
        showIndicator={true}
      />
      
      <MemoryColumn
        title="SHARED MEMORY"
        items={sharedMemories}
        accentColor="#00ff41"
        align="center"
        animationType="pulse"
        showIndicator={true}
      />
      
      <MemoryColumn
        title="ABACI EXCLUSIVE"
        items={abaciMemories}
        accentColor="#FF9D23"
        align="right"
        showIndicator={true}
      />
    </div>
  )
}
```

#### Interactive Archive with Hover State
```tsx
import { MemoryColumn } from '@/components/MemoryCard'
import { useState } from 'react'

export function InteractiveMemoryArchive() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredSource, setHoveredSource] = useState<string>('')

  const memories = ['concept_1', 'concept_2', 'concept_3']
  
  const sourceMap: Record<string, string> = {
    concept_1: 'Recollected from MAUK session 2026-06-15',
    concept_2: 'Synthesized from dialogue history',
    concept_3: 'Derived from shared parameter optimization',
  }

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <MemoryColumn
        title="MAUK"
        items={memories}
        accentColor="#03A6A1"
        align="left"
        onItemHover={(item) => {
          setHoveredItem(item)
          setHoveredSource(sourceMap[item] || '')
        }}
        hoveredItem={hoveredItem}
        sourceText={hoveredSource}
      />
    </div>
  )
}
```

#### Column with Custom Indicator Text and Animation
```tsx
<MemoryColumn
  title="Archived Concepts"
  indicatorText="SCANNING MEMORY BANKS"
  items={['pattern_1', 'pattern_2', 'pattern_3']}
  accentColor="#00ccff"
  align="center"
  animationType="ping"
  dotAnimation="ping"
  showIndicator={true}
/>
```

---

## Alignment Options

### Left Alignment (`align="left"`)
- Text and content aligned to the left
- Single dot indicator on the left side
- Scale origin from left
- Best for: Traditional left-to-right reading

### Center Alignment (`align="center"`)
- Text centered
- Dots on both left and right sides
- Scale origin from center
- Best for: Focal point content, shared/unified concepts

### Right Alignment (`align="right"`)
- Text and content aligned to the right
- Single dot indicator on the right side
- Scale origin from right
- Best for: Right-to-left reading, secondary columns

---

## Animation Options

### Pulse Animation
```tsx
animationType="pulse"     // Subtle fading in/out
dotAnimation="pulse"      // Gentle pulsing dots
```

### Ping Animation
```tsx
animationType="ping"      // Expanding ripple effect
dotAnimation="ping"       // Animated ping from center
```

### No Animation
```tsx
animationType="none"      // Static, no movement
dotAnimation="none"       // Static dots
```

---

## Color Customization

### Brain.vat Colors
```tsx
// MAUK color (cyan/teal)
<MemoryCard concept="mauk_memory" accentColor="#03A6A1" />

// ABACI color (orange)
<MemoryCard concept="abaci_memory" accentColor="#FF9D23" />

// Shared/neutral (green)
<MemoryCard concept="shared_memory" accentColor="#00ff41" />
```

### Custom Colors
```tsx
// Any hex color
<MemoryCard concept="custom" accentColor="#FF1493" />

// CSS color names
<MemoryCard concept="custom" accentColor="oklch(0.6 0.15 280)" />
```

---

## Tooltip Source Text

The `sourceText` prop enables hover tooltips showing source attribution. Tooltips only appear when:
1. `sourceText` is provided AND not empty
2. `sourceText` is not one of the placeholder values:
   - `"recalling..."`
   - `"(Context lost to time)"`
   - `"(error recalling)"`
   - `"(Source unavailable — offline mode)"`

### Valid Source Examples
```tsx
<MemoryCard
  concept="decision_logic"
  sourceText="Extracted from MAUK reasoning logs, 2026-06-15"
/>

<MemoryCard
  concept="pattern"
  sourceText="Synthesized from 47 interaction events"
  sourceLabel="[COMPILED FROM MEMORY]"
/>
```

### Invalid Source (Tooltip won't show)
```tsx
// These won't display tooltips
<MemoryCard concept="concept" sourceText="recalling..." />
<MemoryCard concept="concept" sourceText="(Context lost to time)" />
```

---

## Real-World Examples

### Complete Three-Column Archive
```tsx
import { MemoryColumn } from '@/components/MemoryCard'
import { useState } from 'react'

export function BrainVatMemoryArchive() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [currentSource, setCurrentSource] = useState<string>('')

  const maukMemories = [
    'parameter_optimization',
    'dialogue_strategy',
    'decision_heuristics',
  ]
  
  const sharedMemories = [
    'linguistic_foundation',
    'shared_context',
    'mutual_understanding',
  ]
  
  const abaciMemories = [
    'creative_synthesis',
    'pattern_innovation',
    'response_generation',
  ]

  const sourceMap: Record<string, string> = {
    parameter_optimization: 'From MAUK tuning session 2026-06-14T18:32:00Z',
    dialogue_strategy: 'Learned from 1,247 conversation events',
    decision_heuristics: 'Derived from behavioral analysis',
    linguistic_foundation: 'Shared training foundation',
    shared_context: 'Mutual reference framework',
    mutual_understanding: 'Established through dialogue',
    creative_synthesis: 'ABACI innovation signature',
    pattern_innovation: 'Novel pattern discovery',
    response_generation: 'Synthesis engine output',
  }

  const handleItemHover = (item: string) => {
    setHoveredItem(item)
    setCurrentSource(sourceMap[item] || 'Source not catalogued')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">
        MEMORY ARCHIVE
      </h1>
      
      <div className="grid grid-cols-3 gap-8">
        <MemoryColumn
          title="MAUK EXCLUSIVE"
          items={maukMemories}
          accentColor="#03A6A1"
          align="left"
          animationType="pulse"
          dotAnimation="pulse"
          onItemHover={handleItemHover}
          hoveredItem={hoveredItem}
          sourceText={currentSource}
        />
        
        <MemoryColumn
          title="SHARED CONTEXT"
          items={sharedMemories}
          accentColor="#00ff41"
          align="center"
          animationType="pulse"
          dotAnimation="ping"
          onItemHover={handleItemHover}
          hoveredItem={hoveredItem}
          sourceText={currentSource}
        />
        
        <MemoryColumn
          title="ABACI EXCLUSIVE"
          items={abaciMemories}
          accentColor="#FF9D23"
          align="right"
          animationType="pulse"
          dotAnimation="pulse"
          onItemHover={handleItemHover}
          hoveredItem={hoveredItem}
          sourceText={currentSource}
        />
      </div>
    </div>
  )
}
```

### Minimal Single Column
```tsx
import { MemoryColumn } from '@/components/MemoryCard'

export function SimpleMemoryList() {
  return (
    <MemoryColumn
      title="Core Concepts"
      items={['concept_a', 'concept_b', 'concept_c']}
      accentColor="#00ff41"
      align="center"
      showIndicator={false}
    />
  )
}
```

---

## Styling & CSS Classes

### Container Classes
- `.relative` — MemoryCard wrapper positioning
- `.group` — Hover state grouping
- `.cursor-help` — Tooltip cursor indicator

### Layout Classes
- `.flex` `.items-center` `.gap-2` — Card content layout
- `.origin-left` / `.origin-center` / `.origin-right` — Scale origin based on alignment

### Animation Classes
- `.animate-pulse` — Fade in/out animation
- `.animate-ping` — Expanding ping animation
- `.hover:scale-110` — Scale on hover (when enabled)

### Text Classes
- `.text-sm` `.font-mono` — Concept text styling
- `.text-muted-foreground` — Tooltip label
- `.italic` `.text-foreground` — Tooltip content

---

## Accessibility

- Tooltip triggers use `cursor-help` to indicate interactive content
- Hover states are managed via `onMouseEnter` and `onMouseLeave` callbacks
- Text contrast respects theme color palette
- Semantic HTML with proper nesting

---

## Common Patterns

### Sync Hover Across Multiple Columns
```tsx
const [hoveredItem, setHoveredItem] = useState<string | null>(null)

<div className="grid grid-cols-3 gap-6">
  <MemoryColumn
    items={maukItems}
    hoveredItem={hoveredItem}
    onItemHover={setHoveredItem}
    sourceText={sourceMap[hoveredItem] || ''}
  />
  <MemoryColumn
    items={sharedItems}
    hoveredItem={hoveredItem}
    onItemHover={setHoveredItem}
    sourceText={sourceMap[hoveredItem] || ''}
  />
</div>
```

### Dynamic Memory Loading
```tsx
const [memories, setMemories] = useState<string[]>([])
const [loading, setLoading] = useState(false)

// In useEffect:
// setLoading(true)
// const data = await fetchMemories()
// setMemories(data)
// setLoading(false)

<MemoryColumn
  title={loading ? 'RECALLING...' : 'MEMORIES'}
  items={memories.length > 0 ? memories : ['(loading..)'] }
  animationType={loading ? 'ping' : 'none'}
/>
```

### Grouped Memory Display
```tsx
interface MemoryGroup {
  title: string
  color: string
  memories: string[]
}

const groups: MemoryGroup[] = [
  { title: 'MAUK', color: '#03A6A1', memories: [...] },
  { title: 'SHARED', color: '#00ff41', memories: [...] },
  { title: 'ABACI', color: '#FF9D23', memories: [...] },
]

<div className="grid grid-cols-3 gap-6">
  {groups.map(group => (
    <MemoryColumn
      key={group.title}
      title={group.title}
      items={group.memories}
      accentColor={group.color}
      align={group.title === 'SHARED' ? 'center' : (group.title === 'MAUK' ? 'left' : 'right')}
    />
  ))}
</div>
```

---

## Troubleshooting

**Q: Tooltip isn't showing**
A: Check that `sourceText` is not one of the placeholder values. Use `hasValidSource` logic in the component to debug.

**Q: Dots aren't visible**
A: Ensure `showDot={true}` and `accentColor` has sufficient contrast with background. Check that the color value is valid hex or CSS color.

**Q: Alignment doesn't look centered**
A: Use `align="center"` with `<div className="flex justify-center">` wrapper if needed for full-page centering.

**Q: Hover animation isn't smooth**
A: Ensure Tailwind CSS animations are enabled in your config. Check that `hoverScale={true}` is set if you want scale effects.

**Q: Scrolling is broken in column**
A: MemoryColumn has `max-h-[300px]` and `overflow-y-auto`. Adjust parent container height or use custom className to override.

---

## Integration with Theme

These components work seamlessly with the brain.vat cyberpunk theme. Use theme colors directly:

```tsx
import { MemoryColumn } from '@/components/MemoryCard'

// Automatically themed with CSS variables
<MemoryColumn
  title="Memory"
  items={memories}
  accentColor="var(--mauk)" // Uses theme variable
/>
```

---

## Files

- **components/MemoryCard.tsx** — Component implementation
- **MEMORY_CARD_GUIDE.md** — This file

See also:
- **THEME_GUIDE.md** — Color palette and animations
- **COMPONENT_STRATEGY.md** — Component selection guide
- **EXAMPLE_USAGE.tsx** — Complete working examples
