# Badge Documentation

Tags, labels, and badge indicators for categorization and status display.

---

## Overview

The `Badge` component displays small labeled tags with customizable variants, colors, and icons. Perfect for labels, tags, status indicators, and categorization.

**Use this component when:**
- Displaying tags or labels
- Showing status indicators
- Creating category badges
- Labeling content
- Showing removable tags/filters

---

## Props

```typescript
interface BadgeProps {
  children: ReactNode;                          // Badge text
  variant?: 'default' | 'outline' | 'solid' | 'glow';  // Style
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | string;  // Color
  size?: 'sm' | 'md' | 'lg';                   // Size (default: 'md')
  icon?: string;                                // Icon/emoji
  removable?: boolean;                          // Show remove button (default: false)
  onRemove?: () => void;                        // Remove callback
  className?: string;
  onClick?: () => void;                         // Click callback
}

interface BadgeGroupProps {
  badges: Array<{ label, icon?, color?, removable?, onRemove? }>;
  variant?: 'default' | 'outline' | 'solid' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

---

## Variants

### Default
```tsx
<Badge variant="default">Tag</Badge>
```
Subtle background, no border.

### Outline
```tsx
<Badge variant="outline">Tag</Badge>
```
Transparent background, colored border.

### Solid
```tsx
<Badge variant="solid">Tag</Badge>
```
Solid colored background.

### Glow
```tsx
<Badge variant="glow">Tag</Badge>
```
With glow effect.

---

## Colors

- **default** — Green (#00ff41)
- **primary** — Red (#E63946)
- **success** — Green (#00ff41)
- **warning** — Orange (#FF9D23)
- **error** — Red (#ff4444)
- **info** — Cyan (#00ccff)
- **custom** — Any hex color string

---

## Examples

### Basic Badges
```tsx
import { Badge } from '@/components/Badge'

export function Tags() {
  return (
    <div className="space-y-3">
      <Badge>Default</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </div>
  )
}
```

### With Icons
```tsx
<Badge icon="🧠">MAUK</Badge>
<Badge icon="✨" color="warning">ABACI</Badge>
<Badge icon="#" color="info">Tag</Badge>
```

### Removable
```tsx
<Badge
  removable
  onRemove={() => console.log('Remove tag')}
>
  Removable Tag
</Badge>
```

### Group Display
```tsx
import { BadgeGroup } from '@/components/Badge'

<BadgeGroup
  badges={[
    { label: 'React', icon: '⚛', color: 'info' },
    { label: 'TypeScript', icon: '📘', color: 'primary' },
    { label: 'Tailwind', icon: '🎨', color: 'success' },
  ]}
  variant="solid"
/>
```

---

## Sizes

- **sm** — Small (px-2 py-0.5, text-xs)
- **md** — Medium (px-3 py-1, text-sm) — Default
- **lg** — Large (px-4 py-1.5, text-base)

---

## Real-World Examples

### Content Tags
```tsx
<BadgeGroup
  badges={[
    { label: 'AI', icon: '🤖' },
    { label: 'React', icon: '⚛' },
    { label: 'Tutorial', icon: '📚' },
  ]}
  variant="glow"
/>
```

### Status Indicators
```tsx
<Badge variant="solid" color="success" icon="✓">Active</Badge>
<Badge variant="solid" color="warning" icon="⏱">Pending</Badge>
<Badge variant="solid" color="error" icon="✕">Inactive</Badge>
```

### Removable Filters
```tsx
<BadgeGroup
  badges={[
    { label: 'Python', removable: true, onRemove: () => removeFilter('python') },
    { label: 'JavaScript', removable: true, onRemove: () => removeFilter('js') },
    { label: 'TypeScript', removable: true, onRemove: () => removeFilter('ts') },
  ]}
/>
```

---

## Files

- **components/Badge.tsx** — Component implementation
- **BADGE_GUIDE.md** — This file
