# Spinner Documentation

Animated loading indicators in multiple styles.

---

## Overview

The `Spinner` component displays animated loading states with ring, dots, or pulse animations. Perfect for indicating async operations and loading states.

**Use this component when:**
- Showing async operation progress
- Indicating page or component loading
- Displaying data fetch in progress
- Creating "please wait" indicators

---

## Props

```typescript
interface SpinnerProps {
  accentColor?: string;           // Color (default: '#00ff41')
  size?: 'sm' | 'md' | 'lg';     // Size (default: 'md')
  label?: string;                 // Loading label (default: 'Loading')
  showLabel?: boolean;            // Show label (default: true)
  variant?: 'dots' | 'ring' | 'pulse';  // Style (default: 'ring')
  className?: string;
}
```

---

## Variants

### Ring (Default)
```tsx
<Spinner variant="ring" size="md" label="Loading..." />
```
Double-rotating rings effect.

### Dots
```tsx
<Spinner variant="dots" size="md" label="Processing..." />
```
Bouncing dots effect.

### Pulse
```tsx
<Spinner variant="pulse" size="md" label="Waiting..." />
```
Pulsing circle effect.

---

## Examples

### Basic Spinners
```tsx
import { Spinner } from '@/components/Spinner'

export function LoadingStates() {
  return (
    <div className="space-y-6">
      <Spinner variant="ring" size="sm" accentColor="#03A6A1" />
      <Spinner variant="dots" size="md" accentColor="#FF9D23" />
      <Spinner variant="pulse" size="lg" accentColor="#00ff41" />
    </div>
  )
}
```

### With Custom Colors
```tsx
<Spinner
  variant="ring"
  size="md"
  label="Syncing..."
  accentColor="#00ccff"
/>
```

---

## Real-World Examples

### Page Loading
```tsx
export function DataPage() {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner label="Loading data..." />
        </div>
      ) : (
        <div>{/* Content */}</div>
      )}
    </div>
  )
}
```

---

## Files

- **components/Spinner.tsx** — Component implementation
- **SPINNER_GUIDE.md** — This file
