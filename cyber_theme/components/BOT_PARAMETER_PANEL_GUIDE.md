# BotParameterPanel Component Guide

A reusable, collapsible bot/service parameter control panel with customizable colors, parameters, and grouping. Perfect for admin dashboards, settings pages, and configuration interfaces.

---

## Features

✅ **Collapsible header** - Click to expand/collapse content  
✅ **Customizable colors** - Works with any accent color (defaults to brain.vat green)  
✅ **Multiple parameter types** - Range sliders, text input, number input, textarea  
✅ **Parameter grouping** - Organize parameters into logical sections  
✅ **Loop status indicator** - Show active/offline status  
✅ **Last sync timestamp** - Display when settings were last updated  
✅ **Custom formatting** - Format display values (e.g., percentages, seconds)  
✅ **Themed styling** - Integrates seamlessly with cyber theme  

---

## Installation

Copy `BotParameterPanel.tsx` to your project's components directory:

```bash
cp cyber_theme/components/BotParameterPanel.tsx your-project/components/
```

Dependencies (already in your project):
- React (hooks)
- lucide-react (for ChevronDown icon)

---

## Basic Usage

### Simple Example: Temperature and Top-P Controls

```tsx
import { BotParameterPanel, ParameterConfig } from '@/components/BotParameterPanel'
import { useState } from 'react'

export function MyBot() {
  const [values, setValues] = useState({
    temperature: 0.9,
    top_p: 0.95,
  })

  const parameters: ParameterConfig[] = [
    {
      key: 'temperature',
      label: 'Temperature',
      type: 'range',
      min: 0.1,
      max: 2.0,
      step: 0.05,
      description: 'Higher = more creative',
      formatDisplay: (v) => v.toFixed(2),
    },
    {
      key: 'top_p',
      label: 'Top-P',
      type: 'range',
      min: 0.1,
      max: 1.0,
      step: 0.01,
      formatDisplay: (v) => v.toFixed(2),
    },
  ]

  return (
    <BotParameterPanel
      botName="My Bot"
      parameters={parameters}
      values={values}
      onUpdate={(key, value) => setValues(prev => ({ ...prev, [key]: value }))}
      onSave={() => console.log('Saving:', values)}
      accentColor="#03A6A1"  // Cyan for MAUK
    />
  )
}
```

---

## Complete Example: Multi-Parameter Admin Panel

```tsx
import { BotParameterPanel, ParameterConfig } from '@/components/BotParameterPanel'
import { useState } from 'react'

interface BotSettings {
  temperature: number
  top_p: number
  repetition_penalty: number
  max_new_tokens: number
  frequency: number
  jitter: number
  memory_weight: number
  banned_words: string
}

export function BotAdminPanel() {
  const [values, setValues] = useState<BotSettings>({
    temperature: 0.9,
    top_p: 0.95,
    repetition_penalty: 1.3,
    max_new_tokens: 55,
    frequency: 120,
    jitter: 30,
    memory_weight: 0.7,
    banned_words: 'word1, word2',
  })

  const [isSaving, setIsSaving] = useState(false)

  const parameters: ParameterConfig[] = [
    // Generation Group
    {
      key: 'temperature',
      label: 'Temperature',
      type: 'range',
      min: 0.1,
      max: 2.0,
      step: 0.05,
      group: 'Generation',
      description: 'Creativity vs Stability',
      formatDisplay: (v) => v.toFixed(2),
    },
    {
      key: 'top_p',
      label: 'Top-P (Nucleus)',
      type: 'range',
      min: 0.1,
      max: 1.0,
      step: 0.01,
      group: 'Generation',
      description: 'Diversity of token selection',
      formatDisplay: (v) => v.toFixed(2),
    },
    {
      key: 'repetition_penalty',
      label: 'Repetition Penalty',
      type: 'range',
      min: 1.0,
      max: 2.5,
      step: 0.05,
      group: 'Generation',
      formatDisplay: (v) => v.toFixed(2),
    },
    {
      key: 'max_new_tokens',
      label: 'Max Response Length',
      type: 'range',
      min: 10,
      max: 200,
      step: 1,
      group: 'Generation',
      formatDisplay: (v) => `${v} tokens`,
    },

    // Timing Group
    {
      key: 'frequency',
      label: 'Loop Frequency (s)',
      type: 'number',
      min: 10,
      max: 600,
      step: 10,
      group: 'Timing',
      formatDisplay: (v) => `${v}s`,
    },
    {
      key: 'jitter',
      label: 'Jitter (s)',
      type: 'number',
      min: 0,
      max: 120,
      step: 5,
      group: 'Timing',
      formatDisplay: (v) => `±${v}s`,
    },

    // Memory & Behavior Group
    {
      key: 'memory_weight',
      label: 'Memory Recall Power',
      type: 'range',
      min: 0,
      max: 1,
      step: 0.05,
      group: 'Memory & Behavior',
      description: 'Probability of long-term memory retrieval',
      formatDisplay: (v) => `${(v * 100).toFixed(0)}%`,
    },
    {
      key: 'banned_words',
      label: 'Banned Words',
      type: 'textarea',
      rows: 4,
      group: 'Memory & Behavior',
      description: 'Comma-separated list of tokens to suppress',
    },
  ]

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/bot-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Save failed')
      console.log('Settings saved!')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <BotParameterPanel
      botName="MAUK"
      parameters={parameters}
      values={values}
      onUpdate={(key, value) => setValues(prev => ({ ...prev, [key]: value }))}
      onSave={handleSave}
      isSaving={isSaving}
      accentColor="#03A6A1"  // Cyan
      labelColor="#008f11"    // Dark green
      loopActive={true}
      lastSyncTime={new Date()}
      nodeLabel="Node_A"
      groupedView={true}
    />
  )
}
```

