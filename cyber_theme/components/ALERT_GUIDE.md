# Alert Documentation

System notifications and alerts for user feedback, warnings, and messages.

---

## Overview

The `Alert` component displays notifications and alerts with configurable severity levels, icons, and actions. Perfect for system notifications, error messages, success confirmations, and general alerts.

**Use this component when:**
- Displaying system notifications
- Showing warning or error messages
- Confirming successful operations
- Alerting users to important information
- Providing actionable feedback

---

## Alert Component

Flexible notification display with multiple severity levels and variants.

### Props

```typescript
type AlertSeverity = 'info' | 'success' | 'warning' | 'error' | 'system'

interface AlertProps {
  // Required
  title: string;                   // Alert title
  message: string | ReactNode;     // Alert message

  // Optional appearance
  severity?: AlertSeverity;        // Severity level (default: 'info')
  icon?: string;                   // Custom icon
  accentColor?: string;            // Custom color (overrides severity)
  variant?: 'default' | 'compact' | 'inline';  // Layout (default: 'default')

  // Optional actions
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  dismissible?: boolean;           // Show close button (default: true)
  onDismiss?: () => void;

  // Optional styling
  className?: string;
  showBorder?: boolean;            // Show border (default: true)
  animate?: boolean;               // Entrance animation (default: true)
}
```

### Examples

#### Basic Alerts by Severity
```tsx
import { Alert } from '@/components/Alert'

export function AlertExamples() {
  return (
    <>
      {/* Success */}
      <Alert
        title="Success"
        message="Operation completed successfully."
        severity="success"
      />

      {/* Warning */}
      <Alert
        title="Warning"
        message="Memory usage is approaching limit."
        severity="warning"
      />

      {/* Error */}
      <Alert
        title="Error"
        message="Failed to connect to server. Retrying..."
        severity="error"
      />

      {/* Info */}
      <Alert
        title="Information"
        message="New update available. Learn more below."
        severity="info"
      />

      {/* System */}
      <Alert
        title="System"
        message="Scheduled maintenance 02:00-04:00 UTC"
        severity="system"
      />
    </>
  )
}
```

#### Alert with Action
```tsx
<Alert
  title="Update Available"
  message="System version 2.1.0 is ready to install"
  severity="info"
  actionLabel="Install Now"
  actionHref="/settings/install"
/>
```

#### Alert with Callback
```tsx
<Alert
  title="Confirm Action"
  message="Are you sure you want to proceed?"
  severity="warning"
  actionLabel="Proceed"
  onAction={() => handleConfirmation()}
/>
```

#### Custom Color and Icon
```tsx
<Alert
  title="Custom Alert"
  message="This is a custom styled alert"
  accentColor="#00ccff"
  icon="★"
/>
```

#### Non-Dismissible Alert
```tsx
<Alert
  title="Important"
  message="This alert cannot be dismissed"
  dismissible={false}
  severity="warning"
/>
```

---

## Variants

### Default Variant
```tsx
<Alert
  title="Title"
  message="Full-size alert with all details"
  variant="default"
/>
```
Complete alert with icon, title, message, and optional actions.

### Compact Variant
```tsx
<Alert
  title="Notice"
  message="Condensed single-line alert"
  variant="compact"
/>
```
Minimal alert for space-constrained layouts.

### Inline Variant
```tsx
<Alert
  title="Note"
  message="Inline notification without background"
  variant="inline"
/>
```
Lightweight inline notification without full card styling.

---

## Severity Levels

### Success
```tsx
<Alert
  title="Success"
  message="Action completed"
  severity="success"  // Green (#00ff41)
/>
```

### Warning
```tsx
<Alert
  title="Warning"
  message="Proceed with caution"
  severity="warning"  // Orange (#FF9D23)
/>
```

### Error
```tsx
<Alert
  title="Error"
  message="Something went wrong"
  severity="error"    // Red (#ff4444)
/>
```

### Info
```tsx
<Alert
  title="Information"
  message="Informational message"
  severity="info"     // Cyan (#00ccff)
/>
```

### System
```tsx
<Alert
  title="System"
  message="System notification"
  severity="system"   // Yellow (#EAB308)
/>
```

---

## Real-World Examples

### Error Recovery
```tsx
import { Alert } from '@/components/Alert'
import { useState } from 'react'

export function AlertErrorRecovery() {
  const [showAlert, setShowAlert] = useState(true)

  return (
    showAlert && (
      <Alert
        title="Connection Lost"
        message="Unable to reach the server. Attempting to reconnect..."
        severity="error"
        actionLabel="Try Again"
        onAction={() => window.location.reload()}
        onDismiss={() => setShowAlert(false)}
      />
    )
  )
}
```

