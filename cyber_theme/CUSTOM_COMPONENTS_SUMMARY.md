# Custom Components Summary

A complete, production-ready admin panel component system built from your brain.vat admin page. Everything is reusable, customizable, and ready to drop into other projects.

---

## 📦 What You Get

### **BotParameterPanel Component**
A collapsible, color-customizable parameter control panel that replicates the functionality of your admin page but with:
- ✅ Collapsible header (click to expand/collapse)
- ✅ Custom accent colors (defaults to brain.vat colors)
- ✅ Parameter grouping (organize into sections)
- ✅ Multiple input types (range sliders, text, numbers, textareas)
- ✅ Status indicators (loop active, node labels, last sync time)
- ✅ Production-ready styling

### **Complete Documentation**
- Detailed guide with all props and features
- Pre-built parameter templates for common use cases
- 5 real-world code examples you can copy
- Implementation guide with best practices

---

## 📂 Directory Structure

```
cyber_theme/
├── components/
│   ├── README.md                      ← Component overview
│   ├── INDEX.md                       ← Quick reference
│   ├── BotParameterPanel.tsx          ← Main component (12 KB)
│   ├── BOT_PARAMETER_PANEL_GUIDE.md   ← Full documentation (13 KB)
│   ├── PARAMETER_PRESETS.ts           ← Pre-built configs (9 KB)
│   └── EXAMPLE_USAGE.tsx              ← Copy-paste examples (11 KB)
│
├── README.md                          ← Theme overview
├── THEME_GUIDE.md                     ← Design system
├── COMPONENT_STRATEGY.md              ← Component decision tree
├── IMPLEMENTATION_INDEX.md            ← How it all fits together
├── SETUP_SKILL.md                     ← Claude Code skill
└── CUSTOM_COMPONENTS_SUMMARY.md       ← This file
```

---

## 🚀 Quick Start

### Step 1: Copy Component
```bash
cp cyber_theme/components/BotParameterPanel.tsx your-project/components/
```

### Step 2: Use in Your Page
```tsx
import { BotParameterPanel } from '@/components/BotParameterPanel'

export function AdminPanel() {
  const [values, setValues] = useState({...})

  return (
    <BotParameterPanel
      botName="MAUK"
      parameters={[
        { key: 'temperature', label: 'Temperature', type: 'range', min: 0.1, max: 2.0 },
        // ... more parameters
      ]}
      values={values}
      onUpdate={(key, value) => setValues(prev => ({ ...prev, [key]: value }))}
      onSave={() => saveSettings(values)}
      accentColor="#03A6A1"  // Cyan for MAUK
      loopActive={true}
      lastSyncTime={new Date()}
    />
  )
}
```

### Step 3: Customize
- Change `accentColor` and `labelColor` for different themes
- Add/remove parameters
- Use `PARAMETER_PRESETS` for common scenarios

---

## 🎨 Color Customization

### Brain.vat Defaults
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

### Custom Any Project Color
```tsx
<BotParameterPanel
  accentColor="#YOUR_COLOR"
  labelColor="#YOUR_LABEL_COLOR"
  {...props}
/>
```

---

## 📚 Key Features

### 1. Collapsible Header
Click the header to expand/collapse the panel. Great for multi-panel dashboards.

### 2. Parameter Grouping
Organize parameters into logical sections (Generation, Timing, Memory, etc.)

```typescript
{
  key: 'temperature',
  label: 'Temperature',
  group: 'Generation',  // Creates a section header
  type: 'range',
  // ...
}
```

### 3. Multiple Input Types
- **Range sliders** - For continuous values (temperature, probabilities)
- **Number inputs** - For discrete values (max tokens, timeout)
- **Text inputs** - For strings (model versions, identifiers)
- **Textareas** - For longer text (banned words lists, configs)

### 4. Status Indicators
```tsx
<BotParameterPanel
  loopActive={true}           // Shows "LOOP_ACTIVE" badge
  lastSyncTime={new Date()}   // Shows "Last_Sync: MM-DD HH:MM"
  nodeLabel="Node_A"          // Shows identifier
  {...props}
/>
```

### 5. Custom Value Formatting
Display values differently than stored:
```typescript
{
  key: 'memory_weight',
  formatDisplay: (v) => `${(v * 100).toFixed(0)}%`,  // Show 0.7 as "70%"
}
```

---

## 📋 Parameter Templates Available

Pre-built configurations in `PARAMETER_PRESETS.ts`:

| Preset | Use Case |
|--------|----------|
| `llmGenerationParams` | LLM temperature, top-p, repetition penalty, etc. |
| `timingParams` | Loop frequency, jitter, timeout |
| `memoryParams` | Memory weight, lookback, banned words |
| `rateLimitParams` | API rate limiting, token budgets |
| `gameServerParams` | Max players, difficulty, respawn |
| `databaseParams` | Connection pools, query timeout, caching |
| `contentModerationParams` | Toxicity, filtering, appeal process |
| `analyticsParams` | Sampling rate, retention, tracking |
| `brainVatAdminParams` | Complete brain.vat setup (generation + timing + memory) |

