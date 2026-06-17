# LoadingProgress Documentation

Top-level loading bar for page transitions and long-running operations.

---

## Overview

The `LoadingProgress` component displays a progress bar at the top or bottom of the page. Automatically animates to 90% while loading, then completes when done.

**Use this component when:**
- Showing page navigation progress
- Indicating long-running operations
- Creating app-wide loading indicators
- Simulating task progress

---

## Props

```typescript
interface LoadingProgressProps {
  isLoading: boolean;               // Whether to show progress
  accentColor?: string;             // Color (default: '#00ff41')
  position?: 'top' | 'bottom' | 'inline';  // Position (default: 'top')
  simulateProgress?: boolean;       // Auto-animate progress (default: true)
  onComplete?: () => void;          // Callback when complete
  className?: string;
}
```

---

## Examples

### Top Position (Default)
```tsx
import { LoadingProgress } from '@/components/LoadingProgress'
import { useState } from 'react'

export function Page() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <LoadingProgress isLoading={isLoading} />
      {/* Page content */}
    </>
  )
}
```

### Bottom Position
```tsx
<LoadingProgress
  isLoading={isLoading}
  position="bottom"
  accentColor="#FF9D23"
/>
```

### With Callback
```tsx
<LoadingProgress
  isLoading={isLoading}
  onComplete={() => console.log('Loading complete!')}
/>
```

---

## Real-World Examples

### Page Navigation
```tsx
export function App() {
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsNavigating(true)
    const handleStop = () => setIsNavigating(false)

    // Your router integration here
    return () => {
      // Cleanup
    }
  }, [])

  return (
    <>
      <LoadingProgress isLoading={isNavigating} position="top" />
      {/* App content */}
    </>
  )
}
```

---

## Files

- **components/LoadingProgress.tsx** — Component implementation
- **LOADING_PROGRESS_GUIDE.md** — This file
