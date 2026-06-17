# Components Index

Custom reusable components for the cyber theme. Everything is production-ready and can be dropped into any Next.js project.

---

## 📁 Files in This Directory

```
components/
├── README.md                         ← Start here for overview
├── INDEX.md                          ← This file
│
├── BotParameterPanel.tsx             ← Parameter control panel (12 KB)
├── BOT_PARAMETER_PANEL_GUIDE.md      ← Parameter panel docs (13 KB)
│
├── AuditLogCard.tsx                  ← Audit log card (9 KB)
├── AUDIT_LOG_CARD_GUIDE.md           ← Audit log docs (12 KB)
│
├── PARAMETER_PRESETS.ts              ← Pre-built configs (9 KB)
├── EXAMPLE_USAGE.tsx                 ← Copy-paste examples (15 KB)
└── INDEX.md                          ← This file
```

---

## 🎯 What Each File Does

### **README.md** (Start Here!)
High-level overview of what's available, quick start guide, and common patterns.

**Read this when:** You're new to the components and want a quick understanding.

### **BotParameterPanel.tsx**
The main reusable component. A collapsible control panel for configuring parameters with custom colors, parameter grouping, and multiple input types.

**Use this when:** Building an admin dashboard, settings page, or configuration interface.

**Key features:**
- Collapsible header
- Custom accent/label colors
- Parameter grouping
- Range sliders, text inputs, number inputs, textareas
- Loop status indicators
- Last sync timestamps
- Beautiful cyber theme styling

### **BOT_PARAMETER_PANEL_GUIDE.md**
Comprehensive documentation with all props, parameter types, examples, and use cases.

**Read this when:** You need detailed reference information or want to understand all available features.

### **PARAMETER_PRESETS.ts**
Pre-built ParameterConfig arrays for common scenarios. Use these as templates or combine them.

**Available presets:**
- `llmGenerationParams` - LLM hyperparameters (temperature, top-p, etc.)
- `timingParams` - Loop timing and frequencies
- `memoryParams` - Memory and behavior settings
- `rateLimitParams` - API rate limiting
- `gameServerParams` - Game server configuration
- `databaseParams` - Database connection settings
- `contentModerationParams` - Content filtering and safety
- `analyticsParams` - Analytics and data collection
- `brainVatAdminParams` - Complete brain.vat admin config

**Use this when:** You need parameters for common scenarios (start here, then customize).

### **EXAMPLE_USAGE.tsx**
Five copy-paste-ready examples showing different use cases.

**Includes:**
1. Simple LLM bot (minimal example)
2. Multi-bot admin panel (brain.vat style)
3. Custom color theme variations
4. Using parameter presets (game server)
5. Minimal implementation

**Use this when:** You want to see working code you can adapt for your project.

### **INDEX.md** (This File)
Quick reference showing what each file is for.

---

## 🚀 Getting Started in 3 Steps

### Step 1: Copy Component to Your Project
```bash
cp BotParameterPanel.tsx your-project/components/
cp PARAMETER_PRESETS.ts your-project/lib/
```

### Step 2: Check Out Examples
Open `EXAMPLE_USAGE.tsx` and find an example matching your use case. Copy the code.

### Step 3: Customize
Adjust colors, parameters, and event handlers to fit your project.

---

## 💡 Quick Reference

### Basic Usage
```tsx
import { BotParameterPanel } from '@/components/BotParameterPanel'
import { llmGenerationParams } from '@/lib/parameter-presets'

<BotParameterPanel
  botName="My Bot"
  parameters={llmGenerationParams}
  values={state}
  onUpdate={(key, value) => setState(prev => ({ ...prev, [key]: value }))}
  onSave={() => saveToAPI(state)}
  accentColor="#03A6A1"  // Cyan
/>
```

### With Presets
```tsx
import { parameterPresets } from '@/lib/parameter-presets'

<BotParameterPanel
  parameters={parameterPresets.gameServer}
  // ...
/>
```

### Custom Colors
```tsx
<BotParameterPanel
  accentColor="#YOUR_HEX_COLOR"
  labelColor="#YOUR_LABEL_COLOR"
  // ...
/>
```

---

## 📚 Documentation Flow