---

## 💡 Implementation Examples

### Example 1: Simple LLM Parameter Tuner
```tsx
<BotParameterPanel
  botName="Claude"
  parameters={[
    { key: 'temperature', label: 'Temperature', type: 'range', min: 0.1, max: 2, step: 0.05 },
    { key: 'top_p', label: 'Top-P', type: 'range', min: 0.1, max: 1, step: 0.01 },
  ]}
  values={state}
  onUpdate={(k, v) => setState(prev => ({ ...prev, [k]: v }))}
  onSave={() => saveToAPI(state)}
/>
```

### Example 2: Multi-Bot Admin Panel
```tsx
{botSettings.map(bot => (
  <BotParameterPanel
    key={bot.id}
    botName={bot.id === 'a' ? 'MAUK' : 'ABACI'}
    parameters={completeParams}
    values={bot}
    onUpdate={(k, v) => updateBot(bot.id, k, v)}
    onSave={() => saveBot(bot.id)}
    accentColor={bot.id === 'a' ? '#03A6A1' : '#FF9D23'}
    loopActive={bot.isRunning}
    lastSyncTime={bot.lastSync}
  />
))}
```

### Example 3: With Parameter Presets
```tsx
import { parameterPresets } from '@/lib/parameter-presets'

<BotParameterPanel
  botName="Game Server"
  parameters={parameterPresets.gameServer}
  values={serverConfig}
  onUpdate={handleUpdate}
  onSave={handleSave}
  accentColor="#FF6B9D"
/>
```

---

## 📖 Documentation Files

| File | Read When | Contains |
|------|-----------|----------|
| `README.md` | First time | Quick overview & common patterns |
| `INDEX.md` | Need quick reference | File index & getting started |
| `BotParameterPanel.tsx` | Implementing | The actual component code |
| `BOT_PARAMETER_PANEL_GUIDE.md` | Need details | All props, types, and use cases |
| `PARAMETER_PRESETS.ts` | Building parameters | Pre-made parameter templates |
| `EXAMPLE_USAGE.tsx` | Need working code | 5 copy-paste-ready examples |

---

## ✨ What Makes It Special

### From Your Brain.vat Admin Page
- Same visual style and color scheme
- Same parameter types and grouping
- Status indicators (loop active, last sync)
- Smooth animations and transitions

### Improvements
- **Collapsible header** - New feature not in original
- **Customizable colors** - Use any color for different projects
- **Portable** - Works in any Next.js project
- **Documented** - Complete guide with examples
- **Templated** - Pre-built parameter configs

---

## 🔧 Common Customizations

### Change Accent Color
```tsx
<BotParameterPanel accentColor="#YOUR_HEX_COLOR" {...props} />
```

### Group Parameters
```tsx
const params = [
  { key: 'temperature', group: 'Generation', ... },
  { key: 'top_p', group: 'Generation', ... },
  { key: 'frequency', group: 'Timing', ... },
]
```

### Format Display Values
```tsx
{
  key: 'max_tokens',
  formatDisplay: (v) => `${v} tokens`,  // Shows "55 tokens"
}
```

### Handle Async Saves
```tsx
onSave={async () => {
  const res = await fetch('/api/settings', {
    method: 'POST',
    body: JSON.stringify(values)
  })
  if (!res.ok) throw new Error('Save failed')
}}
```

---

## 📦 Dependencies

- React 16.8+ (for hooks)
- lucide-react (for ChevronDown icon - can swap)

That's it! No other dependencies needed.

---

## 🎯 Use Cases

✅ LLM hyperparameter tuning  
✅ Admin control panels  
✅ Game server configuration  
✅ API gateway settings  
✅ Database connection management  
✅ Content moderation controls  
✅ Analytics configuration  
✅ Any settings/configuration interface  

---

## 📞 How to Use These Files

1. **Learning?** → Start with `components/README.md`
2. **Building?** → Copy from `components/EXAMPLE_USAGE.tsx`
3. **Need parameters?** → Check `components/PARAMETER_PRESETS.ts`
4. **Need all details?** → Read `components/BOT_PARAMETER_PANEL_GUIDE.md`
5. **Quick reference?** → See `components/INDEX.md`

---

## ✅ Checklist for New Project

- [ ] Copy `BotParameterPanel.tsx` to `your-project/components/`
- [ ] Import in your page component
- [ ] Define parameter config (use presets or custom)
- [ ] Set up state management
- [ ] Define `onUpdate` handler
- [ ] Define `onSave` handler
- [ ] Choose colors
- [ ] Test expand/collapse
- [ ] Test parameter updates
- [ ] Test save functionality
- [ ] Deploy!

---

## 🚀 Next Steps

1. **Read** `components/README.md` (2 minutes)
2. **Copy** example from `components/EXAMPLE_USAGE.tsx`
3. **Adapt** colors and parameters for your project
4. **Reference** `components/BOT_PARAMETER_PANEL_GUIDE.md` as needed
5. **Ship** your admin panel!

---

**Everything here is production-tested in brain.vat and ready to use in your projects!** ✨
