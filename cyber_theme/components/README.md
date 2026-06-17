# Cyber Theme Custom Components

Reusable, production-ready components for the brain.vat cyber theme. Build admin panels, control dashboards, and configuration interfaces with minimal code.

> **Note:** These custom components work alongside the excellent [**ccru**](https://github.com/lumpenspace/ccru) component library by [@lumpenspace](https://github.com/lumpenspace). See [Component Strategy](#component-strategy) below for how they work together.

---

## 📦 Components Available

### **BotParameterPanel**
A collapsible, customizable parameter control panel for configuring bot settings, LLM hyperparameters, server settings, and more.

- **File:** `BotParameterPanel.tsx`
- **Features:** Collapsible headers, custom colors, parameter grouping, range sliders, text/number inputs, textareas
- **Guide:** See `BOT_PARAMETER_PANEL_GUIDE.md`

### **AuditLogCard**
A collapsible card component for displaying audit logs, event records, transaction histories, and structured data with multiple section types.

- **File:** `AuditLogCard.tsx`
- **Features:** Collapsible header, multiple section types (text, code, grid, tags, stats), status indicators, badges, timestamps, custom rendering
- **Guide:** See `AUDIT_LOG_CARD_GUIDE.md`

### **Parameter Presets**
Pre-built parameter configurations for common use cases (LLM settings, timing, memory, rate limiting, etc.)

- **File:** `PARAMETER_PRESETS.ts`
- **Includes:** LLM generation, timing, memory, API rate limiting, game servers, databases, content moderation, analytics

### **Example Implementations**
Real-world examples showing how to use both components in different scenarios.

- **File:** `EXAMPLE_USAGE.tsx`
- **Examples:** LLM bots, admin panels, audit logs, API logs, error logs, admin actions

---

## 🚀 Quick Start

### 1. Copy Component to Your Project
```bash
cp BotParameterPanel.tsx your-project/components/
cp PARAMETER_PRESETS.ts your-project/lib/  # or components/
```

### 2. Import & Use
```tsx
import { BotParameterPanel } from '@/components/BotParameterPanel'
import { llmGenerationParams } from '@/lib/parameter-presets'

export function MyBot() {
  const [values, setValues] = useState({ temperature: 0.9 })

  return (
    <BotParameterPanel
      botName="My Bot"
      parameters={llmGenerationParams}
      values={values}
      onUpdate={(key, value) => setValues(prev => ({ ...prev, [key]: value }))}
      onSave={() => console.log('Saved!', values)}
      accentColor="#03A6A1"  // Cyan
    />
  )
}
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `BotParameterPanel.tsx` | Main component implementation |
| `BOT_PARAMETER_PANEL_GUIDE.md` | Complete guide with all features and options |
| `PARAMETER_PRESETS.ts` | Pre-built parameter configurations |
| `EXAMPLE_USAGE.tsx` | Copy-paste-ready examples |
| `README.md` | This file |

---

## 🎯 Use Cases

### Admin Dashboards
Control LLM hyperparameters, bot behavior, timing, and memory settings from a single interface.

```tsx
<BotParameterPanel
  botName="MAUK"
  parameters={brainVatAdminParams}
  accentColor="#03A6A1"
  loopActive={isRunning}
/>
```

### Game Server Management
Configure player limits, difficulty, respawn times, and server maintenance.

```tsx
<BotParameterPanel
  botName="Server #1"
  parameters={parameterPresets.gameServer}
  accentColor="#FF6B9D"
/>
```

### API Configuration
Set rate limits, timeout values, retry attempts, and caching policies.

```tsx
<BotParameterPanel
  botName="Gateway"
  parameters={parameterPresets.rateLimit}
  accentColor="#0EA5E9"
/>
```

### Content Moderation
Adjust toxicity thresholds, filter versions, and content policies.

```tsx
<BotParameterPanel
  botName="Moderator"
  parameters={parameterPresets.contentModeration}
  accentColor="#84CC16"
/>
```

---

## 🎨 Color Schemes

### Brain.vat Theme
```tsx
// MAUK (Cyan)
accentColor="#03A6A1"
labelColor="#008f11"

// ABACI (Orange)
accentColor="#FF9D23"
labelColor="#8B6914"

// USER (Red)
accentColor="#E63946"
labelColor="#8B1A1A"
```

### Custom Themes
```tsx
// Purple
accentColor="#A78BFA"
labelColor="#6D28D9"

// Blue
accentColor="#0EA5E9"
labelColor="#0369A1"

// Lime
accentColor="#84CC16"
labelColor="#4F7728"
```

---

## 📖 Common Patterns

### Multi-Bot Admin Panel
```tsx
{settings.map(botSetting => (
  <BotParameterPanel
    key={botSetting.bot}
    botName={botSetting.bot === 'a' ? 'MAUK' : 'ABACI'}
    parameters={adminParams}
    values={botSetting}
    onUpdate={(key, value) => updateBot(botSetting.bot, key, value)}
    onSave={() => saveBotSettings(botSetting.bot)}
    accentColor={botSetting.bot === 'a' ? '#03A6A1' : '#FF9D23'}
  />
))}
```

### With Status Indicators
```tsx
<BotParameterPanel
  botName="MAUK"
  parameters={parameters}
  values={values}
  onUpdate={handleUpdate}
  onSave={handleSave}
  loopActive={isLoopRunning}
  lastSyncTime={lastSync}
  nodeLabel="Node_A"
/>
```

### Grouped Parameters
```tsx
const params = [
  { key: 'temp', label: 'Temperature', group: 'Generation', ... },
  { key: 'top_p', label: 'Top-P', group: 'Generation', ... },
  { key: 'freq', label: 'Frequency', group: 'Timing', ... },
]

<BotParameterPanel
  parameters={params}
  groupedView={true}  // Shows Generation, Timing sections
  {...props}
/>
```

---

## 🧩 Parameter Types

### Range Slider
```typescript
{
  key: 'temperature',
  type: 'range',
  min: 0.1,
  max: 2.0,
  step: 0.05,
}
```

### Text Input
```typescript
{
  key: 'model_version',
  type: 'text',
  description: 'e.g., v1, v2',
}
```

### Number Input
```typescript
{
  key: 'max_tokens',
  type: 'number',
  min: 10,
  max: 500,
  step: 10,
}
```

### Textarea
```typescript
{
  key: 'banned_words',
  type: 'textarea',
  rows: 4,
  description: 'Comma-separated',
}
```

---

## 💡 Tips

### Format Display Values
```typescript
{
  key: 'memory_weight',
  formatDisplay: (v) => `${(v * 100).toFixed(0)}%`,
}

// Show "70%" instead of "0.7"
```

### Add Descriptions
```typescript
{
  key: 'temperature',
  description: 'Higher = more creative, lower = more stable',
}
```

### Group Related Parameters
```typescript
{
  key: 'temperature',
  group: 'Generation',  // Creates a section
}
```

### Handle Async Saves
```typescript
onSave={async () => {
  const response = await fetch('/api/settings', {
    method: 'POST',
    body: JSON.stringify(values),
  })
  if (!response.ok) throw new Error('Save failed')
}}
```

---

## 🔧 Customization

### Custom Colors
```tsx
<BotParameterPanel
  accentColor="#YOUR_COLOR"
  labelColor="#YOUR_LABEL_COLOR"
  {...props}
/>
```

### No Grouping
```tsx
<BotParameterPanel
  groupedView={false}  // All params in one section
  {...props}
/>
```

### Disable Input
```tsx
<BotParameterPanel
  isLoading={true}  // Disables all inputs
  {...props}
/>
```

### Show Saving State
```tsx
<BotParameterPanel
  isSaving={true}  // Loading state on save button
  {...props}
/>
```

---

## 📋 Component Props

```typescript
interface BotParameterPanelProps {
  // Required
  botName: string
  parameters: ParameterConfig[]
  values: Record<string, any>
  onUpdate: (key: string, value: any) => void
  onSave: () => void | Promise<void>

  // Optional
  accentColor?: string         // Default: '#00ff41'
  labelColor?: string          // Default: '#008f11'
  isSaving?: boolean
  isLoading?: boolean
  loopActive?: boolean
  lastSyncTime?: Date
  nodeLabel?: string
  groupedView?: boolean        // Default: true
}
```

---

## 🎬 Getting Started

1. **Copy files to your project:**
   ```bash
   cp BotParameterPanel.tsx your-project/components/
   cp PARAMETER_PRESETS.ts your-project/lib/
   ```

2. **Check out examples:**
   Open `EXAMPLE_USAGE.tsx` and copy what you need

3. **Read the guide:**
   `BOT_PARAMETER_PANEL_GUIDE.md` has detailed documentation

4. **Choose your parameters:**
   Use presets from `PARAMETER_PRESETS.ts` or create custom ones

5. **Integrate into your page:**
   ```tsx
   import { BotParameterPanel } from '@/components/BotParameterPanel'
   
   export default function SettingsPage() {
     // ... your code
     return <BotParameterPanel {...props} />
   }
   ```

---

## 🐛 Troubleshooting

**Q: Colors not showing**
A: Make sure to pass hex colors (e.g., `#03A6A1`), not CSS variable names

**Q: Collapse button not working**
A: Check that you're not preventing default click events on the header

**Q: Values not updating**
A: Ensure `onUpdate` is properly updating state: `setValues(prev => ({ ...prev, [key]: value }))`

**Q: Save button disabled**
A: Check `isSaving` or `isLoading` props, or if `onSave` is throwing errors

---

## 📦 Dependencies

- React 16.8+ (hooks)
- lucide-react (for ChevronDown icon, can be swapped)

No other dependencies! Works in any Next.js project.

---

## 📄 License

Part of the brain.vat cyber theme system. Use freely in your projects!

---

## 🔗 Related Files

- **Theme Guide:** `../THEME_GUIDE.md` - Complete design system
- **Component Strategy:** `../COMPONENT_STRATEGY.md` - When to use which component
- **Implementation Index:** `../IMPLEMENTATION_INDEX.md` - Overview of all resources