1. **New to components?** → Read `README.md`
2. **Want to see code?** → Look at `EXAMPLE_USAGE.tsx`
3. **Need parameters?** → Check `PARAMETER_PRESETS.ts`
4. **Want all details?** → Read `BOT_PARAMETER_PANEL_GUIDE.md`
5. **Implementing now?** → Reference `BotParameterPanel.tsx`

---

## 🎨 Using Brain.vat Colors

```tsx
// MAUK (Cyan)
<BotParameterPanel accentColor="#03A6A1" labelColor="#008f11" />

// ABACI (Orange)
<BotParameterPanel accentColor="#FF9D23" labelColor="#8B6914" />

// USER (Red)
<BotParameterPanel accentColor="#E63946" labelColor="#8B1A1A" />
```

---

## ✨ Features Highlight

✅ **Collapsible** - Click header to expand/collapse  
✅ **Customizable colors** - Works with any color scheme  
✅ **Parameter grouping** - Organize into logical sections  
✅ **Multiple input types** - Sliders, text, number, textarea  
✅ **Status indicators** - Show loop active, sync time, node labels  
✅ **Async support** - onSave can be a Promise  
✅ **No dependencies** - Only React + lucide-react (swappable)  
✅ **Production-ready** - Used in brain.vat admin panel  

---

## 📋 Common Use Cases

| Use Case | Start With | Key Settings |
|----------|-----------|--------------|
| LLM tuning | `EXAMPLE_USAGE.tsx` Example 1 | `llmGenerationParams` |
| Admin dashboard | `EXAMPLE_USAGE.tsx` Example 2 | `brainVatAdminParams` |
| Game config | `EXAMPLE_USAGE.tsx` Example 4 | `parameterPresets.gameServer` |
| Custom theme | `EXAMPLE_USAGE.tsx` Example 3 | Your colors + custom params |
| Minimal setup | `EXAMPLE_USAGE.tsx` Example 5 | Simplest possible config |

---

## 🔗 Related Resources

**In cyber_theme folder:**
- `README.md` - Overall theme overview
- `THEME_GUIDE.md` - Design system colors & animations
- `COMPONENT_STRATEGY.md` - When to use which component

**In this directory:**
- `README.md` - Component overview
- `BOT_PARAMETER_PANEL_GUIDE.md` - Detailed documentation
- `EXAMPLE_USAGE.tsx` - Working examples

---

## 🆘 Quick Help

**"How do I use colors?"**
→ Look at `EXAMPLE_USAGE.tsx` Example 3 (CustomThemeExamples)

**"What parameters exist?"**
→ Check `PARAMETER_PRESETS.ts` for complete list

**"Can I group parameters?"**
→ Yes! Add `group: 'GroupName'` to parameter config

**"How do I handle save?"**
→ `onSave={() => fetch('/api/settings', { method: 'POST', body: JSON.stringify(values) })}`

**"Can I customize further?"**
→ Yes! The component is yours - edit `BotParameterPanel.tsx` as needed

---

## 📦 Integration Checklist

- [ ] Copy `BotParameterPanel.tsx` to your components folder
- [ ] Copy `PARAMETER_PRESETS.ts` to your lib folder
- [ ] Install/verify `lucide-react` in your project
- [ ] Import BotParameterPanel in your page
- [ ] Choose parameters (use presets or create custom)
- [ ] Set up state management (useState or your store)
- [ ] Define onUpdate handler
- [ ] Define onSave handler
- [ ] Choose colors (brain.vat or custom)
- [ ] Test expand/collapse, inputs, and save

---

## 📞 Everything You Need

| Need | Find In |
|------|---------|
| Quick overview | `README.md` |
| All documentation | `BOT_PARAMETER_PANEL_GUIDE.md` |
| Working code | `EXAMPLE_USAGE.tsx` |
| Parameter templates | `PARAMETER_PRESETS.ts` |
| The component itself | `BotParameterPanel.tsx` |
| This index | `INDEX.md` (you are here) |

---

## ✅ Next Steps

1. **Read** `README.md` for a 2-minute overview
2. **Copy** `EXAMPLE_USAGE.tsx` example into your project
3. **Adjust** colors, parameters, and handlers
4. **Reference** `BOT_PARAMETER_PANEL_GUIDE.md` as needed
5. **Ship** your admin panel!

---

**Everything here is production-tested in brain.vat. Use with confidence!** ✨