### Brain.vat System Status
```tsx
const [systemStatus, setSystemStatus] = useState('ok')

return (
  <>
    {systemStatus === 'warning' && (
      <Alert
        title="System Warning"
        message="MAUK processing time increased. Memory optimization recommended."
        severity="warning"
        actionLabel="Optimize Now"
        onAction={optimizeMemory}
      />
    )}
    {systemStatus === 'error' && (
      <Alert
        title="System Error"
        message="ABACI dialogue loop interrupted. Manual reset required."
        severity="error"
        dismissible={false}
      />
    )}
  </>
)
```

### Operation Status
```tsx
const alerts = [
  {
    title: 'Analysis Started',
    message: 'Processing 10,000 dialogue samples',
    severity: 'info' as const,
  },
  {
    title: 'Memory Indexed',
    message: '1,247 new concepts added to archive',
    severity: 'success' as const,
  },
  {
    title: 'Update Available',
    message: 'Version 2.2.0 is ready. Recommendations: install during low-traffic hours.',
    severity: 'warning' as const,
    actionLabel: 'Learn More',
  },
]

return (
  <div className="space-y-4">
    {alerts.map((alert, idx) => (
      <Alert key={idx} {...alert} />
    ))}
  </div>
)
```

### Multi-Alert Dashboard
```tsx
export function SystemStatusDashboard() {
  const [alerts, setAlerts] = useState([])

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold">System Alerts</h2>
      
      {alerts.length === 0 ? (
        <Alert
          title="All Systems Normal"
          message="No alerts at this time"
          severity="success"
          dismissible={false}
        />
      ) : (
        alerts.map(alert => (
          <Alert
            key={alert.id}
            title={alert.title}
            message={alert.message}
            severity={alert.severity}
            actionLabel={alert.action}
            onDismiss={() => removeAlert(alert.id)}
          />
        ))
      )}
    </div>
  )
}
```

---

## Styling & Customization

### Custom Colors
```tsx
<Alert
  title="Custom"
  message="Message with custom color"
  accentColor="oklch(0.6 0.15 280)"
/>
```

### Custom Icons
```tsx
<Alert
  title="Alert"
  message="With custom icon"
  severity="info"
  icon="🎯"
/>
```

### Custom Classes
```tsx
<Alert
  title="Title"
  message="Message"
  className="shadow-2xl"
/>
```

---

## Common Patterns

### Auto-Dismiss Alert
```tsx
const [visible, setVisible] = useState(true)

useEffect(() => {
  if (visible) {
    const timer = setTimeout(() => setVisible(false), 5000)
    return () => clearTimeout(timer)
  }
}, [visible])

return (
  visible && (
    <Alert
      title="Message"
      message="This will auto-dismiss in 5 seconds"
      onDismiss={() => setVisible(false)}
    />
  )
)
```

### Alert Queue
```tsx
const [alerts, setAlerts] = useState([])

const addAlert = (title, message, severity = 'info') => {
  const id = Date.now()
  setAlerts(prev => [...prev, { id, title, message, severity }])
  setTimeout(() => removeAlert(id), 3000)
}

const removeAlert = (id) => {
  setAlerts(prev => prev.filter(a => a.id !== id))
}

return (
  <div className="space-y-2">
    {alerts.map(alert => (
      <Alert
        key={alert.id}
        {...alert}
        onDismiss={() => removeAlert(alert.id)}
      />
    ))}
  </div>
)
```

### Conditional Alerts
```tsx
{error && (
  <Alert
    title="Error"
    message={error.message}
    severity="error"
    actionLabel="Retry"
    onAction={retryOperation}
  />
)}

{success && (
  <Alert
    title="Success"
    message="Operation completed"
    severity="success"
  />
)}

{warning && (
  <Alert
    title="Warning"
    message={warning.message}
    severity="warning"
  />
)}
```

---

## Accessibility

- Semantic HTML structure
- Clear alert titles and messages
- Color contrast meets standards
- Icon and text combined for clarity
- Focus management for close button

---

## Troubleshooting

**Q: Alert isn't dismissible**
A: Set `dismissible={true}` (the default). Ensure `onDismiss` callback is provided.

**Q: Animation isn't smooth**
A: Set `animate={true}` (the default). Check that CSS animations are enabled.

**Q: Colors don't match theme**
A: Use severity level names (success/warning/error/info/system) or set explicit `accentColor`.

**Q: Action button isn't working**
A: For links, set `actionHref`. For callbacks, set `onAction` function.

**Q: Multiple alerts overlap**
A: Wrap alerts in container with spacing (e.g., `space-y-4`).

---

## Integration with Theme

Works with the cyberpunk theme:

```tsx
// Automatic severity colors
<Alert
  title="Status"
  message="Message"
  severity="warning"  // Uses theme orange
/>

// Custom theme colors
<Alert
  title="Status"
  message="Message"
  accentColor="var(--mauk)"  // Uses CSS variable
/>
```

---

## Files

- **components/Alert.tsx** — Component implementation
- **ALERT_GUIDE.md** — This file

See also:
- **THEME_GUIDE.md** — Color palette
- **COMPONENT_STRATEGY.md** — Component selection
- **EXAMPLE_USAGE.tsx** — Working examples
