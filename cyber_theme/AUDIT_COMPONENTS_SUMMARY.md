# AuditLogCard Component Summary

A complete, production-ready audit log card component built from your brain.vat audit page. Perfect for displaying logs, events, transactions, traces, and any structured data with multiple sections.

---

## 🎯 What You Get

### **AuditLogCard Component**
A collapsible card for displaying structured data with:
- ✅ Collapsible header (click to expand/collapse)
- ✅ Multiple section types (text, code, grid, tags, stats, custom)
- ✅ Custom accent colors (defaults to brain.vat audit colors)
- ✅ Status indicators (animated dots, badges, timestamps)
- ✅ Metadata footer (optional key-value stats)
- ✅ Custom React component rendering
- ✅ Production-ready styling

### **Complete Documentation**
- Detailed guide with all props and section types
- 4 real-world code examples you can copy
- Implementation guide with best practices

---

## 📂 Directory Structure

```
cyber_theme/
├── components/
│   ├── AuditLogCard.tsx               ← Main component (10 KB)
│   ├── AUDIT_LOG_CARD_GUIDE.md        ← Full documentation (14 KB)
│   ├── EXAMPLE_USAGE.tsx              ← 4 audit examples included
│   └── ...other components
│
└── AUDIT_COMPONENTS_SUMMARY.md        ← This file
```

---

## 🚀 Quick Start

### Step 1: Copy Component
```bash
cp cyber_theme/components/AuditLogCard.tsx your-project/components/
```

### Step 2: Use in Your Page
```tsx
import { AuditLogCard, LogSection } from '@/components/AuditLogCard'

const sections: LogSection[] = [
  {
    key: 'input',
    title: 'User Input',
    type: 'text',
    content: 'What is the capital of France?',
  },
  {
    key: 'output',
    title: 'Generated Output',
    type: 'text',
    content: 'Paris is the capital and most populous city of France.',
  },
]

export function MyAuditLog() {
  return (
    <AuditLogCard
      title="Query Log"
      sections={sections}
      timestamp={new Date()}
      botColor="cyan"
      accentColor="#00ccff"
    />
  )
}
```

### Step 3: Customize
- Change `accentColor` and `labelColor` for different themes
- Add more sections (code, grid, tags, stats)
- Add status badges and metadata

---

## 📚 Section Types

### Text (Quoted)
```typescript
{
  key: 'output',
  title: 'Generated Output',
  type: 'text',
  content: 'This is a quoted response...',
}
```

### Code (Monospace Block)
```typescript
{
  key: 'code',
  title: 'Code Block',
  type: 'code',
  content: 'function hello() { console.log("world"); }',
}
```

### Grid (Parameter Display)
```typescript
{
  key: 'params',
  title: 'Hyperparameters',
  type: 'grid',
  content: {
    temperature: 0.9,
    'top-p': 0.95,
    penalty: 1.3,
  },
}
```

### Tags (Badges)
```typescript
{
  key: 'tokens',
  title: 'Tokens',
  type: 'tags',
  content: ['spam', 'abuse', 'offensive'],
}
```

### Stats (Footer)
```typescript
{
  key: 'diagnostics',
  title: 'Diagnostics',
  type: 'stats',
  content: {
    'FIDELITY': 'OPTIMAL',
    'STATUS': 'PASSED',
  },
}
```

### Custom (React Component)
```typescript
{
  key: 'custom',
  title: 'Custom Content',
  type: 'custom',
  content: null,
}

// In component:
<AuditLogCard
  renderCustomSection={(section) => {
    if (section.key === 'custom') {
      return <YourComponent />
    }
  }}
/>
```

---

## 🎨 Color Customization

### Brain.vat Audit Colors
```tsx
// MAUK (Cyan)
<AuditLogCard
  accentColor="#00ccff"
  labelColor="#008f11"
  botColor="cyan"
/>

// ABACI (Orange)
<AuditLogCard
  accentColor="#ffbf00"
  labelColor="#8B6914"
  botColor="orange"
/>
```

### Custom Any Project Color
```tsx
<AuditLogCard
  accentColor="#A78BFA"        // Purple
  labelColor="#6D28D9"
  botColor="custom"
  customBotColor="#A78BFA"
  customBotLabel="My Service"
/>
```

---

## 🎯 Use Cases

✅ **Audit Logs** - Display inference records with prompts, responses, settings  
✅ **Event Logs** - System events, state changes, user actions  
✅ **Transaction Logs** - Database operations, API requests/responses  
✅ **Error Logs** - Exception traces, recovery information  
✅ **Trace Logs** - Execution traces, debugging information  
✅ **Activity Streams** - User activities, admin actions  
✅ **Notification History** - Message delivery logs  

---

## 💡 Implementation Examples

### Brain.vat Audit Log
```tsx
<AuditLogCard
  title={log.bot_name}
  sections={[
    { key: 'input', title: 'Input', type: 'code', content: log.prompt },
    { key: 'output', title: 'Output', type: 'text', content: log.response },
    { key: 'params', title: 'Parameters', type: 'grid', content: log.settings },
    { key: 'tokens', title: 'Suppressors', type: 'tags', content: log.suppressor_log },
  ]}
  timestamp={log.timestamp}
  badge={log.memory_trace ? `Memory: ${log.memory_trace}` : undefined}
  botColor={log.bot === 'a' ? 'cyan' : 'orange'}
/>
```

### API Request/Response
```tsx
<AuditLogCard
  title="API Request"
  sections={[
    { key: 'req', title: 'Request', type: 'code', content: requestData },
    { key: 'res', title: 'Response', type: 'code', content: responseData },
    { key: 'metrics', title: 'Metrics', type: 'grid', content: { status: 200, latency: 234 } },
  ]}
  timestamp={timestamp}
  badge="200 OK"
  accentColor="#0EA5E9"
/>
```

