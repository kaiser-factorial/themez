# ProgressIndicator Documentation

Progress bars, circular progress, and gauge indicators for displaying completion, metrics, and status.

---

## Overview

The `ProgressIndicator` component displays progress visually with multiple formats: linear progress bars, circular progress rings, and gauge displays. Perfect for showing completion percentage, system metrics, or operational status.

**Use this component when:**
- Displaying task completion progress
- Showing system metrics or utilization
- Visualizing data loading
- Indicating processing status
- Displaying gauge-like metrics

---

## ProgressIndicator Component

Multi-format progress display with customizable styling and labels.

### Props

```typescript
interface ProgressIndicatorProps {
  // Required
  value: number;                        // Progress 0-100

  // Optional appearance
  accentColor?: string;                 // Progress color (default: '#00ff41')
  backgroundColor?: string;             // Track/background color
  size?: 'sm' | 'md' | 'lg';           // Visual size (default: 'md')
  variant?: 'linear' | 'circular' | 'gauge';  // Style (default: 'linear')

  // Optional labels
  label?: string;                       // Progress label
  showPercentage?: boolean;             // Show % (default: true)
  format?: (value: number) => string;   // Custom format function

  // Optional styling
  className?: string;
  animated?: boolean;                   // Animate fill (default: true)
  striped?: boolean;                    // Add stripes (default: false)
}
```

### Examples

#### Basic Linear Progress
```tsx
import { ProgressIndicator } from '@/components/ProgressIndicator'

export function ProgressExamples() {
  return (
    <>
      <ProgressIndicator value={25} label="Loading..." />
      <ProgressIndicator value={50} label="Processing" />
      <ProgressIndicator value={75} label="Almost done" />
      <ProgressIndicator value={100} label="Complete" />
    </>
  )
}
```

#### Different Sizes
```tsx
<ProgressIndicator value={50} size="sm" label="Small" />
<ProgressIndicator value={50} size="md" label="Medium" />
<ProgressIndicator value={50} size="lg" label="Large" />
```

#### Circular Progress
```tsx
<ProgressIndicator
  value={75}
  variant="circular"
  label="Processing"
  accentColor="#03A6A1"
/>
```

#### Gauge Progress
```tsx
<ProgressIndicator
  value={60}
  variant="gauge"
  label="Memory Usage"
  accentColor="#FF9D23"
/>
```

#### Custom Format
```tsx
<ProgressIndicator
  value={1500}
  format={(v) => `${v}/2000 items`}
  label="Items Processed"
/>
```

#### Striped Progress
```tsx
<ProgressIndicator
  value={40}
  striped={true}
  label="Downloading"
  accentColor="#00ccff"
/>
```

---

## Variants

### Linear Progress Bar
```tsx
<ProgressIndicator
  value={65}
  variant="linear"  // Default
  label="Download Progress"
/>
```
Traditional progress bar with fill animation.

### Circular Progress
```tsx
<ProgressIndicator
  value={65}
  variant="circular"
  label="Task Progress"
/>
```
Circular progress ring with percentage display.

### Gauge Progress
```tsx
<ProgressIndicator
  value={65}
  variant="gauge"
  label="System Metric"
/>
```
Gauge-style display (180° arc).

---

## Sizes

### Small (`size="sm"`)
```tsx
<ProgressIndicator value={50} size="sm" label="Compact" />
```
Minimal display for space-constrained layouts.

### Medium (`size="md"`)
```tsx
<ProgressIndicator value={50} size="md" label="Standard" />
```
Balanced sizing (default).

### Large (`size="lg"`)
```tsx
<ProgressIndicator value={50} size="lg" label="Featured" />
```
Prominent display for important metrics.

---

## Real-World Examples

### Brain.vat System Metrics
```tsx
import { ProgressIndicator } from '@/components/ProgressIndicator'

export function BrainVatMetrics() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <ProgressIndicator
        value={75}
        variant="circular"
        accentColor="#03A6A1"
        label="MAUK Memory"
      />
      <ProgressIndicator
        value={60}
        variant="circular"
        accentColor="#FF9D23"
        label="ABACI Memory"
      />
      <ProgressIndicator
        value={45}
        variant="circular"
        accentColor="#00ff41"
        label="Shared Memory"
      />
    </div>
  )
}
```

### Task Progress
```tsx
const [progress, setProgress] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => Math.min(prev + 5, 100))
  }, 200)
  return () => clearInterval(interval)
}, [])

return (
  <ProgressIndicator
    value={progress}
    label={progress === 100 ? 'Complete!' : 'Processing...'}
    accentColor={progress === 100 ? '#00ff41' : '#00ccff'}
  />
)
```