---

## Props Reference

```typescript
interface BotParameterPanelProps {
  // Required
  botName: string                          // Display name (e.g., "MAUK", "ABACI", "GPT Bot")
  parameters: ParameterConfig[]            // Array of parameter configurations
  values: Record<string, any>              // Current parameter values
  onUpdate: (key: string, value: any) => void   // Called when user changes a value
  onSave: () => void | Promise<void>      // Called when user clicks "APPLY_CHANGES"

  // Optional styling & display
  accentColor?: string                     // Primary color (default: '#00ff41' green)
  labelColor?: string                      // Label text color (default: '#008f11' dark green)
  isSaving?: boolean                       // Show loading state on save button
  isLoading?: boolean                      // Disable all inputs during load
  
  // Optional status indicators
  loopActive?: boolean                     // Show "LOOP_ACTIVE" / "LOOP_OFFLINE" badge
  lastSyncTime?: Date                      // Show last sync timestamp
  nodeLabel?: string                       // Show node identifier (e.g., "Node_A")
  
  // Optional layout
  groupedView?: boolean                    // Group parameters by `group` field (default: true)
}
```

### ParameterConfig

```typescript
interface ParameterConfig {
  key: string                              // Unique identifier
  label: string                            // Display label
  type: 'range' | 'text' | 'textarea' | 'number'

  // For range & number types
  min?: number
  max?: number
  step?: number

  // For textarea type
  rows?: number

  // Display helpers
  description?: string                     // Subtitle text
  formatDisplay?: (value: any) => string  // Format displayed value (e.g., "0.95" → "95%")
  
  // Grouping
  group?: string                           // Group name for organization (default: "General")
}
```

---

## Color Customization

### Brain.vat Theme Colors

```tsx
// MAUK (cyan)
<BotParameterPanel
  accentColor="#03A6A1"
  labelColor="#008f11"
  {...props}
/>

// ABACI (orange)
<BotParameterPanel
  accentColor="#FF9D23"
  labelColor="#8B6914"  // Darker orange for contrast
  {...props}
/>

// USER (red)
<BotParameterPanel
  accentColor="#E63946"
  labelColor="#8B1A1A"  // Darker red for contrast
  {...props}
/>
```

### Custom Projects

```tsx
// Purple theme
<BotParameterPanel
  accentColor="#A78BFA"
  labelColor="#6D28D9"
  {...props}
/>

// Blue theme
<BotParameterPanel
  accentColor="#0EA5E9"
  labelColor="#0369A1"
  {...props}
/>

// Lime theme
<BotParameterPanel
  accentColor="#84CC16"
  labelColor="#4F7728"
  {...props}
/>
```

---

## Parameter Type Examples

### Range Slider

```typescript
{
  key: 'temperature',
  label: 'Temperature',
  type: 'range',
  min: 0.1,
  max: 2.0,
  step: 0.05,
  description: 'Higher values = more creative',
  formatDisplay: (v) => v.toFixed(2),
}
```

### Text Input

```typescript
{
  key: 'model_version',
  label: 'Model Version',
  type: 'text',
  description: 'e.g., v1, v2-experimental',
}
```

### Number Input

```typescript
{
  key: 'max_tokens',
  label: 'Max Response Length',
  type: 'number',
  min: 10,
  max: 200,
  step: 5,
  formatDisplay: (v) => `${v} tokens`,
}
```

### Textarea

