# MissionStatement Documentation

Elegant statement cards for displaying project missions, visions, experiments, or detailed descriptions.

---

## Overview

The `MissionStatement` component displays important content in a themed card format with optional metadata, version numbers, and action buttons. Perfect for about pages, landing pages, or any content-focused display.

**Use this component when:**
- Displaying project missions or visions
- Creating experiment descriptions
- Showing project goals or values
- Building about pages with detailed content
- Highlighting important project information
- Displaying research hypotheses or statements

---

## MissionStatement Component

Flexible content card with optional metadata and actions.

### Props

```typescript
interface MissionStatementProps {
  // Required
  title: string;                      // Section title (e.g., "[MISSION_EXPERIMENT]")
  content: string | ReactNode;        // Content (string or React component)

  // Optional metadata
  version?: string;                   // Version number
  metadata?: Record<string, string>;  // Additional metadata fields

  // Optional appearance
  accentColor?: string;               // Title color (default: '#E63946')
  backgroundColor?: string;           // Custom background color
  borderColor?: string;               // Custom border color

  // Optional actions
  actionLabel?: string;               // Action button label
  actionHref?: string;                // Action button link
  onAction?: () => void;              // Action callback

  // Optional styling
  className?: string;
  contentClassName?: string;
  size?: 'sm' | 'md' | 'lg';         // Card size (default: 'md')
}
```

### Examples

#### Basic Mission Statement
```tsx
import { MissionStatement } from '@/components/MissionStatement'

export function SimpleStatement() {
  return (
    <MissionStatement
      title="[OUR_MISSION]"
      content="To create innovative solutions that help people achieve their goals."
      version="v1.0"
      accentColor="#E63946"
    />
  )
}
```

#### Brain.vat Mission
```tsx
import { BrainVatMission } from '@/components/MissionStatement'

export function AboutPage() {
  return <BrainVatMission />
}
```

#### Statement with Action Button
```tsx
<MissionStatement
  title="[GET_STARTED]"
  content="Join our community and start building amazing things today."
  actionLabel="[LAUNCH_APP]"
  actionHref="/app"
  accentColor="#00ff41"
/>
```

#### Statement with Metadata
```tsx
<MissionStatement
  title="[PROJECT_STATUS]"
  content="The project is progressing well with strong community engagement."
  version="v2.1.0"
  metadata={{
    'STATUS': 'ACTIVE',
    'PROGRESS': '75%',
    'LAST_UPDATED': '2026-06-16',
  }}
  accentColor="#00ccff"
/>
```

#### Statement with React Content
```tsx
<MissionStatement
  title="[DETAILED_VISION]"
  content={
    <div className="space-y-4">
      <p>First paragraph of our detailed vision statement.</p>
      <p>Second paragraph with more context and information.</p>
      <p>Third paragraph with final thoughts and goals.</p>
    </div>
  }
  accentColor="#FF9D23"
/>
```

#### Callback Action
```tsx
<MissionStatement
  title="[CONFIRM_ACTION]"
  content="Are you sure you want to proceed?"
  actionLabel="[CONFIRM]"
  onAction={() => console.log('Action confirmed!')}
  accentColor="#ff4444"
/>
```

---

## Preset Components

### Brain.vat Mission
```tsx
import { BrainVatMission } from '@/components/MissionStatement'

<BrainVatMission />
```

Pre-configured with brain.vat mission text, version, and return button.

### Detailed Mission Statement
```tsx
import { DetailedMissionStatement } from '@/components/MissionStatement'

<DetailedMissionStatement
  title="[DETAILED_MISSION]"
  paragraphs={[
    'First paragraph...',
    'Second paragraph...',
    'Third paragraph...',
  ]}
  version="v1.0"
  accentColor="#E63946"
/>
```

For multi-paragraph statements with automatic spacing.

---

## Size Options

### Small (`size="sm"`)
```tsx
<MissionStatement
  title="[MISSION]"
  content="Compact mission statement."
  size="sm"
/>
```
- Smaller fonts and padding
- Ideal for sidebars or secondary content