### System Status Dashboard
```tsx
export function SystemDashboard() {
  const metrics = [
    { label: 'CPU Load', value: 68, color: '#FF9D23' },
    { label: 'Memory Usage', value: 52, color: '#00ccff' },
    { label: 'Disk I/O', value: 34, color: '#00ff41' },
    { label: 'Network', value: 21, color: '#03A6A1' },
  ]

  return (
    <div className="space-y-6">
      {metrics.map(metric => (
        <ProgressIndicator
          key={metric.label}
          value={metric.value}
          label={metric.label}
          accentColor={metric.color}
          variant="linear"
          size="md"
        />
      ))}
    </div>
  )
}
```

### Multi-Stage Process
```tsx
const stages = [
  { name: 'Initialization', progress: 100 },
  { name: 'Data Loading', progress: 100 },
  { name: 'Analysis', progress: 75 },
  { name: 'Optimization', progress: 0 },
]

return (
  <div className="space-y-4">
    {stages.map(stage => (
      <ProgressIndicator
        key={stage.name}
        value={stage.progress}
        label={stage.name}
        accentColor={stage.progress === 100 ? '#00ff41' : '#00ccff'}
      />
    ))}
  </div>
)
```

### Custom Format Examples
```tsx
<div className="space-y-4">
  {/* Bytes format */}
  <ProgressIndicator
    value={5242880}
    format={(v) => `${(v / 1048576).toFixed(1)}MB / 100MB`}
    label="Upload Progress"
  />

  {/* Time format */}
  <ProgressIndicator
    value={450}
    format={(v) => `${v}s / 600s`}
    label="Video Encoding"
  />

  {/* Items format */}
  <ProgressIndicator
    value={125}
    format={(v) => `${v} / 1000 items`}
    label="Database Sync"
  />
</div>
```

---

## Styling & Customization

### Custom Colors
```tsx
<ProgressIndicator
  value={50}
  accentColor="#00ccff"
  backgroundColor="rgba(0, 204, 255, 0.1)"
/>
```

### Custom Labels
```tsx
<ProgressIndicator
  value={75}
  label="Custom Label"
  showPercentage={true}
/>

<ProgressIndicator
  value={75}
  label="Custom Label"
  showPercentage={false}
/>
```

### Without Animation
```tsx
<ProgressIndicator
  value={50}
  animated={false}
/>
```

### Custom CSS Classes
```tsx
<ProgressIndicator
  value={50}
  className="my-custom-class"
/>
```

---

## Common Patterns

### Loading States
```tsx
const [isLoading, setIsLoading] = useState(true)
const [progress, setProgress] = useState(0)

useEffect(() => {
  if (!isLoading) return
  const interval = setInterval(() => {
    setProgress(prev => {
      if (prev >= 100) {
        setIsLoading(false)
        return 100
      }
      return prev + Math.random() * 20
    })
  }, 300)
  return () => clearInterval(interval)
}, [isLoading])

return (
  <ProgressIndicator
    value={Math.min(progress, 100)}
    label={isLoading ? 'Loading...' : 'Complete!'}
  />
)
```

### Status-Colored Progress
```tsx
const getColor = (value) => {
  if (value < 33) return '#ff4444'  // Red
  if (value < 66) return '#FF9D23'  // Orange
  return '#00ff41'                  // Green
}

return (
  <ProgressIndicator
    value={value}
    accentColor={getColor(value)}
    label={value < 33 ? 'Critical' : value < 66 ? 'Warning' : 'Good'}
  />
)
```

### Indeterminate Progress
```tsx
// Show progress without knowing total
<ProgressIndicator
  value={50}
  format={() => 'Processing...'}
  showPercentage={false}
  label="Working"
/>
```

---

## Accessibility

- Semantic HTML structure
- Clear labels for all progress
- Color contrast meets standards
- Percentage values always accessible
- Animated transitions are smooth

---

## Troubleshooting

**Q: Progress bar isn't animating**
A: Set `animated={true}` (the default). Check CSS animations are enabled.

**Q: Circular progress looks off**
A: Use `variant="circular"` explicitly. Adjust `size` if needed.

**Q: Label isn't showing**
A: Provide `label` prop. Percentage shows with `showPercentage={true}`.

**Q: Colors don't match theme**
A: Set explicit `accentColor` hex value. Check CSS variables are loaded.

**Q: Gauge display is incomplete**
A: Use `variant="gauge"`. Ensure `value` is between 0-100.

---

## Integration with Theme

Works with the cyberpunk theme:

```tsx
// Use theme colors
<ProgressIndicator
  value={50}
  accentColor="var(--mauk)"  // CSS variable
/>

// Or hardcode theme colors
<ProgressIndicator
  value={50}
  accentColor="#03A6A1"  // MAUK cyan
/>
```

---

## Files

- **components/ProgressIndicator.tsx** — Component implementation
- **PROGRESS_INDICATOR_GUIDE.md** — This file

See also:
- **THEME_GUIDE.md** — Color palette
- **COMPONENT_STRATEGY.md** — Component selection
- **EXAMPLE_USAGE.tsx** — Working examples
