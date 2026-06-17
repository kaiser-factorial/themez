# Breadcrumb Documentation

Navigation path indicator for showing current location and navigation history.

---

## Overview

The `Breadcrumb` component displays a navigation path with clickable items and customizable separators. Perfect for showing user location in navigation hierarchies.

**Use this component when:**
- Showing current page location
- Building navigation trails
- Creating "breadcrumb" navigation
- Indicating hierarchical navigation paths

---

## Props

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  accentColor?: string;            // Color (default: '#00ff41')
  separator?: string;              // Separator (default: '/')
  className?: string;
  onClick?: (item: BreadcrumbItem) => void;  // Item click callback
}
```

---

## Examples

### Basic Breadcrumb
```tsx
import { Breadcrumb } from '@/components/Breadcrumb'

export function Navigation() {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Admin', href: '/admin' },
        { label: 'Settings' },
      ]}
    />
  )
}
```

### With Icons
```tsx
<Breadcrumb
  items={[
    { label: 'Home', icon: '🏠' },
    { label: 'Archive', icon: '📚' },
    { label: 'MAUK', icon: '🧠' },
  ]}
  accentColor="#03A6A1"
/>
```

### Custom Separator
```tsx
<Breadcrumb
  items={[
    { label: 'Dashboard' },
    { label: 'Projects' },
    { label: 'Current' },
  ]}
  separator="→"
  accentColor="#FF9D23"
/>
```

### With Callbacks
```tsx
<Breadcrumb
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Users', onClick: () => navigate('/users') },
    { label: 'Profile' },
  ]}
  onClick={(item) => console.log('Clicked:', item.label)}
/>
```

---

## Real-World Examples

### E-commerce Navigation
```tsx
<Breadcrumb
  items={[
    { label: 'Shop', icon: '🛍', href: '/shop' },
    { label: 'Electronics', icon: '💻', href: '/shop/electronics' },
    { label: 'Laptops', icon: '🖥', href: '/shop/electronics/laptops' },
    { label: 'Current Product' },
  ]}
  separator="›"
/>
```

---

## Files

- **components/Breadcrumb.tsx** — Component implementation
- **BREADCRUMB_GUIDE.md** — This file