### Medium (`size="md"`)
```tsx
<MissionStatement
  title="[MISSION]"
  content="Standard mission statement."
  size="md"  // Default
/>
```
- Balanced sizing
- Recommended for most uses
- Works well in full-width and constrained layouts

### Large (`size="lg"`)
```tsx
<MissionStatement
  title="[MISSION]"
  content="Featured mission statement."
  size="lg"
/>
```
- Prominent display
- Best for hero sections or featured content
- Stands alone effectively

---

## Content Types

### String Content
```tsx
<MissionStatement
  title="[MISSION]"
  content="Simple text content goes here."
/>
```

### React Component Content
```tsx
<MissionStatement
  title="[MISSION]"
  content={
    <div>
      <h3>Heading</h3>
      <p>Paragraph with <strong>bold</strong> text.</p>
    </div>
  }
/>
```

### Multi-Paragraph Content
```tsx
<DetailedMissionStatement
  title="[MISSION]"
  paragraphs={[
    'First paragraph about our vision.',
    'Second paragraph about our values.',
    'Third paragraph about our goals.',
  ]}
/>
```

---

## Actions

### Link Action
```tsx
<MissionStatement
  title="[READY_TO_START]"
  content="Click below to launch the application."
  actionLabel="[START]"
  actionHref="/app"
/>
```

### Callback Action
```tsx
const handleAction = () => {
  // Do something
  window.location.href = '/results'
}

<MissionStatement
  title="[SUBMIT]"
  content="Ready to submit your response?"
  actionLabel="[SUBMIT]"
  onAction={handleAction}
/>
```

### No Action
```tsx
<MissionStatement
  title="[INFORMATION]"
  content="Just informational content with no action."
  // No actionLabel, actionHref, or onAction
/>
```

---

## Metadata Display

### Version Number
```tsx
<MissionStatement
  title="[STATUS]"
  content="Current system status."
  version="v2.1.3"
/>
```

Shows in small text at bottom left.

### Additional Metadata
```tsx
<MissionStatement
  title="[PROJECT]"
  content="Project details..."
  metadata={{
    'LEAD': 'John Doe',
    'TIMELINE': 'Q2 2026',
    'BUDGET': '$50K',
  }}
/>
```

Shows metadata fields in small text rows at the bottom.

### Combined
```tsx
<MissionStatement
  title="[PROJECT]"
  content="Project details..."
  version="v1.0"
  metadata={{
    'STATUS': 'ACTIVE',
    'PROGRESS': '50%',
  }}
  actionLabel="[VIEW_DETAILS]"
  actionHref="/details"
/>
```

---

## Styling

### Custom Colors
```tsx
<MissionStatement
  title="[MISSION]"
  content="..."
  accentColor="#00ff41"           // Title color
  backgroundColor="#1a1a1a"       // Card background
  borderColor="#00ff41"           // Card border
/>
```

### Custom Classes
```tsx
<MissionStatement
  title="[MISSION]"
  content="..."
  className="shadow-2xl rounded-xl"
  contentClassName="italic"
/>
```

### Content Styling
```tsx
<MissionStatement
  title="[MISSION]"
  content={
    <p className="text-lg font-bold">
      Custom styled content
    </p>
  }
/>
```

---

## Real-World Examples

### Brain.vat About Page
```tsx
import { BrainVatMission } from '@/components/MissionStatement'

export function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-12">About Brain.vat</h1>
      <BrainVatMission />
    </div>
  )
}
```

### Company Values
```tsx
export function ValuesPage() {
  return (
    <div className="space-y-12">
      <MissionStatement
        title="[INNOVATION]"
        content="We push boundaries and explore new frontiers in AI research."
        accentColor="#00ccff"
      />
      <MissionStatement
        title="[INTEGRITY]"
        content="We operate with transparency and ethical principles in all decisions."
        accentColor="#00ff41"
      />
      <MissionStatement
        title="[IMPACT]"
        content="We measure success by the positive change we create."
        accentColor="#FF9D23"
      />
    </div>
  )
}
```