```typescript
{
  key: 'banned_words',
  label: 'Banned Words',
  type: 'textarea',
  rows: 4,
  description: 'Comma-separated list of tokens to suppress',
}
```

---

## Grouping Parameters

Use the `group` field to organize parameters into sections:

```typescript
const parameters: ParameterConfig[] = [
  {
    key: 'temperature',
    label: 'Temperature',
    type: 'range',
    group: 'Generation',
    // ...
  },
  {
    key: 'frequency',
    label: 'Loop Frequency',
    type: 'number',
    group: 'Timing',
    // ...
  },
]

// In component:
<BotParameterPanel
  parameters={parameters}
  groupedView={true}  // Shows "Generation", "Timing" sections
  {...props}
/>
```

---

## Integration with Admin Pages

### From Your brain.vat Admin Page

```tsx
'use client'

import { BotParameterPanel, ParameterConfig } from '@/components/BotParameterPanel'
import { useState } from 'react'

interface BotSettings {
  bot: string
  temperature: number
  top_p: number
  repetition_penalty: number
  max_new_tokens: number
  // ... other fields
}

export default function AdminPanel() {
  const [settings, setSettings] = useState<BotSettings[]>([])
  const [isSaving, setIsSaving] = useState<string | null>(null)

  const botConfig = settings.find(s => s.bot === 'a')
  if (!botConfig) return null

  const parameters: ParameterConfig[] = [
    {
      key: 'temperature',
      label: 'Temperature',
      type: 'range',
      min: 0.1,
      max: 2.0,
      step: 0.05,
      group: 'Generation',
      formatDisplay: (v) => v.toFixed(2),
    },
    // ... more parameters
  ]

  const handleUpdate = (key: string, value: any) => {
    setSettings(prev => prev.map(s =>
      s.bot === 'a' ? { ...s, [key]: value } : s
    ))
  }

  const handleSave = async () => {
    setIsSaving('a')
    try {
      const response = await fetch('/api/bot-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(botConfig),
      })
      if (!response.ok) throw new Error('Save failed')
    } finally {
      setIsSaving(null)
    }
  }

  return (
    <BotParameterPanel
      botName="MAUK"
      parameters={parameters}
      values={botConfig}
      onUpdate={handleUpdate}
      onSave={handleSave}
      isSaving={isSaving === 'a'}
      accentColor="#03A6A1"
      labelColor="#008f11"
      loopActive={true}
      lastSyncTime={botConfig.updated_at ? new Date(botConfig.updated_at) : undefined}
      nodeLabel="Node_A"
    />
  )
}
```

---

## Styling Notes

The component uses inline styles with color props, so it works without Tailwind configuration. It's designed to blend with the cyber theme but work in any project.

### Customizing Appearance

The component applies colors to:
- Border (accent color)
- Background tint (accent + 5% opacity)
- Text labels (label color)
- Input focus states
- Buttons and interactive elements

You can override by changing `accentColor` and `labelColor` props.

---

## Real-World Use Cases

### LLM Parameter Tuner
```tsx
<BotParameterPanel
  botName="Claude Instance"
  parameters={llmParams}
  accentColor="#6B5B95"
  // ...
/>
```

### Game Server Settings
```tsx
<BotParameterPanel
  botName="Server 1"
  parameters={gameServerParams}
  accentColor="#FF6B9D"
  loopActive={isServerRunning}
  // ...
/>
```

### API Gateway Config
```tsx
<BotParameterPanel
  botName="Gateway A"
  parameters={gatewayParams}
  accentColor="#0EA5E9"
  nodeLabel="Zone_US-EAST-1"
  // ...
/>
```

### AI Model Fine-Tuning
```tsx
<BotParameterPanel
  botName="Model v3.2"
  parameters={trainingParams}
  accentColor="#84CC16"
  lastSyncTime={lastTrainTime}
  // ...
/>
```

---

## Accessibility & Performance

- ✅ Keyboard navigable (tab through inputs)
- ✅ Semantic HTML structure
- ✅ ARIA labels on buttons
- ✅ Respects `disabled` states
- ✅ Smooth transitions and animations
- ✅ No unnecessary re-renders

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

---

## Troubleshooting

**Q: Colors not applying**
A: Ensure you're passing hex colors (e.g., `#03A6A1`) not CSS variable names.

**Q: Range slider not responding**
A: Check that `min`, `max`, and `step` are numbers, not strings.

**Q: onSave not firing**
A: Make sure `onSave` is a function. If async, ensure you're handling Promise properly.

**Q: Parameters not grouping**
A: Ensure `groupedView={true}` and each parameter has a `group` field.

---

## License

Reusable component from brain.vat theme system. Use freely in your projects!