### Error Log
```tsx
<AuditLogCard
  title="RuntimeError"
  sections={[
    { key: 'msg', title: 'Message', type: 'text', content: errorMessage },
    { key: 'stack', title: 'Stack', type: 'code', content: stackTrace },
  ]}
  badge="ERROR"
  badgeColor="#ff4444"
  indicatorColor="#ff4444"
/>
```

### Admin Action
```tsx
<AuditLogCard
  title="Admin Action"
  sections={[
    { key: 'action', title: 'Action', type: 'text', content: actionDesc },
    { key: 'changes', title: 'Changes', type: 'grid', content: changedFields },
    { key: 'audit', title: 'Audit', type: 'stats', content: auditInfo },
  ]}
  metadata={{ admin: 'admin@ex.com', ip: '192.168.1.1' }}
/>
```

---

## 📋 Props Reference

```typescript
interface AuditLogCardProps {
  // Required
  title: string | React.ReactNode              // Card title
  sections: LogSection[]                       // Content sections

  // Optional styling
  accentColor?: string                         // Default: '#00ff41'
  labelColor?: string                          // Default: '#008f11'
  botColor?: 'cyan' | 'orange' | 'custom'
  customBotColor?: string
  customBotLabel?: string

  // Optional metadata
  timestamp?: Date | string
  badge?: string
  badgeColor?: string
  metadata?: Record<string, any>

  // Optional status
  indicator?: boolean                          // Default: true
  indicatorColor?: string

  // Behavior
  defaultOpen?: boolean                        // Default: true
  onExpand?: (isOpen: boolean) => void

  // Custom rendering
  renderCustomSection?: (section: LogSection) => React.ReactNode
}
```

---

## ✨ Features Highlight

✅ **Collapsible** - Click header to expand/collapse  
✅ **Multiple section types** - Text, code, grid, tags, stats, custom  
✅ **Status indicators** - Dots, badges, timestamps  
✅ **Customizable colors** - Any accent/label colors  
✅ **Metadata footer** - Optional key-value stats  
✅ **Custom rendering** - Inject React components  
✅ **Responsive** - Grid adapts to screen size  
✅ **No dependencies** - Only React + lucide-react  
✅ **Production-tested** - Used in brain.vat audit page  

---

## 🔧 Common Customizations

### Change Colors
```tsx
<AuditLogCard accentColor="#YOUR_COLOR" labelColor="#YOUR_LABEL" {...props} />
```

### Start Collapsed
```tsx
<AuditLogCard defaultOpen={false} {...props} />
```

### Listen to Expand/Collapse
```tsx
<AuditLogCard onExpand={(isOpen) => console.log(isOpen ? 'opened' : 'closed')} {...props} />
```

### Add Custom Section
```tsx
renderCustomSection={(section) => {
  if (section.key === 'custom') {
    return <YourCustomComponent data={section.content} />
  }
}}
```

---

## 📦 Dependencies

- React 16.8+ (for hooks)
- lucide-react (for ChevronDown icon - can swap)

That's it!

---

## 📖 Documentation Files

| File | Purpose | Read When |
|------|---------|-----------|
| `components/README.md` | Component overview | First time |
| `AUDIT_LOG_CARD_GUIDE.md` | Complete reference | Need details |
| `EXAMPLE_USAGE.tsx` | Working examples | Need to build |
| `AuditLogCard.tsx` | The component | Implementing |

---

## 💡 What Makes It Special

### From Your Brain.vat Audit Page
- Same visual style and color scheme
- Same section organization
- Status indicators (memory trace, bot colors)
- Smooth animations and transitions

### Improvements
- **Fully collapsible** - Reduce visual clutter
- **Section flexibility** - 6 different content types
- **Color customization** - Works in any project
- **Portable** - Drop into any Next.js project
- **Documented** - Complete guide with examples
- **Custom rendering** - Inject arbitrary React components

---

## ✅ Checklist for New Project

- [ ] Copy `AuditLogCard.tsx` to `your-project/components/`
- [ ] Import in your page component
- [ ] Define sections (use examples as templates)
- [ ] Set up data source (API, database, etc.)
- [ ] Choose colors
- [ ] Test expand/collapse
- [ ] Test with your data
- [ ] Deploy!

---

## 🚀 Next Steps

1. **Read** `components/AUDIT_LOG_CARD_GUIDE.md` (or README.md for quick overview)
2. **Copy** example from `components/EXAMPLE_USAGE.tsx`
3. **Adapt** colors, sections, and data for your project
4. **Reference** guide as needed
5. **Ship** your audit/log interface!

---

## 📁 Complete File Structure

```
cyber_theme/
├── components/
│   ├── AuditLogCard.tsx               ← Component (10 KB)
│   ├── AUDIT_LOG_CARD_GUIDE.md        ← Full docs (14 KB)
│   ├── EXAMPLE_USAGE.tsx              ← 4 examples (17 KB)
│   │
│   ├── BotParameterPanel.tsx          ← Parameter panel (12 KB)
│   ├── BOT_PARAMETER_PANEL_GUIDE.md   ← Panel docs (13 KB)
│   │
│   ├── PARAMETER_PRESETS.ts           ← Templates (9 KB)
│   ├── README.md                      ← Overview
│   └── INDEX.md                       ← Quick reference
│
├── AUDIT_COMPONENTS_SUMMARY.md        ← This file
├── CUSTOM_COMPONENTS_SUMMARY.md       ← Parameter panel summary
├── README.md                          ← Theme overview
└── ...other theme files
```

---

**Everything here is production-tested in brain.vat and ready to use in your projects!** ✨
