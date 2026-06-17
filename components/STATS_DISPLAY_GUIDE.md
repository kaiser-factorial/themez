# StatsDisplay Documentation

Metric cards for displaying statistics, KPIs, and system metrics.

---

## Overview

The `StatsDisplay` component shows key metrics in a grid or row layout with optional change indicators. Perfect for dashboards, admin panels, and status pages.

**Use this component when:**
- Displaying system metrics and KPIs
- Building dashboards with statistics
- Showing performance indicators
- Creating status overview pages

---

## Props

```typescript
interface Stat {
  label: string;                    // Metric label
  value: string | number;           // Current value
  change?: string | number;         // Change indicator
  changeType?: 'positive' | 'negative' | 'neutral';  // Change color
  icon?: string;                    // Icon/emoji
  color?: string;                   // Custom color
}

interface StatsDisplayProps {
  stats: Stat[];
  accentColor?: string;             // Default color
  layout?: 'grid' | 'row';         // Layout style (default: 'grid')
  columns?: 1 | 2 | 3 | 4;         // Grid columns (default: 2)
  className?: string;
}
```

---

## Examples

### Brain.vat Metrics
```tsx
import { BrainVatStats } from '@/components/StatsDisplay'

export function Dashboard() {
  return <BrainVatStats />
}
```

### Custom Stats
```tsx
import { StatsDisplay } from '@/components/StatsDisplay'

export function SystemMetrics() {
  const stats = [
    { label: 'Users', value: '12,547', change: '+342', changeType: 'positive' as const, icon: '👥' },
    { label: 'Revenue', value: '$45.2K', change: '+12%', changeType: 'positive' as const, icon: '💰' },
    { label: 'Errors', value: '23', change: '-5', changeType: 'positive' as const, icon: '⚠' },
    { label: 'Uptime', value: '99.98%', change: 'stable', changeType: 'neutral' as const, icon: '⏱' },
  ]

  return <StatsDisplay stats={stats} columns={4} />
}
```

---

## Change Types

- **positive** — Green color, good indicator
- **negative** — Red color, bad indicator
- **neutral** — Gray color, stable indicator

---

## Real-World Examples

### Admin Dashboard
```tsx
const metrics = [
  { label: 'Active Sessions', value: '1,247', change: '+45', changeType: 'positive', icon: '🔗' },
  { label: 'Memory Usage', value: '78%', change: '+3%', changeType: 'negative', icon: '💾' },
  { label: 'CPU Load', value: '42%', change: '-8%', changeType: 'positive', icon: '⚙' },
  { label: 'API Latency', value: '45ms', change: '+2ms', changeType: 'negative', icon: '⏱' },
]

return <StatsDisplay stats={metrics} columns={2} />
```

---

## Files

- **components/StatsDisplay.tsx** — Component implementation
- **STATS_DISPLAY_GUIDE.md** — This file