### Product Vision
```tsx
export function VisionPage() {
  return (
    <DetailedMissionStatement
      title="[PRODUCT_VISION]"
      paragraphs={[
        'Our product vision is to create the most intuitive AI interface ever built.',
        'We believe AI should be accessible to everyone, regardless of technical expertise.',
        'By 2027, we aim to serve 10 million users globally with our platform.',
      ]}
      version="v1.0"
      actionLabel="[JOIN_US]"
      actionHref="/careers"
      accentColor="#E63946"
    />
  )
}
```

### Research Hypothesis
```tsx
export function ResearchPage() {
  return (
    <MissionStatement
      title="[HYPOTHESIS]"
      content="We hypothesize that autonomous agents with memory augmentation will develop measurable personality traits over extended interactions, suggesting emergent consciousness-like properties."
      metadata={{
        'RESEARCHERS': '5',
        'TIMELINE': '6 months',
        'STATUS': 'ACTIVE',
      }}
      version="v1.0"
      accentColor="#00ff41"
    />
  )
}
```

### Multiple Statements
```tsx
export function LandingPage() {
  return (
    <div className="space-y-16">
      <MissionStatement
        title="[MISSION]"
        content="Democratizing AI technology for everyone."
        actionLabel="[EXPLORE]"
        actionHref="/features"
      />
      
      <MissionStatement
        title="[VALUES]"
        content="We believe in transparency, ethics, and human-centered AI."
      />
      
      <MissionStatement
        title="[VISION]"
        content="A future where AI enhances human capability at scale."
      />
    </div>
  )
}
```

---

## Accessibility

- Semantic HTML structure
- Color contrast meets accessibility standards
- Clear heading hierarchy
- Action buttons are keyboard accessible
- Proper text sizing and spacing

---

## Common Patterns

### Dynamic Content from API
```tsx
const [mission, setMission] = useState('')

useEffect(() => {
  const fetchMission = async () => {
    const data = await getMissionStatement()
    setMission(data)
  }
  fetchMission()
}, [])

return (
  <MissionStatement
    title="[LIVE_MISSION]"
    content={mission || 'Loading...'}
  />
)
```

### Conditional Metadata
```tsx
const metadata: Record<string, string> = {
  'STATUS': isActive ? 'ACTIVE' : 'INACTIVE',
}

if (lastUpdated) {
  metadata['UPDATED'] = lastUpdated.toLocaleDateString()
}

return (
  <MissionStatement
    title="[STATUS]"
    content="Project status update."
    metadata={metadata}
  />
)
```

### Styled Content with Highlights
```tsx
<MissionStatement
  title="[MISSION]"
  content={
    <p>
      We're building the future of{' '}
      <span className="text-mauk font-bold">autonomous AI</span> with a focus on{' '}
      <span className="text-abaci font-bold">human collaboration</span>.
    </p>
  }
/>
```

---

## Troubleshooting

**Q: Colors aren't showing**
A: Ensure `accentColor`, `backgroundColor`, and `borderColor` are valid hex/rgb/CSS values.

**Q: Content text is too small**
A: Use `size="lg"` prop or adjust `contentClassName` with custom font sizes.

**Q: Action button isn't working**
A: For links, ensure `actionHref` is correct. For callbacks, ensure `onAction` function is defined properly.

**Q: Metadata isn't showing**
A: Provide `metadata` object with key-value pairs. Ensure values are strings.

**Q: Border/background isn't visible**
A: Check that `backgroundColor` and `borderColor` have sufficient contrast. Ensure theme CSS is loaded.

---

## Integration with Theme

Works with the brain.vat cyberpunk theme:

```tsx
// Use theme colors
import { BrainVatMission } from '@/components/MissionStatement'

<BrainVatMission />  // Pre-configured for brain.vat

// Or use custom theme colors
<MissionStatement
  title="[MISSION]"
  content="..."
  accentColor="var(--primary)"      // CSS variable
/>
```

---

## Files

- **components/MissionStatement.tsx** — Component implementation
- **MISSION_STATEMENT_GUIDE.md** — This file

See also:
- **THEME_GUIDE.md** — Color palette
- **COMPONENT_STRATEGY.md** — Component selection
- **EXAMPLE_USAGE.tsx** — Working examples
